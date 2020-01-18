import React from 'react';
const json = require('./../imageData/SubNav.json');

const SubNav = (props) => {
  const url = props.match.url;
  const pageName = url.substring(1, url.length);
  if (!json[pageName]) return <h2 className="subnav-link-wrapper">Loading data...</h2>

  return (
    <div className="subnav-link-wrapper">
      <div className = "subnav-link-container">
        {
          json[pageName].map(urlObj => 
            (
              <div className="subnav-link">
                <div>A</div>
                <div>B</div>
                <div className="subnav-tag">New!</div>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default SubNav;
