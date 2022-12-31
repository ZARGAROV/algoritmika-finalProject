import "./signInPart.css";
export default function RegisterPart() {
    return(  
        <div className="sign-in-part">
            <form className="inputs">
                <h1>REGISTRATION</h1>
                <div>
                    <input type="text" placeholder="Username" required/>
                </div>
                <div>
                    <input type="password" placeholder="Password" required/> 
                </div>
                <button type="button" className="register-btn">Register</button>
            </form> 

        </div>

    );
}