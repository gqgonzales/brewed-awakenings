// import { getEmployees } from "./database.js";
// import { getOrders } from "./database.js";

// const orders = getOrders();
// const employees = getEmployees();

// document.addEventListener("click", (clickEvent) => {
//   const itemClicked = clickEvent.target;
//   if (itemClicked.id.startsWith("employee")) {
//     const [, employeeId] = itemClicked.id.split("--");

//     for (const employee of employees) {
//       if (employee.id === parseInt(employeeId)) {
//         const employeeOrders = orders.filter(
//           // <--- Go to YouTube and search "javascript array filter"
//           (order) => {
//             if (order.employeeId === employee.id) {
//               return true;
//             }
//           }
//         );
//         console.log(employeeOrders);

//         window.alert(
//           ` ${employee.name} sold ${employeeOrders.length} products `
//         );
//       }
//     }
//   }
// });
