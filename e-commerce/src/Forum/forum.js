import React, {useEffect, useState} from 'react';
import "./forum.css";
import Products from "../Products/products";


export function MyForm(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [database,setDatabase]=useState([]);
    // User Login info
    useEffect(()=>{
        fetch('http://localhost:5000/users').then((response)=>response.json()).then((data)=>{setDatabase(data)}).catch((err)=>{console.error(err.message)});
    },[]);
    const errors = {
        uname: "invalid email!",
        pass: "invalid password!"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        let { uname, pass } = document.forms[0];
        console.log(uname);
        // Find user login info
        const userData = database.find((user) => user.email=== uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                localStorage.setItem('userId', userData.id);
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
   const RenderForm =(<div className="forum">
           <h1>Welcome to my Rolex shop</h1>
           <form onSubmit={handleSubmit}>
               <h2>Login Form</h2>
               <br/>
               <label htmlFor="email">Enter your email:</label>
               <input
                   type="text"
                   value={email}
                   id="email"
                   onChange={(e) => setEmail(e.target.value)}
                   name="uname"
                   placeholder="your@gmail.com"
                   required
               />
               <div className="error">
                   {renderErrorMessage("uname")}</div>
               <label htmlFor="password">Enter your password: </label>
               <input
                   type="password"
                   id="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   name="pass"
                   placeholder="************"
                   minLength='10'
                   required
               />
               <div className="error">
                   {renderErrorMessage("pass")}
               </div>
               <button type="submit" title="submit">Log in</button>
           </form>
           <hr
               style={{
                   background: 'black',
                   borderColor: 'black',
                   color: 'black',
                   height: '1px',
                   width: '98%'
               }}
           />
           <p>Are you a new customer?</p>
           <button onClick={() => props.onFormSwitch('register')}>Register here!</button>
       </div>);
    return (
        <div>
            {(isSubmitted===true)? <Products/> : RenderForm}
        </div>
    );
}