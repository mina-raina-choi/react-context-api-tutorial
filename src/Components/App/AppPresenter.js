import React, { Fragment } from "react"
import Flex from "styled-flex-component"
import NotificationContainer from "Components/Notification/NotificationContainer"

const AppPresenter = () => (
  <Fragment>
    <Flex alignCener full column></Flex>
    <NotificationContainer />
  </Fragment>
)

export default AppPresenter
