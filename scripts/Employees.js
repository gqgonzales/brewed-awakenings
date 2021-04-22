import { getEmployees, getOrders } from "./database.js";

// Viewing products sold by employee on Click (adapted from DeShawn Dog Walking)

/*
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, employeeId] = itemClicked.id.split("--");

    for (const employee of employees) {
      let soldItems = itemsSold();
      if (employee.id === parseInt(employeeId)) {
        window.alert(`${employee.name} has sold ${soldItems} products.`);
      }
    }
  }
});

const itemsSold = () => {
  for (const order of orders) {
    
  }
}
*/

// Below is using the filter method (All thanks to Devin)

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("employee")) {
    const [, employeeId] = itemClicked.id.split("--");

    for (const employee of employees) {
      if (employee.id === parseInt(employeeId)) {
        const employeeOrders = orders.filter((order) => {
          if (order.employeeId === employee.id) {
            return true;
          }
        });
        console.log(employeeOrders);

        window.alert(
          ` ${employee.name} sold ${employeeOrders.length} products `
        );
      }
    }
  }
});

// Original code below

const employees = getEmployees();
const orders = getOrders();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li id="employee--${employee.id}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};
