import React, { useState } from "react";
// import {db} from "../firebase";




const Form = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState(0);

    const handleAmount = (e)=>{
        let co = e.target.value;
        setAmount(co);
    }

    const handleChange = (event)=>{
        let k = event.target;
        if(k.name === "name"){
            setName(k.value);

        }
        else if(k.name === "email"){
            setEmail(k.value);
        }
        else if(k.name === "phone"){
            setPhone(k.value);
        }
    }




    return<>
        <div>
            

        </div>




    </>
}
export default Form;