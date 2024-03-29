import React from 'react';
import PropTypes from 'prop-types';

import * as builderFooterStyles from './builder-footer.module.scss';

const BuilderFooter = ({SideBarAndIsHome, HomePage}) => {
  const pageClass = HomePage ?
    builderFooterStyles.homePageElement :
    builderFooterStyles.sideBarElement;

  return (
    <div className={`
      ${pageClass}
      ${SideBarAndIsHome ? builderFooterStyles.home : ''}
      `}
    >
      <span>2019® - design by <a href="http://www.mybitdesign.com" target="_blank" rel="noreferrer noopener">mybitdesign</a> - built by <a href="/">datavaluepeople</a></span>
    </div>
  );
};

export default BuilderFooter;

BuilderFooter.propTypes = {
  SideBarAndIsHome: PropTypes.bool,
  HomePage: PropTypes.bool,
};
