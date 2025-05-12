import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

function hideBaseUrl() {
  const detailBlocks = document.querySelectorAll<HTMLDivElement>(
    '.openapi-explorer__details-container'
  );

  detailBlocks.forEach((block) => {
    if (block.textContent?.includes('Base URL')) {
      block.style.display = 'none';
    }
  });
}

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const maxAttempts = 10;
    let attempts = 0;

    const tryClick = () => {
      const button = document.querySelector<HTMLButtonElement>(
        '.openapi-explorer__expand-details-btn'
      );
      if (button) {
        button.click();
        // at once with collapsing all by default, hide baseUrl as it's pointless here
        hideBaseUrl();
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryClick, 20);
      }
    };

    tryClick();
  }, [location.pathname]); // 👈 Runs every time the route changes

  return <>{children}</>;
}
