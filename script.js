var counters = [[], [], []];

function addCustomer() {
  var input = document.getElementById("iteminput");
  var items = parseInt(input.value);

  if (!items || items < 1) {
    alert("Please enter a valid number of items.");
    return;
  }

  var totals = counters.map(function (q) {
    var total = 0;
    for (var i = 0; i < q.length; i++) {
      total += q[i];
    }
    return total;
  });

  var min = Math.min(totals[0], totals[1], totals[2]);
  var index = totals.indexOf(min);

  counters[index].push(items);
  input.value = "";
  updateUI();
  updateCustomerCounts();
}
function updateCustomerCounts() {
  for (let i = 1; i <= 3; i++) {
    const q = document.getElementById(`q${i}`);
    const cc = q.children.length;
    const countDisplay = document.getElementById(`cc${i}`);
    countDisplay.textContent = `${cc} customers`;
  }
}
function updateUI() {
  for (var i = 0; i < 3; i++) {
    var qe = document.getElementById("q" + (i + 1));
    var totale = document.getElementById("total" + (i + 1));
    qe.innerHTML = "";
    var sum = 0;
    for (var j = 0; j < counters[i].length; j++) {
      var li = document.createElement("li");
      li.innerText = counters[i][j] + " items";
      qe.appendChild(li);
      sum += counters[i][j];
    }
    totale.innerText = "Total: " + sum;
  }
}
document.addEventListener("DOMContentLoaded", updateCustomerCounts);
