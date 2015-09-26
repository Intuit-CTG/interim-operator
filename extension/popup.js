
function submitInfo() {
    event.preventDefault();
    alert("I compiled!");
    var zip = document.getElementById('zip').value;
    var income = document.getElementById('income').value;

    chrome.storage.sync.set({'zip': zip});
    alert("Here");
    chrome.storage.sync.get('zip', function (result) {
      alert(result.zip);
    });
    
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