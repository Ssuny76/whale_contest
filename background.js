chrome.browserAction.onClicked.addListener(function callback() {
    chrome.tabs.executeScript({file: "content.js"});
})