import React, { useState } from 'react';
import { makeUrl } from '../../services/url';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';
import { getUrls, getUrlsByUser } from '../../services/url';

const UrlForm = () => {
  const [url, setUrl] = useState();
  const sessionId = useSelector(getSessionId);
  getStuff();
  const handleSubmit = (event) => {
    event.preventDefault();
    makeUrl(url, sessionId);
  };
  
  const getStuff = async() => {
    const allUrls = await getUrls();
    const userUrls = await getUrlsByUser(sessionId);
    console.log(allUrls, userUrls);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name={url} onChange={({ target }) => setUrl(target.value)}></input>
      <button>get long!</button>
    </form>
  );
};

export default UrlForm;
