import React, {Component} from 'react'
import HistoryEntry from './HistoryEntry'

export default class HistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyList: this.props.historyList,
            hasError: false
        }
    }

    render() {
        const huiMorja = this.state.historyList.map((obj) =>
            <li key={obj.id}>
                <HistoryEntry
                    expression={obj.expression}
                    onButtonClick={this.handleClick.bind(this, obj.id)}
                />
            </li>
        );

        return (
            <div className={'history1'}>
                <div>
                    {this.state.hasError ? 'sorry, try again' : ''}
                </div>
                <ul className={'ul'}>
                    {huiMorja}
                </ul>
                <div  className={'deleteAll'} onClick={this.deleteAllHistory}>
                    DELETE ALL HISTORY
                </div>
            </div>
        )
    }  // render()

    // Delete single expression from history
    handleClick = (exp) => {
        let newState = {};

        if (this.state.hasError) {
            newState = {
                ...newState,
                hasError: false
            }
        }

        let url = 'http://localhost:3000/expressions';
        let data = {indexToDelete: exp};

        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(JSON.stringify(res.json()));
            if (res.ok) {
                newState = {
                    ... newState,
                    historyList: this.state.historyList.filter(element => element.id != exp)
                }
            } else {
                newState = {
                    ...newState,
                    hasError: true
                }
            }

            this.setState({
                ...newState
            });

            return res;
        }).then(res => console.log("DELETE", res))
          .catch(err => console.log('Error, with message:', err.statusText));
    };  // handleClick()

    // Delete all history
    deleteAllHistory = () => {
        let newState = {};

        if (this.state.hasError) {
            newState = {
                ...newState,
                hasError: false
            }
        }

        let url = 'http://localhost:3000/expressions';
        let data = {indexToDelete: -1};

        fetch(url, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => {
            if (res.ok) {
                newState = {
                    ... newState,
                    historyList: []
                }
            } else {
                newState = {
                    ...newState,
                    hasError: true
                }
            }

            this.setState({
                ...newState
            });
        }).then(res => console.log("DELETE ALL", res))
          .catch(err => console.log('Error, with message:', err.statusText));
    }

}
