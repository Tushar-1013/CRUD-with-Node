function toggleDropdown(userId) {
    const dropdown = document.getElementById(`dropdown-${userId}`);
    dropdown.classList.toggle('show');
  }
  
  function calculateTotal(userId) {
    const dropdown = document.getElementById(`dropdown-${userId}`);
    const select = dropdown.querySelector('select');
    let total = 0;
  
    for (let option of select.selectedOptions) {
      total += parseFloat(option.value);
    }
  
    document.getElementById(`total-${userId}`).textContent = total.toFixed(2);
  }
  
  function acceptPayment(userId) {
    const totalAmount = document.getElementById(`total-${userId}`).textContent;
    alert(`Payment of $${totalAmount} for user ${userId} has been accepted.`);
    document.getElementById(`dropdown-${userId}`).classList.remove('show');
  }
  
  function declinePayment(userId) {
    alert(`Payment for user ${userId} has been declined.`);
    document.getElementById(`dropdown-${userId}`).classList.remove('show');
  }
  