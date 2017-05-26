import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import ArticleFormContainer from './containers/ArticleFormContainer';
import ArticleShowContainer from './containers/ArticleShowContainer';
import ArticlesIndexContainer from './containers/ArticlesIndexContainer';
import ArticleTile from './components/ArticleTile';
import ArticleShow from './components/ArticleShow';
import TitleField from './components/TitleField';
import BodyField from './components/BodyField';
import BackButton from './components/BackButton';

const App = (props) => {
  return (

  	  <div className="text-center">
      <p>Hello Launcher!</p>
      <BackButton />

      <Router history={browserHistory}>
        <Route path="/" >
        <IndexRoute component={ArticlesIndexContainer}/>
        
        <Route path='articles/:id' component={ArticleShowContainer}/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
