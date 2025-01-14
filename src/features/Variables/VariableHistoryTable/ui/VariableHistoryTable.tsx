import * as React from "react";
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
    eventName: "text",
    date: "text",
    person: "text",
    info: "text",
  },
];

export type VariablesType = {
  id: string;
  eventName: string;
  date: string;
  person: string;
  info: string;
};

export function VariableHistoryTable() {
  const columns: ColumnDef<VariablesType>[] = [
    {
      accessorKey: "eventName",
      header: () => <div className="text-primary">Событие</div>,
      cell: ({ row }) => <div>{row.getValue("eventName")}</div>,
    },
    {
      accessorKey: "date",
      header: () => <div className="text-primary">Дата изменения</div>,
      cell: ({ row }) => <div>{row.getValue("date")}</div>,
    },
    {
      accessorKey: "person",
      header: () => <div className="text-primary">Кем изменено</div>,
      cell: ({ row }) => <div>{row.getValue("person")}</div>,
    },
    {
      accessorKey: "info",
      header: () => <div className="text-primary">Детали изменения</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("info")}</div>;
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
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
                {headerGroup.headers.map((header, index) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="border w-[203px]"
                      style={index === 3 ? { width: "600px" } : {}}
                    >
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
