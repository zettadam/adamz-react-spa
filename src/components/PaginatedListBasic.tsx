import type { ListResult, RecordModel } from 'pocketbase'

import { CollectionName, useGetPaginatedListQuery } from '~/lib/api'

import Error from './Error'
import Loading from './Loading'

interface IPaginatedListBasic {
  name: CollectionName
  page: number
  size: 10 | 25 | 50 | 100
}

export default function PaginatedListBasic({
  name = 'posts',
  page = 1,
  size = 10,
}: IPaginatedListBasic) {
  const { data, error, status } = useGetPaginatedListQuery({
    name,
    page,
    size,
  })

  return (
    <>
      {'pending' === status && <Loading name={name} />}
      {'error' === status && <Error message={error?.message} name={name} />}
      {'success' === status && <BasicList data={data} name={name} />}
    </>
  )
}

function BasicList({
  data,
  name = 'posts',
}: {
  data?: ListResult<RecordModel>
  name: CollectionName
}) {
  return (
    <ul className={`${name} paginated basic`}>
      {data && Array.isArray(data.items) && data.items.length > 0 ? (
        data.items.map((d) => (
          <li key={d.id}>
            {d.title}, {d.published}
          </li>
        ))
      ) : (
        <li>No data.</li>
      )}
    </ul>
  )
}
