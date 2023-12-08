import { QueryDateModel } from '../../base/api.interface'
import { TaxReportResponse } from './index.interface'

export interface GeneralReport extends TaxReportResponse {
    mstTcgp: string;
    totalSentUp: number;
    totalReturn: number;
    total: number;
}

export interface GeneralReportQueryModel extends QueryDateModel{

}