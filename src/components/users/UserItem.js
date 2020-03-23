import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='avatar'
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div className=''>
        <Link to={`/user/${login}`} className='btn btn-sm btn-dark my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propType = {
  user: PropTypes.object.isRequired
};
export default UserItem;
