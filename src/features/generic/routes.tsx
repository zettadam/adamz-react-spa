import IndexRoute from './IndexRoute'
import ArchiveLayout from './archive/Layout'
import ArchiveIndexRoute from './archive/IndexRoute'
import ArchiveYearRoute from './archive/YearRoute'
import ArchiveMonthRoute from './archive/MonthRoute'
import ArchiveDayRoute from './archive/DayRoute'
import DetailRoute from './DetailRoute'

export default [
  { index: true, element: <IndexRoute /> },
  {
    path: 'archive',
    element: <ArchiveLayout />,
    children: [
      { index: true, element: <ArchiveIndexRoute /> },
      { path: ':year', element: <ArchiveYearRoute /> },
      { path: ':year/:month', element: <ArchiveMonthRoute /> },
      { path: ':year/:month/:day', element: <ArchiveDayRoute /> },
    ],
  },
  { path: 'detail/:id', element: <DetailRoute /> },
]
