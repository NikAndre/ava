import { Input } from "@/shared/components/ui/input";
import {VariablesDataTable} from "@/features/Variables/VariablesTable";

export const VariablesTab = () => {
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
            </div>
            <VariablesDataTable isAdmin={true} />
        </>
    );
};
