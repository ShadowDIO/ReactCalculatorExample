import React from 'react';

class CalculatorButton extends React.Component {


    OnButtonClick = e => {
        this.props.onPressed(this.props.text);
    };
    //style={{ backgroundColor: this.props.color, justifyContent: "center",display:"flex", alignItems:"center" , flex: 1, height: 200 }} onClick={this.OnButtonClick}>
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