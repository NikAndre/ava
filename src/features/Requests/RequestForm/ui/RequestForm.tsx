import { useFormik } from 'formik';
import {Input} from "@/shared/components/ui/input.tsx";
import {Textarea} from "@/shared/components/ui/textarea.tsx";
import React from "react";


export const RequestForm = () => {
    const formik = useFormik({
        initialValues: {
            requestNum: '',
            createDate: '',
            changeDate: '',
            status: '',
            type: '',
            point: '',
            owner: '',
            user: '',
            userComment: '',
            ownerComment: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
        }}>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}} htmlFor="firstName">Номер заявки</label>
                <Input
                    id="requestNum"
                    name="requestNum"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.requestNum}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}} htmlFor="lastName">Дата создания</label>
                <Input
                    id="createDate"
                    name="createDate"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.createDate}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}} htmlFor="email">Дата изменения</label>
                <Input
                    id="changeDate"
                    name="changeDate"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.changeDate}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}}  htmlFor="firstName">Состояние</label>
                <Input
                    id="status"
                    name="status"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.status}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}} htmlFor="lastName">Тип заявки</label>
                <Input
                    id="type"
                    name="type"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.type}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}} htmlFor="email">Объект доступа</label>
                <Input
                    id="point"
                    name="point"
                    type="email"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.point}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}} htmlFor="email">Согласующий</label>
                <Input
                    id="owner"
                    name="owner"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.owner}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'center'
            }}>
                <label style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}} htmlFor="email">Дата изменения</label>
                <Input
                    id="user"
                    name="user"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.user}
                />
            </div>
            <button type="submit">Submit</button>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'flex-start'
            }}>
                <div style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}}>Комментарий<br/> инициатора</div>
                <Textarea
                    style={{minHeight: "108px"}}
                    className="w-[367px]"
                    placeholder={'укажите комментарий при необходимости'}
                ></Textarea>
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'flex-start'
            }}>
                <div style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}}>Комментарий<br/> согласующего</div>
                <Textarea
                    style={{minHeight: "108px"}}
                    className="w-[367px]"
                    placeholder={'укажите комментарий при необходимости'}
                ></Textarea>
            </div>
        </form>
    );
}
