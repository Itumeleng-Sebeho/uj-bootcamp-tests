function findItemsOver(itemList,qty){
    var items = [];
    // console.log(itemList)
    for(var i=0;i<itemList.length; i++){
      var listItem = itemList[i];
      if ( listItem.qty > qty){
         items.push(listItem);
    }
  }
    return items
  };