export interface ArticlesList {
  ArticleListId: number;
  ArticleListName: string;
  MemberuniqueId: number;
  MemberName:string;
  PartialArticleOverviews:PartialArticleOverviews[];
}
export class PartialArticleOverviews{
  Image?:string;
  UpdateTime!:string;
  ArticleId!:number;
  ArticleName!:string;
}
