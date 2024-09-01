export interface IUserInfo {
  name: string;
  avatar: string | null;
}

export interface IAssignee extends IUserInfo {
  _id: string;
}
