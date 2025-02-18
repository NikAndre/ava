import { createSlice } from "@reduxjs/toolkit";
import { RequestSliceType } from "./types.ts";

const initialState: RequestSliceType = {
  requestsList: [
    {
      id: "dsfdsfdsf",
      requestNumber: "1",
      type: "Доступ к метрике",
      metric: "paid base EOP",
      createDate: "01.01.2025",
      changeDate: "01.01.2025",
      status: "Согласовано",
      owner: "Иванов Иван",
      user: "Денис Зайцев",
      userComment: "Дsdfdsfsdaaf",
      ownerComment: "dsafsdfsdfsdafsdaf",
    },
    {
      id: "asdsadsa",
      requestNumber: "2",
      type: "Доступ к модели",
      metric: "product X P&L",
      createDate: "01.01.2025",
      changeDate: "01.01.2025",
      status: "В работе",
      owner: "Иванов Иван",
      user: "Денис Зайцев",
      userComment: "Дsdfdsfsdaaf",
      ownerComment: "dsafsdfsdfsdafsdaf",
    },
  ],
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
        const request = [...state.requestsList]?.find(
          ({ id }) => id === action.payload.id,
        );
        state.activeRequest = request || null;
      }
    },

    addRequestToCheckedList: (state, action) => {
      if (action.payload.request.id) {
        const isInList = [...state.checkedRequestList]?.find(
          (elem) => elem.id === action.payload.request.id,
        );

        state.checkedRequestList = isInList
          ? [...state.checkedRequestList]
          : [...state.checkedRequestList, action.payload.request];
      }
    },
    removeRequestFromCheckedList: (state, action) => {
      state.checkedRequestList = state.checkedRequestList?.filter(
        (elem) => elem.id !== action.payload.id,
      );
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
