import React from 'react'

export default function Search_part() {
  return (
    <div className='search_part'>
      <div>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" />
      <i className="fa-solid fa-filter"></i>
      </div>
      <div>
        <label htmlFor="option">sort by</label>
        <select id='option' className='select'>
          <option className='option' value="">Most expensive</option>
          <option className='option' value="">Most cheap</option>
        </select>
      </div>
    </div>
  )
}
