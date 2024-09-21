//以下為分頁預設值 待修改
export class pageinfo {
  constructor(public PageSize: number, public PageNumber: number,public SearchKeyword?:string,public SearchTagName?:string) {}
}
//以下為返回結果
export class PagedResult<T> extends pageinfo {
  TotalCount!: number;
  TotalPages!: number;
  List!: T[];
}
