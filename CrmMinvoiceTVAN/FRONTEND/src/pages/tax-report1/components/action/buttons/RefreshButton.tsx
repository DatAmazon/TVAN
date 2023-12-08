import MinvoiceButton from "@/components/basic/button";
import { BaseButtonProps } from "antd/es/button/button";
import { FC } from 'react';

const TaxReportRefreshButton: FC<{
    refreshCallback: () => void,
    buttonProps?: BaseButtonProps
}> = ({ refreshCallback, buttonProps }) => {
    return (<MinvoiceButton
        {...buttonProps}
        onClick={refreshCallback}
    ></MinvoiceButton>)
}
export default TaxReportRefreshButton