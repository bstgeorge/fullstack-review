import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);
  const [term, setTerm] = useState('');

  // const search = (term) => {
  //   console.log(`${term} was searched`);
  // }

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search term={term} setTerm={setTerm}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));