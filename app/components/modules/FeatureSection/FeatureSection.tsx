import { Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import React, { useState } from 'react';
import styles from "./FeatureSection.module.css";

const featuresCN = [
    {
        title: '优雅美观',
        content: '基于 Ant Design 体系精心设计',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg',
        color: '#13C2C2',
        shadowColor: 'rgba(19,194,194,.12)',
    },
    {
        title: '常见设计模式',
        content: '提炼自中后台应用的典型页面和场景',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg',
        color: '#2F54EB',
        shadowColor: 'rgba(47,84,235,.12)',
    },
    {
        title: '最新技术栈',
        content: '使用 React/dva/antd 等前端前沿技术开发',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg',
        color: '#F5222D',
        shadowColor: 'rgba(245,34,45,.12)',
    },
    {
        title: '响应式',
        content: '针对不同屏幕大小设计',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg',
        color: '#1AC44D',
        shadowColor: 'rgba(26,196,77,.12)',
    },
    {
        title: '主题',
        content: '可配置的主题满足多样化的品牌诉求',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg',
        color: '#FAAD14',
        shadowColor: 'rgba(250,173,20,.12)',
    },
    {
        title: '国际化',
        content: '内建业界通用的国际化方案（敬请期待）',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg',
        color: '#722ED1',
        shadowColor: 'rgba(114,46,209,.12)',
    },
    {
        title: '最佳实践',
        content: '良好的工程实践助你持续产出高质量代码',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/pbmKMSFpLurLALLNliUQ.svg',
        color: '#FA8C16',
        shadowColor: 'rgba(250,140,22,.12)',
    },
    {
        title: 'Mock 数据',
        content: '实用的本地数据调试方案',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/aLQyKyUyssIUhHTZqCIb.svg',
        color: '#EB2F96',
        shadowColor: 'rgba(235,45,150,.12)',
    },
    {
        title: 'UI 测试',
        content: '自动化测试保障前端产品质量',
        src: 'https://gw.alipayobjects.com/zos/rmsportal/RpJIQitGbSCHwLMimybX.svg',
        color: '#1890FF',
        shadowColor: 'rgba(24,144,255,.12)',
    },
];

const pointPos = [
    { x: -30, y: -10 },
    { x: 20, y: -20 },
    { x: -65, y: 15 },
    { x: -45, y: 80 },
    { x: 35, y: 5 },
    { x: 50, y: 50, opacity: 0.2 },
];

const FeatureSection: React.FC = () => {
    const [hoverNum, setHoverNum] = useState<number | null>(null);
    const onMouseOver = (i) => {
        setHoverNum(i);
    };
    const onMouseOut = () => {
        setHoverNum(null);
    };
    const getEnter = (e) => {
        const i = e.index;
        const r = (Math.random() * 2) - 1;
        const y = (Math.random() * 10) + 5;
        const delay = Math.round(Math.random() * (i * 50));
        return [
            {
                delay, opacity: 0.4, ...pointPos[e.index], ease: 'easeOutBack', duration: 300,
            },
            {
                y: r > 0 ? `+=${y}` : `-=${y}`,
                duration: (Math.random() * 1000) + 2000,
                yoyo: true,
                repeat: -1,
            }];
    };
    const children: React.ReactNode[] = featuresCN.map((item, i) => {
        const isHover = hoverNum === i;
        return (
            <div className={styles.featureWrapper} key={`feature-${i}`}>
                <div className={styles.featureImageWrapper}
                    key={`feature-image-wrapper-${i}`}
                    style={{
                        boxShadow: `${isHover ? '0 12px 24px' :
                            '0 6px 12px'} ${item.shadowColor}`,
                    }}
                >
                    <img 
                        key={`feature-image-${i}`}
                        className={styles.featureImage} src={item.src} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} />
                </div>
                <h3 key={`feature-title-${i}`} className={styles.featureTitle}>{item.title}</h3>
                <p  key={`feature-subtitle-${i}`} className={styles.featureSubtitle}>{item.content}</p>
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