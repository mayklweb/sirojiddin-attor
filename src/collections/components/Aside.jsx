import React from 'react'
import { Link } from 'react-router-dom';
import { FilterIcon } from '../../../assets/icons';

function Aside({ collections, products, setFilterOpen }) {
  return (
    <div className='collections-aside'>
      <div className="aside-head">
        <p className='aside-head__title'>{products.list.length} Products</p>
      </div>
      <div className="aside-content">
        <button onClick={() => setFilterOpen(true)} className='aside-content__button'>Filters <span><FilterIcon /></span></button>
        <div className='aside-content__category'>
          <h4 className='aside-category__title'>Category</h4>
          <ul className='aside-category__content'>
            {
              collections.list.map(item => (
                <li key={item.id} className='aside-category__link'>
                  <Link to={`/collections/${item.slug}-${item.id}`} key={item.id}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aside