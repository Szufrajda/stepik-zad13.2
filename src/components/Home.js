import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Simple Calculator</h2>
            <ul>
                <li>
                    <Link to="/add?x=2&y=3">Add</Link>
                </li>
                <li>
                    <Link to="/sub?x=5&y=2">Subtract</Link>
                </li>
                <li>
                    <Link to="/mul?x=4&y=3">Multiply</Link>
                </li>
                <li>
                    <Link to="/div?x=8&y=2">Divide</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
