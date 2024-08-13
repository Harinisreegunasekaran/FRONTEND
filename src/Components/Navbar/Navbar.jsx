// import React, { useState } from 'react' 
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { Link } from 'react-router-dom'
// // import LoginSignup from '../../Pages/LoginSignup'

// const Navbar = () => {

//      const[menu,setMenu]=useState("Shop");

// return (
//      <div className='navbar'>
//           <div className="nav-logo">
//                <img src={logo} alt=""/>
//                <p>HAJA</p>
//           </div>
//           <ul className="nav-menu">
//                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//                <li  onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//                <li  onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//           </ul>
//           <div className="nav-login-cart">
//                <Link to='/login'></Link><button>LOGIN</button>
//                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
//                <div className="nav-cart-count">0</div>

//           </div>
//      </div>
// )

// }

// export default Navbar

import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");
    const{getTotalCartItems}=useContext(ShopContext);
    const navigate = useNavigate(); 

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="logo"/>
                <p>HAJA</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : null}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<button onClick={() => navigate('/login')}>LOGIN</button>}
                <Link to='/cart'><img src={cart_icon} alt="cart icon"/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
