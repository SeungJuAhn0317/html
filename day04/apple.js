var apple = 8;
var box;
var amount;

amount = prompt("사과의 갯수를 입력하세요.");
box = amount / apple;
trash = amount % apple;
document.write(amount + "개의 사과는 " + "<b>" + parseInt(box) + "</b>" + " 박스 입니다. <br>");
document.write("남은 사과의 갯수는 " + "<b>" + trash + "</b>" + "  개 입니다.");
