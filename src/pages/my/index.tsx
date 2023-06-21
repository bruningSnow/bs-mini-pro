import { Component } from "react";
import { PageContainer } from "@/components/index";
import { View } from "@tarojs/components";
import styles from "./index.module.scss";

interface IState {}

class My extends Component<IObject, IState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onShareAppMessage() {
    return {
      title: "郝兜兜的组件库",
      path: "/pages/my/index",
    };
  }

  onShareTimeline() {
    return {
      text: "郝兜兜的组件库",
      pagePath: "/pages/my/index",
    };
  }

  render() {
    return (
      <PageContainer className={styles.index}>
        <View className={styles.content}>内容2</View>
      </PageContainer>
    );
  }
}

export default My;
