window.onload = function () {
  var faqButtons = document.querySelectorAll(".faq-toggle");

  function toggleFAQ() {
    var parent = this.parentElement;
    parent.classList.toggle("active");
  }

  faqButtons.forEach(function (button) {
    button.addEventListener("click", toggleFAQ);
  });

  const faqForm = document.getElementById("faqForm");
  const faqContainer = document.querySelector(".faq-container");

  faqForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const questionInput = document.querySelector('input[name="question"]');
    const answerInput = document.querySelector('input[name="answer"]');
    const questionValue = questionInput.value;
    const answerValue = answerInput.value;

    const newFaqDiv = document.createElement("div");
    newFaqDiv.classList.add("faq", "active");
    newFaqDiv.innerHTML = `
      <h3 class="faq-title">${questionValue}</h3>
      <p class="faq-text">${answerValue}</p>
      <button class="faq-toggle">
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
      </button>
    `;

    faqContainer.prepend(newFaqDiv);
    questionInput.value = "";
    answerInput.value = "";
    const toggleButton = newFaqDiv.querySelector(".faq-toggle");
    toggleButton.addEventListener("click", toggleFAQ);
  });
};
