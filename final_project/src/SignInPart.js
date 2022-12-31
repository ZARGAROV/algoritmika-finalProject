import './signInPart.css'

export default function SignInPart(){
    return(
        <div className="sign-in-part">
            <h1>SIGN IN</h1>
            <form className='inputs'>
                <div >
                    <input id="#input" type="text" placeholder='Username' required />
                </div>           
                <div >
                    <input id="#input" type="password" placeholder='Password' required /> 
                </div>
                <button type="button" className='sign-in-btn'>Sign in</button>
            </form>

        </div>
         
    );

}