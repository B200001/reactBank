import React from "react";
import { db } from "../firebase";
import { ref, set } from "firebase/database";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./HeroSection.css";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';


const HeroSection = () => {

    const [name, setName] = useState('');
    const [account_no, setAccount_no] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState(0);
    const notify = () => toast("Contact Added Successfully");


    const handleAmount = (e) => {
        let co = e.target.value;
        setAmount(co);
    }

    const handleChange = (event) => {
        let k = event.target;
        if (k.id === "name") {
            setName(k.value);

        }
        else if (k.id === "email") {
            setEmail(k.value);
        }
        else if (k.id === "phone") {
            setPhone(k.value);
        }
        else if (k.id === "account_no") {
            setAccount_no(k.value);
        }

    }
    const Push = (e) => {
        e.preventDefault();
        // const postListRef = ref(db, 'users/'+account_no);
        // const newPostRef = push(postListRef);
        set(ref(db, 'users/' + account_no), {
            AccountNo: account_no,
            username: name,
            email: email,
            phone: phone,
            amount: Number(amount)
        }).then(() => {
            notify();
        }).catch((error) => {
            toast(error);
        });

        setName('');
        setAmount('');
        setPhone('');
        setEmail('');
        setAccount_no('');
    }


    return (
        <>
            <div className="Page">
                <h1 className="CreateUser_h1">Create User</h1>
                <form>
                    <div className="container">
                        <div className="container-items">
                            <label>AccountNo</label>
                            <input
                                id="account_no"
                                value={account_no}
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className="container-items">
                            <label>Name</label>
                            <input
                                id="name"
                                value={name}
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className="container-items">
                            <label>Email</label>
                            <input
                                id="email"
                                value={email}
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className="container-items">

                            <label>Phone</label>
                            <input
                                id="phone"
                                value={phone}
                                onChange={handleChange}
                                required
                            ></input>
                        </div>
                        <div className="container-items">
                            <label>Amount</label>
                            <input
                                id="amount"
                                value={amount}
                                onChange={handleAmount}
                                required
                            ></input>
                        </div>






                        <button type="submit" onClick={Push} className="Submit-button">Add</button>
                    </div>

                </form>
            </div>




        </>

    );
}
export default HeroSection;
// const postListRef = ref(db, 'users/'+account_no);
//         const newPostRef = push(postListRef);
//         set(newPostRef, {
//             AccountNo: account_no,
//             username: name,
//             email: email,
//             phone: phone,
//             amount: Number(amount)
//         }).then(() => {
//             notify();
//         }).catch((error) => {
//             toast(error);
//         });