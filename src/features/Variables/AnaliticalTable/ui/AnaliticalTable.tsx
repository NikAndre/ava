import * as React from "react";
import { useDispatch } from "react-redux";
import { setActiveVariable } from "@/shared/store/slices/variablesSlice";
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

const data: VariablesType[] = [
  {
    id: "1",
    statName: "paid base eop",
    period1: "111",
    period2: "222",
    period3: "333",
    period4: "111",
    period5: "222",
    period6: "333",
    period7: "111",
    period8: "222",
    period9: "333",
    period10: "111",
    period11: "222",
    period12: "333",
  },
  {
    id: "2",
    statName: "pb prev m",
    period1: "111",
    period2: "222",
    period3: "333",
    period4: "111",
    period5: "222",
    period6: "333",
    period7: "111",
    period8: "222",
    period9: "333",
    period10: "111",
    period11: "222",
    period12: "333",
  },
  {
    id: "3",
    statName: "inflow",
    period1: "111",
    period2: "222",
    period3: "333",
    period4: "111",
    period5: "222",
    period6: "333",
    period7: "111",
    period8: "222",
    period9: "333",
    period10: "111",
    period11: "222",
    period12: "333",
  },
  {
    id: "4",
    statName: "outflow",
    period1: "111",
    period2: "222",
    period3: "333",
    period4: "111",
    period5: "222",
    period6: "333",
    period7: "111",
    period8: "222",
    period9: "333",
    period10: "111",
    period11: "222",
    period12: "333",
  },
];

export type VariablesType = {
  id: string;
  statName: string;
  period1: string;
  period2: string;
  period3: string;
};

export function AnaliticalDataTable() {
  const dispatch = useDispatch();
  const columns: ColumnDef<VariablesType>[] = [
    {
      accessorKey: "statName",
      header: () => <div className="text-primary">Переменная</div>,
      cell: ({ row }) => <div>{row.getValue("statName")}</div>,
    },
    {
      accessorKey: "period1",
      header: () => <div className="text-primary">Январь</div>,
      cell: ({ row }) => <div>{row.getValue("period1")}</div>,
    },
    {
      accessorKey: "period2",
      header: () => <div className="text-primary">Февраль</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("period2")}</div>
      ),
    },
    {
      accessorKey: "period3",
      header: () => <div className="text-primary">Март</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("period3")}</div>;
      },
    },
    {
      accessorKey: "period4",
      header: () => <div className="text-primary">Апрель</div>,
      cell: ({ row }) => <div>{row.getValue("period4")}</div>,
    },
    {
      accessorKey: "period5",
      header: () => <div className="text-primary">Май</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("period5")}</div>
      ),
    },
    {
      accessorKey: "period6",
      header: () => <div className="text-primary">Июнь</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("period6")}</div>;
      },
    },
    {
      accessorKey: "period7",
      header: () => <div className="text-primary">Июль</div>,
      cell: ({ row }) => <div>{row.getValue("period7")}</div>,
    },
    {
      accessorKey: "period8",
      header: () => <div className="text-primary">Август</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("period8")}</div>
      ),
    },
    {
      accessorKey: "period9",
      header: () => <div className="text-primary">Сентябрь</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("period9")}</div>;
      },
    },
    {
      accessorKey: "period10",
      header: () => <div className="text-primary">Октябрь</div>,
      cell: ({ row }) => <div>{row.getValue("period10")}</div>,
    },
    {
      accessorKey: "period11",
      header: () => <div className="text-primary">Ноябрь</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("period11")}</div>
      ),
    },
    {
      accessorKey: "period12",
      header: () => <div className="text-primary">Декабрь</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("period12")}</div>;
      },
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
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
