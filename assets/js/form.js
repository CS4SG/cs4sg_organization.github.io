var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



const specialToASCII = str => {
  let res = '';
  for(let i = 0; i < str.length; i++){
     if(+str[i] || str[i].toLowerCase() !== str[i].toUpperCase() || str[i] === ' '){
        res += str[i];
        continue;
     };
     res += "&#"+str[i].charCodeAt(0)+";";
  };
  return res;
};
