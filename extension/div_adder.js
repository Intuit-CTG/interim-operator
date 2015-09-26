function handleResult(returns) {

	text = "Your estimated tax return: <h2 style=\"color:green\">$" + returns.toFixed(2) + "</h2>";

    var sections = document.getElementsByClassName('zsg-content-section collapsible');
    if (!($(".tax")[0])){
    	sections[0].insertAdjacentHTML('afterEnd', '<section class="zsg-content-section collapsible collapsed tax"><h2 class=<collapsible-header">Tax Effects</h2><div><h4>' + text + '</h4></div></section>');
    }
}

var cost = $("div.main-row.home-summary-row").find("span").html().split('<')[0];
var value = cost.split("$")[1].split(",").join("");
var state = $("span.zsg-h2.addr_city").html().split(", ")[1].split(" ")[0];
var toBuy = $(".loan-calculator-label")[0];
if (toBuy) {

}

taxCalc(state, value, true, handleResult);

<span class="hlc-output-fixed30">$1,931
<span aria-label="Per month">


var arr = [$("span.zsg-h2.addr_city").html()];
var desc = [$("div[class='notranslate']").html()];
arr = arr.concat(desc);
var list_data = $("ul.zsg-list_square.zsg-lg-1-2.zsg-sm-1-1").find('li').map(function(i, el) {
    return $(el).text();
}).get();
arr = arr.concat(list_data);
$.ajax({method: "POST", url: 'http://127.0.0.1:5000/send_terms', data: {"terms": JSON.stringify(arr)}, contentType: 'application/json;charset=UTF-8'});

