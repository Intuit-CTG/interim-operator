function handleResult(returns) {
	var color;
	if (returns >= 0) {
		color = "green";
	} else {
		color = "red";
	}
	var text = "Your estimated tax return: <h2 style=\"color:" + color + "\">$" + returns.toFixed(2) + "</h2>";

    var sections = document.getElementsByClassName('zsg-content-section collapsible');
    if (!($(".tax")[0])){
    	sections[0].insertAdjacentHTML('afterEnd', '<section class="zsg-content-section collapsible collapsed tax"><h2 class=<collapsible-header">Tax Effects</h2><div><h4>' + text + '</h4></div></section>');
    }
}

var cost = $("div.main-row.home-summary-row").find("span").html().split('<')[0];
var value = cost.split("$")[1].split(",").join("");
var state = $("span.zsg-h2.addr_city").html().split(", ")[1].split(" ")[0];
var toBuy = $(".hlc-output-fixed30")[0];
var est_mortgage;
if (toBuy) {
	toBuy = 1;
	
	//catch error
	var get_mortgage = function() {
		est_mortgage = $("span.hlc-output-fixed30").html().split('<')[0];
		est_mortgage = Number(est_mortgage.split('<')[0].split("$")[1].split(",").join(""));
		alert("Working1! est_mortgage: " + est_mortgage);
		taxCalc(state, value, toBuy, est_mortgage, handleResult);
	}
	est_mortgage = $("span.hlc-output-fixed30").html();

	if (!est_mortgage){
		setTimeout(get_mortgage, 200);
	} else {
		est_mortgage = Number(est_mortgage.split('<')[0].split("$")[1].split(",").join(""));
		alert("Working2! est_mortgage: " + est_mortgage);
		taxCalc(state, value, toBuy, est_mortgage, handleResult);
	}
	
	
} else {
	toBuy = 0;
	est_mortgage = 0;
	taxCalc(state, value, toBuy, est_mortgage, handleResult);
}




var arr = [$("span.zsg-h2.addr_city").html()];
var desc = [$("div[class='notranslate']").html()];
arr = arr.concat(desc);
var list_data = $("ul.zsg-list_square.zsg-lg-1-2.zsg-sm-1-1").find('li').map(function(i, el) {
    return $(el).text();
}).get();
arr = arr.concat(list_data);
$.ajax({method: "POST", url: 'http://127.0.0.1:5000/send_terms', data: {"terms": JSON.stringify(arr)}, contentType: 'application/json;charset=UTF-8'});

