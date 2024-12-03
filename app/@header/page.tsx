'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { myOptions } from '@/app/my-options'

export default function Header() {
  const { data } = useQuery(myOptions)

  return (
    <div>
      addas
      {JSON.stringify(data)}
    </div>
  )
}
