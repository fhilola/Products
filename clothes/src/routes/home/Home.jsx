import './Home.css'
import { Container } from '../../utily/Index'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiInstance } from '../../api'
import { AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { TiShoppingCart } from "react-icons/ti";
const styleofIcon = { fontSize: "1.5em" }


const Home = () => {
    const cartproducts = useSelector(state => state.cart.cart_products)
    console.log(cartproducts);
    const dispatch = useDispatch()
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        data: [],
        loading: true,
        error: false,
        total: 0
    })
    useEffect(() => {
        async function loadData() {
            try {
                const response = await apiInstance(`products?offset=${page * 12}&limit=12`)
                const total = await apiInstance('/products')
                setData({
                    data: response.data,
                    loading: false,
                    error: false,
                    total: total.data.length
                })
            }
            catch (err) {
                setData({
                    data: [],
                    loading: false,
                    error: true,
                    total: 0
                })
            }
        }
        loadData()
    }, [page])


    const addFavourites =(info) =>{
        dispatch({ type: 'ADD_TO_LIKE', info })
    }

    const handleAddToCart = (info) => {
        dispatch({type: 'ADD_TO_CART', info})
    }

    function increasePage() {
        if (page < Math.ceil(data.total / 12 - 1)) {
            setPage(page + 1)
        }
    }
    function substractPage() {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    return (
        <Container>
            <div className="wrapper">
                {
                    data.data.map(info =>
                        <div className='card' key={info.id}>
                            <Link to={`/single-product/${info.id}`}>
                                <img src={info.images[0]} alt="" />
                            </Link>
                            <h3>{info.title}</h3>
                            <p>{info.description.slice(0, 40)}</p>
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                                <strong>${info.price}</strong>
                                <button onClick={() => addFavourites(info)}>
                                    <AiOutlineHeart style={styleofIcon} />
                                </button>
                                <button onClick={()=>handleAddToCart(info)}>
                                    <TiShoppingCart style={styleofIcon}/>
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='pagination'>
                    <button onClick={substractPage}> &larr;</button>
                    <strong>{page + 1}</strong>
                    <button onClick={increasePage}>&rarr;</button>
                </div>
                <Link to={'/likedProducts'}>Liked</Link>
            </div>
        </Container>
    )
}
export default Home