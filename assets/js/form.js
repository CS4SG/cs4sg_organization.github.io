function collapse(id){
    var coll = document.getElementsByClassName(id);
    var i;
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        console.log(this.nextElementSibling)
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