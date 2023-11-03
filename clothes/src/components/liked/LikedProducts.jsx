import { useContext } from "react"
import { AppContext } from "../../routes/home/Home"
import { Container } from "../../utily/Index"
import { Link } from "react-router-dom"
import {AiOutlineHeart} from 'react-icons/ai'

const LikedProducts = () => {
    const data = useContext(AppContext)
    const likedDProducts = JSON.parse(localStorage.getItem("data"))
    return (
        <Container>
            <div className="wrapper">
                {
                    likedDProducts.map(product =>
                    <div className='card' key={product.id}>
                            <Link to={`/single-product/${product.id}`}>
                                <img src={product.images[0]} alt="" />
                            </Link>
                            <h3>{product.title}</h3>
                            <p>{product.description.slice(0, 40)}</p>
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                                <strong>${product.price}</strong>
                                <AiOutlineHeart onClick={() => addFavourites(info)} />
                            </div>
                        </div>
                    )
                }
            </div>
        </Container>
    )
}

export default LikedProducts