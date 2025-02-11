import { useFormik } from 'formik';
import {Input} from "@/shared/components/ui/input.tsx";
import {Textarea} from "@/shared/components/ui/textarea.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {RequestType} from "@/shared/store/slices/requestsSlice/types.ts";

type FormProps = {
    data: RequestType
}

export const RequestForm = ({data}:FormProps) => {
    const formik = useFormik({
        initialValues: {
            requestNum: data.requestNumber || '-',
            createDate: data.createDate || '-',
            changeDate: data.changeDate || '-',
            status: data.status || '-',
            type: data.type || '-',
            metric: data.metric || '-',
            owner: data.owner || '-',
            user: data.user || '-',
            userComment: data.userComment || '',
            ownerComment: data.ownerComment || '',
        },
        enableReinitialize: true,
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
                    id="metric"
                    name="metric"
                    type="text"
                    className="w-[367px]"
                    onChange={formik.handleChange}
                    value={formik.values.metric}
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
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'flex-start'
            }}>
                <div style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}}>Комментарий<br/> инициатора</div>
                <Textarea
                    id="ownerComment"
                    name="ownerComment"
                    style={{minHeight: "108px"}}
                    className="w-[367px]"
                    placeholder={'укажите комментарий при необходимости'}
                    value={formik.values.ownerComment}
                    onChange={formik.handleChange}
                ></Textarea>
            </div>
            <div style={{
                display: 'flex',
                gap: '26px',
                alignItems: 'flex-start'
            }}>
                <div style={{fontSize: "14px", minWidth: "180px", fontWeight: '500'}}>Комментарий<br/> согласующего</div>
                <Textarea
                    id="userComment"
                    name="userComment"
                    style={{minHeight: "108px"}}
                    className="w-[367px]"
                    placeholder={'укажите комментарий при необходимости'}
                    value={formik.values.userComment}
                    onChange={formik.handleChange}
                ></Textarea>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '26px'}}>
                <Button variant={'default'} >Октлонить</Button>
                <Button variant={'destructive'} >Согласовать</Button>
            </div>
        </form>
    );
}
