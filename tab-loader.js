/**
 * Talento Tab Loader Utility
 * File: tab-loader.js
 * Dynamically loads tab HTML files into the main container without duplicating structure
 */
const TabLoader = (function() {
  'use strict';

  // Cache for loaded tab content to avoid repeated fetches
  const tabCache = {};

  /**
   * Load a tab file and inject its content into a container
   * @param {string} tabId - The ID of the tab (e.g., 'summary', 'leave-reconciliations')
   * @param {string} containerId - The ID of the container element to inject content into
   * @param {Function} callback - Optional callback function to run after content is loaded
   * @returns {Promise} - Promise that resolves when tab is loaded
   */
  async function loadTab(tabId, containerId, callback) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container #${containerId} not found`);
      return Promise.reject(new Error(`Container not found: ${containerId}`));
    }

    // Map tab IDs to file paths
    const tabFileMap = {
      'summary': 'leave-summary.html',
      'leave-reconciliations': 'leave-reconciliation.html',
      'return-from-leave': 'leave-return.html',
      'reports': 'leave-reports.html'
    };

    const filePath = tabFileMap[tabId];
    if (!filePath) {
      console.error(`No file mapping found for tab: ${tabId}`);
      container.innerHTML = `
        <div style="padding: 40px; text-align: center; color: #787085;">
          <p style="font-size: 15px; font-weight: 500; margin-bottom: 8px;">Tab Not Found</p>
          <p style="font-size: 13px;">The requested tab "${tabId}" could not be loaded.</p>
        </div>
      `;
      return Promise.reject(new Error(`No file mapping for tab: ${tabId}`));
    }

    // Check cache first
    if (tabCache[tabId]) {
      console.log(`Loading tab "${tabId}" from cache`);
      container.innerHTML = tabCache[tabId];
      
      // Execute any inline scripts in the cached content
      executeScripts(container);
      
      if (callback) callback();
      return Promise.resolve();
    }

    // Fetch the tab file
    try {
      console.log(`Fetching tab "${tabId}" from ${filePath}`);
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const html = await response.text();
      
      // Parse the HTML to extract only the body content
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const bodyContent = doc.body.innerHTML;
      
      // Cache the content
      tabCache[tabId] = bodyContent;
      
      // Inject into container
      container.innerHTML = bodyContent;
      
      // Execute any inline scripts in the loaded content
      executeScripts(container);
      
      console.log(`Tab "${tabId}" loaded successfully`);
      
      if (callback) callback();
      return Promise.resolve();
      
    } catch (error) {
      console.error(`Error loading tab "${tabId}":`, error);
      container.innerHTML = `
        <div style="padding: 40px; text-align: center; color: #787085;">
          <p style="font-size: 15px; font-weight: 500; margin-bottom: 8px; color: #dc2626;">Error Loading Tab</p>
          <p style="font-size: 13px;">Could not load "${tabId}". Please try again.</p>
          <p style="font-size: 11px; margin-top: 8px; color: #a09aab;">${error.message}</p>
        </div>
      `;
      return Promise.reject(error);
    }
  }

  /**
   * Execute scripts found in dynamically loaded content
   * @param {HTMLElement} container - The container element with potentially new scripts
   */
  function executeScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      
      // Copy attributes
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      // Copy script content
      newScript.textContent = oldScript.textContent;
      
      // Replace old script with new one to trigger execution
      oldScript.parentNode.replaceChild(newScript, oldScript);
    });
  }

  /**
   * Clear the tab cache (useful for development/debugging)
   */
  function clearCache() {
    Object.keys(tabCache).forEach(key => delete tabCache[key]);
    console.log('Tab cache cleared');
  }

  /**
   * Preload a tab file into cache without displaying it
   * @param {string} tabId - The ID of the tab to preload
   * @returns {Promise} - Promise that resolves when tab is preloaded
   */
  async function preloadTab(tabId) {
    const tempDiv = document.createElement('div');
    tempDiv.style.display = 'none';
    document.body.appendChild(tempDiv);
    tempDiv.id = `temp-${tabId}-${Date.now()}`;
    
    try {
      await loadTab(tabId, tempDiv.id);
      document.body.removeChild(tempDiv);
      return Promise.resolve();
    } catch (error) {
      document.body.removeChild(tempDiv);
      return Promise.reject(error);
    }
  }

  // Public API
  return {
    loadTab,
    clearCache,
    preloadTab,
    
    /**
     * Get the cached content for a tab (if available)
     * @param {string} tabId - The tab ID
     * @returns {string|null} - Cached HTML content or null
     */
    getCached: function(tabId) {
      return tabCache[tabId] || null;
    }
  };
})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TabLoader;
}
