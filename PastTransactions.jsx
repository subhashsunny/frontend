import React, { useState, useEffect } from "react";
import axios from "axios";
function PastTransactions(){
    const [datas, setData]=useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:8080/api/transactions/details').then((response) => {
            setData(response.data)
            console.log(response.data);
        });
    };
    return(
        <div>
            <h1>Transactions</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th> Account_id</th>
                        <th> Bill Number</th>
                        <th> Type Of Transaction</th>
                        <th> Amount</th>
                        <th> Username</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map(
                            data =>
                                <tr key={data.bill_num}>
                                    <td>{data.account.accountid}</td>
                                    <td>{data.bill_num}</td>
                                    <td>{data.typeofTrans}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.username}</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PastTransactions;