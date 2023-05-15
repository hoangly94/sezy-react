const i18n = require('./next-i18next.config')
const withAntdLess = require('next-plugin-antd-less')

const nextConfig = withAntdLess({
  swcMinify: true,
  i18n,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  },

  webpack(config) {
    return config
  },
})

module.exports = nextConfig
