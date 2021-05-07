/*function transportFee(shift){
	if ( shift === "morning"){
   	 return "R20";
}
	else if (shift === "afternoon"){
   		return "R20";}
        else{
        return "free";
        }}
*/
function transportFee(shift){
    switch (shift){
      case "morning":
                  return "R20";
      case "afternoon":
                 return "R10";
        default:
                  return "free";
                   }
    }
    console.log(transportFee("morning"))
    console.log(transportFee("afternoon"))
    console.log(transportFee("nightshift"))
    