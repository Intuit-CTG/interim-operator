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

function taxCalc(state, cost, callback) {
    var mortgageRate;
<<<<<<< HEAD
    chrome.storage.sync.get('mortgage', function (result) {
        mortgageRate = result.mortgage;
    });
    chrome.storage.sync.get('income', function (result) {
        TaxReturn.tpTaxableWages = result.income;
    });

=======
>>>>>>> c9f7580216ff716414e7dac26829889adb6a4a73
    var calcTax = function(state, cost) {
        var withholdings_const = 0.2;
        TaxReturn.mortgageInterest = Number(mortgageRate)*Number(cost);
        // alert("mortgageInterest: " + TaxReturn.mortgageInterest);
        TaxReturn.realEstateTax = 0.01*Number(propertyTaxByState[state])*Number(cost);
        // alert("realEstateTax: " + TaxReturn.realEstateTax);
        TaxReturn.tpWithholdings = Number(TaxReturn.tpTaxableWages)*Number(withholdings_const);
       
        TaxReturn.calcTax();  
        // alert("refund: " + TaxReturn.refund);
        return TaxReturn.refund;
    };

    chrome.storage.local.get('mortgage', function (result) {
        mortgageRate = Number(result.mortgage);
        chrome.storage.local.get('income', function (result) {
            // alert(result.income);
            TaxReturn.tpTaxableWages = Number(result.income);
            callback(calcTax(state, cost));
            });
    });
  
}

