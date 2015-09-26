

function submitInfo() {
    event.preventDefault();
    alert("I compiled!");
    var income = document.getElementById('income').value;
    var mortgage = document.getElementById('mortgage').value;
    chrome.storage.sync.set({'income' : income});
    chrome.storage.sync.set({'mortgage' : mortgage});
    // alert("Here");
    chrome.storage.sync.get('income', function (result) {
      alert(result.income);
    });

    
    // chrome.storage.sync.set({'income': income}, function() {
    //   message('Settings saved');
    // chrome.storage.sync.get('income', taxComparison)
    // })
}

window.addEventListener('load', function(evt) {
    // Handle the bookmark form submit event with our addBookmark function
    document.getElementById('info').addEventListener('submit', submitInfo);
});