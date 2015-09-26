

function submitInfo() {
    event.preventDefault();
    var income = Number(document.getElementById('income').value);
    chrome.storage.local.set({'income' : income});


}

window.addEventListener('load', function(evt) {
    // Handle the bookmark form submit event with our addBookmark function
    document.getElementById('info').addEventListener('submit', submitInfo);
    // Get the event page
    // chrome.runtime.getBackgroundPage(function(eventPage) {
    //     // Call the getPageInfo function in the event page, passing in 
    //     // our onPageDetailsReceived function as the callback. This injects 
    //     // content.js into the current tab's HTML
    //     eventPage.getPageDetails(onPageDetailsReceived);
    // });
});
