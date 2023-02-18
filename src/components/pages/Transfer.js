import React from "react";
import { db } from "../../firebase";
import { ref, onValue, update, set, push } from "firebase/database";
import { useState, useEffect } from "react";
import "./Transfer.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Transfer = () => {

    let fromName;
    let toName;

    const [posts, setPosts] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [x, setX] = useState(0);

    let f_amount;
    let t_amount = 0;
    const notify = () => toast("Transfer Successful");


    useEffect(() => {
        const dbRef = ref(db, 'users');
        onValue(dbRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                // console.log(keyName);
                // console.log(data);
                // console.log(data.amount);
                records.push({ "key": keyName, "data": data });
            });
            setPosts(records);
        });
    }, []);
    // console.log(posts);

    const handleChange = (event) => {
        let k = event.target;
        if (k.id === 'from') {
            setFrom(k.value);
        }
        else if (k.id === 'to') {
            setTo(k.value);
        }
        else if (k.id === 'x') {
            setX(k.value);
        }


    }
    // console.log(f_amount);
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(posts);
        posts.map((item) => {
            if (item.key === from) {
                f_amount = item.data.amount;
                fromName = (item.data.username);


                console.log();
                // console.log(item.data.amount);
            }

            else if (item.key === to) {
                t_amount = item.data.amount;
                toName = (item.data.username);

                // console.log(item.data.amount);

            }
        });
        console.log(fromName);

        update(ref(db, 'users/' + from),
            {
                amount: f_amount - x
            })
        update(ref(db, 'users/' + to),
            {
                amount: t_amount + Number(x)
            })
        const postListRef = ref(db, 'lists/');
        const newPostRef = push(postListRef);
        set(newPostRef, {

            from: fromName,
            to: toName,
            amount: Number(x)
        }).then(() => {
            notify();
        }).catch((error) => {
            toast(error);
        });
        setFrom("");
        setTo("");
        setX("")


    }





    return <>
        <div className="transfer_page">
            <h1 className="transfer_h1">Transfer Money</h1>
            <form>
                <div className="transfer_container">
                    <div className="transfer_container_items"><label>From</label>
                        <input
                            id="from"
                            onChange={handleChange}
                            value={from}
                            required
                        >

                        </input></div>
                    <div className="transfer_container_items"><label>To</label>
                        <input
                            id="to"
                            onChange={handleChange}
                            value={to}
                            required
                        >

                        </input></div>
                    <div className="transfer_container_items"><label>Amount</label>
                        <input
                            id="x"
                            onChange={handleChange}
                            value={x}
                            required
                        >

                        </input></div>



                    <button type="submit" className="Submit-button" onClick={handleSubmit}>Transfer</button>
                </div>

            </form>
        </div>
    </>
}



export default Transfer;
