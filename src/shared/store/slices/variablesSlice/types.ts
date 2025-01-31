export type VariableType = {
    id: string
    variableName: string
    tags: string[]
    status: string
    date: string
    username: string
    chartData: any[]
}

export type VariableSliceType = {
    variablesList: VariableType[],
    activeVariable: null | VariableType,
    checkedVariablesList: VariableType[],
    activeTab: string,
}