import { Button, Col, Row } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import React from 'react';
import { appName } from '../../../constants/constants';
import BannerSVGAnim from './BannerSVGAnim';
import styles from "./Banner.module.css";
import WaveBorder from '../WaveBorder/WaveBorder';

const Banner: React.FC = () => {
    return (
        <>
            <Row className={styles.bannerWrapper} align="middle">
                <Col xxl={0} xl={0} lg={0} md={0} sm={24} xs={24}>
                    <TweenOne animation={{ opacity: 1 }} className={styles.bannerImageWrapper}>
                        <div className={styles.homeBannerImage}>
                            <img
                                alt="banner"
                                src="https://gw.alipayobjects.com/zos/rmsportal/rqKQOpnMxeJKngVvulsF.svg"
                                width="100%"
                            />
                        </div>
                    </TweenOne>
                </Col>

                <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                    <QueueAnim className={styles.bannerTitleWrapper} type={'bottom'}>
                        <div key="line" className={styles.titleLineWrapper}>
                            <div
                                className={styles.titleLine}
                                style={{ transform: 'translateX(-64px)' }}
                            />
                        </div>
                        <h1 className={styles.title} key="h1">{appName}</h1>
                        <p key="content" className={styles.subtitle}>
                            开箱即用的中台前端/设计解决方案
                    </p>
                        <div key="button" className={styles.buttonWrapper}>
                            <a href="http://preview.pro.ant.design" target="_blank" rel="noopener noreferrer">
                                <Button type="primary">
                                    预览
                            </Button>
                            </a>
                            <Button style={{ margin: '0 16px' }} type="primary" ghost>
                                开始使用
                        </Button>
                        </div>
                    </QueueAnim>
                </Col>

                <Col xxl={12} xl={12} lg={12} md={12} sm={0} xs={0}>
                    <TweenOne animation={{ opacity: 1 }} className={styles.bannerImageWrapper}>
                        <BannerSVGAnim />
                    </TweenOne>
                </Col>
            </Row >
            {/* <WaveBorder
                upperColor={"#f0f2f5"}
                lowerColor="blue"
                className={"waveBorder"}
                animationNegativeDelay={2}
            /> */}
        </>
    );
}

export default Banner;
