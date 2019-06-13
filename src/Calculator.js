import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButtonContainer from './CalculatorButtonContainer';

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = { displayText: 'Hello', operand1: '', operand2: '', operator: '', displayHistory: [] };

        this.state.displayText = props.displayText;

        setTimeout(() => { this.setState({ displayText: "_" }); }, 2000);
    }

    OnButtonPressed = (value) => {

        if (value.toLowerCase() === 'clear') {
            console.log('Cleared values and operands.')
            this.setState({ operand1: '', operand2: '', operator: '', displayText: '' });

            return;
        }

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            console.log('Operand set', value);
            this.setState({ operator: value, displayText: this.state.operand1 + value });

            return;
        }

        if (value === '=') {
            console.log('Equal operator pressed.');

            var result = 0;

            if (this.state.operator === '+') {
                result = Number(this.state.operand1) + Number(this.state.operand2);
            }

            if (this.state.operator === '-') {
                result = Number(this.state.operand1) - Number(this.state.operand2);
            }

            if (this.state.operator === '*') {
                result = Number(this.state.operand1) * Number(this.state.operand2);
            }

            if (this.state.operator === '/') {
                result = Number(this.state.operand1) / Number(this.state.operand2);
            }

            console.log('Result', result);

            var dispHistory = [... this.state.displayHistory];

            dispHistory.push(Number(this.state.operand1) + this.state.operator + Number(this.state.operand2) + '=' + Number(result));

            if (dispHistory.length == 5)
                dispHistory.shift();

            console.log(dispHistory);

            this.setState({ displayText: result, operand1: '', operand2: '', operator: '', displayHistory: dispHistory });

            return;
        }

        if (!this.state.operator) {
            console.log('Number pressed.', value);

            if (this.state.displayText && !this.state.operand1)
                this.setState({ displayText: value });
            else
                this.setState({ displayText: this.state.displayText + value });

            this.setState({ operand1: this.state.operand1 + value });

            return;
        }
        else {
            console.log('Number pressed.', value);
            this.setState({ operand2: this.state.operand2 + value, displayText: this.state.displayText + value });

            return;
        }
    }

    render() {
        return (
            <div className="ui grid">
                <div className="eight wide column">
                    <div className="ui segment calculatorSectionContainer">
                        <CalculatorDisplay className="resultDisplay" displayText={this.state.displayText} />
                    </div>
                    <div className="ui segment calculatorSectionContainer">
                        <CalculatorButtonContainer OnButtonPressed={this.OnButtonPressed} />
                    </div>
                </div>
                <div className="eight wide column">
                    <div className="ui segment calculatorSectionContainer">
                        <CalculatorDisplay className="resultDisplay" displayText={this.state.displayHistory[3]} />
                        <CalculatorDisplay className="resultDisplay" displayText={this.state.displayHistory[2]} />
                        <CalculatorDisplay className="resultDisplay" displayText={this.state.displayHistory[1]} />
                        <CalculatorDisplay className="resultDisplay" displayText={this.state.displayHistory[0]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;