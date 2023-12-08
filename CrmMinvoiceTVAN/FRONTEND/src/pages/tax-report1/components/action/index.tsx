import { Col, Row } from 'antd';
import { FC } from 'react';

export type ColItem = {
    index: number,
    item: React.ReactNode
}

const TaxReportActions: FC<{ colItems: ColItem[] }> = ({ colItems }) => {
    return (<Row>
        {
            colItems.map((colItem, index) => {
                return <Col key={index} span={24 / colItems.length}>{colItem.item}</Col>
            })
        }
    </Row>)
}

export default TaxReportActions