function calculateDiscountedAmount(amount, discount) {
    const discountedAmount = amount - (amount * discount);
    return discountedAmount.toFixed(2);
}
const amount = 87;
const discount = 0.045; 

const finalAmount = calculateDiscountedAmount(amount, discount);

console.log(`Amount after discount = $${finalAmount}`);
