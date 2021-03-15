import { gql, useQuery } from '@apollo/client';
import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';
import styles from "./FeatureSection.module.css";

const pointPos = [
    { x: -30, y: -10 },
    { x: 20, y: -20 },
    { x: -65, y: 15 },
    { x: -45, y: 80 },
    { x: 35, y: 5 },
    { x: 50, y: 50, opacity: 0.2 },
];
const GET_ARTICLES = gql`
query articles_by_code($code: String) {
    articles(where: {articles_categories: {category: {code: {_eq: $code}}}}) {
      content
      title
      attaches {
        file_url
      }
    }
  }
  `;



const FeatureSection: React.FC = () => {
    const code: string = "feature";
    const { loading, error, data } = useQuery(GET_ARTICLES, { variables: { code } });
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    // const [hoverNum, setHoverNum] = useState<number | null>(null);
    // const onMouseOver = (i) => {
    //     setHoverNum(i);
    // };
    // const onMouseOut = () => {
    //     setHoverNum(null);
    // };
    // const getEnter = (e) => {
    //     const i = e.index;
    //     const r = (Math.random() * 2) - 1;
    //     const y = (Math.random() * 10) + 5;
    //     const delay = Math.round(Math.random() * (i * 50));
    //     return [
    //         {
    //             delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
    //         },
    //         {
    //             y: r > 0 ? `+=${y}` : `-=${y}`,
    //             duration: (Math.random() * 1000) + 2000,
    //             yoyo: true,
    //             repeat: -1,
    //         }];
    // };
    const children: React.ReactNode[] = data.articles.map((item, i) => {
        // const isHover = hoverNum === i;
        return (
            <div className={styles.featureWrapper} key={`feature-${i}`}>
                <div className={styles.featureImageWrapper}
                    key={`feature-image-wrapper-${i}`}
                >
                    <img
                        key={`feature-image-${i}`}
                        className={styles.featureImage} src={item.attaches[0].file_url} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} />
                </div>
                <h3 key={`feature-title-${i}`} className={styles.featureTitle}>{item.title}</h3>
                <p key={`feature-subtitle-${i}`} className={styles.featureSubtitle}>{item.content}</p>
            </div>
        );
    });

    const childrenWithAnims: React.ReactNode = children.map((item, i) => {
        return (
            <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} key={`feature-col-${i}`}>
                <QueueAnim
                    key={i.toString()}
                    type="bottom"
                    leaveReverse
                    delay={[i * 100, (children.length - 1 - i) * 100]}
                    component="ul"
                >
                    {item}
                </QueueAnim>
            </Col >
        );
    });
    return (
        <div className={styles.featureSectionWrapper}>
            <h2 className={styles.title}>What can <span>Pro</span> do for you </h2>
            <div className={styles.titleLineWrapper}>
                <div className={styles.titleLine} />
            </div>
            <Row >
                {childrenWithAnims}
            </Row >
        </div>

    );
}

export default FeatureSection;