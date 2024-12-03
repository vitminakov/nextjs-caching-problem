'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { myOptions } from '@/app/my-options'

export function Content() {
  const { data } = useSuspenseQuery(myOptions)

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
