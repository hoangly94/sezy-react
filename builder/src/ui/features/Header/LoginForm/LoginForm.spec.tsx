import React from 'react'
import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import LoginForm from '.'

describe('LoginForm', () => {
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    ;(console.error as jest.Mock).mockRestore()
  })

  beforeEach(() => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  })

  test('renders the login form with email and password fields and a submit button', () => {
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument()
    expect(screen.getByText('loginButton')).toBeInTheDocument()
  })

  test('displays validation errors when submitting an empty form', async () => {
    await act(async () => {
      userEvent.click(screen.getByText('loginButton'))
    })
    await waitFor(() => {
      expect(screen.getByText('email is a required field')).toBeInTheDocument()
      expect(
        screen.getByText('password is a required field')
      ).toBeInTheDocument()
    })
  })

  test('displays validation errors for incorrect email and password', async () => {
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText('email'),
        'invalid-email'
      )
      await userEvent.type(screen.getByPlaceholderText('password'), 'short')
      await userEvent.click(screen.getByRole('button', { name: 'loginButton' }))
    })
    await waitFor(() => {
      expect(
        screen.getByText('email must be a valid email')
      ).toBeInTheDocument()
      expect(
        screen.getByText('password must be at least 6 characters')
      ).toBeInTheDocument()
    })
  })
})
