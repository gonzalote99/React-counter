import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {reducer} from './redux/Reducer';
import Counter from './components/Counter';

const MyComponent = () => {
  return(
    <Provider store={reducer}>
       <Counter />
    </Provider>
  )
}

export default MyComponent;