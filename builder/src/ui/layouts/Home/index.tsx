import { Button, Col, Form, Input, Row } from 'antd'
import { useTranslation } from 'next-i18next'
import React from 'react'
import useAppSelector from '@/hooks/useAppSelector'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Home = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const posts = useAppSelector((state) => state.post.posts)

  console.log(posts)
  return (
    <div>
      
    </div>
  )
}

export default Home
