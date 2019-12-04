import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';

const UserForm = ({ buttonText, handleSubmit }) => {
  const sessionId = useSelector(getSessionId);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if(sessionId) return <Redirect to="/" />;

  return (
    <form onSubmit={event => handleSubmit(event, username, password)}>
      <input type="text" value={username} onChange={({ target }) => setUsername(target.value)} />
      <input type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <button>{buttonText}</button>
    </form>
  );
};

UserForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default UserForm;
