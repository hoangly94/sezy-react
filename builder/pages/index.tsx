import type { NextPage } from 'next'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

const HomePage: NextPage = () => {
  const App = dynamic(() => import('@/features/Header'), {
    ssr: false,
  })
  return (
    <>
      
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'message',
        'validation',
      ])),
    },
  }
}

export default HomePage
