import React from "react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { useEffect } from "react";

import { useState } from "react";
import "./Transaction_history.css"
const TransactionHistory = () => {
    const [posts, setPosts] = useState([]);

    // const [ans, setAns] = useState([]);

    useEffect(() => {
        const dbRef = ref(db, 'lists');
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






    return <>
        <div className="history_page">
            <h1 className="history_h1">Transaction History</h1>
            <div className="history_container">
                <table className="history_table">
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((data) => (
                            <tr>
                                <td data-column="FROM">{data.data.from}</td>
                                <td data-column="TO">{data.data.to}</td>
                                <td data-column="Amount">{data.data.amount}</td>


                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>


        </div>
    </>
}

export default TransactionHistory;