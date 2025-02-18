import * as React from "react";
import { useDispatch } from "react-redux";
import { setActiveVariable } from "@/shared/store/slices/variablesSlice";
import styles from "./UsersTable.module.css";
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
import { Checkbox } from "@/shared/components/ui/checkbox";
import style from "@/features/Models/ModelAnaliticalTable/ui/ModelDataTable.module.css";

const data: UsersType[] = [
  {
    id: "sadsadsad",
    userName: "Денис Зайцев",
    userLogin: "denis.zaitsev@icloud.com",
    lastActivity: "12.12.2024 20:20",
    isAdmin: true,
    metricsAmount: 2,
    modelsAmount: 4,
  },
];

export type UsersType = {
  id: string;
  userName: string;
  userLogin: string;
  lastActivity: string;
  isAdmin: boolean;
  metricsAmount: number;
  modelsAmount: number;
};

export function UsersTable() {
  const dispatch = useDispatch();
  const columns: ColumnDef<UsersType>[] = [
    {
      accessorKey: "userLogin",
      header: () => <div className="text-primary">Логин</div>,
      cell: ({ row }) => <div>{row.getValue("userLogin")}</div>,
    },
    {
      accessorKey: "userName",
      header: () => <div className="text-primary">Пользователь</div>,
      cell: ({ row }) => <div>{row.getValue("userName")}</div>,
    },
    {
      accessorKey: "lastActivity",
      header: () => <div className="text-primary">Последняя активность</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("lastActivity")}</div>
      ),
    },
    {
      accessorKey: "metricsAmount",
      header: () => <div className="text-primary">Владелец для метрик</div>,
      cell: ({ row }) => <div>{row.getValue("metricsAmount")}</div>,
    },
    {
      accessorKey: "modelsAmount",
      header: () => <div className="text-primary">Владелец для моделей</div>,
      cell: ({ row }) => <div>{row.getValue("modelsAmount")}</div>,
    },
    {
      accessorKey: "isAdmin",
      header: () => <div className="text-primary">Администратор</div>,
      cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Checkbox
            checked={row.getValue("isAdmin")}
            onCheckedChange={() => {}}
            aria-label="Select view"
          />
        </div>
      ),
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
                      className={`border` + " " + styles["cell"]}
                    >
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
