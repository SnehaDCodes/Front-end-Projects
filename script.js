let num1, num2, correctAnswer, operation;

// Function to generate a new question
function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    
    const operations = ['+', '-', '*', '/'];
    operation = operations[Math.floor(Math.random() * operations.length)];

    // Calculate correct answer
    switch (operation) {
        case '+': correctAnswer = num1 + num2; break;
        case '-': correctAnswer = num1 - num2; break;
        case '*': correctAnswer = num1 * num2; break;
        case '/': 
            num1 = num1 * num2; // Ensuring clean division
            correctAnswer = num1 / num2; 
            break;
    }

    document.getElementById("question").innerText = `What is ${num1} ${operation} ${num2}?`;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

// Function to check the answer
function checkAnswer() {
    let userAnswer = document.getElementById("answer").value;
    let result = document.getElementById("result");

    if (userAnswer === "") {
        result.innerText = "⚠️ Please enter an answer!";
        result.style.color = "orange";
        return;
    }

    if (parseFloat(userAnswer) === correctAnswer) {
        result.innerText = "✅ Correct! Well done!";
        result.style.color = "green";
    } else {
        result.innerText = `❌ Wrong! The correct answer is ${correctAnswer}.`;
        result.style.color = "red";
    }
}

// Initialize the first question
generateQuestion();
