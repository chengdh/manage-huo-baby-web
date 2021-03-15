import { gql, useQuery } from "@apollo/client";
import { Row } from "antd";
import React from "react";
import PriceCard, { PriceCardProps } from "./PriceCard";
import styles from "./PriceSection.module.css";

const PriceSection: React.FC = () => {
    const GET_PRICING = gql`
query articles_by_code($code: String) {
    articles(where: {articles_categories: {category: {code: {_eq: $code}}}}) {
      content
      title
      price: str_col_1
      active: bool_col_1
      attaches {
        file_url
      }
    }
  }
  `;
    const code: string = "price";
    const { loading, error, data } = useQuery(GET_PRICING, { variables: { code } });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    const priceChildren = data.articles.map((priceItem: PriceCardProps, i: number) => {
        return (
            <PriceCard title={priceItem.title} content={priceItem.content} price={priceItem.price} active={priceItem.active}></PriceCard>
        );
    });
    return (
        <div>
            <h2 className={styles.title}>价格体系</h2>
            <div className={styles.titleLineWrapper}>
                <div className={styles.titleLine} />
            </div>
            <Row align="middle" justify="center">
                {priceChildren}
            </Row>
        </div>
    )


}
export default PriceSection;