import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelsList: [],
  activeModel: null,
  checkedModelsList: [],
  activeTab: "all",
  checkedMetricsList: [],
};

export const modelsSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    setModelsList: (state, action) => {
      if (action.payload?.length) {
        state.modelsList = action.payload;
      }
    },
    setActiveModel: (state, action) => {
      if (action.payload.id) {
        const model = [...state.modelsList].find(
          (elem) => elem.id === action.payload.id,
        );
        state.activeModel = model;
      }
    },
    addModelToCheckedList: (state, action) => {
      if (action.payload.model.id) {
        const isInList = [...state.checkedModelsList].find(
          (elem) => elem.id === action.payload.model.id,
        );
        const newModelsList = isInList
          ? [...state.checkedMetricsList]
          : [...state.checkedMetricsList, action.payload.model];

        state.checkedModelsList = newModelsList;
      }
    },
    removeModelFromCheckedList: (state, action) => {
      const newCheckedArray = state.checkedModelsList?.filter(
        (elem) => elem.id !== action.payload.id,
      );

      state.checkedModelsList = newCheckedArray;
    },
    clearActiveModel: (state) => {
      state.activeModel = null;
    },
    setActiveTab: (state, action) => {
      const isInChecked = state.checkedModelsList?.find(
        (elem) => elem.name !== action.payload.name,
      );

      if (action.payload.name && isInChecked) {
        state.activeTab = action.payload.name;
      }
    },
    addMetricToCheckedList: (state, action) => {
      if (action.payload.id) {
        const metric = [...state.checkedMetricsList.metrics].filter(
          (elem) => elem.id === action.payload.id,
        );
        const newVariableList = metric
          ? [...state.checkedMetricsList]
          : [...state.checkedMetricsList, metric];

        state.checkedMetricsList = newVariableList;
      }
    },
    removeMetricFromCheckedList: (state, action) => {
      const newCheckedArray = state.checkedModelsList?.filter(
        (elem) => elem.id !== action.payload.id,
      );

      state.checkedModelsList = newCheckedArray;
    },
    clearMetricsCheckedList: (state) => {
      state.checkedModelsList = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setModelsList,
  setActiveModel,
  addModelToCheckedList,
  removeModelFromCheckedList,
  setActiveTab,
  clearActiveModel,
  addMetricToCheckedList,
  removeMetricFromCheckedList,
  clearMetricsCheckedList,
} = modelsSlice.actions;

export default modelsSlice.reducer;
