import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtonContainer from './CalculatorButtonContainer';

const Calculator = () => {
    return (
        <div>
            <div>
                <CalculatorDisplay className="resultDisplay" displayText="Test"/>
            </div>
            <div>
                <CalculatorButtonContainer />
            </div>
        </div>
    );
}

export default Calculator;