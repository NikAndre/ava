import React, { CSSProperties } from "react";
import {
  ColumnDef,
  Row,
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

import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  closestCorners,
  type DragEndEvent,
  type UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

// needed for row & cell level scope DnD setup
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'



export function ModelOptionsTable({ data }) {
  const RowDragHandleCell = ({ rowId, name }: { rowId: string, name: string}) => {
    const { attributes, listeners } = useSortable({
      id: rowId,
    })
    return (
      // Alternatively, you could set these attributes on the rows themselves
      <div {...attributes} {...listeners}>
        {name}
      </div>
    )
  }

  const DraggableRow = ({ row }: { row: Row<VariablesType> }) => {
    const { transform, transition, setNodeRef, isDragging } = useSortable({
      id: row.original.varId,
    })

    const style: CSSProperties = {
      transform: CSS.Transform.toString(transform), //let dnd-kit do its thing
      transition: transition,
      opacity: isDragging ? 0.8 : 1,
      zIndex: isDragging ? 1 : 0,
      position: 'relative',
    }

    return (
      // connect row ref to dnd-kit, apply important styles
      <TableRow ref={setNodeRef} style={style}>
        {row.getVisibleCells().map(cell => (
          <TableCell className={'border'} key={cell.id} style={{ width: cell.column.getSize() }}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    )
  }

  const columns: ColumnDef<VariablesType>[] = [
    {
      accessorKey: "optionName",
      header: () => <div className="text-primary">Метрика</div>,
      cell: ({ row }) => (
        <RowDragHandleCell style={{ paddingLeft: "5px" }} rowId={row.id} name={row.getValue("optionName")} />
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

  const [newData, setData] = React.useState(() => [...data])

  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => newData?.map(({ varId }) => varId),
    [newData, data]
  )


  const table = useReactTable({
    data: newData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getRowId: row => row.varId, //required because row indexes will
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    console.log(event)
    if (active && over && active.id !== over.id) {
      setData(data => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex) //this is just a splice util
      })
    }
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
  )

  return (
        <DndContext
          collisionDetection={closestCenter}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <div className="p-2">
            <Table>
              <TableHeader>
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <TableHead className={'border'} key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
              </TableHeader>
              <TableBody>
              <SortableContext
                items={dataIds}
                strategy={verticalListSortingStrategy}
              >
                {table.getRowModel().rows.map(row => {
                  console.log(table.getRowModel().rows)
                  return  <DraggableRow key={row.id} row={row}/>

                })}
              </SortableContext>

              </TableBody>
            </Table>
          </div>
        </DndContext>
  );
}
