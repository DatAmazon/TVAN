import { FC } from 'react'
const TaxReport: FC<{ TaxReportAction: React.ReactNode, TaxReportTable: React.ReactNode }> = ({ TaxReportAction, TaxReportTable }) => {
    return (<div className='user-data'>
        {TaxReportAction}
        {TaxReportTable}
    </div>)
}
export default TaxReport