import React from "react";
import ContentLoader from "react-content-loader";


function CardLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={260}
      height={280}
      viewBox="0 0 250 280"
      backgroundColor="#e3e3e3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="6" y="144" rx="3" ry="3" width="88" height="6" />
      <rect x="6" y="161" rx="3" ry="3" width="52" height="6" />
      <rect x="6" y="229" rx="3" ry="3" width="158" height="6" />
      <rect x="6" y="188" rx="3" ry="3" width="226" height="6" />
      <rect x="5" y="0" rx="0" ry="0" width="280" height="129" />
      <rect x="6" y="208" rx="3" ry="3" width="230" height="6" />
    </ContentLoader>
  );
}

export default CardLoader;
