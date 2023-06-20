import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

function Users() {
    // return;
    const [data, setData] = useState([]);
    const [mode, setMode] = useState('online');
    useEffect(() => {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url).then(response => {
            response.json().then(result => {
                console.log("result", result);
                setData(result);
                localStorage.setItem("users", JSON.stringify(result));
                setMode('online');

            }).catch(err => {
                console.log('Api error Parse json', err);
            })
        }).catch(err => {
            console.log('Api error failed', err);
            let collection = localStorage.getItem("users");
            console.log('collection', collection);
            setData(JSON.parse(collection));
            setMode('offline');
        })
    }, [])
    return (
        <div>

            {mode === 'offline' ?
                <Alert key='info' variant='info'>
                    You are in offline mode
                </Alert>

                : null}
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
                            return (
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