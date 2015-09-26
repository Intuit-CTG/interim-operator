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
    	sections[1].insertAdjacentHTML('afterEnd', '<section class="zsg-content-section collapsible collapsed tax"><h2 class=<collapsible-header">Common Questions</h2><div><p>' + 
    			"\n\t\t<p>One of the longest shopping seasons retailers have experienced (starting in October) is coming to a close. Were you one of the shoppers hitting the stores and the internet for every holiday sale to find the best deal? Check out our infographic that compares <a href=\"http://blog.turbotax.intuit.com/2012/11/28/battle-of-the-budgets-holiday-spending-habits-of-men-vs-womeninfographic/\" target=\"_blank\">holiday spending habits</a> to see what type of spender you were this season.</p>\n<p><img src=\"http://images.blog.turbotax.intuit.com/swf/HolidaySpendingpersonas.jpg\" alt=\"\"></p>\n\t<div class=\"row feedback-unit\"><div class=\"col-xs-12 col-md-8\">\n\t\t</div><div class=\"col-xs-12 col-md-4\">\n\t\t\t\n\t\t\t<h1 class=\"screen-reader-text\">Post navigation</h1>\n\n\t\t\t<div class=\"nav-links\">\n\t\t\t\t<div class=\"nav-previous\"><a href=\"http://blog.turbotax.intuit.com/income-and-investments/your-new-years-resolution-how-to-make-and-keep-your-financial-goals-18585/\" rel=\"prev\"><span class=\"fa fa-angle-left\"></span></a></div> <div class=\"nav-next\"><a href=\"http://blog.turbotax.intuit.com/health-care/6-top-affordable-care-act-exemptions-18606/\" rel=\"next\"><span class=\"fa fa-angle-right\"></span></a></div>\t\t\t</div>\n\t\t\t<!-- .nav-links -->\n\t\t<!-- .navigation -->\n\t\t\t</div></div>\n\t<div id=\"jp-post-flair\" class=\"sharedaddy sd-like-enabled\">\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div></div>\t"
    			+ '</p></div></section>');
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
		// alert("Working1! est_mortgage: " + est_mortgage);
		taxCalc(state, value, toBuy, est_mortgage, handleResult);
	}
	est_mortgage = $("span.hlc-output-fixed30").html();

	if (!est_mortgage){
		setTimeout(get_mortgage, 200);
	} else {
		est_mortgage = Number(est_mortgage.split('<')[0].split("$")[1].split(",").join(""));
		// alert("Working2! est_mortgage: " + est_mortgage);
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

