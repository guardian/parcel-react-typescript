/** @jsx jsx */
import { jsx } from '@emotion/core'
import { render } from 'react-dom'

import Router from './router'

const App = () => (
  <Router />
)

render(<App/>, document.getElementById('root'));