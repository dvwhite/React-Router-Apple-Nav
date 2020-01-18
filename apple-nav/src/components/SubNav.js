import React from 'react';
const json = require('./../imageData/SubNav.json');

const SubNav = (props) => {
  const url = props.match.url;
  const pageName = url.substring(1, url.length);
  if (!json[pageName]) return <h2>Loading data...</h2>
  return (
    <div>
      {
        json[pageName].map(urlObj => urlObj.urltext)
      }
    </div>
  );
}

export default SubNav;
