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
import { Checkbox } from "@/shared/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

export type VariablesType = {
  id: string;
  userName: string;
  viewPermission: boolean;
  changePermission: boolean;
};

export function ModelOptionsTable({ data }) {
  const columns: ColumnDef<VariablesType>[] = [
    {
      accessorKey: "optionName",
      header: () => <div className="text-primary">Метрика</div>,
      cell: ({ row }) => (
        <div style={{ paddingLeft: "5px" }}>{row.getValue("optionName")}</div>
      ),
    },
    {
      accessorKey: "level",
      header: () => <div className="text-primary">Уровень</div>,
      cell: ({ row }) => (
        <div style={{ paddingLeft: "5px" }}>{row.getValue("level")}</div>
      ),
    },
    {
      accessorKey: "type",
      header: () => <div className="text-primary">Размерность</div>,
      cell: ({ row }) => (
        <div style={{ paddingLeft: "5px" }}>{row.getValue("type")}</div>
      ),
    },
    {
      accessorKey: "viewPermission",
      header: () => <div className="text-primary">Bold</div>,
      cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Checkbox
            checked={row.getValue("viewPermission")}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select view"
          />
        </div>
      ),
    },
    {
      accessorKey: "italic",
      header: () => <div className="text-primary">Italic</div>,
      cell: ({ row }) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Checkbox
            checked={row.getValue("italic")}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select change"
          />
        </div>
      ),
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
                  {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      key={cell.id}
                      className="border w-[200px]"
                      style={index === 0 ? { width: "306px" } : {}}
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
            <TableRow>
              <TableCell className="border" style={{ padding: "0" }}>
                <Select onValueChange={() => {}}>
                  <SelectTrigger className="w-[100%] border-0 act">
                    <SelectValue placeholder="Укажите метрики" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Метрики</SelectLabel>
                      <SelectItem value="1">paid base</SelectItem>
                      <SelectItem value="2">product X base</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="border"></TableCell>
              <TableCell className="border"></TableCell>
              <TableCell style={{ textAlign: "center" }} className="border">
                <Checkbox disabled={true} aria-label="Select row" />
              </TableCell>
              <TableCell style={{ textAlign: "center" }} className="border">
                <Checkbox disabled={true} aria-label="Select row" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
