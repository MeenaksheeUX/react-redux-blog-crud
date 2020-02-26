import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
//https://codeburst.io/redux-a-crud-example-abb834d763c9

class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Post It</h2>
    </div>
    <PostForm />
    <AllPost />
</div>
);
}
}
export default App;
