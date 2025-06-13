import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={260}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="281" rx="8" ry="8" width="260" height="23" />
    <rect x="0" y="321" rx="8" ry="8" width="260" height="86" />
    <rect x="1" y="432" rx="14" ry="14" width="88" height="30" />
    <rect x="97" y="422" rx="26" ry="26" width="161" height="46" />
  </ContentLoader>
);

export default Skeleton;
