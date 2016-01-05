import React from 'react';
import {Link} from 'react-router';
export default () => {
  return (
    <div className="test-container">
      <h3>Test page</h3>
      <p>Lorem ipsum dolor sit...</p>
      <p> This page does not have a navigation bar because it's not
          nested under App </p>
      <p>
        <Link to="/">Back to Main page</Link>
      </p>
    </div>
  );
};
