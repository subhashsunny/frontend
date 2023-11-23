// function payment() {
//     return (
//         <div>
//             <form action='/charge' method='POST' id='checkout-form'>
//                 <input type='hidden' th:value='${amount}' name='amount' />
//                 <label>Price:<span th:text='${amount/100}' /></label>
//                 <script
//                     src='https://checkout.stripe.com/checkout.js'
//                     class='stripe-button'
//                     th: attr='data-key=${stripePublicKey}, 
//                                 data-amount=${amount}, 
//                                     data-currency=${currency}'
//                     data-name='Infinite Store'
//                     data-description='Checkout'
//                     data-image
//                     ='infinitelogo.png'
//                     data-locale='auto'
//                     data-zip-code='false'>
//                 </script>
//             </form>
//         </div>
//     );
// }
// export default payment();