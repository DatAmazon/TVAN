import GeneralReportActions from "./action";
import { useEffect, useState } from "react";
import { searchMessageByDate } from '@/api/mvan-tax-report-by-month/thong-diep.api'
import { GeneralReport } from "@/interface/mvan/tax-report-by-month/general-report.interface";
import { GeneralReportContext } from "@/hooks/UseContext/mvan/tax-report-by-month/useGeneralReport";
import { message } from 'antd'
import dayjs from 'dayjs'
import { QueryDateModel } from "@/interface/base/api.interface";
import GeneralReportTable from "./Table";
import TaxReport from "../components";
import { realpath } from "fs";

const TaxReportGeneralReport = () => {
    const [generalReportGroup, setGeneralReportGroup] = useState<GeneralReport[]>([])
    const [reload, setReload] = useState<boolean>(false)
    const [queryParams, setQueryParams] = useState<QueryDateModel>({
        fromDate: dayjs().subtract(1, 'day').startOf('day'),
        toDate: dayjs().subtract(1, 'day').endOf('day')

    })
    useEffect(() => {
        setReload(true)
    }, [])
    useEffect(() => {
        setGeneralReportGroup([])
    }, [JSON.stringify(queryParams)])

    useEffect(() => {
        if (reload !== true) return;
        setGeneralReportGroup([])
        getAllData().then(() => setReload(false));
    }, [reload])

    const getAllData = async () => {

        if (!queryParams.fromDate || !queryParams.toDate) {
            message.info('Vui lòng chọn ngày cần kết xuất dữ liệu');
            return Promise.resolve();
        }
        return searchMessageByDate({ ...queryParams }).then((response) => {
            setGeneralReportGroup(response.result.data)
            return Promise.resolve(response);
        })

    }
    ////////aaaa
}