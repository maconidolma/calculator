import React, {Component} from 'react'
import Screen from './Screen'
import Keyboard from './Keyboard'

import fetch from 'isomorphic-fetch'



class Calculator extends Component {
    constructor(props) {
        super(props);

        this.buttonHandler = this.buttonHandler.bind(this);

        this.state = {
            currentScreenValue: 0,
            firstOperand: '',
            secondOperand: '',
            operation: null,
            isFirstOperand: true,
            shouldClrScreen: true,
            prevEqually: false
        }
    }

    render() {
        return (
            <div className={'calculator'}>
                <div>
                    <Screen currentScreenValue = {this.state.currentScreenValue}/>
                </div>
                <div>
                    <Keyboard buttonHandler = {this.buttonHandler}/>
                </div>
            </div>
        )
    }

    sendToServer(str) {
        console.log(str);

        let url = 'http://localhost:3000/expressions';
        let data = {operation: str};

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => console.log('Success: ', response))
            .catch(function(error) {
                 //console.log(error);
            })
    }

    calculateAndSendToServer(fOp, sOp, op ) {
        console.log('hello');
        let calculatedValue = null;
        switch (op) {
            case '+' :
                calculatedValue = fOp + sOp;
                break;
            case '-' :
                calculatedValue = fOp - sOp;
                break;
            case '*' :
                calculatedValue = fOp * sOp;
                break;
            case '/' :
                calculatedValue = fOp / sOp;
                break;
        }

        this.sendToServer(fOp.toString() + ' ' + op + ' ' + sOp.toString() +  ' = ' + calculatedValue.toString());
        return calculatedValue;
    }  // calculateAndSendToServer()

    buttonHandler(buttonValue) {
        let newState = {};

        if (this.state.shouldClrScreen) {
            newState = {
                ...newState,
                currentScreenValue: '',
                shouldClrScreen: false
            }
        }

        if (!isNaN(buttonValue)) {  // If value is number

            // If prev buttonValue was '=' and current buttonValue is number
            if (this.state.prevEqually) {
                newState = {
                    ...newState,
                    firstOperand: buttonValue,
                    isFirstOperand: true,
                    currentScreenValue: buttonValue,
                    prevEqually: false
                }
            } else if (this.state.isFirstOperand) {  // Add number to screen and proper operand
                newState = {
                    ...newState,
                    firstOperand: this.state.firstOperand + buttonValue,
                    currentScreenValue: this.state.firstOperand + buttonValue
                }
            } else {
                newState = {
                    ...newState,
                    secondOperand: this.state.secondOperand + buttonValue,
                    currentScreenValue: this.state.secondOperand + buttonValue

                }
            }

        } else if (buttonValue === '+'
                   || buttonValue === '-'
                   || buttonValue === '*'
                   || buttonValue === '/') {  // If value is operation

            if (this.state.isFirstOperand) {
                newState = {
                    ...newState,
                    operation: buttonValue,
                    isFirstOperand: false,
                    prevEqually: false
                }
            } else {
                let res = this.calculateAndSendToServer(parseInt(this.state.firstOperand),
                    parseInt(this.state.secondOperand),
                    this.state.operation);
                newState = {
                    ...newState,
                    currentScreenValue: res,
                    firstOperand: res,
                    secondOperand: '',
                    isFirstOperand: false,
                    shouldClrScreen: true,
                    operation: buttonValue
                }

            }
        } else if (buttonValue === '=') {
            let res1 = this.calculateAndSendToServer(parseInt(this.state.firstOperand),
                                                     parseInt(this.state.secondOperand),
                                                     this.state.operation);
            newState = {
                ...newState,
                currentScreenValue: res1,
                firstOperand: res1,
                secondOperand: '',
                isFirstOperand: true,
                operation: null,
                prevEqually: true
            }

        } else if (buttonValue === 'AC') {
            newState = {
                ...newState,
                currentScreenValue: 0,
                firstOperand: '',
                secondOperand: '',
                operation: null,
                isFirstOperand: true
            }
        }

        this.setState ({
            ...newState
        });

        console.log('currentState', newState);
    }  // buttonHandler()
}

export default Calculator