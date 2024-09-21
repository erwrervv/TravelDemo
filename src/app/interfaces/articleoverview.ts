import { BasicMemberInformation } from '././basicMemberInformation';

export interface Articleoverviews {
  ArticleId: number;
  // MemberName?:string;
  MemberuniqueId: number;
  ArticleName?: string;
  ArticleContent?: string;
  CreateTime?: Date;
  UpdateTime?: Date;
  ArticleCoverImage: string;
  ArticleCoverImageString?: string;
  MemberName?:string;
  Tag:string;
}
