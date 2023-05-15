import { Button, Row } from 'antd'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { useLogoutRequest } from '@/services/auth.service'
import Link from 'next/link'

const UserAccount = () => {
  const { t } = useTranslation()
  const { request } = useLogoutRequest()

  return (
    <Row className="items-center">
      <div className="mr-5">Welcome {localStorage.getItem('email')}</div>
      <Link href="/share">
        <Button className="mr-2">{t('shareVideo')}</Button>
      </Link>
      <Button onClick={request}>{t('logout')}</Button>
    </Row>
  )
}

export default UserAccount
