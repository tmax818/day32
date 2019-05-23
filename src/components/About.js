import React from 'react';

const About = props => {
  console.log(props);
  return (
    <div>
      <h1>About</h1>
      <p>props.history.location.pathname=> {props.history.location.pathname}</p>
      <p>props.location.pathname=> {props.location.pathname}</p>
      <p>props.match.path=> {props.match.path}</p>
      <p>props.match.url=> {props.match.url}</p>
    </div>
  );
};

export default About;
