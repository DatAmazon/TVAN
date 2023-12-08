import GeneralReportActionSerchForm from "./search-form";
import GeneralActionButtons from "./buttons";
import TaxReportActions from "../../components/action";

const GeneralReportActions = () => {
    const colItem = [
        {
            index: 0,
            item: <GeneralActionButtons />
        },
        {
            index: 1,
            item: <GeneralReportActionSerchForm />
        },
        {
            index: 2,
            item: <GeneralActionButtons />
        }
    ]
    return (<TaxReportActions colItems={colItem} />)
}

export default GeneralReportActions