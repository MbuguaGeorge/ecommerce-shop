import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Button} from 'reactstrap'

function Sidebar() {
    return (
        <div>
            <div className="search-wrap">
                <h4>Quick Shop</h4>
                <div className="search">
                    <form>
                        <input 
                            type="text"
                            name="search"
                            placeholder="search..."
                        />
                        <Button color='secondary' style={{height:'100%',borderRadius:'0', justifyItems:'center'}} >
                        <FaSearch/>
                        </Button>
                    </form>
                </div>
                <div className="table">
                    <h5>Category</h5>
                    <ul>
                        <li>Shoes</li>
                        <li>Clothes</li>
                        <li>Hoodies</li>
                        <li>T-Shirts</li>
                        <li>Trousers</li>
                        <li>Electronics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
