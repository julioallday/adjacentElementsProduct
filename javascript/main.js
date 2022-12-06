import validateInput from "./modules/validateInput.js";
import findBiggest from "./modules/findBiggest.js";

export default function main(document) {
  const elements = {
    input: {
      id: "input",
      class: "input",
    },
    output: {
      id: "output",
      class: "output",
    },
    button: {
      id: "enter",
      class: "",
    },
  };
  const state = {
    input: document.getElementById(elements.input.id),
    output: document.getElementById(elements.output.id),
  };
  const el_quantidadeInput = window.prompt(
    `Intstruções:
    Minimo 2, Máximo 10!
    Digite a quantidade de numeros que serão acrescentados na lista!
    `
  );
  const array = [];
  let renderInput = () => {
    if (el_quantidadeInput != undefined && el_quantidadeInput <= 10) {
      for (let i = 0; i < el_quantidadeInput; i++) {
        const el_numbersInput = window.prompt(
          `Instruções:
          Digite o valor que será guardado na ${i + 1}° posição da lista!
          Mínimo -1000, máximo 1000!   
        `
        );
        array[i] = parseInt(el_numbersInput);
      }
    }
  };

  renderInput();

  if (validateInput(array)) {
    let result = findBiggest(array);
    state.output.innerText = `Os números escolhidos foram: "${array}".
    O maior produto entre numeros adjacentes é ${result}!
    `;
    return result;
  }
  location.reload();
}
