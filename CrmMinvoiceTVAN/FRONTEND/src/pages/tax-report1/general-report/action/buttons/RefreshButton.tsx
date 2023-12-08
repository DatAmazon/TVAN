import { useGeneralReportContext } from "@/hooks/UseContext/mvan/tax-report-by-month/useGeneralReport";
import RefreshButton from '@/pages/tax-report1/components/action/buttons/RefreshButton'
import { FC } from 'react'

const GeneralReportResfreshButton: FC = () => {
    const context = useGeneralReportContext();
    const onClickCallback = () => context.setReload(true)
    const buttonProps = {
        disabled: context.reload
    }
    return (<RefreshButton buttonProps={buttonProps} refreshCallback={onClickCallback} />)
}
export default GeneralReportResfreshButton