/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'react-router-dom';

export default () => (
  <header css={{ background: 'white', display: 'flex', justifyContent: 'space-between', lineHeight: '50px', padding: '10px' }}>
    <h1 css={{margin: 0, display: 'inline-block'}}>
      Header
    </h1>
    <Link to={`/about`}>
      About
    </Link>
  </header>
)