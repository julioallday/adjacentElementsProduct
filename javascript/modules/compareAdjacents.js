export default function compareAdjacents(productList) {
    let biggestProduct = Math.max.apply(null, productList);
    return biggestProduct;
  }