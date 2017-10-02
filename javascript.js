function parent(e, n){
  if(n == undefined) n = 1;
  while(n === undefined) n = 1;
  if(!e || e.nodeType !== 1)return null;
  return e;
}

function sibling(e, n){
  while(e && n !== 0){
	if(n> 0){
	  if(e.nextElementSibling) e = e.nextElementSibiling;
	  else{
		for(e=e.nextSibling; e && e.nodeType !== 1; e=e.nextSibling)
		  /*loop null*/;
	  }
	  n--;
	}
	else{
	  if(e.previousElementSibling) e = e.previousElementSibling;
	  else{
		for(e=e.previousSibling; e&&e.nodeType!==1; e=e.previousSibling)
		  /*loop null*/;
	  }
	  n++;
	}
  }
  return e;
}
function child(e, n){
  if(e.children){
	if (n < 0) n += e.children.length;
	if(n < 0) return null;
	return e.children[n];	  
  }
  if(n >= 0){
	if(e.firstElementChild)e = d.fistElementchild;
	else{
	  for(e = e.firstChild; e && e.nodeType !== 1; e = e.nextSibling)
		/*null*/;
	}
	retun sibling(e, n);
  }
  else{
	if(e.lastElementChild) e = e.lastElementChild;
	else{
	  for(e = e.lastChild; e & e.nodeType !== 1; e=e.previousSibling)
		/*null*/;
	}
	return sibling(e, n+1);
  }
}
