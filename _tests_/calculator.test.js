import React from 'react';
import { mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';


import  Calculator from '../components/Calculator';





function mouneAndFind() {
    const wrapper = mount(
        <Calculator  />
    );
    let buttons = {};
    buttons['AC'] = wrapper.find('.boxAC');
    buttons['/'] = wrapper.find('.boxDiv');
    buttons['7'] = wrapper.find('.box7');
    buttons['8'] = wrapper.find('.box8');
    buttons['9'] = wrapper.find('.box9');
    buttons['4'] = wrapper.find('.box4');
    buttons['5'] = wrapper.find('.box5');
    buttons['6'] = wrapper.find('.box6');
    buttons['-'] = wrapper.find('.boxMn');
    buttons['1'] = wrapper.find('.box1');
    buttons['2'] = wrapper.find('.box2');
    buttons['3'] = wrapper.find('.box3');
    buttons['+'] = wrapper.find('.boxPl');
    buttons['0'] = wrapper.find('.box0');
    buttons['='] = wrapper.find('.boxEq');
    buttons['*'] = wrapper.find('.boxMul');
    buttons['Cur'] = wrapper.find('.boxCur');
    const screen = wrapper.find('.screen');
    return [buttons, screen, wrapper];
}


test('CalculatorComponent renders the numbers at screen', () => {
    let [buttons, screen] = mouneAndFind();

    buttons['5'].simulate('click');
    expect(screen.text()).toBe('5');

    buttons['-'].simulate('click');

    buttons['5'].simulate('click');
    buttons['5'].simulate('click');
    expect(screen.text()).toBe('55');

    buttons['*'].simulate('click');
    expect(screen.text()).toBe('-50');

    buttons['5'].simulate('click');
    expect(screen.text()).toBe('5');

    buttons['='].simulate('click');
    expect(screen.text()).toBe('-250');
});


test('CalculatorComponent', () => {
    let [buttons, screen, wrapper] = mouneAndFind();

    expect(shallowToJson(wrapper)).toMatchSnapshot();
});

test('CalculatorState', () => {
    let [buttons, screen, wrapper] = mouneAndFind();

    expect(wrapper.state().firstOperand).toEqual('');

    buttons['5'].simulate('click');
    expect(wrapper.state().firstOperand).toEqual('5');
});


