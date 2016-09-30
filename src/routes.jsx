import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'
import store from './store'

import { AppContainer } from './containers'
import { BlogContainer, BlogHomeContainer, BlogContentContainer } from './containers/blog/'

import AppListPage from './pages/AppListPage'
import PhotoPage from './pages/PhotoPage'
import NotFoundPage from './pages/NotFoundPage'
import { REQUEST_ARTICLE_SUMMARY, REQUEST_MUSIC } from './constants/actionTypes'

const renderRoutes = (history) => (
  <Router history={history}>
    <Route
      path="/"
      component={AppContainer}
      onEnter={store.dispatch({ type: REQUEST_MUSIC })}
    >
      <IndexRedirect to="/note-blog" />
      <Route
        path="note-blog"
        component={BlogContainer}
        onEnter={store.dispatch({ type: REQUEST_ARTICLE_SUMMARY })}
      >
        <IndexRoute component={BlogHomeContainer} />
        <Route path=":category/:id/" component={BlogContentContainer} />
      </Route>
      <Route path="app-list" component={AppListPage} />
      <Route path="photo" component={PhotoPage} />
      <Route path="*" component={NotFoundPage} onEnter={() => alert('This page has not ready yet!')} />
    </Route>
  </Router>
)

export default renderRoutes