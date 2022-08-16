import React from 'react'
import { Modal as Container } from '../styles'

export default function Modal({ children }) {
  return (
    <Container>
      <div className='container'>{children}</div>
    </Container>
  )
}
