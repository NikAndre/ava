import {Input} from "@/shared/components/ui/input.tsx";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/shared/components/ui/dialog.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {ScenariosTable} from "@/features/Admin/ScenariosTable";

export const ScenariosList = () => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "5px",
                }}
            >
                <Input
                    type={"text"}
                    placeholder={"Введите название переменной или тег для поиска"}
                />

                <Dialog>
                    <DialogTrigger
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "#111111",
                            width: "fit-content",
                            color: "white",
                            whiteSpace: "nowrap",
                            borderRadius: "6px",
                            padding: "0 23px",
                            fontSize: "14px",
                        }}
                    >
                        Новый сценарий
                    </DialogTrigger>
                    <DialogContent style={{ width: "618px" }}>
                        <DialogHeader>
                            <DialogTitle>Создание нового сценария</DialogTitle>
                            <DialogDescription style={{ width: "464px", marginTop: "6px" }}>
                                Это действие приведет к созданию нового сценария и автоматическому переходу в меню настройки.
                            </DialogDescription>
                        </DialogHeader>
                        <div
                            style={{
                                display: "flex",
                                marginTop: "38px",
                                alignItems: "center",
                            }}
                        >
                            <div style={{ width: "184px", fontWeight: "500" }}>
                                Название Сценария
                            </div>
                            <Input style={{ width: "367px" }} />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                gap: "12px",
                                marginTop: "30px",
                            }}
                        >
                            <DialogClose>
                                <Button variant={"outline"}>Отменить</Button>
                            </DialogClose>
                            <Button variant={"default"}>Продолжить</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <ScenariosTable  />
        </>
    )
}