function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

function openSubTab(subId) {
    const subContents = document.querySelectorAll('.sub-content');
    subContents.forEach(sub => sub.classList.remove('sub-active'));
    document.getElementById(subId).classList.add('sub-active');
}

function toggleExample(id) {
    const ex = document.getElementById(id);
    const btn = ex.previousElementSibling;
    if (ex.style.display === "none" || ex.style.display === "") {
        ex.style.display = "block";
        btn.textContent = "Hide Example";
    } else {
        ex.style.display = "none";
        btn.textContent = "Show Example";
    }
}

function submitAll() {
    const inputs = document.querySelectorAll("#writing input");
    let allFilled = true;

    document.querySelectorAll(".error").forEach(e => e.remove());

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            allFilled = false;

            let error = document.createElement("span");
            error.className = "error";
            error.style.color = "red";
            error.style.marginLeft = "10px";
            error.textContent = "⚠️ Required";
            input.after(error);
        }
    });

    if (!allFilled) {
        return;
    }

    inputs.forEach((input) => {
        const correctAnswer = input.dataset.answer.trim();
        const userAnswer = input.value.trim();
        const result = document.getElementById("result-" + input.id);

        if (userAnswer === correctAnswer) {
            result.innerHTML = `✅ <span class="correct"></span>`;
            result.classList.remove("wrong");
            result.classList.add("correct");
        } else {
            result.innerHTML = `❌ <span class="wrong">${correctAnswer}</span>`;
            result.classList.remove("correct");
            result.classList.add("wrong");
        }
        result.style.display = "inline";
    });
}

const listeningAnswers = {
    qL1: "말레이시아",
    qL2: "호주",
    qL3: "한국",
    qL4: "가수",
    qL5: "군인",
    qL6: "기자",
    qL7: "선생님",
    qL8: "요리사",
    qL9: "의사",
    qL10: "독일",
    qL11: "미국",
    qL12: "영국",
    qL13: "학생",
    qL14: "회사원",
    qL15: "웨이터",
    qL16: "일본",
    qL17: "중국",
    qL18: "프랑스"
};

function submitListeningAll() {
    for (let i = 1; i <= 18; i++) {
        const qName = "qL" + i;
        const selected = document.querySelector(`input[name='${qName}']:checked`);
        const result = document.getElementById("result-" + qName);
        const correctAnswer = listeningAnswers[qName];

        if (!result) continue; // skip if question not found

        if (!selected) {
            result.innerHTML = "⚠️ Please select an answer";
            result.classList.remove("correct", "wrong");
            result.style.display = "inline";
            continue;
        }

        if (selected.value === correctAnswer) {
            result.innerHTML = `✅ <span class="correct"></span>`;
            result.classList.remove("wrong");
            result.classList.add("correct");
        } else {
            result.innerHTML = `❌ <span class="wrong">${correctAnswer}</span>`;
            result.classList.remove("correct");
            result.classList.add("wrong");
        }
        result.style.display = "inline";
    }
}