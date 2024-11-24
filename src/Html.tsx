import React, { ReactNode } from 'react';

export const Html = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>Server Side Rendering Example</title>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
};
