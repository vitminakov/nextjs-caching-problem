import React from 'react'
import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import { Content } from './Content'
import { myOptions } from './my-options'
import { getQueryClient } from './get-query-client'

export default function Home() {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(myOptions)

  return (
    <main>
      <h1>Content</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Content />
      </HydrationBoundary>
    </main>
  )
}
