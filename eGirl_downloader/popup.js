var bgPage;
chrome.runtime.getBackgroundPage(function(backgroundPage) {
    bgPage = backgroundPage;
  })
function redirectInsta() {  
    link = bgPage.getPicUrl();
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Download').addEventListener('click', redirectInsta);
});