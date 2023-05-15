import 'src/styles/fonts.css'
import 'src/styles/global.css'
import React from 'react'
import { store } from '@/store/index'
import { Provider as ReduxProvider } from 'react-redux'
import { appWithTranslation } from 'next-i18next'
import ErrorBoundary from '@/features/ErrorBoundary'
import nextI18nextConfig from 'next-i18next.config'

function MyApp({ Component, pageProps }: any) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </ErrorBoundary>
  )
}

export default appWithTranslation(MyApp, { i18n: nextI18nextConfig })
