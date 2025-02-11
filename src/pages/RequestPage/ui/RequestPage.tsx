import {FC, MouseEvent, useState} from "react";
import styles from "./RequestPage.module.css";
import { HeaderWidget } from "@/widgets/HeaderWidget";
import {Tabs, TabsList, TabsTrigger} from "@/shared/components/ui/tabs";
import {SquareX} from "lucide-react";
import {useDispatch, useSelector} from "react-redux";
import {
  setActiveRequest,
  clearActiveRequest,
  setActiveTab,
  removeRequestFromCheckedList,
} from "@/shared/store/slices/requestsSlice";
import {RequestsListWidget} from "@/widgets/RequestsListWidget";
import {RequestWidget} from "@/widgets/RequestWidget";
import {RequestType} from "@/shared/store/slices/requestsSlice/types.ts";

const RequestPage: FC = () => {
  const [activeType, setActiveType] = useState<string>('requests');
  const activeRequest = useSelector((store) => store.requests.activeRequest);
  const checkedRequests = useSelector((store) => store.requests.checkedRequestList);
  const activeTab = useSelector((store) => store.requests.activeTab);
  const dispatch = useDispatch();


  const handleTabClick = (elem:RequestType) => {
    dispatch(setActiveRequest({ id: elem.id }));
    dispatch(setActiveTab({ name: elem.requestNumber }));
  };

  const handleAllTabClick = () => {
    dispatch(setActiveTab({ name: "all" }));
    dispatch(clearActiveRequest());
  };

  const handleCloseBtnClick = (event:MouseEvent, elem:RequestType) => {
    event.stopPropagation();
    if (elem.id === activeRequest?.id) {
      dispatch(clearActiveRequest());
      dispatch(setActiveTab({ name: "all" }));
    }
    dispatch(removeRequestFromCheckedList({ id: elem.id }));
  };


  console.log(activeRequest)
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
            {checkedRequests?.map((elem:RequestType) => {
              return (
                <TabsTrigger
                  onClick={() => handleTabClick(elem)}
                  key={elem.id}
                  value={elem.requestNumber}
                  style={{
                    position: "relative",
                  }}
                >
                  Заявка №{elem.requestNumber}
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
        { !activeRequest && <RequestsListWidget activeType={activeType} />}
        { activeRequest && <RequestWidget />}

      </main>
    </div>
  );
};

export default RequestPage;
