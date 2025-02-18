export type RequestType = {
  id: string;
  requestNumber: string;
  type: "Доступ к модели" | "Доступ к метрике";
  metric: string;
  createDate: string;
  changeDate: string;
  status: "Согласовано" | "В работе";
  owner: string;
  user: string;
  userComment: string;
  ownerComment: string;
};

export type RequestSliceType = {
  requestsList: RequestType[];
  activeRequest: null | RequestType;
  checkedRequestList: RequestType[];
  activeTab: "all";
};
