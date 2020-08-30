import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie';
import Sidebar from './Sidebar';

const api = axios.create({
    baseURL: `http://127.0.0.1:8000/api/products/`
})

class Home extends Component {
    state = {
        products: [],
        details: [
            {
                id: 1,
                product_name: 'shoes',
                product_price: 3500,
                thumbnail: ''
            }
        ]
    }

    constructor() {
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({ products: res.data })
            console.log({products:res.data})
        })
    }

    render() {
        return(
            <div>
                <Sidebar />
                {this.state.products.map(product => (
                    <Movie 
                        key={product.id}
                        title={product.product_name}
                        image={product.thumbnail}
                        price={product.product_price}
                        id={product.id}
                    />
                ))}
            </div>
        )
    }
}

export default Home
