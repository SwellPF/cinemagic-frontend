import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import movieReducer from './reducers/movieReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(movieReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
        {/* <Switch><Route path='/about' component={About}/> */}
        {/* <Route path='/movies/new' component={MovieInput}/> */}
        {/* <Route path='/movies/:id/edit' render={(routerProps) => <MovieEdit {...routerProps} movies={this.props.movies}/>}/> */}
        {/* <Route path='/movies/:id' render={(routerProps) => <Movie {...routerProps} movies={this.props.movies}/>}/> */}
        {/* <Route path='/movies' render={(routerProps) => <Movies {...routerProps} movies={this.props.movies}/>}/> */}
        {/* </Switch> */}
      <App />
    {/* </Router> */}
  </Provider>,
  document.getElementById('root')
);

