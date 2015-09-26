chrome.tabs.query({}, function(tabs) {
  for(var i in tabs) {
    // filter by url if needed; that would require "tabs" permission
    if (tabs[i].url.indexOf("zillow") > -1) {
    	chrome.tabs.executeScript(tabs[i].id, {file: "content_script.js"});
  	}
  }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"div_adder.js"});
});