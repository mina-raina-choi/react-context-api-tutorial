import React, { Component } from "react"
import AppPresenter from "./AppPresenter"
import Store from "store"

class AppContainer extends Component {
  state = {
    message: "Hello",
    stuff: 10,
    isLoggedIn: false
  }

  componentDidMount() {
    // message값을 바꾸면 NotificationPresenter 컴포넌트에도 바로 적용이 되는지 체크

    /* 
    리덕스를 사용해서 상태값 관리및 공유를 하는 것보다 훨씬 간편하다   
    */

    setTimeout(() => {
      this.setState({
        message: "Bye"
      })
    }, 1000)
  }

  render() {
    return (
      // 프로바이더 제공
      // 이제 하위 컴포넌트들에서 props로 데이터를 전달하지 않고 어떻게 이 value를 사용할 수 있을까???
      <Store.Provider value={this.state}>
        {/* 이 AppPresenter 안에 있는 컴포넌트들에서는 store가 제공하는 데이터에 접근할 수 있음 */}
        <AppPresenter />
      </Store.Provider>
    )
  }
}

export default AppContainer
