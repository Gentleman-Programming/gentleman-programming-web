export interface Member {
  index: number;
  name: string;
  pic: string;
  role: string;
  description: string;
  linkedin: string;
  portfolio: string;
  github: string;
  fb: string;
  twitter: string;
  twitch: string;
  visibility: boolean;
}
export interface Team extends Array<Member> {
  member: Member;
}
