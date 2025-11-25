document.addEventListener("DOMContentLoaded", () => {   
     const btn = document.getElementById("btn-show");
    
    const textArea = document.getElementById("text-area");
    const resultBox = document.getElementById("output-text");
    const boldCheck = document.getElementById("font-bold");
    const underlineCheck = document.getElementById("font-underline");
    const italicsCheck = document.getElementById("font-italics");

    btn.addEventListener("click", () => {
        resultBox.textContent = textArea.value;

        resultBox.style.fontWeight = boldCheck.checked ? "bold" : "normal";
        resultBox.style.textDecoration = underlineCheck.checked ? "underline" : "none";
        resultBox.style.fontStyle = italicsCheck.checked ? "italic" : "normal";

        const selectedAlign = document.querySelector('input[name="align"]:checked');

        if (selectedAlign) {
            resultBox.style.textAlign = selectedAlign.value;
        }
    });
});