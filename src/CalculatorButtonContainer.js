import React from 'react';
import CalculatorButton from './CalculatorButton';

class CalculatorButtonContainer extends React.Component {
    onButtonPressed(value) {
        console.log(value);


    }

    render() {
        return (
            <div className={this.props.className}>
                <div>
                    <CalculatorButton text="CLEAR" className="button longButton buttonOrange" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="/" className="button buttonBlue" onPressed={this.props.OnButtonPressed} />
                </div>
                <div>
                    <CalculatorButton text="7" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="8" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="9" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="*" className="button buttonBlue" onPressed={this.props.OnButtonPressed} />
                </div>
                <div>
                    <CalculatorButton text="4" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="5" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="6" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="-" className="button buttonBlue" onPressed={this.props.OnButtonPressed} />
                </div>
                <div>
                    <CalculatorButton text="1" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="2" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="3" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="+" className="button buttonBlue" onPressed={this.props.OnButtonPressed} />
                </div>
                <div>
                    <CalculatorButton text="0" className="button buttonGray" onPressed={this.props.OnButtonPressed} />
                    <CalculatorButton text="=" className="button longButton buttonGray" onPressed={this.props.OnButtonPressed} />
                </div>
            </div>
        );
    }
}

export default CalculatorButtonContainer;