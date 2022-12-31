import SignInPart from './SignInPart';
import RegisterPart from './RegisterPart';
import {Routes,Route} from 'react-router-dom';
import SignInPage from './SignInPage';
import './signIn.css';



export default function SignIn(){
    return(
        <div className='sign-in'>                 
            <SignInPage />
            <Routes>
                 <Route path='/SignInPart' element={<SignInPart />} />
                 <Route path='/RegisterPart' element={<RegisterPart />} />           
            </Routes>                           
         </div>
    );
}
  