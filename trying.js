function getOpenTabs() {
    if (typeof chrome !== "undefined" && typeof chrome.tabs !== "undefined") {
      // Google Chrome
      chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
          console.log("Tab " + i + ": " + tabs[i].url);
        }
      });
    } else if (typeof browser !== "undefined" && typeof browser.tabs !== "undefined") {
      // Firefox
      browser.tabs.query({}).then((tabs) => {
        for (let tab of tabs) {
          console.log("Tab: ", tab.url);
        }
      }).catch((error) => {
        console.log(`Error: ${error}`);
      });
    } else if (typeof safari !== "undefined" && safari.application && safari.application.activeBrowserWindow) {
      // Safari
      safari.application.activeBrowserWindow.tabs.forEach(function(tab) {
        console.log("Tab: ", tab.url);
      });
    } else {
      console.log("Unsupported browser");
    }
  }

  console.log("getOpenTabs", getOpenTabs())