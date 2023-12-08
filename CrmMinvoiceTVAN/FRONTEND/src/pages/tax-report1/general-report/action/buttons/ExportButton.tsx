import { useGeneralReportContext } from "@/hooks/UseContext/mvan/tax-report-by-month/useGeneralReport";
import ExportButton from "@/pages/tax-report1/components/action/buttons/ExportButton";
import { base64ToArrayBuffer } from "@/utils/function-extensions";

const GeneralReportExportButton = () => {
    const context = useGeneralReportContext();
    const exportCallback = () => {

    }
    return (<ExportButton exportCallback={exportCallback}/>)
}

export default GeneralReportExportButton;