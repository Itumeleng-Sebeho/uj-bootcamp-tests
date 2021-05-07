function findItemsOver20(itemList){
    var items = [];
    for(var i=0;i<itemList.length; i++){
      var listItem = itemList[i];
      if ( listItem.qty > 20){
          items.push(listItem)
    }
  }
  return items
  };