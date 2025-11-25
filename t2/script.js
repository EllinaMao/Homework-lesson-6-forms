const correctAnswers = {
    "q1": "0", 
    "q2": "0",
    "q3": "0"  
};

function checkTest() {
    let score = 0;
    const total = Object.keys(correctAnswers).length;
    const form = document.forms['quiz'];
for (let key in correctAnswers) {
        const userAnswer = form[key].value; 
        if (userAnswer === correctAnswers[key]) {
            score++;
        }
    }


    document.getElementById('result').innerText = `Result: ${score} correct answers to ${total} questions`;
}