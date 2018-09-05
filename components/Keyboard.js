import React, {Component} from 'react'
import Button from './Button'
//import 'bootstrap/dist/css/bootstrap.min.css'


class Keyboard extends Component {
    render() {
        const {buttonHandler} = this.props;
        return (
            <div className={'keyBoard'}>
                <Button clName='box boxAC' buttonValue = {'AC'} buttonHandler = {buttonHandler.bind(null, 'AC')}/>
                <Button clName='box' buttonValue = {'/'} buttonHandler = {buttonHandler.bind(null, '/')}/>
                <Button clName='box' buttonValue = {'7'} buttonHandler = {buttonHandler.bind(null, '7')}/>
                <Button clName='box' buttonValue = {'8'} buttonHandler = {buttonHandler.bind(null, '8')}/>
                <Button clName='box' buttonValue = {'9'} buttonHandler = {buttonHandler.bind(null, '9')}/>
                <Button clName='box boxMul' buttonValue = {'*'} buttonHandler = {buttonHandler.bind(null, '*')}/>
                <Button clName='box' buttonValue = {'4'} buttonHandler = {buttonHandler.bind(null, '4')}/>
                <Button clName='box box5' buttonValue = {'5'} buttonHandler = {buttonHandler.bind(null, '5')}/>
                <Button clName='box' buttonValue = {'6'} buttonHandler = {buttonHandler.bind(null, '6')}/>
                <Button clName='box boxMn' buttonValue = {'-'} buttonHandler = {buttonHandler.bind(null, '-')}/>
                <Button clName='box' buttonValue = {'1'} buttonHandler = {buttonHandler.bind(null, '1')}/>
                <Button clName='box' buttonValue = {'2'} buttonHandler = {buttonHandler.bind(null, '2')}/>
                <Button clName='box' buttonValue = {'3'} buttonHandler = {buttonHandler.bind(null, '3')}/>
                <Button clName='box boxPl' buttonValue = {'+'} buttonHandler = {buttonHandler.bind(null, '+')}/>
                <Button clName='box box0' buttonValue = {'0'} buttonHandler = {buttonHandler.bind(null, '0')}/>
                <Button clName='box boxEq' buttonValue = {'='} buttonHandler = {buttonHandler.bind(null, '=')}/>
            </div>
        )
    }
}

export default Keyboard
