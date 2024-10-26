const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check if either input is empty
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Check if divider is zero
  if (divider === '0') {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error(new Error("Division by zero attempted"), new Error().stack);
    return;
  }

  // Check if inputs are not numbers
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
    console.error(new Error("Non-numeric input provided"), new Error().stack);
    return;
  }

  // Perform the division if all checks are passed
  const resultValue = (dividend / divider).toFixed();
  result.innerText = ` ${resultValue}`;
});