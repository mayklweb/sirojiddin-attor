import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMenCollectionsList } from '../../store/actions/homeActions'
import Skeleton from 'react-loading-skeleton'

function Categories() {
  const { collections } = useSelector(state => state.home)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMenCollectionsList())
  }, [])

  const list = [1, 2, 3, 4, 5, 6, 7, 8,]

  return (
    <div className='header-category'>
      <div className="header-category__items">
        {
          // menCollections.loading ? list.map(item => (
          //   <div className='header-category__item' style={{ display: 'flex', margin: 18 }} key={item} >
          //     <Skeleton style={{ width: 64 }} />
          //   </div>)) : 
          collections.list.map(item => (
            <div className='header-category__item' key={item.id}>
              <Link to={`/collections/${item.slug}-${item.id}`} className='header-category__item__link'>{item.title}</Link>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Categories