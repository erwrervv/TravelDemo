export interface ArticlesList {
  ArticleListId: number;
  ArticleListName: string;
  MemberuniqueId: number;
  MemberName:string;
  PartialArticleOverviews:PartialArticleOverviews[];
}
export class PartialArticleOverviews{
  UpdateTime!:string;
  ArticleId!:number;
  ArticleName!:string;
  ArticleCoverImageString!:string;
}
export class ArticlesListPost{
  ArticleListId!: number;
  ArticleListName!: string;
  MemberuniqueId!: number;
}
