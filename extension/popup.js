

function submitInfo() {
    event.preventDefault();
    alert("I compiled!");
    var income = document.getElementById('income').value;

    var mortgage = document.getElementById('mortgage').value;
    chrome.storage.local.set({'income' : income});
    chrome.storage.local.set({'mortgage' : mortgage});
    // chrome.storage.sync.set({'income': income}, function() {
    //   message('Settings saved');
    // chrome.storage.sync.get('income', taxComparison)
    // })
}

window.addEventListener('load', function(evt) {
    // Handle the bookmark form submit event with our addBookmark function
    document.getElementById('info').addEventListener('submit', submitInfo);
    // Get the event page
    chrome.runtime.getBackgroundPage(function(eventPage) {
        // Call the getPageInfo function in the event page, passing in 
        // our onPageDetailsReceived function as the callback. This injects 
        // content.js into the current tab's HTML
        eventPage.getPageDetails(onPageDetailsReceived);
    });
});
