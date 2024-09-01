import { useQuery } from '@tanstack/react-query'
import { client } from './pocketbase'

export type CollectionName =
  | 'code'
  | 'events'
  | 'labs'
  | 'links'
  | 'notes'
  | 'posts'

export function useGetPaginatedListQuery({
  name = 'posts',
  page = 1,
  size = 10,
}: {
  name: CollectionName
  page: number
  size: number
}) {
  const f = name === 'events' || name === 'labs' ? 'created' : 'published'

  const { data, error, status } = useQuery({
    queryKey: [name, 'page', page],
    queryFn: () =>
      client.collection(name).getList(page, size, {
        filter: `${f} != null`,
        sort: `-${f}`,
      }),
  })

  return { data, error, status }
}

export function useGetRecordQuery({
  name = 'posts',
  field = 'id',
  identifier,
}: {
  name: CollectionName
  field: 'id' | 'slug'
  identifier: string
}) {
  const { data, error, status } = useQuery({
    queryKey: [name, 'detail', field],
    queryFn: () =>
      client.collection(name).getFirstListItem(`${field}=${identifier}`),
  })

  return { data, error, status }
}
