import React from 'react'

function TableRow({ username, email, status,avatar, country, phone, titleJub }) {
  return (
    <div className='table__row'>
      <div className="table__cell user">
        <img src={`/image/${avatar}`} className='avatar' alt="" />
        <div className="user__info">
          <p className="user__name">{username}</p>
          <p className="user__email">{email}</p>
        </div>
      </div>
      <div className={`table__cell status ${status}`}>{status}</div>
      <div className="table__cell country">{country}</div>
      <div className="table__cell phone">{phone}</div>
      <div className="table__cell job">{titleJub}</div>
    </div>
  )
}

export default TableRow