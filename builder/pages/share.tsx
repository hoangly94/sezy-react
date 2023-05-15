import type { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

const SharePage: NextPage = () => {
  const Header = dynamic(() => import('@/features/Header'), {
    ssr: false,
  })
  const ShareForm = dynamic(() => import('@/features/ShareForm'), {
    ssr: false,
  })
  return (
    <>
      <Header />
      <ShareForm />
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['validation', 'common'])),
    },
  }
}

export default SharePage
