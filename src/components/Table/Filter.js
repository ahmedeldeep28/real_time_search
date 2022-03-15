import React from 'react'

function Filter({ filter, setFilter }) {

  let handelChange = (e) => {
    let { value, name } = e.target;
    setFilter({ ...filter, [name]: value })
  }
  return (
    <div className='filter'>
      <div className="form__control">
        <label htmlFor="search">search</label>
        <input type="text" className='input' name='search' placeholder='username, email, phone, job' onChange={handelChange} />
      </div>
      <div className="form__control">
        <label htmlFor="status">status</label>
        <select name="status" className='input' onChange={handelChange}>
          <option value="">all status</option>
          <option value="online">online</option>
          <option value="offline">offline</option>
        </select>

      </div>
      <div className="form__control">
        <label htmlFor="country">country</label>
        <select name="country" className='input' onChange={handelChange}>
          <option value="">all country</option>
          <option value="egypt">egypt</option>
          <option value="iraq">iraq</option>
          <option value="usa">usa</option>
          <option value="saudi">saudi</option>
          <option value="uae">uae</option>
          <option value="libya">libya</option>
          <option value="palestine">palestine</option>
          <option value="syria">syria</option>
        </select>
      </div>
    </div>
  )
}

export default Filter