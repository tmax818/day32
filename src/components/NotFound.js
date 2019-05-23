import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    404 -{' '}
    <p>
      So, this <Link to="/">Home</Link> link uses Client Side Routing or the
      <code>Link</code> tag from <code> react-router-dom</code>
    </p>
    <br />
    <p>
      This <a href="/day32">Serverside Home</a> one uses the plain vanilla html
      anchor tag. Watch the browser carefully and you can see it re-render.
    </p>
  </div>
);

export default NotFound;
