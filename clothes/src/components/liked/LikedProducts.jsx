import { Container } from "../../utily/Index"
import { Link } from "react-router-dom"
import {AiOutlineHeart} from 'react-icons/ai'
import { useSelector } from "react-redux"

const LikedProducts = () => {
    const likedProducts = useSelector(state => state.like.liked_products)
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
                                    {
                                    likedProducts.findIndex(cartproduct => cartproduct.id === product.id) !== -1 ? 
                                    <div className='button__wrapper'>
                                        <button onClick={()=>handleIncrementProductCount(product)}>+</button>
                                        {
                                            <p>{likedProducts.find(cartproduct => cartproduct.id === product.id).count}</p>
                                        }
                                        <button onClick={()=>handleDecrementProductCount(product)}>-</button>
                                    </div>
                                    :
                                    <button onClick={()=>handleAddToCart(product)}>
                                    <TiShoppingCart style={styleofIcon}/>
                                </button>
                                }
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

export default LikedProducts