import { Component, OnInit, TemplateRef } from '@angular/core';
import { DataService } from '../../data.service';
import { forkJoin, Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NgIfContext } from '@angular/common';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DataService]
})
export class HomepageComponent implements OnInit {
  data$: Observable<any[]> | undefined;
  imageUrls: { [key: number]: string } = {};
loading: TemplateRef<NgIfContext<any[] | null>> | null | undefined;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
       this.data$ = this.dataService.getArticleOverviews().pipe(
      switchMap(data => {
        // 获取所有图片的 Observable 数组
        const pictureRequests = data.map(item =>
          this.dataService.getArticleOverviewsPicture(item.ArticleId).pipe(
            map(blob => {
              const reader = new FileReader();
              const promise = new Promise<string>((resolve, reject) => {
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = () => reject('Could not read file');
              });
              reader.readAsDataURL(blob); // 将 Blob 转换为 Base64
              return promise.then(url => ({ id: item.ArticleId, url }));
            })
          )
        );

        // 等待所有图片请求完成
        return forkJoin(pictureRequests).pipe(
          map(pictures => {
            // 更新 imageUrls 对象
            pictures.forEach(async p => this.imageUrls[(await p).id] = (await p).url);
            return data;
          })
        );
      })
    );
  }

  refreshData(): void {
    this.loadData();
  }


}
