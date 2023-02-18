import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import "./users.css";

const Users = () => {
    const [posts, setPosts] = useState([]);


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














    return <>
        <div className="user_page">
            <h1 className="user_h1">Users</h1>
            <div className="user_container">
                <table className="user_table">
                    <thead>
                        <tr>
                            <th>Account No</th>
                            <th className="user_th">Name</th>
                            <th>Email</th>
                            <th>Phone no</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((data) => (
                            <tr>
                                <td data-column="ACCOUNT_NO">{data.data.AccountNo}</td>
                                <td data-column="NAME">{data.data.username}</td>
                                <td data-column="Email">{data.data.email}</td>
                                <td data-column="Phone No">{data.data.phone}</td>
                                <td data-column="BALANCE">{data.data.amount}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>
}
export default Users;