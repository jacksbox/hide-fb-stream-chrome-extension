document.getElementById('globalContainer').style.display = 'none';
var customOnClick = "document.getElementById('globalContainer').style.display = 'block'; document.getElementById('myCustomOvelay').style.display = 'none';";
var cHtml = '<div id="myCustomOvelay" style="position: absolute; top: 50%; left: 50%; transorm: translate(50%, 50%); text-align: center;">';
cHtml += '<h1 style="font-size: 22px">';
cHtml += 'Are u serious?<br>';
cHtml += '</h1>';
  cHtml += '<span onClick="'+customOnClick+'" style="cursor:pointer">hm, ok</span>';
cHtml += '</div>';
document.getElementsByTagName('body')[0].innerHTML += cHtml;