import React from "react";
import {Button} from "@/shared/components/ui/button";
import {Input} from "@/shared/components/ui/input";
import {Tag} from "@/shared/components/custom/tag/Tag";
import {Check} from 'lucide-react'
import {Textarea} from "@/shared/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/shared/components/ui/select";

export const ModelInformationForm = () => {
  return (
    <div style={{display: "flex", flexDirection: 'column', gap: "24px"}}>
      <div style={{ display: "flex",flexWrap: 'wrap',justifyContent:'space-between', gap: "24px 74px", width: '85%'}}>
        <div style={{ display: "flex", gap: "26px", alignItems: 'center', width: '47%'}}>
          <p style={{ fontSize: '14px', minWidth: '180px'}}>Название переменной</p>
          <Input className="min-w-[367px]" />
        </div>
        <div style={{ display: "flex", gap: "26px", alignItems: 'center', width: '47%'}}>
          <p style={{ fontSize: '14px', minWidth: '180px'}}>Дата создания</p>
          <Input className="min-w-[367px]"/>
        </div>
        <div style={{ display: "flex", gap: "26px", alignItems: 'center', width: '47%'}}>
          <p style={{ fontSize: '14px', minWidth: '180px'}}>Состояние</p>
          <Select>
            <SelectTrigger className="min-w-[367px]">
              <SelectValue  placeholder="Выбрать состояние" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Состояние</SelectLabel>
                <SelectItem  value="1">опубликована</SelectItem>
                <SelectItem  value="2">черновик</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div style={{ display: "flex", gap: "26px", alignItems: 'center', width: '47%'}}>
          <p style={{ fontSize: '14px', minWidth: '180px', alignItems: 'center'}}>Владелец</p>
          <Input className="min-w-[367px]" />
        </div>
        <div style={{ display: "flex", gap: "26px", width: '100%'}}>
          <p style={{ fontSize: '14px', minWidth: '180px'}}>Описание</p>
          <Textarea
            style={{minHeight: '144px'}}
            className="min-w-[1014px]"
            defaultValue={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n'}>
          </Textarea>
        </div>
      </div>
      <div style={{display: "flex", gap: "26px", width: '85%'}}>
        <p style={{minWidth: '180px'}}>
          Теги
        </p>
        <div style={{display: "flex", gap: "24px", flexDirection: 'column', width: '100%'}}>
          <ul>
            <Tag title={'base'} isDeletable={true}/>
          </ul>
          <div style={{ display: 'flex', gap: '10px'}}>
            <Input placeholder={'тег,например, вырука'} />
            <Button>
              <Check size={48} color={'#FFFFFF'} />
            </Button>
          </div>
          <div style={{
            display: "flex",
            gap: "20px",
            flexDirection: 'column',
            border: '1px solid #CBD5E1',
            borderRadius: '6px',
            padding: '11px 12px',
            width: 'calc(100% - 58px)'
          }}>
            <p>Популярные теги</p>
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              <Tag title={'base'}/>
            </ul>
          </div>
        </div>
      </div>
      <Button style={{
        width: '105px'
      }}>Сохранить</Button>
    </div>
  );
};

