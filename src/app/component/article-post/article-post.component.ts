import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DataService } from 'src/app/data.service';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';
import { ArticlesList } from 'src/app/interfaces/articles-list';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css'],
})
export class ArticlePostComponent implements OnInit {
  articleForm!: FormGroup;
  articleListData: Array<ArticlesList> = new Array<ArticlesList>();
  selectedFileBase64!: string;
  articleId!: number;
  articleData!: Articleoverviews;
  titleLength: number = 0;
  @ViewChild('editor') editor: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.articleId = Number(params.get('id')); //取得URL ID 並轉回number
    });

    this.getarticleListData();
    this.articleForm = this.fb.group({
      articleTitle: ['', [Validators.required, Validators.maxLength(40)]],
      articleContent: ['', Validators.required],
      articleCoverImage: [null], // 初始化表单控件
      articleListSelect: [null],
    });
    if (this.articleId !== 0) {
      this.dataService.getArticleById(this.articleId).subscribe((res) => {
        this.articleData = res; //賦予值 用於防止影響原資料
        this.articleForm.patchValue({
          articleTitle: res.ArticleName,
          articleContent: res.ArticleContent,
          articleListSelect: res.Tag,
        });
        this.editor.quill.root.innerHTML = res.ArticleContent; //強制寫入HTML內
      });
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const byteArray = new Uint8Array(arrayBuffer); //轉成uint8array
        this.selectedFileBase64 = this.convertToBase64(byteArray); //再轉回base64
      };
      reader.readAsArrayBuffer(file); // 這行才能顯示
    }
  }

  submitArticle(): void {
    if (!this.selectedFileBase64 && this.articleData) {
      this.selectedFileBase64 = this.articleData.ArticleCoverImage; //如果是走修改 確定是否有傳入新的封面 否則按照原本封面呈現
    }
    let content = this.articleForm.value.articleContent;
    if (content.includes('<p>')) {
      content = content
        .replace(/<p>/g, '') // 去除 <p> 標籤
        .replace(/<\/p>/g, '\n'); // 將 </p> 替換為 換行符號
    }
    if (this.articleForm.valid) {
      const article: Articleoverviews = {
        ArticleId: this.articleId === 0 ? 0 : this.articleId, // 新文章的 ID 由后端生成
        MemberuniqueId: this.authService.baseUserInfo.memberId, // 假设会员ID为123
        ArticleName: this.articleForm.value.articleTitle, //title
        Tag: this.articleForm.value.articleListSelect, //selectlist
        ArticleContent: content.trim(), //content (去掉空白)
        CreateTime: new Date(),
        UpdateTime: new Date(),
        ArticleCoverImage: this.selectedFileBase64, // 後端需要傳入base64
        ArticleCoverImageString: '',
      };

      if (this.articleId) {
        this.dataService.putArticleOverviews(this.articleId, article).subscribe(
          (response) => {
            alert('文章修改成功');
            this.router.navigate(['/article']); //存檔後返回文章首頁
          },
          (error) => {
            alert('文章修改失敗');
          }
        );
      } else {
        this.dataService.postArticleOverviews(article).subscribe(
          (response) => {
            alert('文章提交成功');
            this.router.navigate(['/article']); //存檔後返回文章首頁
          },
          (error) => {
            alert('文章提交失敗');
          }
        );
      }
    } else {
      console.error('表单无效');
    }
  }
  getarticleListData() {
    this.dataService.getArticlesList().subscribe((res) => {
      this.articleListData = res;
    });
  }

  convertToBase64(byteArray: Uint8Array) {
    let binary = '';
    const len = byteArray.byteLength; //讀取傳入值長度
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(byteArray[i]); //將每個 byte 轉成字元，組合成一個二進位
    }
    return btoa(binary); //轉成BASE64
  }
}
