import { useLocation } from 'react-router-dom'

import type { CollectionName } from '~/lib/api'

import PaginatedListBasic from '~/components/PaginatedListBasic'

export default function IndexRoute() {
  const l = useLocation()
  const s = l.pathname.split('/')[1]

  return (
    <div className="page index">
      <h2>Latest</h2>
      <PaginatedListBasic name={s as CollectionName} page={1} size={10} />
    </div>
  )
}
