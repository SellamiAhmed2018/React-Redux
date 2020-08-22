import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import countReducer from "./redux/reducers/reducer";

const store = createStore(countReducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);