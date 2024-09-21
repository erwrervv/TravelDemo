export interface BasicMemberInformation {
  MemberuniqueId: number;
  MemberName?: string;
  Activate?: boolean;
  Email?: string;
  Password?: string;
  MemberValue?: number;
  Followers?: number;
  Tracks?: number;
  Introduction?: string;
  MemberPicture?: Uint8Array;
}

