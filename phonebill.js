function totalPhoneBill(callsMade) {
  //console.log(callsMade)
  var total = 0;
  var phoneBill = callsMade.split(",");
  for (var i = 0; i < phoneBill.length; i++) {
    var lists = phoneBill[i];
    //console.log(lists)
    if (lists.includes("call")) {
      total += 2.75;
    }
    if (lists.includes("sms")) {
      total += 0.65;
    }
  }
  return "R" + total.toFixed(2)
}