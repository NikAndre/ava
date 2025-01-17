import React, { FC, useState } from "react";
import styles from "./RequestPage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";
import {Input} from "@/shared/components/ui/input";
import {Button} from "@/shared/components/ui/button";
import {Switch} from "@/shared/components/ui/switch";
import {Tabs, TabsList, TabsTrigger} from "@/shared/components/ui/tabs";
import {SquareX} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {
  clearActiveModel,
  removeModelFromCheckedList,
  setActiveModel,
  setActiveTab
} from "@/shared/store/slices/modelsSlice";
import {RequestsListTable} from "@/features/Requests/RequestsListTable";
import {RequestsType} from "@/features/Requests/RequestsListTable/ui/RequestsListTable";

const data: RequestsType[] = [
  {
    id: 'dsfdsfdsf',
    requestNumber: 1,
    type: 'Доступ к метрике',
    metric: 'paid base EOP',
    date: '01.01.2025',
    status: 'Согласовано',
    owner: 'Иванов Иван',
    user: 'Денис Зайцев',
  },
  {
    id: 'asdsadsa',
    requestNumber: 2,
    type: 'Доступ к модели',
    metric: 'product X P&L',
    date: '01.01.2025',
    status: 'В работе',
    owner: 'Иванов Иван',
    user: 'Денис Зайцев',
  },
];

const RequestPage: FC = () => {
  const [fieldChecked, setFieldChecked] = useState<boolean>(false);
  const [activeType, setActiveType] = useState<string>('requests');
  const activeRequest = useSelector((store) => store.requests.activeRequest);
  const checkedRequests = useSelector((store) => store.requests.checkedRequestList);
  const activeTab = useSelector((store) => store.requests.activeTab);
  const dispatch = useDispatch();

  const handleTabClick = (elem) => {
    dispatch(setActiveModel({ id: elem.id }));
    dispatch(setActiveTab({ name: elem.requestName }));
  };

  const handleAllTabClick = () => {
    dispatch(setActiveTab({ name: "all" }));
    dispatch(clearActiveModel());
  };

  const handleCloseBtnClick = (event, elem) => {
    event.stopPropagation();
    if (elem.id === activeRequest?.id) {
      dispatch(clearActiveModel());
      dispatch(setActiveTab({ name: "all" }));
    }
    dispatch(removeModelFromCheckedList({ id: elem.id }));
  };

  return (
    <div className={styles["page_wrapper"]}>
      <HeaderWidget />

      <main
        className={styles["content_wrapper"]}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px 34px",
        }}
      >
        <Tabs defaultValue={"requests"} value={activeType} onValueChange={setActiveType} className="w-[400px]">
          <TabsList style={{ gap: "10px" }}>
            <TabsTrigger value="requests">
              Мои заявки
            </TabsTrigger>
            <TabsTrigger value="coordination">
              Согласования
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue={"all"} value={activeTab} className="w-[400px]">
          <TabsList style={{ gap: "10px" }}>
            <TabsTrigger onClick={handleAllTabClick} value="all">
              Все
            </TabsTrigger>
            {checkedRequests?.map((elem) => {
              return (
                <TabsTrigger
                  onClick={() => handleTabClick(elem)}
                  key={elem.id}
                  value={elem.modelName}
                  style={{
                    position: "relative",
                  }}
                >
                  {elem.modelName}
                  <SquareX
                    style={{
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                      height: "8px",
                      width: "8px",
                    }}
                    onClick={(e) => handleCloseBtnClick(e, elem)}
                  />
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Input
            type={"text"}
            placeholder={"Введите номер заявки для поиска"}
          />
          { activeType === 'requests'  && <Button variant="default">Новая заявка</Button> }
          { activeType === 'coordination'  && <Button variant="default">Согласовать все</Button> }
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginBottom: "20px",
            alignItems: "center",
          }}
        >
          <Switch
            checked={fieldChecked}
            onCheckedChange={() => setFieldChecked((field) => !field)}
          />
          <p>В работе</p>
        </div>
        <RequestsListTable data={data} type={activeType}/>

      </main>
    </div>
  );
};

export default RequestPage;
