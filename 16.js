function calcTip() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tip = parseFloat(document.getElementById("tip").value);
    const total = bill + (bill * tip / 100);
    document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
  }
  