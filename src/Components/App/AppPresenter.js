import React, { Fragment } from "react"
import Header from "Components/Header"
import Flex from "styled-flex-component"
import Notification from "Components/Notification"
import Store from "store"

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCener full column>
      <Notification />
    </Flex>
  </Fragment>
)

export default AppPresenter
