import { Space } from "antd";
import ExportButton from "./ExportButton";
import ResfreshButton from "./RefreshButton";

const GeneralActionButtons = () => {
    return <Space>
        <ResfreshButton/>
        <ExportButton/>
    </Space>
}

export default GeneralActionButtons