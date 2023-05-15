import { LoginFormValues } from '@/models/auth.model'
import { Button, Form, Input, Row } from 'antd'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormSchema } from '@/utils/validation'
import { useTranslation } from 'next-i18next'
import { useLoginRequest } from '@/services/auth.service'

const LoginForm = () => {
  const { t } = useTranslation('common')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginFormSchema),
  })

  const { request: requestLogin, data: loginData } = useLoginRequest()

  const onSubmit = (data: LoginFormValues) => {
    requestLogin(data)
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Row>
        <Form.Item
          className="mb-0"
          label={t('email')}
          validateStatus={errors.email ? 'error' : ''}
          help={t((errors.email && errors.email.message) || '')}
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={t('email')} />
            )}
          />
        </Form.Item>
        <Form.Item
          className="mb-0 mx-8"
          label={t('password')}
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password && errors.password.message}
        >
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder={t('password')} />
            )}
          />
        </Form.Item>
        <Form.Item className="mb-0">
          <Button type="primary" htmlType="submit">
            {t('loginButton')}
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default LoginForm
