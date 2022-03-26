const disp = document.querySelector("#disp");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      disp.innerText = "";
    } else if (item.id == "backspace") {
      let string = disp.innerText.toString();
      disp.innerText = string.substr(0, string.length - 1);
    } else if (disp.innerText != "" && item.id == "equal") {
      disp.innerText = eval(disp.innerText);
    } else if (disp.innerText == "" && item.id == "equal") {
      disp.innerText = "Empty!";
      setTimeout(() => (disp.innerText = ""), 2000);
    } else {
      disp.innerText += item.id;
    }
  };
});

const themeToggBtn = document.querySelector(".theme-togg");
const calctor = document.querySelector(".calctor");
const toggIcon = document.querySelector(".togg-icon");
let isDark = true;
themeToggBtn.onclick = () => {
  calctor.classList.toggle("dark");
  themeToggBtn.classList.toggle("active");
  isDark = !isDark;
};
