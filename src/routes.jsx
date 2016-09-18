import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import { BlogContainer, BlogHomeContainer, BlogContentContainer } from './containers/blog/'

import AppContainer from './containers/AppContainer'

import AppListPage from './pages/AppListPage'
import PhotoPage from './pages/PhotoPage'
import NotFoundPage from './pages/NotFoundPage'

const renderRoutes = (history) => (
  <Router history={history}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/note-blog"/>
      <Route path="note-blog" component={BlogContainer}>
        <IndexRoute component={BlogHomeContainer}/>
        <Route path=":category/:id/" component={BlogContentContainer}/>
      </Route>
      <Route path="app-list" component={AppListPage}/>
      <Route path="photo" component={PhotoPage}/>
      <Route path="*" component={NotFoundPage} onEnter={() => alert('This page has not ready yet!')}/>
    </Route>
  </Router>
)

export default renderRoutes