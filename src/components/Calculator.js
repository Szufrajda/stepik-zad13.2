import React from 'react';
import { useParams } from 'react-router-dom';

const Calculator = () => {
    const { operation } = useParams();
    const params = new URLSearchParams(window.location.search);
    const x = parseFloat(params.get('x'));
    const y = parseFloat(params.get('y'));

    const calculateResult = () => {
        if (isNaN(x) || isNaN(y)) {
            return 'Invalid arguments';
        }

        switch (operation) {
            case 'add':
                return x + y;
            case 'sub':
                return x - y;
            case 'mul':
                return x * y;
            case 'div':
                return y !== 0 ? x / y : 'Cannot divide by zero';
            default:
                return 'Invalid operation';
        }
    };

    return (
        <div>
            <h2>Result: {calculateResult()}</h2>
        </div>
    );
};

export default Calculator;
