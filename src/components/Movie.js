import React from 'react'
import {Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Detail from './Detail'

const Movie = ({title, image, id, price, handleDetail}) => {

    return (
        <div className="wrap">
            <div className="product">
                <img className="item" src={image} alt={title} />
                <p>{title}</p>
                <p style={{color:'red'}} >{price}</p>
                <Link to="/details"><Button color='primary' style={{margin:'5px'}} onClick={() => (
                    <Detail handleDetail={handleDetail(id)} />
                )}>Buy Now</Button></Link>
            </div>
        </div>
    )
    }

export default Movie;