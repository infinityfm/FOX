import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  CBadge
} from '@coreui/react'


const NotificationCountBadge = props => {
  const unreadNotificationsCount = props.items.filter(item => item.unread).length
  return (
    <React.Fragment>
      <CIcon name="cil-bell" />
      {unreadNotificationsCount > 0 ? <CBadge shape="pill" color="info">{unreadNotificationsCount}</CBadge> : null}
    </React.Fragment>
  )
}

export default NotificationCountBadge