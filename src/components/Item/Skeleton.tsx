import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props: any) => (
  <ContentLoader
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="111" y="190" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="294" rx="10" ry="10" width="280" height="19" />
    <rect x="0" y="338" rx="10" ry="10" width="280" height="88" />
    <rect x="3" y="449" rx="10" ry="10" width="95" height="30" />
    <rect x="126" y="440" rx="19" ry="19" width="152" height="45" />
    <rect x="30" y="30" rx="0" ry="0" width="150" height="91" />
    <rect x="100" y="175" rx="0" ry="0" width="1" height="0" />
    <rect x="30" y="143" rx="0" ry="0" width="150" height="15" />
    <rect x="30" y="162" rx="0" ry="0" width="93" height="15" />
    <rect x="30" y="199" rx="8" ry="8" width="80" height="24" />
    <rect x="148" y="191" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);

export default Skeleton;
