/** @jsx jsx */
import { jsx } from '@emotion/react'
import { render } from 'react-dom'

import Router from './router'

const App = () => (
  <Router />
)

render(<App/>, document.getElementById('root'));
