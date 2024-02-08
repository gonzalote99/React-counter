import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement, reset} from './../redux/Actions';

const Counter = (props) => {
  return(
    <div className='App'>
    <h1>count: {props.count}</h1>
      <button onClick={() => {
      increment()
      }}>plus</button>
      <button onClick={() => {
      decrement()
      }}>minus</button>
      <button onClick={() => {
      reset()
      }}>reset</button>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter);
