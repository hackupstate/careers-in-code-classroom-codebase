export function calculateTotal(cartItems, salesTax) {
    let total = 0
    for (const item of cartItems) {
        total += item.price
    }
    return total
}
