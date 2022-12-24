"use strict";
const numKey = document.querySelectorAll(".number");
const calculator = document.querySelector(".calculator");
const keypads = document.querySelectorAll(".keypad");
const display = document.querySelector(".screen");
const themeBtn = document.querySelector(".toggle-btns");
const btnToggleChildren = document.querySelectorAll(".toggle");
const root = document.querySelector(":root");

themeBtn.addEventListener("click", function (e) {
  const btnToggle = e.target;

  if (!btnToggle.matches("button")) return;

  btnToggleChildren.forEach((btn) => {
    btn.classList.remove("theme-active");
  });

  btnToggle.classList.add("theme-active");
  const currentTheme = document.querySelector(".theme-active");
  const eDeyHott = currentTheme.getAttribute("data-theme");
  let mainBkg,
    kpdBkg,
    scrnBkg,
    mainKeyVar1,
    kpdShdwVar1,
    mainKeyVar2,
    kpdShdwVar2,
    mainKeyVar3,
    kpdShdwVar3,
    clrTxt900;

  if (eDeyHott === "1") {
    mainBkg = getComputedStyle(root).getPropertyValue("--clr-main-bkg-1");
    root.style.setProperty("--clr-kpd-bkg-1", "hsl(222, 26%, 31%)");

    kpdBkg = getComputedStyle(root).getPropertyValue("--clr-kpd-bkg-1");
    root.style.setProperty("--clr-kpd-bkg-1", "hsl(223, 31%, 20%)");

    scrnBkg = getComputedStyle(root).getPropertyValue("--clr-scrn-bkg-1");
    root.style.setProperty("--clr-scrn-bkg-1", "hsl(224, 36%, 15%)");

    mainKeyVar1 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var1-1"
    );
    root.style.setProperty("--clr-main-key-var1-1", "hsl(225, 21%, 49%)");

    kpdShdwVar1 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var1-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var1-1", "hsl(224, 28%, 35%)");

    mainKeyVar2 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var2-1"
    );
    root.style.setProperty("--clr-main-key-var2-1", "hsl(6, 63%, 50%)");

    kpdShdwVar2 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var2-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var2-1", "hsl(6, 70%, 34%)");

    mainKeyVar3 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var3-1"
    );
    root.style.setProperty("--clr-main-key-var3-1", "hsl(30, 25%, 89%)");

    kpdShdwVar3 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var3-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var3-1", "hsl(28, 16%, 65%)");

    clrTxt900 = getComputedStyle(root).getPropertyValue("--clr-txt-900-1");
    root.style.setProperty("--clr-txt-900-1", "hsl(221, 14%, 31%)");
  }
  if (eDeyHott === "2") {
    mainBkg = getComputedStyle(root).getPropertyValue("--clr-main-bkg-1");
    root.style.setProperty("--clr-main-bkg-1", "hsl(0, 0%, 90%)");

    kpdBkg = getComputedStyle(root).getPropertyValue("--clr-kpd-bkg-1");
    root.style.setProperty("--clr-kpd-bkg-1", "hsl(0, 5%, 81%)");

    scrnBkg = getComputedStyle(root).getPropertyValue("--clr-scrn-bkg-1");
    root.style.setProperty("--clr-scrn-bkg-1", "hsl(0, 0%, 93%)");

    mainKeyVar1 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var1-1"
    );
    root.style.setProperty("--clr-main-key-var1-1", "hsl(185, 42%, 37%)");

    kpdShdwVar1 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var1-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var1-1", "hsl(185, 58%, 25%)");

    mainKeyVar2 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var2-1"
    );
    root.style.setProperty("--clr-main-key-var2-1", "hsl(25, 98%, 40%)");

    kpdShdwVar2 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var2-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var2-1", "hsl(25, 99%, 27%)");

    mainKeyVar3 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var3-1"
    );
    root.style.setProperty("--clr-main-key-var3-1", "hsl(45, 7%, 89%)");

    kpdShdwVar3 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var3-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var3-1", "hsl(35, 11%, 61%)");

    clrTxt900 = getComputedStyle(root).getPropertyValue("--clr-txt-900-1");
    root.style.setProperty("--clr-txt-900-1", "hsl(35, 11%, 61%)");
  }
  if (eDeyHott === "3") {
    mainBkg = getComputedStyle(root).getPropertyValue("--clr-main-bkg-1");
    root.style.setProperty("--clr-kpd-bkg-1", "hsl(268, 75%, 9%)");

    kpdBkg = getComputedStyle(root).getPropertyValue("--clr-kpd-bkg-1");
    root.style.setProperty("--clr-kpd-bkg-1", "hsl(268, 71%, 12%)");

    scrnBkg = getComputedStyle(root).getPropertyValue("--clr-scrn-bkg-1");
    root.style.setProperty("--clr-scrn-bkg-1", "hsl(268, 71%, 12%)");

    mainKeyVar1 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var1-1"
    );
    root.style.setProperty("--clr-main-key-var1-1", "hsl(281, 89%, 26%)");

    kpdShdwVar1 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var1-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var1-1", "hsl(285, 91%, 52%)");

    mainKeyVar2 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var2-1"
    );
    root.style.setProperty("--clr-main-key-var2-1", "hsl(176, 100%, 44%)");

    kpdShdwVar2 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var2-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var2-1", "hsl(177, 92%, 70%)");

    mainKeyVar3 = getComputedStyle(root).getPropertyValue(
      "--clr-main-key-var3-1"
    );
    root.style.setProperty("--clr-main-key-var3-1", "hsl(268, 47%, 21%)");

    kpdShdwVar3 = getComputedStyle(root).getPropertyValue(
      "--clr-kpd-shdw-var3-1"
    );
    root.style.setProperty("--clr-kpd-shdw-var3-1", "hsl(290, 70%, 36%)");

    clrTxt900 = getComputedStyle(root).getPropertyValue("--clr-txt-900-1");
    root.style.setProperty("--clr-txt-900-1", "hsl(52, 100%, 62%)");
  }
});

calculator.addEventListener("click", function (e) {
  const keyPressed = e.target;
  const input = keyPressed.textContent;
  const previousKeyType = calculator.dataset.previousKeyType;
  const action = keyPressed.dataset.action;
  const displayNum = display.textContent;

  /* to remove depressed state from arithmetic keys */
  Array.from(keyPressed.parentNode.children).forEach((key) =>
    key.classList.remove("isDepressed")
  );

  keypads.forEach((key) => {
    /* to prevent calculator from acting weird when the e.target [keyPressed] is missed  */
    if (key.classList !== keyPressed.classList) return;

    /* number keys */

    if (!action) {
      displayNum === "0"
        ? (display.textContent = input)
        : (display.textContent = displayNum + input);
      calculator.dataset.previousKey = "number";
    }

    if (action === "decimal") {
      /* decimal key */
      display.textContent = displayNum + ".";
      calculator.dataset.previousKey = "decimal";
    }

    if (action === "decimal") {
      if (!displayNum.includes(".")) {
        display.textContent = displayNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }

      calculator.dataset.previousKeyType = "decimal";
    }

    /* reset key */
    if (action === "clear") {
      display.textContent = "0";
      calculator.dataset.previousKeyType = "clear";
    }

    /* arithmetic key */
    if (
      action === "add" ||
      action === "subtract" ||
      action === "divide" ||
      action === "multiply"
    ) {
      calculator.dataset.firstValue = displayNum;
      calculator.dataset.operator = action;
      calculator.dataset.previousKeyType = "operator";
      keyPressed.classList.add("isDepressed");
      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "equals"
      ) {
        const calcValue = calc(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayNum;
      }
    }

    if (!action) {
      if (displayNum === "0" || previousKeyType === "operator") {
        display.textContent = input;
      } else display.textContent = displayNum + input;

      if (
        displayNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = input;
      } else {
        display.textContent = displayNum + input;
      }

      calculator.dataset.previousKeyType = "number";
    }

    /* result */
    const calc = function (fVal, oprtr, sVal) {
      let result = "";
      if (oprtr === "add") result = parseFloat(fVal) + parseFloat(sVal);
      if (oprtr === "subtract") result = parseFloat(fVal) - parseFloat(sVal);
      if (oprtr === "divide") result = parseFloat(fVal) / parseFloat(sVal);
      if (oprtr === "multiply") result = parseFloat(fVal) * parseFloat(sVal);

      return result;
    };

    if (action === "equals") {
      let firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayNum;

      if (firstValue) {
        if (previousKeyType === "equals") {
          firstValue = displayNum;
          secondValue = calculator.dataset.modValue;
        }

        display.textContent = calc(firstValue, operator, secondValue);
      }

      // Set modValue attribute
      calculator.dataset.modValue = secondValue;
      calculator.dataset.previousKeyType = "equals";
    }
  });
});
