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
                <div>
                  <img src={require('./../' + urlObj.src)} alt={urlObj.urltext} />
                </div>
                <a href={urlObj.href}>{urlObj.urltext}</a>
                {urlObj.tag ? <div className="subnav-tag">{urlObj.tag}</div> : null}
              </div>
            )
          )
        }
      </div>
    </div>
  );
}

export default SubNav;
