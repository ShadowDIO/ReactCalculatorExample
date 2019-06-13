import React from 'react';

class CalculatorButton extends React.Component {

    OnButtonClick = e => {
        this.props.onPressed(this.props.text);
    };
    
    render() {
        return (
            <div className={this.props.className} onClick={this.OnButtonClick}> 
                {this.props.text}
            </div>
        );
    }

    static defaultProps = {
        color: "lightGray", text: "#"
    }
}

export default CalculatorButton;