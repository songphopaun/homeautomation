import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider} from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import appReducer from './reducers/app.reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(appReducer ,composeWithDevTools(applyMiddleware(thunk ,logger)))

const ReduxApp = () =>{
  return(
    <Provider store={store}>    
      <App />
    </Provider>
  )
}

const AppWithRouter = ()=>(
  <BrowserRouter>
      <ReduxApp/>
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
