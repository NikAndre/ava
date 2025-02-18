import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setVariableList,
  setActiveVariable,
  addVariableToCheckedList,
  setActiveTab,
} from "@/shared/store/slices/variablesSlice";
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
import { Checkbox } from "@/shared/components/ui/checkbox";

const data: ScenariosType[] = [
  {
    id: "1",
    scenarioName: "FRC 1+11",
    type: "автоматический",
    creationDate: "01.01.2024",
    startDate: "01.01.2024",
    endDate: "01.01.2024",
    isEditable: true,
  },
];

export type ScenariosType = {
  id: string;
  scenarioName: string;
  type: "автоматический" | "ручной";
  creationDate: string;
  startDate: string;
  endDate: string;
  isEditable: boolean;
};

export function ScenariosTable() {
  const columns: ColumnDef<ScenariosType>[] = [
    {
      accessorKey: "scenarioName",
      header: () => <div className="text-primary">Сценарий</div>,
      cell: ({ row }) => <div>{row.getValue("scenarioName")}</div>,
    },
    {
      accessorKey: "type",
      header: () => <div className="text-primary">Тип</div>,
      cell: ({ row }) => <div>{row.getValue("type")}</div>,
    },
    {
      accessorKey: "creationDate",
      header: () => <div className="text-primary">Дата создания</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("creationDate")}</div>
      ),
    },
    {
      accessorKey: "startDate",
      header: () => <div className="text-primary">Начало сценария</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("startDate")}</div>;
      },
    },
    {
      accessorKey: "endDate",
      header: () => <div className="text-primary">Конец сценария</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("endDate")}</div>;
      },
    },
    {
      accessorKey: "isEditable",
      header: () => (
        <div className="text-primary">Открыт на редактирование</div>
      ),
      cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Checkbox
            checked={row.getValue("isEditable")}
            onCheckedChange={() => {}}
            aria-label="Select view"
          />
        </div>
      ),
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setVariableList(data));
  }, []);

  const variables = useSelector((store) => store.variables.variablesList);

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: variables,
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
                    dispatch(setActiveVariable({ id: row.original.id }));
                    dispatch(
                      addVariableToCheckedList({ variable: row.original }),
                    );
                    dispatch(setActiveTab({ name: row.original.variableName }));
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
