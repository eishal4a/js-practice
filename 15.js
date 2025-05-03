const quizData = [
    { q: "2 + 2?", o: ["3", "4", "5"], a: 1 },
    { q: "Capital of France?", o: ["Paris", "London", "Berlin"], a: 0 }
  ];
  
  let current = 0;
  let score = 0;
  
  function loadQuiz() {
    const q = quizData[current];
    const quizBox = document.getElementById("quiz");
    quizBox.innerHTML = `<p>${q.q}</p>`;
    q.o.forEach((opt, i) => {
      quizBox.innerHTML += `<input type="radio" name="opt" value="${i}">${opt}<br>`;
    });
  }
  
  function next() {
    const selected = document.querySelector('input[name="opt"]:checked');
    if (selected && Number(selected.value) === quizData[current].a) score++;
    current++;
    if (current < quizData.length) loadQuiz();
    else document.getElementById("quiz").innerHTML = `Score: ${score}`;
  }
  
  loadQuiz();
  