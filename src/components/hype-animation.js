/* HypeAnimations are imported as iframes
 * animations must be in animiation-iframes/name/name.html
 * In general this should mean copying the export for tumult
 * in to the animation-iframes folder.
 *
 *
 * To run with development:
 * https://github.com/gatsbyjs/gatsby/issues/13072
 *
 * This is from the forum:
 * https://forums.tumult.com/t/hype-in-react-or-as-react-component/5172/4
 */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Iframe from 'react-iframe';

const HypeAnimation = (
    {name, display, width, height, className, classNameTransition = ''},
) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Iframe
      url={`/animation-iframes/${name}/${name}.html`}
      display={display}
      width={width}
      height={height}
      onLoad={() => {
        setLoaded(true);
      }}
      className={`
        ${className}
        ${loaded ? classNameTransition : ''}
      `}
    />
  );
};

export default HypeAnimation;

HypeAnimation.propTypes = {
  name: PropTypes.string,
  display: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  classNameTransition: PropTypes.string,
};
