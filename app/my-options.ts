import { queryOptions } from '@tanstack/react-query'

export const myOptions = queryOptions({
  queryKey: ['test'],
  queryFn: async () => {
    const response = await fetch('http://localhost:3000/api/test')

    return response.json()
  },
})
