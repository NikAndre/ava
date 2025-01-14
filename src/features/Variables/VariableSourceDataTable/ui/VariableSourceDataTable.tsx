import * as React from "react";
import styles from "./VariableSourceDataTable.module.css";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";

const data: VariablesType[] = [
  {
    id: "21312уу21",
    month: "01.01.2024",
    type: "факт",
    value: "222",
    date: "10.02.2024",
    source: "date base",
  },
];

export type VariablesType = {
  id: string;
  month: string;
  type: string;
  value: string;
  date: string;
  source: string;
};

export function VariableSourceDataTable() {
  const columns: ColumnDef<VariablesType>[] = [
    {
      accessorKey: "month",
      header: () => <div className="text-primary">Месяц</div>,
      cell: ({ row }) => <div>{row.getValue("month")}</div>,
      size: 210,
    },
    {
      accessorKey: "type",
      header: () => <div className="text-primary">Тип</div>,
      cell: ({ row }) => <div>{row.getValue("type")}</div>,
      size: 204,
    },
    {
      accessorKey: "value",
      header: () => <div className="text-primary">Значение</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("value")}</div>
      ),
      size: 457,
    },
    {
      accessorKey: "date",
      header: () => <div className="text-primary">Дата изменения</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("date")}</div>;
      },
      size: 232,
    },
    {
      accessorKey: "source",
      header: () => <div className="text-primary">Источник</div>,
      cell: ({ row }) => <div>{row.getValue("source")}</div>,
      size: 263,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {},
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="w-full">
      <div className="border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="border">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => {}}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
