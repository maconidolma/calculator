import React, {Component} from 'react'

class Button extends Component {
    
    render() {

        return (
            <div className={this.props.clName} onClick={this.props.buttonHandler}>
                {this.props.buttonValue}
            </div>
        )

    }

}

export default Button