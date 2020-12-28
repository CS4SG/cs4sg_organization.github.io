var state = history.state || {};
var reloadCount = state.reloadCount || 0;
function checkReload(){
  if (performance.navigation.type === 1) { // Reload
      state.reloadCount = ++reloadCount;
      history.replaceState(state, null, document.URL);
  } 
  else if (reloadCount) {
      delete state.reloadCount;
      reloadCount = 0;
      history.replaceState(state, null, document.URL);
  }
  if (reloadCount > 15) {
    console.log(reloadCount);
      //Unable to fetch tags
      (document.getElementById("loading")).style.display = "none";
      (document.getElementById("after_submission")).style.display = "block";
      document.getElementById("after_submission").innerHTML = "<center>We are sorry! Cannot load form data. Please try using other browser or <a href = '../#help'>contact Support</a></center>"
      return false;
  }
  return true;
}