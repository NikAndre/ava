import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { metrics } from "../data/invoices.ts";

export const ModelDynamicTable = () => {
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
          <TableHead className="w-[89px] border">Jan</TableHead>
          <TableHead className="w-[89px] border">Fed</TableHead>
          <TableHead className="w-[89px] border">Mar</TableHead>
          <TableHead className="w-[89px] border">Apr</TableHead>
          <TableHead className="w-[89px] border">May</TableHead>
          <TableHead className="w-[89px] border">Jun</TableHead>
          <TableHead className="w-[89px] border">Jul</TableHead>
          <TableHead className="w-[89px] border">Aug</TableHead>
          <TableHead className="w-[89px] border">Sep</TableHead>
          <TableHead className="w-[89px] border">Oct</TableHead>
          <TableHead className="w-[89px] border">Nov</TableHead>
          <TableHead className="w-[89px] border">Dec</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {metrics.map((metric) => (
          <>
            <TableRow className="border" key={metric.id}>
              <TableCell className="font-medium border">
                {metric.name}
              </TableCell>
            </TableRow>
            <TableRow className={"p-5px"} key={metric.id}>
              <TableCell style={{ paddingLeft: "15px" }} className="border">
                факт 2024
              </TableCell>
              <TableCell className="border">{metric.fact.dim}</TableCell>
              <TableCell className="border">{metric.fact.jan}</TableCell>
              <TableCell className="border">{metric.fact.feb}</TableCell>
              <TableCell className="border">{metric.fact.mar}</TableCell>
              <TableCell className="border">{metric.fact.apr}</TableCell>
              <TableCell className="border">{metric.fact.may}</TableCell>
              <TableCell className="border">{metric.fact.jun}</TableCell>
              <TableCell className="border">{metric.fact.jul}</TableCell>
              <TableCell className="border">{metric.fact.aug}</TableCell>
              <TableCell className="border">{metric.fact.sep}</TableCell>
              <TableCell className="border">{metric.fact.oct}</TableCell>
              <TableCell className="border">{metric.fact.nov}</TableCell>
              <TableCell className="border">{metric.fact.dec}</TableCell>
            </TableRow>
            <TableRow key={metric.id}>
              <TableCell style={{ paddingLeft: "15px" }} className="border">
                цель 2024
              </TableCell>
              <TableCell className="border">{metric.plan.dim}</TableCell>
              <TableCell className="border">{metric.plan.jan}</TableCell>
              <TableCell className="border">{metric.plan.feb}</TableCell>
              <TableCell className="border">{metric.plan.mar}</TableCell>
              <TableCell className="border">{metric.plan.apr}</TableCell>
              <TableCell className="border">{metric.plan.may}</TableCell>
              <TableCell className="border">{metric.plan.jun}</TableCell>
              <TableCell className="border">{metric.plan.jul}</TableCell>
              <TableCell className="border">{metric.plan.aug}</TableCell>
              <TableCell className="border">{metric.plan.sep}</TableCell>
              <TableCell className="border">{metric.plan.oct}</TableCell>
              <TableCell className="border">{metric.plan.nov}</TableCell>
              <TableCell className="border">{metric.plan.dec}</TableCell>
            </TableRow>
            <TableRow key={metric.id}>
              <TableCell style={{ paddingLeft: "15px" }} className="border">
                выполнение
              </TableCell>
              <TableCell className="border">{metric.compl.dim}</TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.jan) }}
              >
                {metric.compl.jan}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.feb) }}
              >
                {metric.compl.feb}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.mar) }}
              >
                {metric.compl.mar}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.apr) }}
              >
                {metric.compl.apr}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.may) }}
              >
                {metric.compl.may}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.jun) }}
              >
                {metric.compl.jun}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.jul) }}
              >
                {metric.compl.jul}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.aug) }}
              >
                {metric.compl.aug}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.sep) }}
              >
                {metric.compl.sep}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.oct) }}
              >
                {metric.compl.oct}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.nov) }}
              >
                {metric.compl.nov}%
              </TableCell>
              <TableCell
                className="border"
                style={{ color: getColor(metric.compl.dec) }}
              >
                {metric.compl.dec}%
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
};
