export type VariableType = {
  id: string;
  variableName: string;
  tags: string[];
  status: string;
  actualDate: string;
  username: string;
  chartData: any[];
  activity: string;
};

export type VariableSliceType = {
  variablesList: VariableType[];
  activeVariable: null | VariableType;
  checkedVariablesList: VariableType[];
  activeTab: string;
};
