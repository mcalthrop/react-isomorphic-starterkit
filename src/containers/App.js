import React from 'react';
import {Link} from 'react-router';
import InlineCss from 'react-inline-css';

const style = `
  & {
    font-family: sans-serif;
  }

  & .main-navigation {
    display: block;
    text-align: center;
  }

  & .navigation-link {
    color: #888;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    margin: .5vh;

  }
  & .navigation-link.active {
    color: black;
  }
`;
// App component. this is just a container really
// so I'm using a stateless component

export default class App extends React.Component {
  render() {
    return (
      <InlineCss stylesheet={style} namespace="App">
        <nav className="main-navigation">
          <Link className="navigation-link" activeClassName="active" to="/">Home</Link>
          <Link className="navigation-link" activeClassName="active" to="/main">Main</Link>
          <Link className="navigation-link" activeClassName="active" to="/about">About</Link>
          <Link className="navigation-link" activeClassName="active" to="/test">Test</Link>
        </nav>

        <div id="page-content">
          {this.props.children}
        </div>
      </InlineCss>
    );

  }
};

