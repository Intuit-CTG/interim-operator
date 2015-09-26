function handleResult(returns) {

	text = "Your estimated tax return: <h2 style=\"color:green\">$" + returns.toFixed(2) + "</h2>";

    var sections = document.getElementsByClassName('zsg-content-section collapsible');
    if (!($(".tax")[0])){
    	sections[0].insertAdjacentHTML('afterEnd', '<section class="zsg-content-section collapsible collapsed tax"><h2 class=<collapsible-header">Tax Effects</h2><div><h4>' + text + '</h4></div></section>');
    }
}

var cost = $("div.main-row.home-summary-row").find("span").html().split('<')[0]
var value = cost.split("$")[1].split(",").join("");
var state = $("span.zsg-h2.addr_city").html().split(", ")[1].split(" ")[0]

taxCalc(state, value, handleResult);
