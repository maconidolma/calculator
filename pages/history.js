import React from 'react'
import HistoryList from "../components/HistoryList"
import Link from 'next/link'
import 'isomorphic-fetch'

export default class extends React.Component {

    static async getInitialProps () {
        try {

            const res = await fetch('http://localhost:3000/expressions', {
                method: 'GET',
            });

            const json = await res.json();
            return {arr: json}
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className={'history'}>
                <div>
                    <HistoryList historyList = {this.props.arr}/>
                </div>
                <div>
                    <Link href="/index">
                        <a className={'link'}>Calculator</a>
                    </Link>
                </div>
            </div>
        )
    }
}
