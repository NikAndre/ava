import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

export const VariableMonitoringTable = ({data}) => {
  const getColor = (elem: number) => {
    switch (true) {
      case elem >= 100:
        return "#34C759";
      case elem >= 90 && elem < 100:
        return "#FF9500";
      default:
        return "#FF3B30";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[162px] border">Переменная</TableHead>
          <TableHead className="w-[150px] border">Размерность</TableHead>
          { Object.keys(data?.fact?.data)?.map(elem => <TableHead className="w-[89px] border">{elem}</TableHead>)}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border" key={data.id}>
          <TableCell className="font-medium border">
            {data.name}
          </TableCell>
        </TableRow>
        <TableRow className={"p-5px"} key={data.id}>
          <TableCell style={{ paddingLeft: "15px" }} className="border">
            факт 2024
          </TableCell>
          <TableCell className="border">{data.fact.dim}</TableCell>
          { Object.values(data?.fact?.data).map((elem) => <TableCell key={elem} className="border">{elem}</TableCell>)}
        </TableRow>
        <TableRow key={data.id}>
          <TableCell style={{ paddingLeft: "15px" }} className="border">
            цель 2024
          </TableCell>
          <TableCell className="border">{data.plan.dim}</TableCell>
          { Object.values(data?.plan?.data).map(elem => <TableCell  key={elem} className="border">{elem}</TableCell>)}
        </TableRow>
        <TableRow key={data.id}>
          <TableCell style={{ paddingLeft: "15px" }} className="border">
            выполнение
          </TableCell>
          <TableCell className="border">{data.compl.dim}</TableCell>
          { Object.values(data?.compl?.data).map((elem) => {
            return ( <TableCell
                className="border"
                style={{color: getColor(elem)}}
                key={elem}
            >
              {elem}%
            </TableCell>)
          })}
        </TableRow>
      </TableBody>
    </Table>
  );
};
