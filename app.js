const counterValue = document.querySelector(".counter__value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let count = Number(counterValue.textContent);
        const classList = btn.classList;

        if (classList.contains("increment")) count++;
        else if (classList.contains("decrement")) count--;
        else count = 0;

        counterValue.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
        counterValue.textContent = count;
    });
});