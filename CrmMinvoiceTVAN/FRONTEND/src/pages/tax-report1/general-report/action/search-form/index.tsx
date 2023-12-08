import TaxReportSearchForm from "@/pages/tax-report1/components/action/search-form";
import GeneralReportDatePicker from "./DatePicker";

const GeneralReportActionSerchForm = () =>{
    const SearchFormItem = [GeneralReportDatePicker]
    return (<TaxReportSearchForm
        items={SearchFormItem}
    />)
}

export default GeneralReportActionSerchForm