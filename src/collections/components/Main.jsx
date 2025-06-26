import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../../../store/slices/cart";
import PlusIcon from "../../../assets/icons/PlusIcon";
import toast from "react-hot-toast";
import {CheckIcon } from "../../../assets/icons";

function Main({ products, title }) {

  const dispatch = useDispatch()
  const handleAddCart = (product) => {
    dispatch(addCart(product))
    toast('Item Added!', {
      icon: <CheckIcon/>,
      style: {
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: 10
      }
    })
  }

  return (
    <main className='collections-main'>
      <div className="main-head">
        <h1 className='main-head__title'>
          Men's {title}
        </h1>
      </div>
      <div className="main-products">
        {
          products.list.map(item => (
            <div className="main-product" key={item.id}>
              <div className="main-product__image">
                <Link to={`/product/${item.slug}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
                <button onClick={() => handleAddCart(item)} className="main-product__cart">Quick add <span className="main-product__cart_span"><PlusIcon /></span></button>
              </div>
              <div className="main-product__content">
                <div className="main-product__text">
                  <div className="main-product__row">
                    <h3 className='main-product__title'>{item.title}</h3>
                    <p className='main-product__price'>${item.price}</p>
                  </div>
                  <p className='main-product__subtitle'>{item.color}</p>
                </div>
                <div className="main-product__buttons">
                  {
                    item.colors?.map((color, i) => (
                      <button key={i} className={`main-product__button ${color.toLowerCase()}`}></button>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </main>
  )
}

export default Main