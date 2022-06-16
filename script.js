const card_1 = document.querySelector(".content_1");
const card_2 = document.querySelector(".content_2");
const submitBtn = document.querySelector(".submit");
const ratings = document.querySelectorAll(".rating");
let rate = document.querySelector(".rate");

let rateScore = 3;

submitBtn.addEventListener("click", onSubmit);
ratings.forEach((btn) => {
  btn.addEventListener("click", ratecheck);
});

function onSubmit() {
  card_1.classList.add("hide");
  card_2.classList.remove("hide");
  rate.textContent = rateScore;

}

function ratecheck(e) {
    ratings.forEach(btn => {
      btn.classList.remove("rating-active");
    });
  
    if (e.target.classList.contains("rating")) {
      e.target.classList.add("rating-active");
    } else {
      e.target.parentElement.classList.add("rating-active");
    }

    rateScore = e.target.textContent;
}