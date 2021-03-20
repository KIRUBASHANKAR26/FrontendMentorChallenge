const quesBtn = document.getElementsByClassName("accordion-question");
const quesAns = document.querySelectorAll(".question p");
const arrowImg = document.getElementsByClassName("arrow");


let j = 1;
for (let i = 0; i < quesBtn.length; i++) {
  quesBtn[i].addEventListener("click", (e) => {
    if(j%2 != 0){
      quesBtn[i].classList.add("open");
      quesAns[i].style.display = "block";
      arrowImg[i].style.transform = "rotateX(180deg)";
      j++;
    }
    else{
      quesBtn[i].classList.remove("open");
      quesAns[i].style.display = "none";
      arrowImg[i].style.transform = "rotateX(360deg)";
      j++;
    }
  });
}