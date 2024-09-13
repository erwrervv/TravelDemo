import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Articleoverviews } from 'src/app/interfaces/articleoverview';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent implements OnInit {
  articleForm!: FormGroup;
  selectedFile: Uint8Array | undefined;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {
    this.articleForm = this.fb.group({
      articleTitle: ['', [Validators.required, Validators.maxLength(40)]],
      articleContent: ['', Validators.required],
      articleCoverImage: [null]  // 初始化表单控件
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFile = new Uint8Array(reader.result as ArrayBuffer);  // 将文件读取为 Uint8Array
      };
      reader.readAsArrayBuffer(file);  // 读取文件
    }
  }

  submitArticle(): void {
    if (this.articleForm.valid) {
      const article: Articleoverviews = {
        ArticleId: 0,  // 新文章的 ID 由后端生成
        MemberuniqueId: { MemberuniqueId: 123 },  // 假设会员ID为123
        ArticleName: this.articleForm.value.articleTitle,
        ArticleContent: this.articleForm.value.articleContent,
        CreateTime: new Date(),
        UpdateTime: new Date(),
        ArticleCoverImage: this.selectedFile,  // 使用用户上传的文件数据
        ArticleCoverImageString: ''
      };

      this.dataService.postArticleOverviews(article).subscribe(response => {
        console.log('文章提交成功:', response);
      }, error => {
        console.error('文章提交失败:', error);
      });
    } else {
      console.error('表单无效');
    }
  }
}
