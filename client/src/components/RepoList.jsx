import React from 'react';

const RepoList = ({ repos }) =>{
  return (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
  </div>
)
}
export default RepoList;