import React from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon } from '../../assets/icons'

function FilterModal({ collections, filterOpen, setFilterOpen }) {
  return (
    <div className={`filter ${filterOpen && 'active'}`}>
      <div onClick={() => setFilterOpen(false)} className="filter-bg"></div>
      <div className={`filter-content ${filterOpen && 'active'}`}>
        <button onClick={() => setFilterOpen(false)} className="filter-close__btn" ><CloseIcon /></button>
        <div className='filter-item'>
          <h3 className='filter-item__title'>Category</h3>
          <ul className='filter-category'>
            {
              collections.list.map(item => (
                <button key={item.id} className='filter-category__link'>
                  <Link to={`/collections/${item.slug}-${item.id}`} key={item.id}>
                    {item.title}
                  </Link>
                </button>
              ))
            }
          </ul>
        </div>


      </div>
    </div>
  )
}

export default FilterModal