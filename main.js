
// calculator

  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll("[data-value]");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (value === "AC") {
        screen.value = "";
      } else if (value === "DEL") {
        screen.value = screen.value.slice(0, -1);
      } else if (value === "=") {
        try {
          screen.value = eval(screen.value);
        } catch {
          screen.value = "Error";
        }
      } else {
        screen.value += value;
      }
    });
  });

  



