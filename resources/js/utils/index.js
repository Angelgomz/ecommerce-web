/**
 * This function calculates total prices of a new order;
 * @param {Array} products cartProduct: Aray of Object
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
    return products.reduce((sum, product)=> sum + product.cant * product.price, 0).toFixed(2);
};
