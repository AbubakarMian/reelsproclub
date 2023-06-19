import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function Users() {
    // return;
    const [data, setData] = useState([]);
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then(response => {
            response.json().then(result => {
                console.log("result", result);
                setData(result);
                localStorage.setItem("users",JSON.stringify(result));
            }).catch(err => {
                console.log('Api error Parse json', err);
            })
        }).catch(err => {
            console.log('Api error failed', err);
            let collection = localStorage.getItem("users");
            console.log('collection',collection);
            setData(JSON.parse(collection));
        })
    }, [])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.name}</td>
                                <td>{item.company.name}</td>
                            </tr>)
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
}

export default Users;