import { useDispatch, useSelector } from "react-redux"
import { CloseIcon, DeleteIcon } from "../../assets/icons"
import { decrement, increment, removeCart } from "../../store/slices/cart"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"

function Modal({ modalOpen, setModalOpen }) {
  const { items } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const subtotal = items.reduce((a, b) => a + (b.price * b.qty), 0)

  const handleDelete = (id) => {
    dispatch(removeCart(id))
    toast('Item Deleted!', {
      icon: <DeleteIcon />,
      style: {
        color: 'red',
        backgroundColor: '#fff',
        borderRadius: 10
      }
    })
  }

  const handleIncrement = (id) => {
    dispatch(increment(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrement(id))
  }

  return (
    <div className={`modal ${modalOpen && 'active'}`}>
      <div onClick={() => setModalOpen(false)} className="modal-bg"></div>
      <div className={`modal-content ${modalOpen && 'active'}`}>
        <button onClick={() => setModalOpen(false)} className="modal-close"><CloseIcon /></button>

        {
          items.length === 0 ? <>
            <div className="modal-head">
              <h1 className="modal-title">Your cart is empty. <br /> Not sure where to start?</h1>
            </div>
            <div className="modal-body">
              <Link onClick={() => setModalOpen(false)} to={'/collections/mens-best-sellers-2'} className="modal-btn">Shop Best-Sellers</Link>
            </div>


          </> :
            <> <div className="modal-head">
              <h2 className="modal-head__title"> Your Cart</h2>
            </div>
              <div className="modal-body">
                {
                  items.map((item, i) => (
                    <div key={i} className="modal-product">
                      <div className="modal-product__image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="modal-product__content">
                        <div className="modal-product__row">
                          <div className="modal-product__text">
                            <h5 className="modal-product__title">{item.title}</h5>
                            <p className="modal-product__subtitle">{`${item.size} | ${item.color}`}</p>
                          </div>
                          <button onClick={() => handleDelete(item.id)} className="modal-product__button">
                            <DeleteIcon />
                          </button>
                        </div>
                        <div className="modal-product__row">
                          <p className="modal-product__price">${item.price}</p>
                          <div className="counter">
                            <button onClick={() => handleDecrement(item.id)} className="counter-button">-</button>
                            <span className="counter-text">{item.qty}</span>
                            <button onClick={() => handleIncrement(item.id)} className="counter-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }

              </div>
              <div className="modal-footer">
                <div className="modal-footer__row">
                  <p className="modal-footer__price">Subtotal<span className="modal-footer__price__span"> {` (${items.length}  Item${items.length > 1 ? 's' : ''})`}</span></p>
                  <p className="modal-footer__price">${subtotal}</p>
                </div>
                <button className="modal-footer__button">ceackout</button>
                <p className="modal-footer__text">Psst, get it now before it sells out.</p>
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default Modal