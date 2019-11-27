import React, { Component } from "react"
import AppPresenter from "./AppPresenter"
import Store from "store"

class AppContainer extends Component {
  render() {
    return (
      // 프로바이더 제공
      <Store.Provider>
        {/* 이 AppPresenter 안에 있는 컴포넌트들에서는 store가 제공하는 데이터에 접근할 수 있음 */}
        <AppPresenter />
      </Store.Provider>
    )
  }
}

export default AppContainer
