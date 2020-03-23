import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setAlert, searchUsers, showClear, clearUsers }) => {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter some username", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const onChange = e => setText(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          id=''
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn-block btn btn-light' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propType = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
};
export default Search;
