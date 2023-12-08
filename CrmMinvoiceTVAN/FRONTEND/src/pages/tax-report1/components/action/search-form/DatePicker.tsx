import { DatePicker } from "antd";
import { Dayjs } from 'dayjs'
import { FC } from 'react'
import SearchFormItem from "./Item";

const TaxReportDateRangePicker: FC<{
    fromDate: Dayjs,
    toDate: Dayjs,
    onDateChangeCallBack: (values: any) => void,
}> = ({ fromDate, toDate, onDateChangeCallBack }) => {
    return (<SearchFormItem
        formItemProps={{ label: 'Thời gian: ' }}
        input={
            <DatePicker.RangePicker style={{ width: '100%' }}
                value={[fromDate, toDate]}
                placeholder={['Từ ngày', 'Đến ngày']}
                onChange={onDateChangeCallBack}
            />
        }>
    </SearchFormItem>)
}

export default TaxReportDateRangePicker