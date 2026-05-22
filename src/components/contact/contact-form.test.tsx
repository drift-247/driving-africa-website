// @vitest-environment jsdom
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ContactForm } from './contact-form'
import React from 'react'

// Mock global fetch
const fetchMock = vi.fn().mockImplementation(() => Promise.resolve({ ok: true }))
vi.stubGlobal('fetch', fetchMock)

describe('ContactForm', () => {
  beforeEach(() => {
    fetchMock.mockClear()
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', '/')
    }
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the form with default values', () => {
    render(<ContactForm />)
    expect(screen.getByText('Send us a Message')).toBeDefined()
    expect(screen.getByPlaceholderText('John Doe')).toBeDefined()
    expect(screen.getByPlaceholderText('john@example.com')).toBeDefined()
    expect(screen.getByPlaceholderText('Tell us how we can help...')).toBeDefined()
  })

  it('submits form data successfully and shows success message', async () => {
    render(<ContactForm />)

    // Fill form fields
    fireEvent.change(screen.getByPlaceholderText('John Doe'), {
      target: { value: 'Jane Doe' },
    })
    fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
      target: { value: 'jane@example.com' },
    })
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'Partnership' },
    })
    fireEvent.change(screen.getByPlaceholderText('Tell us how we can help...'), {
      target: { value: 'Let us partner!' },
    })

    // Click submit
    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    // Expect loading state
    expect(screen.getByText(/Sending.../i)).toBeDefined()

    // Wait for the success state to be rendered
    await waitFor(() => {
      expect(screen.getByText('Message Received!')).toBeDefined()
    })

    // Verify fetch was called with the correct URL and params
    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [calledUrl, calledOptions] = fetchMock.mock.calls[0]
    expect(calledUrl).toContain('formResponse')
    expect(calledOptions.method).toBe('POST')
    expect(calledOptions.mode).toBe('no-cors')
    expect(calledOptions.body).toContain('entry.436389610=Jane+Doe')
    expect(calledOptions.body).toContain('entry.956284472=jane%40example.com')
    expect(calledOptions.body).toContain('entry.1731272416=Partnership')
    expect(calledOptions.body).toContain('entry.1503124538=Let+us+partner%21')
  })
})
