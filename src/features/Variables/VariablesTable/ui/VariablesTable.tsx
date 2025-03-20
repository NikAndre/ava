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
import { VariableType } from "@/shared/store/slices/variablesSlice/types.ts";
import { data } from "./data.ts"
import styles from "@/features/Admin/ScenariosTable/ui/ScenariosTable.module.css";
import {Trash2} from "lucide-react";


export function VariablesDataTable({isAdmin = false}) {
  const getClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(true)
  }

  const columns: ColumnDef<VariableType>[] = [
    {
      accessorKey: "variableName",
      header: () => <div className="text-primary">Название переменной</div>,
      cell: ({ row }) => <div>{row.getValue("variableName")}</div> ,
    },
    {
      accessorKey: "tags",
      header: () => <div className="text-primary">Теги</div>,
      cell: ({ row }) => <div>{row.getValue("tags")?.join(", ")}</div>,
    },
    {
      accessorKey: "actualDate",
      header: () => <div className="text-primary">Актуальность данных</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("actualDate")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: () => <div className="text-primary">Состояние переменной</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("status")}</div>;
      },
    },
    {
      accessorKey: "username",
      header: () => <div className="text-primary">Владелец переменной</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("username")}</div>;
      },
    },
  ];

  const columnsAdmin: ColumnDef<VariableType>[] = [
    {
      accessorKey: "variableName",
      header: () => <div className="text-primary">Название переменной</div>,
      cell: ({ row }) => {
        return (<div className={styles['cell_hover']}>
          {row.getValue("variableName")}
          {
              isAdmin &&
              <Trash2 className={styles['cell_icon']} onClick={(e) => getClick(e)}/>
          }
        </div>)
      },
    },
    {
      accessorKey: "tags",
      header: () => <div className="text-primary">Теги</div>,
      cell: ({ row }) => <div>{row.getValue("tags")?.join(", ")}</div>,
    },
    {
      accessorKey: "actualDate",
      header: () => <div className="text-primary">Актуальность данных</div>,
      cell: ({ row }) => (
          <div className="lowercase">{row.getValue("actualDate")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: () => <div className="text-primary">Состояние переменной</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("status")}</div>;
      },
    },
    {
      accessorKey: "username",
      header: () => <div className="text-primary">Владелец переменной</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("username")}</div>;
      },
    },
    {
      accessorKey: "activity",
      header: () => <div className="text-primary">Последняя активность</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("activity")}</div>;
      },
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
    columns: isAdmin ? columnsAdmin : columns,
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
                    if (isAdmin) return
                    dispatch(setActiveVariable({ id: row.original.id }));
                    dispatch(
                      addVariableToCheckedList({ variable: row.original }),
                    );
                    dispatch(setActiveTab({ name: row.original.variableName }));
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
