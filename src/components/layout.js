import React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    );
  } else {
    header = (
      <h1 className="header-link-home">
        <Link to="/">{`${title}`}</Link>
      </h1>
    );
  }
  
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <hr />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()}</footer>
      <Link to="/impress">Impressum</Link>
    </div>
  );
};

export default Layout;
