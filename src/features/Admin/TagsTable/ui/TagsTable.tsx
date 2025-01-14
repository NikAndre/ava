import * as React from "react";
import { useDispatch } from "react-redux";
import { setActiveVariable } from "@/shared/store/slices/variablesSlice";
import styles from "./TagsTable.module.css"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
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
import {Checkbox} from "@/shared/components/ui/checkbox";
import style from "@/features/Models/ModelAnaliticalTable/ui/ModelDataTable.module.css";

const data: UsersType[] = [
  {
    id: 'sadsadsad',
    tagName: 'company',
    usage: 4
  }
];

export type UsersType = {
  id: string;
  tagName: string;
  usage: number;
};

export function TagsTable () {
  const dispatch = useDispatch();
  const columns: ColumnDef<UsersType>[] = [
    {
      accessorKey: "tagName",
      header: () => <div align={'center'} className="text-primary">Тег</div>,
      cell: ({ row }) => <div>{row.getValue("tagName")}</div>,
    },
    {
      accessorKey: "usage",
      header: () => <div align={'center'} className="text-primary">Пользователь</div>,
      cell: ({ row }) => <div>{row.getValue("usage")}</div>,
    },
  ];

  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
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
                  onClick={() =>
                    dispatch(setActiveVariable({ id: row.original.id }))
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={`border` + " " + styles["cell"]}>
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
