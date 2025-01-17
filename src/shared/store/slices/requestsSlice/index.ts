import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestsList: [],
  activeRequest: null,
  checkedRequestList: [],
  activeTab: "all",
};

export const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setRequestList: (state, action) => {
      if (action.payload?.length) {
        state.requestsList = action.payload;
      }
    },
    setActiveRequest: (state, action) => {
      if (action.payload.id) {
        const request = [...state.requestsList].find(
          (elem) => elem.id === action.payload.id,
        );
        state.activeRequest = request;
      }
    },
    addRequestToCheckedList: (state, action) => {
      if (action.payload.request.id) {
        const isInList = [...state.checkedRequestList].find(
          (elem) => elem.id === action.payload.request.id,
        );
        const newRequestList = isInList
          ? [...state.checkedRequestList]
          : [...state.checkedRequestList, action.payload.request];

        state.checkedRequestList = newRequestList;
      }
    },
    removeRequestFromCheckedList: (state, action) => {
      const newCheckedArray = state.checkedRequestList?.filter(
        (elem) => elem.id !== action.payload.id,
      );

      state.checkedRequestList = newCheckedArray;
    },
    clearActiveRequest: (state) => {
      state.activeRequest = null;
    },
    setActiveTab: (state, action) => {
      const isInChecked = state.checkedRequestList?.find(
        (elem) => elem.name !== action.payload.name,
      );

      if (action.payload.name && isInChecked) {
        state.activeTab = action.payload.name;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveRequest,
  setRequestList,
  clearActiveRequest,
  addRequestToCheckedList,
  setActiveTab,
  removeRequestFromCheckedList,
} = requestsSlice.actions;

export default requestsSlice.reducer;
