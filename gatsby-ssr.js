const React = require('react');

exports.onRenderBody = ({setHeadComponents, setHtmlAttributes}) => {
  setHtmlAttributes({lang: 'en'});
  setHeadComponents([
    <link key="preload-logo-color" rel="preload" href="/img/logo-color.svg" as="image"/>,
    <link key="preload-logo-white" rel="preload" href="/img/logo-white.svg" as="image"/>,
  ]);
};
