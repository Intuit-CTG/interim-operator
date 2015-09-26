function handleResult(str) {
    var sections = document.getElementsByClassName('zsg-content-section collapsible');
    sections[0].insertAdjacentHTML('afterEnd', '<section class="zsg-content-section collapsible collapsed"><h2 class=<collapsible-header">Tax Effects</h2><div>' + str + '</div></section>');
}

var cost = $("div.main-row.home-summary-row").find("span").html().split('<')[0];
var value = cost.split("$")[1].split(",").join("");
var state = $("span.zsg-h2.addr_city").html().split(", ")[1].split(" ")[0];

handleResult(taxCalc(state, value));

var arr = [$("span.zsg-h2.addr_city").html()];
var desc = [$("div[class='notranslate']").html()];
arr = arr.concat(desc);
var list_data = $("ul.zsg-list_square.zsg-lg-1-2.zsg-sm-1-1").find('li').map(function(i, el) {
    return $(el).text();
}).get();
arr = arr.concat(list_data);
alert(arr);
$.ajax({method: "POST", url: 'http://127.0.0.1:5000/send_terms', data: {"terms": JSON.stringify(arr)}, contentType: 'application/json;charset=UTF-8', success: function(data) { alert(data); }});
