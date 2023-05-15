import { Row } from 'antd'
import React from 'react'
import HeaderTitle from './HeaderTitle'
import useAppSelector from '@/hooks/useAppSelector'
import LoginForm from './LoginForm'
import UserAccount from './UserAccount'

const Header = () => {
  const token = useAppSelector((state) => state.auth.token)
  return (
    <Row className="max-w-screen-xl m-auto p-10  justify-between border-solid border-gray-300 border-0 border-b">
      <HeaderTitle />
      {token ? <UserAccount /> : <LoginForm />}
    </Row>
  )
}

export default Header
