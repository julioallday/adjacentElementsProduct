import compareAdjacents from "./compareAdjacents.js";
import multiply from "./multiply.js";


export default function findBiggest(array) {
    const multiplicationProducts = [];
    for (let i = 0; i < array.length - 1; i++) {
      let product = multiply(array[i], array[i + 1]);
      multiplicationProducts.push(product);
    }
    return compareAdjacents(multiplicationProducts);
  }