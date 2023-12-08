import MinvoiceTable, { MinvoiceTableProps } from '@/components/core/table';
import { TaxReportResponse } from '@/interface/mvan/tax-report-by-month/index.interface'
import { Pagination } from 'antd';
import { ColumnType } from 'antd/es/table';
import { FC } from 'react';

const TaxReportTable: FC<{
    tableProps?: MinvoiceTableProps<TaxReportResponse>,
    data: TaxReportResponse[],
    columns: ColumnType<TaxReportResponse>[],
}> = ({tableProps, data, columns }) => {
    return (<MinvoiceTable<TaxReportResponse>
        {...tableProps}
        dataSource={data}
        columns={columns}
        rowKey={(record) =>`${record._id}`}
        pagination={false}
         />
    )
}
export default TaxReportTable

