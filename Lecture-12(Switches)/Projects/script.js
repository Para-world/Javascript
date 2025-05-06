const baseQuestions = [
    { question: "What is 2 + 2?", options: ["4", "3"], correct: "4" },
    { question: "Which is a constant in JS?", options: ["const", "var"], correct: "const" },
    { question: "What does Math.random() return?", options: ["0-1", "1-10"], correct: "0-1" },
    { question: 'Is 10 == "10" true?', options: ["yes", "no"], correct: "yes" },
    { question: "Which one is a conditional operator?", options: ["?", "if"], correct: "?" }
  ];
  
  const bonusPool = [
    { question: "What is the typeof null?", options: ["object", "null"], correct: "object" },
    { question: "What is 5 + '5' in JS?", options: ["55", "10"], correct: "55" },
    { question: "What keyword defines a block-scoped variable?", options: ["let", "var"], correct: "let" }
  ];
  
  let quizData = [];
  let timer;
  let timeLeft = 60;
  
  function startQuiz() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
      alert("Please enter your name!");
      return;
    }
  
    // Add random bonus question
    const bonus = bonusPool[Math.floor(Math.random() * bonusPool.length)];
    quizData = [...baseQuestions, bonus];
  
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-form").classList.remove("hidden");
    document.getElementById("timer").classList.remove("hidden");
  
    generateQuestions();
    startTimer();
  }
  
  function generateQuestions() {
    const wrapper = document.getElementById("questions-wrapper");
    wrapper.innerHTML = "";
  
    quizData.forEach((q, index) => {
      const block = document.createElement("div");
      block.className = "space-y-2";
  
      const qTitle = document.createElement("p");
      qTitle.className = "font-semibold text-gray-800";
      qTitle.innerHTML = `${index + 1}. ${q.question}`;
      block.appendChild(qTitle);
  
      q.options.forEach(opt => {
        const label = document.createElement("label");
        label.className = "block";
        label.innerHTML = `<input type="radio" name="q${index}" value="${opt}" class="mr-2" />${opt}`;
        block.appendChild(label);
      });
  
      wrapper.appendChild(block);
    });
  }
  
  function startTimer() {
    timeLeft = 60;
    document.getElementById("time-left").textContent = timeLeft;
  
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("time-left").textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        submitQuiz(true); // auto-submit
      }
    }, 1000);
  }
  
  function submitQuiz(autoSubmitted = false) {
    clearInterval(timer);
  
    let score = 0;
    quizData.forEach((q, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && selected.value === q.correct) {
        score++;
      }
    });
  
    const percent = parseInt((score / quizData.length) * 100);
  
    document.getElementById("quiz-form").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("timer").classList.add("hidden");
  
    document.getElementById("score-text").textContent = 
      `Your Score: ${score}/${quizData.length} → ${percent}%${autoSubmitted ? " (Auto Submitted)" : ""}`;
  
    // Ternary + Switch
    let feedback = "";
    switch (true) {
      case percent === 100:
        feedback = "💯 Perfect score!";
        break;
      case percent >= 80:
        feedback = "🎉 Great job!";
        break;
      case percent >= 60:
        feedback = "👍 Good effort!";
        break;
      default:
        feedback = "📘 Keep practicing!";
    }
    document.getElementById("feedback-text").textContent = feedback;
  }
  
  function resetQuiz() {
    clearInterval(timer);
    document.getElementById("username").value = "";
    document.getElementById("start-screen").classList.remove("hidden");
    document.getElementById("quiz-form").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("timer").classList.add("hidden");
  }
  