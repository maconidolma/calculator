import React, {Component} from 'react'

class HistoryEntry extends Component {
    render() {
        const {expression, onButtonClick} = this.props;
        return (
            <div className={'expression'}>
                <div className={'item'}>
                    {expression}
                </div>
                <div className={'x'} onClick = {onButtonClick}>
                    X
                </div>
            </div>
        )
    }
}

export default HistoryEntry