import { QueryDateModel } from "@/interface/base/api.interface";
import { GeneralReport } from "@/interface/mvan/tax-report-by-month/general-report.interface";
import dayjs from 'dayjs';
import { Dispatch, SetStateAction, createContext, useContext } from "react";

const initGeneralReportValue: GeneralReport[] = []
const setGeneralReport: Dispatch<SetStateAction<GeneralReport[]>> = () => { }
const setReload: Dispatch<SetStateAction<boolean>> = () => { }
const setQueryParams: Dispatch<SetStateAction<QueryDateModel>> = () => { }
const initQueryParamsValue: QueryDateModel = {
    fromDate: dayjs(),
    toDate: dayjs()
}

export const GeneralReportContext = createContext({
    generalReport: initGeneralReportValue,
    setGeneralReport: setGeneralReport,
    reload: false,
    setReload: setReload,
    queryParams: initQueryParamsValue,
    setQueryParams: setQueryParams
})

export const useGeneralReportContext = () => useContext(GeneralReportContext)