/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Route, HashRouter, Switch } from 'react-router-dom'

import Header from '~/components/header'
import IndexPage from '~/pages/index'
import AboutPage from '~/pages/about'

export default () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path='/about' component={AboutPage} />
      <Route path='/' component={IndexPage} />
    </Switch>
  </HashRouter>
)