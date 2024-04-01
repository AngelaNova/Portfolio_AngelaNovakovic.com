import React from 'react';

const PageSection = ({ children, margin = 'my-0', fullWidth }) => {
  let widthStyling = null;

  if (fullWidth) {
    widthStyling = 'w-full';
  }

  return (
    <section className={`flex flex-col ${widthStyling} items-start justify-center ${margin}`}>
      {children}
    </section>
  );
};

export default PageSection;
