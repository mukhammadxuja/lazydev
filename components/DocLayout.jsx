import React from "react";
import Sidebar from './Sidebar'

const DocLayout = ({ children }) => {
  return <div>
      <aside>
          <Sidebar />
      </aside>
      <main>
          {children}
      </main>
      <footer>
          footer
      </footer>
  </div>;
};

export default DocLayout;
