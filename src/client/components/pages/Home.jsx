import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => (
    <div>
        <Link to='/login'>Login</Link><br/>
        <Link to='/admin/'>Admin</Link><br/>
        <Link to='/case1'>Case 1</Link><br/>
        i home
    </div>
)

export default Home