import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { VariablesOptionChart } from "@/features/Variables/VariableOptionsChart/ui/VariableOptionsChart";
import { AnaliticalDataTable } from "@/features/Variables/AnaliticalTable/ui/AnaliticalTable";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";

export const OptionsTab = () => {
  const [baselineMethod, setBaselineMethod] = useState<string>("formula");
  const [factMethod, setFactMethod] = useState<string>("base");
  const [inputValue, setInputValue] = useState<string>("");
  const [formulaArray, setFormulaArray] = useState<string[]>([]);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const onFormulaInputSubmit = () => {
    if (!inputValue) return null;
    setFormulaArray((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  const onFormulaSymbolClick = (symbol) => {
    setFormulaArray((prev) => [...prev, symbol]);
  };

  return (
    <div style={{ display: "flex", gap: "26px", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            gap: "24px 74px",
            flexWrap: "wrap",
            width: "85%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "26px",
              alignItems: "center",
              width: "45%",
            }}
          >
            <p style={{ fontSize: "14px", minWidth: "180px" }}>Факт, метод</p>
            <Select
              value={factMethod}
              onValueChange={(value) => setFactMethod(value)}
            >
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Выбрать факт" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Факт</SelectLabel>
                  <SelectItem aria-selected={true} value="base">
                    значение из базы данных
                  </SelectItem>
                  <SelectItem aria-selected={false} value="formula">
                    формула
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {factMethod === "base" && (
            <div
              style={{
                display: "flex",
                gap: "26px",
                alignItems: "center",
                width: "45%",
              }}
            >
              <p style={{ fontSize: "14px", minWidth: "180px" }}>
                Факт, значение
              </p>
              <Select>
                <SelectTrigger className="w-[100%]">
                  <SelectValue placeholder="Выбрать бюджет" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Бюджет</SelectLabel>
                    <SelectItem value="1">BU 2024</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}

          {factMethod === "formula" && (
            <div
              style={{
                display: "flex",
                gap: "26px",
                alignItems: "center",
                width: "45%",
              }}
            >
              <p style={{ fontSize: "14px", minWidth: "180px" }}>
                Факт, формула
              </p>
              <Dialog>
                <DialogTrigger style={{ width: "100%" }}>
                  <div
                    style={{
                      width: "100%",
                      minHeight: "36px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      boxSizing: "border-box",
                      borderRadius: 6,
                      border: "1px solid #CBD5E1",
                      padding: "5px 10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {formulaArray?.map((elem, index) => (
                      <li
                        key={index + elem}
                        style={{
                          width: "fit-content",
                          height: "30px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#F1F5F9",
                          borderRadius: "6px",
                          cursor: "pointer",
                          padding: "0 10px",
                        }}
                      >
                        {elem}
                      </li>
                    ))}
                  </div>
                </DialogTrigger>
                <DialogContent style={{ width: "618px" }}>
                  <DialogHeader style={{ marginBottom: "10px" }}>
                    <DialogTitle>Составьте свою формулу</DialogTitle>
                  </DialogHeader>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: 10,
                      borderRadius: 6,
                      border: "1px solid #CBD5E1",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        minHeight: "36px",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        boxSizing: "border-box",
                        borderRadius: 6,
                        border: "1px solid #CBD5E1",
                        padding: "5px 10px",
                        flexWrap: "wrap",
                      }}
                    >
                      {formulaArray?.map((elem, index) => (
                        <li
                          key={index + elem}
                          style={{
                            width: "fit-content",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#F1F5F9",
                            borderRadius: "6px",
                            cursor: "pointer",
                            padding: "0 10px",
                          }}
                        >
                          {elem}
                        </li>
                      ))}
                    </div>

                    <ul
                      style={{
                        width: "100%",
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                      }}
                    >
                      {["+", "-", "/", "*", "(", ")"].map((elem, index) => (
                        <li
                          key={index + elem}
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#F1F5F9",
                            borderRadius: "6px",
                            cursor: "pointer",
                          }}
                          onClick={() => onFormulaSymbolClick(elem)}
                        >
                          {elem}
                        </li>
                      ))}
                      <Button
                        style={{ marginLeft: "auto" }}
                        variant={"default"}
                        onClick={() => setFormulaArray([])}
                      >
                        Clear formula
                      </Button>
                    </ul>

                    <div
                      style={{
                        display: "flex",
                        gap: 10,
                      }}
                    >
                      <Input
                        value={inputValue}
                        onChange={(e) => onInputChange(e)}
                      />
                      <Button
                        variant={"default"}
                        onClick={() => onFormulaInputSubmit()}
                      >
                        OK
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}

          <div
            style={{
              display: "flex",
              gap: "26px",
              alignItems: "center",
              width: "45%",
            }}
          >
            <p style={{ fontSize: "14px", minWidth: "180px" }}>
              Baseline, метод
            </p>
            <Select
              value={baselineMethod}
              onValueChange={(value) => setBaselineMethod(value)}
            >
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Выбрать Baseline" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Baseline</SelectLabel>
                  <SelectItem value="formula">формула</SelectItem>
                  <SelectItem value="ml">Ml</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {baselineMethod === "formula" && (
            <div
              style={{
                display: "flex",
                gap: "26px",
                alignItems: "center",
                width: "45%",
              }}
            >
              <p style={{ fontSize: "14px", minWidth: "180px" }}>
                Baseline, значение
              </p>
              <Input />
            </div>
          )}

          {baselineMethod === "ml" && (
            <>
              <div
                style={{
                  display: "flex",
                  gap: "26px",
                  alignItems: "center",
                  width: "45%",
                }}
              >
                <p style={{ fontSize: "14px", minWidth: "180px" }}>
                  Факт, значение
                </p>
                <Select>
                  <SelectTrigger className="w-[100%]">
                    <SelectValue placeholder="Выбрать бюджет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Бюджет</SelectLabel>
                      <SelectItem value="1">BU 2024</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div style={{ display: "flex", gap: "26px", width: "82%" }}>
                <p style={{ fontSize: "14px", minWidth: "180px" }}>
                  Настройка ML модели
                </p>
                <div
                  style={{
                    border: "1px solid #CBD5E1",
                    borderRadius: "6px",
                    minWidth: "100%",
                    padding: "11px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "26px",
                      alignItems: "center",
                      width: "30%",
                      marginBottom: "15px",
                    }}
                  >
                    <p style={{ fontSize: "14px", minWidth: "180px" }}>
                      Модель
                    </p>
                    <Select>
                      <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder="model name" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Модель</SelectLabel>
                          <SelectItem value="1">Модель 1</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      height: "154px",
                      gap: "15px 42px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "26px",
                        alignItems: "center",
                        width: "30%",
                      }}
                    >
                      <p style={{ fontSize: "14px", minWidth: "180px" }}>
                        Параметр 1
                      </p>
                      <Input />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <VariablesOptionChart />
      <div style={{ width: "81%" }}>
        {baselineMethod === "formula" && <AnaliticalDataTable />}
      </div>
      <Button
        style={{
          width: "fit-content",
        }}
      >
        Сохранить
      </Button>
    </div>
  );
};
