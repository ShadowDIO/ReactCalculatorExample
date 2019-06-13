import React from 'react';

class CalculatorDisplay extends React.Component {

    static defaultProps = { displayText: "_" };

    render() {
        return (
            <div className={this.props.className}>
                {this.props.displayText}
            </div>
        );
    }
}

export default CalculatorDisplay;