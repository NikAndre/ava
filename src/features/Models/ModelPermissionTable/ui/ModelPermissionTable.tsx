import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"
import {Checkbox} from "@/shared/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/shared/components/ui/select";

export type VariablesType = {
  id: string
  userName: string
  viewPermission: boolean
  changePermission: boolean
}

export function ModelPermissionTable ({data}) {
  const columns: ColumnDef<VariablesType>[] = [
    {
      accessorKey: "userName",
      header: () => <div className="text-primary">Название метрики</div>,
      cell: ({ row }) =>  <div style={{paddingLeft: '5px'}}>{row.getValue("userName")}</div>,
    },
    {
      accessorKey: "viewPermission",
      header: () => <div className="text-primary">Актуальность данных</div>,
      cell: ({ row }) => (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Checkbox
            checked={row.getValue("viewPermission")}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select view"
          />
        </div>
      ),
    },
    {
      accessorKey: "changePermission",
      header: () => <div className="text-primary">Владелец</div>,
      cell: ({ row }) => (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Checkbox
            checked={row.getValue("changePermission")}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select change"
          />
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="w-full">
      <div className="border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="border">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
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
                    <TableCell key={cell.id} className="border w-[200px]" style={index === 0 ? {width: '306px'} : {}}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
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
              <TableCell className="border" style={{padding: '0'}}>
                <Select onValueChange={() => {

                }}>
                  <SelectTrigger className="w-[100%] border-0 act">
                    <SelectValue  placeholder="Выбрать состояние" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Пользователи</SelectLabel>
                      <SelectItem  value="1">Вася</SelectItem>
                      <SelectItem  value="2">Петя</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell style={{ textAlign: 'center'}} className="border">
                <Checkbox
                  disabled={true}
                  aria-label="Select row"
                />
              </TableCell>
              <TableCell style={{ textAlign: 'center'}}   className="border">
                <Checkbox
                  disabled={true}
                  aria-label="Select row"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}