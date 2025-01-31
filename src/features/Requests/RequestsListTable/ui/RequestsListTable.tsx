import * as React from "react";
import { useDispatch } from "react-redux";
import {
  setActiveRequest,
  addRequestToCheckedList,
  setActiveTab,
} from "@/shared/store/slices/requestsSlice";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/shared/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import styles from "./RequestsListTable.module.css";
import {RequestType} from "@/shared/store/slices/requestsSlice/types.ts";

export function RequestsListTable({
  type = 'requests',
  data
}) {
  const dispatch = useDispatch();
  const columns: ColumnDef<RequestType>[] = [
    {
      accessorKey: "requestNumber",
      header: () => <div className="text-primary">Номер заявки</div>,
      cell: ({ row }) => <div>{row.getValue("requestNumber")}</div>,
    },
    {
      accessorKey: "type",
      header: () => <div className="text-primary">Тип заявки</div>,
      cell: ({ row }) => <div>{row.getValue("type")}</div>,
    },
    {
      accessorKey: "metric",
      header: () => <div className="text-primary">Объект доступа</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("metric")}</div>;
      },
    },
    {
      accessorKey: "date",
      header: () => <div className="text-primary">Дата создания заявки</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("date")}</div>;
      },
    },
    {
      accessorKey: "status",
      header: () => <div className="text-primary">Состояние</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("status")}</div>;
      },
    },
    {
      accessorKey: type === 'requests' ? 'user' : 'owner',
      header: () => <div className="text-primary">{ type === 'requests' ? 'Согласующий' : 'Инициатор' }</div>,
      cell: ({ row }) => {
        return <div>{ type === 'requests' ? row.getValue("user") : row.getValue("owner") }</div>;
      },
    },
  ];

  const table = useReactTable({
    data: data,
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
                  onClick={() => {
                    dispatch(setActiveRequest({ id: row.original.id }));
                    dispatch(addRequestToCheckedList({ request: row.original }));
                    dispatch(setActiveTab({ name: row.original.requestNumber }));
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className={`border` + " " + styles["cell"]}>
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
