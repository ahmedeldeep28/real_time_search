import React, { useState } from 'react'
import Filter from './Filter'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import users from "../../data/users"

function Table() {
  let [filter, setFilter] = useState({
    search: "",
    status: "",
    country: "",

  })

  let filteration = () => {

    let resultFilter = users.filter(el => {
      let filterAnd = el.status.includes(filter.status) &&
        el.country.includes(filter.country)

      let filterOr = el.username.includes(filter.search) ||
        el.phone.includes(filter.search) ||
        el.email.includes(filter.search) ||
        el.titleJub.includes(filter.search)

      return filterAnd && filterOr
    })

    return resultFilter
  }

  return (
    <div className="table__container">
      <Filter filter={filter} setFilter={setFilter} />
      <div className='table'>
        <TableHeader />
        <div className="table__body">
          {filteration().map(el => {
            return <TableRow {...el} key={el.id} />
          })}

        </div>

      </div>
    </div>
  )
}

export default Table