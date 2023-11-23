import {useDispatch, useSelector } from 'react-redux'
import { Container } from '../../utily/Index'
import { Link } from 'react-router-dom'

const Cart = () => {
    const likedProducts = useSelector(state => state.cart.cart_products)
    const dispatch = useDispatch()

    const handleIncrementProductCount = (info)=>{
        dispatch({type: 'INCREMENT_COUNT', info})
    }

    const handleDecrementProductCount = (info)=>{
        dispatch({type: 'DECREMENT_COUNT', info})
    }
  return (
   <Container>
    <div className="wrapper">
                {
                    likedProducts.map(product =>
                    <div className='card' key={product.id}>
                            <Link to={`/single-product/${product.id}`}>
                                <img src={product.images[0]} alt="" />
                            </Link>
                            <h3>{product.title}</h3>
                            <p>{product.description.slice(0, 40)}</p>
                            <p>Count: {product.count}</p>
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                                <strong>${product.price}</strong>
                                <div className="button__wrapper">
                                    <button onClick={()=>handleIncrementProductCount(product)}>+</button>
                                    <p>{likedProducts.find(cartproduct => cartproduct.id === product.id).count}</p>
                                    <button onClick={()=> handleDecrementProductCount(product)}>-</button>
                                </div>
                                <button>Remove from cart</button>
                            </div>
                        </div>
                    )
                }
            </div>
   </Container>
  )
}

export default Cart