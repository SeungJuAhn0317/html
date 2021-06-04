console.log("cloud");
var heading = document.querySelector('#heading');
heading.onclick = function () {
  heading.style.color = "violet";
  // alert("안녕하세용");
  //var reply = confirm("저장하시겠습니까!!!");
  //console.log(reply);
  var name = prompt("이름이 뭐에요", "홍길동");
  console.log(name);
  document.write("<h1>" + name + "님 접속을 환영합니다아" + "</h1>") ;
};