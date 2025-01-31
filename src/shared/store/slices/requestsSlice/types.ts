export type RequestType = {
    id: string;
    requestNumber: number;
    type: 'Доступ к модели' | 'Доступ к метрике';
    metric: string;
    date: string;
    status: 'Согласовано' | 'В работе';
    point: string;
    owner: string;
    user: string;
};

export type RequestSliceType = {
    requestsList: RequestType[];
    activeRequest: null | RequestType;
    checkedRequestList: RequestType[];
    activeTab: "all";
}