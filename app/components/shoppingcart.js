
// import React from 'react';

// function CartPage({ cart }) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-8 max-w-md w-full rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id} className="mb-4 border-b border-gray-300 pb-2">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-bold">{item.name}</p>
//                   <p>Price: {item.price}</p>
//                   <p>Quantity: {item.quantity}</p>
//                 </div>
//                 <div>
//                   <button className="text-red-500">Remove</button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="mt-4">
//           <p className="font-bold">Total:</p>
//           <p>{calculateTotal(cart)}</p>
//         </div>
//         <button className="bg-lightgreen text-white px-4 py-2 mt-4 hover:bg-darkgreen">
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

// function calculateTotal(cart) {
//   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
// }

// export default CartPage;