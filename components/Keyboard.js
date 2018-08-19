import React, {Component} from 'react'
import Button from './Button'
//import 'bootstrap/dist/css/bootstrap.min.css'


class Keyboard extends Component {
    render() {
        const {buttonHandler} = this.props
        return (
            <div className={'keyBoard'}>
                <Button className='box boxAC' buttonValue = {'AC'} buttonHandler = {buttonHandler.bind(null, 'AC')}/>
                <Button className='box' buttonValue = {'/'} buttonHandler = {buttonHandler.bind(null, '/')}/>
                <Button className='box' buttonValue = {'7'} buttonHandler = {buttonHandler.bind(null, '7')}/>
                <Button className='box' buttonValue = {'8'} buttonHandler = {buttonHandler.bind(null, '8')}/>
                <Button className='box' buttonValue = {'9'} buttonHandler = {buttonHandler.bind(null, '9')}/>
                <Button className='box' buttonValue = {'*'} buttonHandler = {buttonHandler.bind(null, '*')}/>
                <Button className='box' buttonValue = {'4'} buttonHandler = {buttonHandler.bind(null, '4')}/>
                <Button className='box' buttonValue = {'5'} buttonHandler = {buttonHandler.bind(null, '5')}/>
                <Button className='box' buttonValue = {'6'} buttonHandler = {buttonHandler.bind(null, '6')}/>
                <Button className='box' buttonValue = {'-'} buttonHandler = {buttonHandler.bind(null, '-')}/>
                <Button className='box' buttonValue = {'1'} buttonHandler = {buttonHandler.bind(null, '1')}/>
                <Button className='box' buttonValue = {'2'} buttonHandler = {buttonHandler.bind(null, '2')}/>
                <Button className='box' buttonValue = {'3'} buttonHandler = {buttonHandler.bind(null, '3')}/>
                <Button className='box' buttonValue = {'+'} buttonHandler = {buttonHandler.bind(null, '+')}/>
                <Button className='box box0' buttonValue = {'0'} buttonHandler = {buttonHandler.bind(null, '0')}/>
                <Button className='box' buttonValue = {'='} buttonHandler = {buttonHandler.bind(null, '=')}/>

            </div>
        )
    }
}

export default Keyboard
