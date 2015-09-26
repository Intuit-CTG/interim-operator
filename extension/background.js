
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    // alert("About to run div_adder");
    chrome.tabs.executeScript(null,{file:"div_adder.js"});
});