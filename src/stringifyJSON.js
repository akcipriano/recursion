// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if obj is a number, boolean, or null
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
  	return '' + obj;
  } 
  //if obj is a string
  else if (typeof obj === 'string'){
  	return '"' + obj + '"';
  } 
  
  else if (typeof obj === 'object'){
     //if obj is an array
     if (Array.isArray(obj)){
     	if (obj.length === 0){
     	  return '[]';
     	} 

     	else if (obj.length > 0){
     	  var string = []; 
  	      for (var i = 0; i < obj.length; i++){
  		    if (typeof obj[i] === 'number' || typeof obj[i] === 'boolean' || obj[i] === null){
  			  string.push('' + obj[i]);
  		    } if (typeof obj[i] === 'string'){
  			    string.push('"' + obj[i] + '"');
  		    } if (typeof obj[i] === 'object'){
                string.push(stringifyJSON(obj[i]));
  	      }
     	}
     	return '[' + string.join(',') + ']';
     }
   }

     else {
     	//if obj is an object
     	if (Object.keys(obj).length === 0){
     	  return '{}';
     	
     	} else if(Object.keys(obj).length > 0){
     		var string = [];
     		for (var key in obj){
     		  if (obj[key] === undefined || typeof obj[key] === 'function'){
     		  return '{}';
     		}
     		  string.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
     		}
     		return '{' + string.join(',') + '}';
     	}
     }
  }
};
