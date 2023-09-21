import { NavLink } from 'react-router-dom';
import './Navbar.css'


function NavBar() {

   return (
     <nav>
       <h1 className='Cursive'>Write to Us</h1>
       <NavLink to={"/"}>Home</NavLink>
       <NavLink to={"/tienda"}>Store</NavLink>
       <NavLink to={"/Cart"}>Cart</NavLink>
     </nav>
   );
 }

 export default NavBar;