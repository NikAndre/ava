import { RequestForm } from "@/features/Requests/RequestForm";
import { useSelector } from "react-redux";

export const RequestWidget = () => {
  const activeRequest = useSelector((store) => store.requests.activeRequest);
  return (
    <>
      <RequestForm data={activeRequest} />
    </>
  );
};
