"use client"
import React from 'react'
import { withAuth } from '../../../redux/withAuth'
import { Container } from '@/components/Styles/Container'


const Favorites = () => {
  return (
    <Container>
      <div>
        <h1> fave </h1>
      </div>

    </Container>
  )
}

export default withAuth({ Component: Favorites })
