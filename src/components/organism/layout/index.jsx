import React from 'react';

function Layout({ children }) {
  return <>{children}</>;
}

export default React.memo(Layout);
