import { useGeneralReportContext } from "@/hooks/UseContext/mvan/tax-report-by-month/useGeneralReport";
import TaxReportDateRangePicker from "@/pages/tax-report1/components/action/search-form/DatePicker";
import { Dayjs } from 'dayjs'
import { FC } from 'react'

const GeneralReportDatePicker: FC = () => {
    const context = useGeneralReportContext();
    const onDateChangeCallBack = (values: any) => {
        context.setQueryParams({
            ...context.queryParams,
            fromDate: values?.at(0).startOf('day'),
            toDate: values?.at(1).endOf('day')
        })
    }
    return (<TaxReportDateRangePicker
        fromDate={context.queryParams.fromDate as Dayjs}
        toDate={context.queryParams.toDate as Dayjs}
        onDateChangeCallBack={onDateChangeCallBack}
    />)
}

export default GeneralReportDatePicker