function handleResult(str) {
    var sections = document.getElementsByClassName('zsg-content-section collapsible');
    sections[0].insertAdjacentHTML('afterEnd', '<section class="zsg-content-section collapsible collapsed"><h2 class=<collapsible-header">Tax Effects</h2><div>' + str + '</div></section>');
}

var cost = $("div.main-row.home-summary-row").find("span").html().split('<')[0]
var value = cost.split("$")[1].split(",").join("");
var state = $("span.zsg-h2.addr_city").html().split(", ")[1].split(" ")[0]

handleResult(taxCalc(state, value))
