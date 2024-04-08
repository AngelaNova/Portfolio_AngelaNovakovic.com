export const preventScroll = () => {
  const handleScroll = () => {
    // Check if the scroll position is not at the top or bottom
    if (window.scrollX !== 0 && window.scrollX !== document.body.scrollWidth - window.innerWidth) {
      // Reset the scroll position to prevent horizontal scrolling
      window.scrollTo(0, window.scrollY);
    }
  };

  // Add event listener for scroll
  window.addEventListener('scroll', handleScroll);

  // Clean up function to remove event listener
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
