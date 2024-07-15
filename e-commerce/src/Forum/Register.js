import React, {useEffect, useState} from "react";
import "./register.css";
import {MyForm} from "./forum";


export function MyRegister(props) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country,setCountry]=useState(" ");
    const [city,setCity]=useState(" ");
    const [address,setAddress]=useState(" ");
    const [zipcode,setZipcode]=useState('');
    const [telephone,setTelephone]=useState('');
    const [isSubmit, setIsSubmit] = useState(false);
    const [rowCount, setRowCount] = useState(0);

    useEffect(() => {
        const fetchRowCount= async ()=>{
            try {
                const response = await fetch('http://localhost:5000/users/count');
                const data = await response.json();
                setRowCount(parseInt(data.rowCount,10));
            }catch (err){
                console.error('Error fetching row count:', err);
            }

        };
        fetchRowCount();
        console.log(rowCount);
    }, [rowCount]);
    const HandleSubmit = async (event) => {
        event.preventDefault();

        try{

             const UserData= {
                 id:rowCount+1,
                 name,
                 lastname,
                 email,
                 password,
                 country,
                 city,
                 address,
                 zipcode,
                 telephone
             }
            const response= await fetch('http://localhost:5000/users',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(UserData),
            });
             console.log(response);
             if(response.ok){
                 setIsSubmit(true);
                 const data = await response.json();
                 alert("Successfully Register")
                 localStorage.setItem('userId', data.userId);
             }
             else {
                 setIsSubmit(false);
             }
        }
        catch (err){
              console.log(err.message);
        }
    };
    const RegisterForm=( <div className="register">
            <h1>Welcome to my Rolex shop</h1>
            <form onSubmit={HandleSubmit} method='post'>
                <h2>Register Form</h2>
                <label htmlFor="name">Enter your name:</label>
                <input id="name" type="text" value={name} placeholder='your name' onChange={(e)=>setName(e.target.value)} required/>
                <br/>
                <br/>
                <label htmlFor="lastname">Enter your lastname:</label>
                <input id="lastname" type="text" value={lastname} placeholder='your lastname' onChange={(e) => setLastname(e.target.value)} required/>
                <br/>
                <br/>
                <label htmlFor="email">Enter your email:</label>
                <input
                    type="text"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@gmail.com"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="password">Enter your password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*************"
                    minLength='10'
                    required
                />
                <br/>
                <br/>
                <label htmlFor="country">Enter your country: </label>
                <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder='country'
                    required
                />
                <br/>
                <br/>
                <label htmlFor="city">Enter your city: </label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="city"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="address">Enter your address: </label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="address"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="zipcode">Enter your country zipcode: </label>
                <input
                    type="text"
                    id="zipcode"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    placeholder="zipcode"
                    required
                />
                <br/>
                <br/>
                <label htmlFor="telephone">Enter your telephone number: </label>
                <input
                    type="text"
                    id="telephone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="number"
                    required
                />
                <br/>
                <br/>
                <button type="submit"  title="submit" onClick={HandleSubmit}>Submit</button>
            </form>
            <hr
                style={{
                    background: 'black',
                    borderColor:'black',
                    color: 'black',
                    height: '1px',
                    width:'98%',
                    marginTop:'15px',
                }}
            />
            <p>Already have account!</p>
            <button onClick={()=>props.onFormSwitch('login')}>Sign in </button>
        </div>);
    return (
        <div>
            {(isSubmit===true)?  <MyForm/> : RegisterForm}
        </div>

    );
}