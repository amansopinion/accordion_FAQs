const data = [
  {
    id: "1",
    question: "Where can I buy your products?",
    answer:
      "You can get our products from our website, from amazon and from stores near you. Walk! Don't be a couch potato!",
  },
  {
    id: "2",
    question: "Can I buy from anywhere in the world?",
    answer:
      "Yes of course, if you order from our website or on Amazon, you can get it even if you live on the north pole!",
  },
  {
    id: "3",
    question: "I bought something from you and now there's a problem.",
    answer:
      "Take a deep breath. Contemplate the transience of all things. In your mind’s eye, envision the faces of everyone you love and everything you hold dear, and let them go. Then, send us an email at mail@amansopinion.com. And if you don't get a response after 24hrs...well fuck off!",
  },
  {
    id: "4",
    question: "Do you have anything for kids?",
    answer: "This is a trick question right?...RIGHT???",
  },
  {
    id: "5",
    question: "I love you!",
    answer: "That's not a question you dumbass...but we love you too :)",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `
    <div class="accordion_item">
      <div class="accordion_title">
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div class = "accordion-content">
        <p>${dataItem.answer}</p>
      </div>
    </div>
    `
    )
    .join(" ");
}

createAccordionData();

const getAccordionTitle = document.querySelectorAll(".accordion_title");

console.log("=====================================");
console.log(getAccordionTitle);
console.log("=====================================");

getAccordionTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });

      currentItem.classList.add("active");
    }
  });
});
