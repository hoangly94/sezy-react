import { Button, Form, Input } from 'antd'
import { useTranslation } from 'next-i18next'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { shareFormSchema } from '@/utils/validation'
import { ShareFormValues } from '@/models/share.model'
import { usePostRequest } from '@/services/post.service'
import useAppSelector from '@/hooks/useAppSelector'
import { useRouter } from 'next/router'

const ShareForm = () => {
  const { t: validationT } = useTranslation('validation')
  const { t: commonT } = useTranslation('common')
  const router = useRouter()
  const token = useAppSelector((state) => state.auth.token)

  if (!token) {
    router?.push('/')
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShareFormValues>({
    resolver: yupResolver(shareFormSchema),
  })

  const { request: requestLogin } = usePostRequest()

  const onSubmit = (data: ShareFormValues) => {
    requestLogin(data)
  }

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      className="w-500 m-auto p-10  border-solid border-gray-300 mt-20"
    >
      <div className="my-2">{commonT('youtubeURL')}</div>
      <Form.Item
        className="mb-0"
        validateStatus={errors.url ? 'error' : ''}
        help={validationT((errors.url && errors.url.message) || '')}
      >
        <Controller
          name="url"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder={commonT('youtubeURL')} />
          )}
        />
      </Form.Item>
      <Form.Item className="mt-5">
        <Button type="primary" htmlType="submit">
          {commonT('shareVideo')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ShareForm
