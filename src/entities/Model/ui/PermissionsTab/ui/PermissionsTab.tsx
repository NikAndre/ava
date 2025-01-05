import {ModelPermissionTable} from "@/features/Models/ModelPermissionTable";
import React, {useState} from "react";
import {Switch} from "@/shared/components/ui/switch";

const data = [{
  id: 'e12e21e2e21e',
  userName: 'Денис Зайцев',
  viewPermission: false,
  changePermission: true,
}]

export const PermissionsTab = () => {
  const [ fieldChecked, setFieldChecked ] = useState(false)
  return (
    <div
      style={{
        width: '704px'
      }}
    >
      <div
        style={{
          display: 'flex',
          gap:'5px',
          marginBottom: '40px',
          alignItems: 'center'
        }}
      >
        <Switch
          checked={fieldChecked}
          onCheckedChange={() => setFieldChecked(field => !field)}
        />
        <p>
          Доступ на просмотр для всех пользователей
        </p>
      </div>
      <ModelPermissionTable  data={data}/>
    </div>
  )
}