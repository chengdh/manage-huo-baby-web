import { Button, Card, Col, Divider } from "antd";
import React from "react";

export interface PriceCardProps {
    title: string,
    content: string,
    price: string,
    active: boolean
};
const PriceCard: React.FC<PriceCardProps> = ({ title, content, price,active }) => (
    <>
        <Col xs={24} md={8}>
            <Card title={title} style={{marginLeft: "2em",marginRight: "2em"}} headStyle={{textAlign: "center",backgroundColor: (active ? "blue": "")}} bodyStyle={{textAlign: "center"}}>
                <h1>{price}</h1>
                <div dangerouslySetInnerHTML={{ __html: content}} />
                <Divider></Divider>
                <Button size="middle" shape="round" type="primary">开始使用</Button>
            </Card>

        </Col>
    </>
)
export default PriceCard;