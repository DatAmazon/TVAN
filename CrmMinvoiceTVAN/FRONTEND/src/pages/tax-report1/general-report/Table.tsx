import { FC } from 'react'
import TaxReportTable from '../components/data/Table'
import { GeneralReport } from '@/interface/mvan/tax-report-by-month/general-report.interface'
import { ColumnType } from 'antd/es/table'
import { TaxReportResponse } from '@/interface/mvan/tax-report-by-month/index.interface'
import { useGeneralReportContext } from '@/hooks/UseContext/mvan/tax-report-by-month/useGeneralReport'

const GeneralReportTable: FC<{ data: GeneralReport[] }> = ({ data }) => {
    const context = useGeneralReportContext();
    const tableColumns: ColumnType<TaxReportResponse>[] = [
        { title: 'MST TCGP', dataIndex: 'mstTcgp', key: 'mstTcgp' },
        { title: 'Tổng số gửi lên', dataIndex: 'totalSentUp', key: 'mstTcgp', render: (value: number) => value?.toLocaleString(), align: 'right' },
        { title: 'Tổng số trả về', dataIndex: 'totalReturn', key: 'mstTcgp', render: (value: number) => value?.toLocaleString(), align: 'right' },
        { title: 'Tổng cộng', dataIndex: 'total', key: 'total', render: (value: number) => value?.toLocaleString(), align: 'right' },
    ]
    const tableProps = { expandable: { defaultExpandAllRows: true } }
    return (<TaxReportTable
        tableProps={tableProps}
        columns={tableColumns}
        data={data}
    />)
}
export default GeneralReportTable


