import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '.'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import { useSelector } from 'react-redux'
import useAppSelector from '@/hooks/useAppSelector'

// Mock the UserAccount component
jest.mock('@/features/Header/UserAccount', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mocked-user-account" />,
  }
})

// Mock the LoginForm component
jest.mock('@/features/Header/LoginForm', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mocked-login-form" />,
  }
})

//mock useAppSelector
jest.mock('@/hooks/useAppSelector', () => ({
  __esModule: true,
  default: jest.fn(),
}))

describe('Header', () => {
  test('renders LoginForm when user is not authenticated', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const loginFormElement = screen.getByTestId('mocked-login-form')
    expect(loginFormElement).toBeInTheDocument()
  })

  test('renders UserAccount when user is authenticated', () => {
    ;(useAppSelector as jest.Mock).mockReturnValue({
      auth: {
        token: 'someTokenValue',
      },
    })

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    const userAccountElement = screen.getByTestId('mocked-user-account')
    expect(userAccountElement).toBeInTheDocument()
  })
})
