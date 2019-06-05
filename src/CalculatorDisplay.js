import React from 'react';

class CalculatorDisplay extends React.Component {

    state = { displayText: 'Hello' };

    static defaultProps = { displayText: "Hello" };

    constructor(props) {
        super(props);

        this.state.displayText = props.displayText;

        setTimeout(() => { this.setState({displayText: "_"}); }, 5000);
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.state.displayText}
            </div>
        );
    }
}

export default CalculatorDisplay;