import { HomeFilled } from '@ant-design/icons'
import { Row } from 'antd'
import { useTranslation } from 'next-i18next'
import React from 'react'
import Link from 'next/link'

const HeaderTitle = () => {
  const { t } = useTranslation()
  return (
    <Link href="/">
      <Row className="items-center">
        <HomeFilled className="text-2xl leading-none" />
        <div className="ml-5 text-3xl">{t('homeTitle')}</div>
      </Row>
    </Link>
  )
}

export default HeaderTitle
