import './Home.css'
import { Container } from '../../utily/Index'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiInstance } from '../../api'

const Home = () => {
    const [limit, setLimit] = useState(12)
    const [page, setPage] = useState(0)
    const [data, setData] = useState({
        data: [],
        loading: true,
        error: false,
        total: 0
    })
    useEffect(()=>{
        async function loadData(){
            try{
                const response = await apiInstance(`products?offset=${page * 12}&limit=12`)
                const total = await apiInstance('/products')
                setData({
                    data: response.data,
                    loading: false,
                    error: false,
                    total: total.data.length
                })
            }
            catch(err){
                setData({
                    data: [],
                    loading: false,
                    error: true,
                    total: 0
                })
            }
        }
        loadData()
    },[page])
    console.log();

    function increasePage(){
        if(page < Math.ceil(data.total / 12 - 1)){
            setPage(page + 1)
        }
    }
    function substractPage(){
        if(page > 0){
            setPage(page - 1)
        }
    }
    // console.log(data.data);
  return(
    <Container>
        <div className="wrapper">
            {
                data.data.map(info =>
                <Link to={`/single-product/${info.id}`} className='card' key={info.id}>
                    <img src={info.images[0]} alt="" />
                    <h3>{info.title}</h3>
                    <p>{info.description.slice(0, 40)}</p>
                    <strong>${info.price}</strong>
                </Link>
                )
            }
        </div>
        <div className='pagination'>
            <button onClick={substractPage}> &larr;</button>
            <strong>{page + 1}</strong>
            <button onClick={increasePage}>&rarr;</button>
        </div>
    </Container>
  )
}
export default Home