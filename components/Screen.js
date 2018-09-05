import React, {Component} from 'react'

class Screen extends Component {
    render() {
        const {currentScreenValue} = this.props;
        return (
            <div className={'screen'} >
                {currentScreenValue}
            </div>
        )
    }
}

export default Screen