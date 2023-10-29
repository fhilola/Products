import './SingleProduct.css'
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../api'
import { Container } from '../../utily/Index'

const SingleProduct = () => {
    const {id} = useParams()
    const [singleData, setSingleData] = useState("")
    useEffect(()=>{
        apiInstance(`products/${id}`)
        .then(response => setSingleData(response.data))
    },[])
    console.log(singleData);
  return (
    <Container>
        <div className="single-product__wrapper">
            <div className='image'>
                <img src={singleData.images} alt="" />
            </div>
            <div>
                <h1>{singleData.title}</h1>
                <p>{singleData.description}</p>
                <p>${singleData.price}</p>
                <div className='link'>
                    <Link to={'/private'}>Back</Link>
                </div>
            </div>
        </div>
    </Container>
  )
}
export default SingleProduct