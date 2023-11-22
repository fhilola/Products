import {useSelector } from 'react-redux'
import { Container } from '../../utily/Index'
import { Link } from 'react-router-dom'

const Cart = () => {
    const likedProducts = useSelector(state => state.cart.cart_products)
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
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                                <strong>${product.price}</strong>
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