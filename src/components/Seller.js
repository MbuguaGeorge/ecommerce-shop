import React from 'react'

function seller() {
    const axios = require('axios');

    axios.get('http://127.0.0.1:8000/api/users/').then(resp => {

    console.log(resp.data);
});
    return (
        <div>

        </div>
    )
}

export default seller
