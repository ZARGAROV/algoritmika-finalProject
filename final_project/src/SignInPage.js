import { Link } from "react-router-dom";
import './Navbar.js'
import './signIn.css';
export default function SignInPage(){
    return(
        <>
            <div className='sign-in-list'>
                <ul>
                    <li>
                        <Link style={{textDecoration: 'none'}} to='./SignInPart'><span id='sign-in-list'>Sign in</span></Link>
                    </li>
                    
                    <li>
                        <Link style={{textDecoration: 'none'}} to='./RegisterPart'><span id='sign-in-list'>Register</span></Link>
                    </li>
                </ul>
            </div>
        </>
    );
}