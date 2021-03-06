var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var CountDown =require('CountDown');

describe('CountDown',() => {
    it('should exists', () => {
      expect(CountDown).toExist();
    });
    describe('handleSetCountdown',() => {
      it('should set state to started and countdown', (done) => {
        var countdown = TestUtils.renderIntoDocument(<CountDown/>);
        countdown.handleSetCountdown(10);
        // assert countdown started
        expect(countdown.state.countdownStatus).toBe('started');
        // checking that after a second all is well
        setTimeout(() => {
          expect(countdown.state.count).toBe(9);
          done();
        },1001)
      });
      it('should never set count to less than zero', (done) => {
        var countdown = TestUtils.renderIntoDocument(<CountDown/>);
        countdown.handleSetCountdown(1);
        // checking that count down will not go below zero
        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          done();
        },3000);
      });
      it('should pause countdown on paused status',(done) => {
        var countdown = TestUtils.renderIntoDocument(<CountDown/>);
        countdown.handleSetCountdown(3);
        countdown.handleStatusChange('paused');
        setTimeout(() => {
          expect(countdown.state.count).toBe(3);
          expect(countdown.state.countdownStatus).toBe('paused');
          done();
        },1000);
      });
      it('should stop countdown on stopped status',(done) => {
        var countdown = TestUtils.renderIntoDocument(<CountDown/>);
        countdown.handleSetCountdown(1);
        countdown.handleStatusChange('stopped');
        setTimeout(() => {
          expect(countdown.state.count).toBe(0);
          expect(countdown.state.countdownStatus).toBe('stopped');
          done();
        },1000);
      });
    });

});
