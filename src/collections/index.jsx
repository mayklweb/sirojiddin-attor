import React, { useEffect, useState } from 'react'
import Main from './components/Main'
import Aside from './components/Aside'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections, getProducts } from '../../store/actions/productsActions';
import { FilterModal } from '../../components';

function Collections() {
  const [filterOpen, setFilterOpen] = useState(false)
  const { products, collections } = useSelector(state => state.products)
  const params = useParams()
  const menId = +params.id.split('-').at(-1)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts(menId))
    dispatch(getCollections())
  }, [])
  useEffect(() => {
    dispatch(getProducts(menId))
  }, [menId])
  const title = collections.list.find(item => item.id === menId)?.title

  return (
    <>
      <div className='collections'>
        <div className="container">
          <div className="collections-wrapper">
            <Aside setFilterOpen={setFilterOpen} collections={collections} products={products} />
            <Main collections={collections} products={products} title={title} />
          </div>
        </div>
      </div>
    <FilterModal collections={collections} setFilterOpen={setFilterOpen} filterOpen={filterOpen}/>
    </>
  )
}

export default Collections