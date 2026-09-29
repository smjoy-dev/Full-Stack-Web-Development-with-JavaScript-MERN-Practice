const API_KEY = "";
// sk-proj-3zFrXz-X9EW5J4ZEKlQH4zgUrMGS2ur-882blpav4aUcNHKQCVzgtwcOY-DQxoX6v_

async function askAI(){

    const question = document.getElementById("question")
    const answerBox = document.getElementById("answer")

    answerBox.innerHTML = "Loading...";

    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` // eta na dile api response korbe na
        },
        body: JSON.stringify({
            model: "gpt-40-mini",
            // message:[{role: "user", content: question.value}],
            prompt: question.value,
            max_tokens: 100
        })
    });

    const data = await response.json();
    // answerBox.innerHTML = data.choices[0].text;
    answerBox.innerHTML = data.choices[0].message.content;
    question.value = "";
    
}