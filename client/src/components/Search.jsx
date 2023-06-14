import React, { useState } from 'react';
import $ from 'jquery';

const Search = ({ term, setTerm }) => {

  // const[term, setTerm] = useState('')

  const onChange = (e) => {
    setTerm(e.target.value);
  }

  const search = () => {
    //send search term(e) inside get request to GITHUB API
    $.ajax({
      method: 'POST',
      url: 'http://localhost:1128/repos',
      data: {username: term},
      success: console.log('request received'),
      error:  (err) => console.log(err)
    });

  }

  return (
    <div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={term} onChange={onChange}/>
      <button onClick={search}> Add Repos </button>
    </div>
  );
}

export default Search;