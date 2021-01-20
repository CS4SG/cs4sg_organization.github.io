function collapse(id){
    var coll = document.getElementsByClassName(id);
    var i;
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
}

collapse("collapsible_slides")
collapse("collapsible_links")



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

function after_submission(){
  document.getElementById("after_submission").innerHTML = "<br><br><center><table width='80%'><h2>Thank you for submitting your {{ page.destination_layout }}.</h2><br><br> To add it to the C4SG {{ page.destination_layout }} section, just upload the file to the designated folder. Here is the link for the folder <br><a href = '{{ page.upload }}' target='_blank'>{{ page.upload }}</a></table></center>"
}