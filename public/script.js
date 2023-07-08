// script.js
function isGoogleQuery(url) {
    if (!url) return false;
    try {
      const { host } = new URL(url);
      return host.startsWith("www.google.");
    } catch (error) {
      return false;
    }
  }
  
  function isSupportedBrowserVersion() {
    const chromeMatch = navigator.userAgent.match(/Chrome\/([0-9]+)/);
    const chromeVersion = chromeMatch ? parseInt(chromeMatch[1], 10) : 0;
    return !(chromeMatch && chromeVersion >= SETTINGS.SUPPORTED_VERSION);
  }
  
  // Your other JavaScript code here
  
  // Example usage of the functions
  const isGoogle = isGoogleQuery("https://www.google.com/search?q=test");
  console.log("Is Google query:", isGoogle);
  
  const isSupported = isSupportedBrowserVersion();
  console.log("Is supported browser version:", isSupported);
  

if (window.navigator.userAgentData) {
    const browserName = window.navigator.userAgentData.brands[0].brand;
    console.log('Browser:', browserName);
  } else {
    // Fallback code for browsers that do not support navigator.userAgentData
    // Perform feature detection or use alternative methods
    if (window.chrome) {
      console.log('Browser: Chrome');
    } else if (window.opr) {
      console.log('Browser: Opera');
    } else if (window.safari) {
      console.log('Browser: Safari');
    } else if (window.firefox) {
      console.log('Browser: Firefox');
    } else if (window.ie) {
      console.log('Browser: Internet Explorer');
    } else {
      console.log('Browser: Unknown');
    }
  }
  