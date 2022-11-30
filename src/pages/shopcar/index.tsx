import { Component } from "react";
import { PageContainer } from "@/components/index";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";

class Shopcar extends Component {
  onShareAppMessage() {
    return {
      title: "模版小程序",
      path: "/pages/shopcar/index",
    };
  }

  onShareTimeline() {
    return {
      text: "模版小程序",
      pagePath: "/pages/shopcar/index",
    };
  }

  render() {
    return (
      <PageContainer className={styles.index}>
        <View className={styles.content}>内容</View>
      </PageContainer>
    );
  }
}

export default Shopcar;
