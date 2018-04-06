var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock =require('Clock');

describe('Clock',() => {
    it('should exist!',() => {
        expect(Clock).toExist();
    });

    // checking if clock renders 
    describe('render',() => {
        it('should render clock to output',() => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
            //var $el = $(ReactDOM.findDOMNode(clock)); // converts the object into the html that is rendered by the browser
            //var actualText = $el.find('.clock-text').text();
            let actualText = ReactDOM.findDOMNode(clock).querySelector('span').innerText;

            expect(actualText).toBe('01:02');
        });
    });

    describe('formatSeconds',() => {
        it('should format seconds',() => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    });

    describe('formatSeconds',() => {
        it('should format seconds when min/sec are less than 10',() => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    });
});