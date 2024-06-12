// background.js
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
      chrome.tabs.executeScript(tabId, {file: "content.js"});
    }
});

var test_value;

// contents.jsで送信した値を受信
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        test_value = request.value;
    }
);
