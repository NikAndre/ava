import { createSlice } from "@reduxjs/toolkit";
import { VariableSliceType } from "@/shared/store/slices/variablesSlice/types.ts";

const initialState: VariableSliceType = {
  variablesList: [],
  activeVariable: null,
  checkedVariablesList: [],
  activeTab: "all",
};

export const variablesSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    setVariableList: (state, action) => {
      if (action.payload?.length) {
        state.variablesList = action.payload;
      }
    },
    setActiveVariable: (state, action) => {
      if (action.payload.id) {
        const variable = [...state.variablesList].find(
          (elem) => elem.id === action.payload.id,
        );
        state.activeVariable = variable || null;
      }
    },
    addVariableToCheckedList: (state, action) => {
      if (action.payload.variable.id) {
        const isInList = [...state.checkedVariablesList].find(
          (elem) => elem.id === action.payload.variable.id,
        );
        const newVariableList = isInList
          ? [...state.checkedVariablesList]
          : [...state.checkedVariablesList, action.payload.variable];

        state.checkedVariablesList = newVariableList || [];
      }
    },
    removeVariableFromCheckedList: (state, action) => {
      const newCheckedArray = state.checkedVariablesList?.filter(
        (elem) => elem.id !== action.payload.id,
      );

      state.checkedVariablesList = newCheckedArray;
    },
    clearActiveVariable: (state) => {
      state.activeVariable = null;
    },
    setActiveTab: (state, action) => {
      const isInChecked = state.checkedVariablesList?.find(
        ({ name }) => name !== action.payload.name,
      );

      if (action.payload.name && isInChecked) {
        state.activeTab = action.payload.name;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveVariable,
  setVariableList,
  clearActiveVariable,
  addVariableToCheckedList,
  setActiveTab,
  removeVariableFromCheckedList,
} = variablesSlice.actions;

export default variablesSlice.reducer;
