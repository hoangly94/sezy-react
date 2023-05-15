import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShareForm from '.'
import { Provider } from 'react-redux'
import { store } from '@/store/index'

describe('ShareForm component', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <ShareForm />
      </Provider>
    )

    expect(screen.getByText('youtubeURL')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'shareVideo' })
    ).toBeInTheDocument()
  })

  it('should show validation error message for invalid input', async () => {
    render(
      <Provider store={store}>
        <ShareForm />
      </Provider>
    )
    await act(async () => {
      await userEvent.type(
        screen.getByPlaceholderText('youtubeURL'),
        'invalid input'
      )
      await userEvent.click(screen.getByRole('button', { name: 'shareVideo' }))
    })

    expect(screen.getByText('invalid_youtube_url')).toBeInTheDocument()
  })
})
