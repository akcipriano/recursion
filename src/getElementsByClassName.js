// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var matchingClass = [];

  var bod = document.body;

  //will call the recursive function if first element has a child node
  if (bod.classList && bod.classList.contains(className)){
  	matchingClass.push(bod);
  	if (bod.childNodes[0]){
    	moreNodes(bod);
    }
  } else if (bod.childNodes[0]){
  	moreNodes(bod);
  }
  
  //recursive function; will call itself if element has a child node
  function moreNodes(element){
    var currNode = element.childNodes
  	for (var i = 0; i < element.childNodes.length; i++){
  		if (currNode[i].classList && currNode[i].classList.contains(className)){
        matchingClass.push(currNode[i]);
      } if (currNode[i].childNodes[0]){
        moreNodes(currNode[i]);
      }
  	}
  }
  
  return matchingClass;

};
