import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducer from './redux/reducer/reducer'
import { Provider} from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const store = createStore(Reducer , composeWithDevTools(applyMiddleware(thunk,logger)))

const AppWithRouter = ()=>(
  <BrowserRouter>
      <Provider store={store}>    
        <App />
      </Provider>  
  </BrowserRouter>
)
ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
