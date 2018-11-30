/*
// chrome.windows.create로 하니 url이 chrome-extension:// 여서 popup.html 상 스크립트 js 실행이 안됨
// chrome.windows.create({'url': 'popup.html', 'type': 'popup'}라고 하면 팝업형태 됨
chrome.browserAction.onClicked.addListener(function() {
	chrome.windows.create({'url': 'popup.html'}, function(window) {
	});
});
*/



chrome.browserAction.onClicked.addListener(function callback() {
    chrome.tabs.executeScript({file: "content.js"});
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "send message from content.js"){
    	console.log("content 받았어");
      	sendResponse({farewell: "highlight실행해"});
      	chrome.tabs.executeScript({file: "highlight.js"});
    }else if (request.greeting == "send message from highlight.js"){
    	console.log("highlight 받았어");
      	sendResponse({farewell: "remove실행해"});
      	chrome.tabs.executeScript({file: "remove.js"});
    }
  });


/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "send message to background.js")
    	console.log("받았어");

      	document.getElementById('iframe1').onload = function(e){ 
    		sendResponse({farewell: "goodbye"});
    		chrome.tabs.executeScript({file: "highlight.js"});
		}

      	
  });
*/

/*
chrome.runtime.sendMessage(
    "send message to background.js",
    function(response){
        console.log(response);
    }
);
*/