import {Input} from "@/shared/components/ui/input.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {Switch} from "@/shared/components/ui/switch.tsx";
import {RequestsListTable} from "@/features/Requests/RequestsListTable";
import React, {useState} from "react";
import {RequestType} from "@/shared/store/slices/requestsSlice/types.ts";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog.tsx";
import {Textarea} from "@/shared/components/ui/textarea.tsx";
import {
    Select,
    SelectContent,
    SelectGroup, SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/shared/components/ui/select.tsx";

type PType = {
    activeType: string
    data: null| RequestType[]
}

export const RequestsListWidget  = ({activeType, data}:PType) => {
    const [fieldChecked, setFieldChecked] = useState<boolean>(false);
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                }}
            >
                <Input
                    type={"text"}
                    placeholder={"Введите номер заявки для поиска"}
                />
                { activeType === 'requests'  && (
                    <Dialog >
                        <DialogTrigger
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: '#111111',
                                width: 'fit-content',
                                color: 'white',
                                whiteSpace: 'nowrap',
                                borderRadius: '6px',
                                padding: '0 23px',
                                fontSize: '14px',
                            }}
                        >Новая заявка</DialogTrigger>
                        <DialogContent style={{width:'618px'}}>
                            <DialogHeader>
                                <DialogTitle>Создание новой заявки</DialogTitle>
                                <DialogDescription>

                                </DialogDescription>
                            </DialogHeader>
                            <div style={{ display: "flex", gap: "24px", flexDirection: 'column', marginTop: "16px" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "26px",
                                        alignItems: "center",
                                        width: "47%",
                                    }}
                                >
                                    <p style={{ fontSize: "14px", minWidth: "180px", fontWeight: '500' }}>Тип Заявки</p>
                                    <Select>
                                        <SelectTrigger className="min-w-[367px]">
                                            <SelectValue placeholder="Выбрать тип" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Состояние</SelectLabel>
                                                <SelectItem value="1">Доступ к метрике</SelectItem>
                                                <SelectItem value="2">Доступ к модели</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "26px",
                                        alignItems: "center",
                                        width: "47%",
                                    }}
                                >
                                    <p style={{ fontSize: "14px", minWidth: "180px", fontWeight: '500' }}>Объект доступа</p>
                                    <Select>
                                        <SelectTrigger className="min-w-[367px]">
                                            <SelectValue placeholder="Выбрать объект" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Состояние</SelectLabel>
                                                <SelectItem value="1">Paid base</SelectItem>
                                                <SelectItem value="2">Paid base eop</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    gap: '26px',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}}>Комментарий<br/> инициатора</div>
                                    <Textarea
                                        style={{minHeight: "108px"}}
                                        className="min-w-[367px]"
                                        placeholder={'укажите комментарий при необходимости'}
                                    ></Textarea>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    gap: '12px',
                                    marginTop: '6px'
                                }}>
                                    <DialogClose><Button variant={'outline'}>Отменить</Button></DialogClose>
                                    <Button variant={'default'}>Продолжить</Button>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>

                )}
                { activeType === 'coordination'  && <Button variant="default">Согласовать все</Button> }
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "5px",
                    marginBottom: "20px",
                    alignItems: "center",
                }}
            >
                <Switch
                    checked={fieldChecked}
                    onCheckedChange={() => setFieldChecked((field) => !field)}
                />
                <p>В работе</p>
            </div>
            <RequestsListTable data={data} type={activeType}/>
        </>
    );
}