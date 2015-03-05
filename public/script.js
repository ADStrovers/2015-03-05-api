window.onload = function() {

  var button = document.getElementsByTagName("button");
  
  button[0].addEventListener("click", returnAllStudents);
  
  var form = document.getElementById("fileinfo");
  form.addEventListener('submit', returnSingleStudent);
  
  function returnAllStudents() {
    var array = []
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function(e) {
            var response = JSON.parse(js_req.response);            
            for (var a in response) {
              array.push("Name: " + response[a].name + ", Age: " + response[a].age);
            };
            var a = document.getElementsByClassName("ubae");
            a[0].innerHTML = array.join("<br>");
          }, false);
    js_req.open("get", "http://localhost:4567/students")
    js_req.send();
  }
  
  function returnSingleStudent() {
    alert("first");
    var formdata = new FormData(document.getElementsById("fileinfo"));
    console.log(formdata);
    alert("second");
  }

}