import {VariableType} from "@/shared/store/slices/variablesSlice/types.ts";

export type ModelType = {
    id: string;
    modelName: string;
    tags: string;
    status: string;
    username: string;
    chartData: object[];
    barChartData: object[];
}

export type ModelSliceType = {
    modelsList: ModelType[]
    activeModel: null | ModelType
    checkedModelsList: ModelType[]
    activeTab: "all"
    checkedVariablesList: VariableType[]
}