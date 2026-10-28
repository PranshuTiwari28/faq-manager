const faqContainer =
    document.querySelector("#faqContainer");

const questionInput =
    document.querySelector("#questionInput");

const answerInput =
    document.querySelector("#answerInput");

const addBtn =
    document.querySelector("#addBtn");

const faqCount =
    document.querySelector("#faqCount");

const clearBtn =
    document.querySelector("#clearBtn");

function updateCount() {
    const totalFaqs =
        document.querySelectorAll(".faq").length;

    faqCount.textContent =
        totalFaqs;
}

function attachFaqEvents(faq) {

    const toggleBtn =
        faq.querySelector(".toggle-btn");

    const answer =
        faq.querySelector(".answer");

    const deleteBtn =
        faq.querySelector(".delete-btn");

    toggleBtn.addEventListener("click", () => {

        if (answer.style.display === "block") {

            answer.style.display = "none";

            toggleBtn.textContent =
                "Show Answer";

        } else {

            answer.style.display = "block";

            toggleBtn.textContent =
                "Hide Answer";
        }
    });

    deleteBtn.addEventListener("click", () => {

        faq.remove();

        updateCount();
    });
}

document
    .querySelectorAll(".faq")
    .forEach(faq => {
        attachFaqEvents(faq);
    });

addBtn.addEventListener("click", () => {

    const question =
        questionInput.value.trim();

    const answer =
        answerInput.value.trim();

    if (
        question === "" ||
        answer === ""
    ) {
        return;
    }

    const faq =
        document.createElement("div");

    faq.classList.add("faq");

    const faqHeader =
        document.createElement("div");

    faqHeader.classList.add(
        "faq-header"
    );

    const heading =
        document.createElement("h3");

    heading.textContent =
        question;

    const toggleBtn =
        document.createElement("button");

    toggleBtn.classList.add(
        "toggle-btn"
    );

    toggleBtn.textContent =
        "Show Answer";

    faqHeader.appendChild(
        heading
    );

    faqHeader.appendChild(
        toggleBtn
    );

    const answerPara =
        document.createElement("p");

    answerPara.classList.add(
        "answer"
    );

    answerPara.textContent =
        answer;

    const deleteBtn =
        document.createElement("button");

    deleteBtn.classList.add(
        "delete-btn"
    );

    deleteBtn.textContent =
        "Delete";

    faq.appendChild(
        faqHeader
    );

    faq.appendChild(
        answerPara
    );

    faq.appendChild(
        deleteBtn
    );

    faqContainer.appendChild(
        faq
    );

    attachFaqEvents(faq);

    updateCount();

    questionInput.value = "";
    answerInput.value = "";
});

clearBtn.addEventListener("click", () => {

    faqContainer.innerHTML = "";

    updateCount();
});

updateCount();