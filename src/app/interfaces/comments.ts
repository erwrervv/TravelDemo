export interface Comments {
  // likes?: number;
  CommentId?:Number;
  CommentContent: string;
  CommentDateTime: Date;
  MemberName: string;
  MemberPicture: string;
}

export class CommentsPost{
  CommentId!:number
  ArticleId!:number
  MemberuniqueId!:number
  CommentContent!:string
  CommentDateTime!:string
}
