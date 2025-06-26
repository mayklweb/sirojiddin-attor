import React from 'react'
import { Link } from 'react-router-dom'
import { headCategory } from '../../utils/data'
import { useSelector } from 'react-redux'

function MenuModal({ menuOpen, setMenuOpen }) {
  const { collections } = useSelector(state => state.home)

  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <div onClick={() => setMenuOpen(false)} className="menu-bg"></div>
      <div className={`menu-content ${menuOpen && 'active'}`}>
        <div className="menu-category">
          {
            headCategory.map(item => (
              <ul key={item.id}>
                <li onClick={() => setMenuOpen(false)} className='menu-category__item'>
                  <Link to={item.slug}>{item.title}</Link>
                </li>
              </ul>

            ))
          }
        </div>
        <div className="menu-collections">
          <h3 className='menu-collections__title'>Collections</h3>
          {
            collections.list.map(item => (
              <ul key={item.id}>
                <li onClick={() => setMenuOpen(false)} className='menu-collections__item'>
                  <Link to={`/collections/${item.slug}-${item.id}`}>{item.title}</Link>
                </li>
              </ul>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default MenuModal