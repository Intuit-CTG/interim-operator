var propertyTaxByState = {
    "NJ": 1.89,
    "NH": 1.86,
    "TX": 1.81, 
    "NE": 1.76,
    "WI": 1.76,
    "IL": 1.73,
    "CT": 1.63, 
    "MI": 1.62,
    "VT": 1.59,
    "ND": 1.42,
    "OH": 1.36,
    "RI": 1.35,
    "PA": 1.35,
    "IA": 1.29,
    "KS": 1.29,
    "SD": 1.28,
    "NY": 1.23,
    "ME": 1.09,
    "MN": 1.05,
    "MA": 1.04,
    "AL": 1.04,
    "FL": 0.97,
    "WA": 0.92,
    "MO": 0.91,
    "MD": 0.87,
    "OR": 0.87,
    "IN": 0.85,
    "NV": 0.84,
    "GA": 0.83,
    "MT": 0.83,
    "NC": 0.78,
    "CA": 0.74,
    "OK": 0.74,
    "VA": 0.74,
    "AZ": 0.72,
    "KY": 0.72,
    "ID": 0.69,
    "TN": 0.68,
    "CO": 0.6,
    "UT": 0.6,
    "WY": 0.58,
    "NM": 0.55,
    "MS": 0.52,
    "AR": 0.52,
    "SC": 0.5,
    "WV": 0.49,
    "DC": 0.46,
    "DE": 0.43,
    "AL": 0.33,
    "HI": 0.26,
    "LA": 0.18
}

function submitInfo() {
    event.preventDefault();
    alert("I compiled!");
    var zip = document.getElementById('zip').value;
    var income = document.getElementById('income').value;

    chrome.storage.sync.set({'income': income});
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
