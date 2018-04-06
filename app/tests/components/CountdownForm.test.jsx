var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var CountdownForm =require('CountdownForm');

describe('Countdown Form',() => {
    it('should exist',() => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered',() => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit(ReactDOM.findDOMNode(countdownForm).querySelector('form')[0]);
        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if inValid seconds entered',() => {
        let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);

        countdownForm.refs.seconds.value = '109a';
        TestUtils.Simulate.submit(ReactDOM.findDOMNode(countdownForm).querySelector('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
});