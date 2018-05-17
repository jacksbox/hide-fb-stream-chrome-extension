(function(){
  document.getElementById('globalContainer').style.opacity = 0;
  var cHtml  = '<div id="jbOverlay" style="position: absolute; top: 50%; left: 50%; transorm: translate(50%, 50%); text-align: center;">';
      cHtml += '<h1 style="font-size: 22px">';
      cHtml += 'Are u serious?<br>';
      cHtml += '</h1>';
      cHtml += '<button id="jbButton">hm, ok</button>';
      cHtml += '</div>';
  document.getElementsByTagName('body')[0].innerHTML += cHtml;
  document.getElementById('jbButton').addEventListener('click', function() {
    document.getElementById('globalContainer').style.opacity = 1;
    var overlay = document.getElementById('jbOverlay');
        overlay.parentElement.removeChild(overlay);
  })
})()