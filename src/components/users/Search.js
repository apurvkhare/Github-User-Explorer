import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.setAlert("Please enter some username", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            id=''
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn  btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn-block btn btn-light'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }

  static propType = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  };
}

export default Search;
