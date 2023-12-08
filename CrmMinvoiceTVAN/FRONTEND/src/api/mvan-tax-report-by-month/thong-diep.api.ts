import { MinvoiceResponseModel } from "@/interface/base/api.interface";
import { request } from '../request-configuration';
import { AxiosRequestConfig } from "axios";
import { GeneralReport, GeneralReportQueryModel } from "@/interface/mvan/tax-report-by-month/general-report.interface";

const ThongDiepControllerUri = 'thongdiep';

const searchMessageByDateUri = 'message-by-date'
export const searchMessageByDate = async (queryParams: GeneralReportQueryModel, config?: AxiosRequestConfig) => {
    return request<MinvoiceResponseModel<GeneralReport[]>>
        (
            'post',
            `${ThongDiepControllerUri}/${searchMessageByDateUri}`,
            {
                fromDate: queryParams.fromDate?.toJSON(),
                toDate: queryParams.toDate?.toJSON()
            }
        )
}
