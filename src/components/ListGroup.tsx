import React from 'react';

function ListGroup() {
    const handleClick = () => {
        fetch('http://localhost:8000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ /* Add your request body here */ })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the response data
                // Handle the response data
            })
            .catch(error => {
                // Handle any errors
            });
    };

    return (
        <div>
            <h1>This is the heading.</h1>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
            <button onClick={handleClick}>Make GET Request</button>
        </div>
    );
}

export default ListGroup;