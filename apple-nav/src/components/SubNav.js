import React from 'react';
import { Link } from 'react-router-dom';
import StyledSubNavWrapper from './StyledSubNavWrapper';
import StyledSubNavLink from './StyledSubNavLink';
import StyledSubNavTag from './StyledSubNavTag';
const json = require('./../imageData/SubNavData.json');

const SubNav = (props) => {
  // We grab the url from the route and use it as a key
  const url = props.match.url;
  const pageName = url.substring(1, url.length);
  // The image src, image href, and link content data
  const data = json[pageName].data;
  // The styles for the subnav bg color, link color, tag color
  const bgColor = json[pageName].subNavBackgroundColor;
  const linkFontColor = json[pageName].linkFontColor;
  const tagFontColor = json[pageName].tagFontColor;

  // We return a tag if the page data hasn't loaded
  if (!data) return <h2 className="subnav-link-wrapper">Loading data...</h2>

  return (
    <StyledSubNavWrapper bgColor={bgColor}>
      <div className = "subnav-link-container">
        {
          data.map(urlObj => 
            (
              <div className="subnav-link">
                <StyledSubNavLink href={urlObj.href} linkFontColor={linkFontColor}>
                  <img src={require('./../' + urlObj.src)} alt={urlObj.urltext} />
                  <p>{urlObj.urltext}</p>
                  {urlObj.tag ? 
                    <StyledSubNavTag tagFontColor={tagFontColor}>
                      {urlObj.tag}
                    </StyledSubNavTag> : null}
                </StyledSubNavLink>
              </div>
            )
          )
        }
      </div>
    </StyledSubNavWrapper>
  );
}

export default SubNav;
