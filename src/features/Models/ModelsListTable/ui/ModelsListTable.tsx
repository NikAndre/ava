import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setModelsList,
  setActiveModel,
  addModelToCheckedList,
  setActiveTab,
} from "@/shared/store/slices/modelsSlice";
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
import { Button } from "@/shared/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { useEffect } from "react";
import {ModelType} from "@/shared/store/slices/modelsSlice/types.ts";

const data: ModelType[] = [
  {
    id: "1",
    modelName: "product X PL",
    tags: "PL",
    status: "опубликована",
    username: "Денис",
    chartData: [
      {
        month: "January",
        desktop1: 186,
        desktop2: 246,
        desktop3: 326,
        mobile: 80,
      },
      {
        month: "February",
        desktop1: 186,
        desktop2: 286,
        desktop3: 386,
        mobile: 200,
      },
      {
        month: "March",
        desktop1: 756,
        desktop2: 123,
        desktop3: 222,
        mobile: 120,
      },
      {
        month: "April",
        desktop1: 432,
        desktop2: 286,
        desktop3: 123,
        mobile: 190,
      },
      {
        month: "May",
        desktop1: 123,
        desktop2: 444,
        desktop3: 222,
        mobile: 130,
      },
      {
        month: "June",
        desktop1: 321,
        desktop2: 346,
        desktop3: 215,
        mobile: 140,
      },
    ],
    barChartData: [
      { month: "paid base eop (BL)", visitors: 100 },
      { month: "pb prev m", visitors: 0 },
      { month: "inflow", visitors: -1 },
      { month: "outflow", visitors: 15 },
      { month: "paid base eop (EL)", visitors: 114 },
    ],
  },
  {
    id: "2",
    modelName: "revenue product cloud",
    tags: "revenue, cloud",
    status: "опубликована",
    username: "Vasya",
    chartData: [
      {
        month: "January",
        desktop1: 321,
        desktop2: 213,
        desktop3: 876,
        mobile: 123,
      },
      {
        month: "February",
        desktop1: 543,
        desktop2: 342,
        desktop3: 345,
        mobile: 123,
      },
      {
        month: "March",
        desktop1: 21,
        desktop2: 543,
        desktop3: 222,
        mobile: 120,
      },
      {
        month: "April",
        desktop1: 123,
        desktop2: 173,
        desktop3: 123,
        mobile: 432,
      },
      {
        month: "May",
        desktop1: 222,
        desktop2: 111,
        desktop3: 333,
        mobile: 123,
      },
      {
        month: "June",
        desktop1: 321,
        desktop2: 346,
        desktop3: 215,
        mobile: 140,
      },
    ],
    barChartData: [
      { month: "paid base eop (BL)", visitors: 100 },
      { month: "pb prev m", visitors: 0 },
      { month: "inflow", visitors: -1 },
      { month: "outflow", visitors: 15 },
      { month: "paid base eop (EL)", visitors: 114 },
    ],
  },
  {
    id: "3",
    modelName: "inflow paid base",
    tags: "base",
    status: "черновик",
    username: "Vasya",
    chartData: [
      {
        month: "January",
        desktop1: 186,
        desktop2: 246,
        desktop3: 326,
        mobile: 80,
      },
      {
        month: "February",
        desktop1: 186,
        desktop2: 286,
        desktop3: 386,
        mobile: 200,
      },
      {
        month: "March",
        desktop1: 756,
        desktop2: 123,
        desktop3: 222,
        mobile: 120,
      },
      {
        month: "April",
        desktop1: 432,
        desktop2: 286,
        desktop3: 123,
        mobile: 190,
      },
      {
        month: "May",
        desktop1: 123,
        desktop2: 444,
        desktop3: 222,
        mobile: 130,
      },
      {
        month: "June",
        desktop1: 321,
        desktop2: 346,
        desktop3: 215,
        mobile: 140,
      },
    ],
    barChartData: [
      { month: "paid base eop (BL)", visitors: 100 },
      { month: "pb prev m", visitors: 0 },
      { month: "inflow", visitors: -1 },
      { month: "outflow", visitors: 15 },
      { month: "paid base eop (EL)", visitors: 114 },
    ],
  },
];


export function ModelsListTable() {
  const columns: ColumnDef<ModelType>[] = [
    {
      accessorKey: "modelName",
      header: () => <div className="text-primary">Название модели</div>,
      cell: ({ row }) => <div>{row.getValue("modelName")}</div>,
    },
    {
      accessorKey: "tags",
      header: () => <div className="text-primary">Теги</div>,
      cell: ({ row }) => <div>{row.getValue("tags")}</div>,
    },
    {
      accessorKey: "status",
      header: () => <div className="text-primary">Состояние</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("status")}</div>;
      },
    },
    {
      accessorKey: "username",
      header: () => <div className="text-primary">Владелец</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("username")}</div>;
      },
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setModelsList(data));
  }, []);

  const models = useSelector((store) => store.models.modelsList);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: models,
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
                  onClick={() => {
                    dispatch(setActiveModel({ id: row.original.id }));
                    dispatch(addModelToCheckedList({ model: row.original }));
                    dispatch(setActiveTab({ modelName: row.original.modelName }));
                  }}
                  style={{ cursor: "pointer" }}
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
