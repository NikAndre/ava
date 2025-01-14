import * as React from "react";
import style from "./ModelDataTable.module.css";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  useReactTable,
  ExpandedState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { ChevronDown, ChevronUp } from "lucide-react";

const data: VariablesType[] = [
  {
    id: "1",
    statName: "paid base eop",
    type: "млн",
    factLY: "30",
    targetCY: "40",
    factCY: "35",
    factVsTargetCY: "87,5%",
    factVsTargetLY: "116%",
    subRows: [
      {
        id: "12",
        statName: "paid base eop",
        type: "млн",
        factLY: "30",
        targetCY: "40",
        factCY: "35",
        factVsTargetCY: "87,5%",
        factVsTargetLY: "116%",
        subRows: [],
      },
    ],
  },
];

export type VariablesType = {
  id: string;
  statName: string;
  type: string;
  factLY: string;
  targetCY: string;
  factCY: string;
  factVsTargetCY: string;
  factVsTargetLY: string;
  subRows: VariablesType[];
};

export function ModelDataTable() {
  const columns: ColumnDef<VariablesType>[] = [
    {
      accessorKey: "statName",
      header: () => <div className="text-primary">Метрика</div>,
      cell: ({ row }) => (
        <div style={{ display: "flex", paddingLeft: row.depth * 40 }}>
          {row.getCanExpand() ? (
            <button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: {
                  cursor: "pointer",
                  background: "#ffffff",
                  marginRight: "5px",
                },
              }}
            >
              {row.getIsExpanded() ? <ChevronUp /> : <ChevronDown />}
            </button>
          ) : (
            " "
          )}
          <div>{row.getValue("statName")}</div>
        </div>
      ),
      footer: (props) => props.column.id,
      enableResizing: false,
    },
    {
      accessorKey: "type",
      header: () => <div className="text-primary">Размерность</div>,
      cell: ({ row }) => <div>{row.getValue("type")}</div>,
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "factLY",
      header: () => <div className="text-primary">Факт 2023</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("factLY")}</div>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "targetCY",
      header: () => <div className="text-primary">Цель 2024</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("targetCY")}</div>;
      },
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "factCY",
      header: () => <div className="text-primary">Факт 2024</div>,
      cell: ({ row }) => <div>{row.getValue("factCY")}</div>,
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "factVsTargetCY",
      header: () => <div className="text-primary">Факт vs Цель</div>,
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("factVsTargetCY")}</div>
      ),
      footer: (props) => props.column.id,
    },
    {
      accessorKey: "factVsTargetLY",
      header: () => <div className="text-primary">Факт vs Цель 2023</div>,
      cell: ({ row }) => {
        return <div>{row.getValue("factVsTargetLY")}</div>;
      },
      footer: (props) => props.column.id,
    },
  ];

  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    debugTable: true,
    debugRows: true,
  });

  return (
    <div className="w-full">
      <div className="border">
        <Table
          style={{
            width: "100%",
          }}
        >
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
                <>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={`border` + " " + style["cell"]}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                </>
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
