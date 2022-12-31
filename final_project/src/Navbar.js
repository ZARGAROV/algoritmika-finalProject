import { Link } from 'react-router-dom';
import './Navbar.css';
import  logo from './images/logo3.png';



export default function Navbar () {
    return(
        <div className='bigdiv'>
            <nav>

                <Link to='/' >
                    <img className="logo" src={logo} alt='logo'></img>
                </Link>
                
               <span className='top-right-nav'>
                <ul>
                    <li>
                        <Link style={{textDecoration: 'none'}} to='./'><span id='list'>
                            Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none'}} to='./SignIn'><span id='list'>
                            Sign in</span>
                        </Link>
                    </li>
                   
                        
                    <li>
                        <Link style={{textDecoration: 'none'}} to='./Cart'><span id='list'>Cart</span></Link>
                    </li>
                </ul>
                </span>
             

            </nav>
       </div>

    );
}