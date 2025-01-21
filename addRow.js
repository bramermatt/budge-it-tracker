document.addEventListener("DOMContentLoaded", function() {
    const addRowButton = document.getElementById("addRowButton");
    addRowButton.addEventListener("click", addRow);

    // Disable the button initially
    addRowButton.disabled = true;

    // Add event listeners to input fields to enable/disable the button based on validation
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    function validateForm() {
        const dateInput = document.querySelector('input[name="date"]').value;
        // Add keyboard shortcut for 't' to set today's date
        document.addEventListener('keydown', function(event) {
            if (event.key === 't' || event.key === 'T') {
                const today = new Date().toISOString().split('T')[0];
                document.querySelector('input[name="date"]').value = today;
                validateForm(); // Re-validate the form after setting the date
            }
        });
        const descriptionInput = document.querySelector('input[name="description"]').value;
        const amountInput = document.querySelector('input[name="amount"]').value;
        const categoryInput = document.querySelector('select[name="category"]').value;
        const paymentMethodInput = document.querySelector('select[name="payment-method"]').value;
        const recurringInput = document.querySelector('select[name="recurring"]').value;

        // Enable the button only if all required fields are filled out
        addRowButton.disabled = !(
            dateInput && descriptionInput && amountInput && categoryInput && paymentMethodInput && recurringInput
        );
    }
});

function addRow() {
    const table = document.querySelector("table tbody");
    const newRow = document.createElement("tr");

    const dateCell = document.createElement("td");
    const dateInput = document.querySelector('input[name="date"]').value;
    dateCell.textContent = dateInput;
    newRow.appendChild(dateCell);

    const descriptionCell = document.createElement("td");
    const descriptionInput = document.querySelector('input[name="description"]').value;
    descriptionCell.textContent = descriptionInput;
    newRow.appendChild(descriptionCell);

    const amountCell = document.createElement("td");
    const amountInput = document.querySelector('input[name="amount"]').value;
    amountCell.textContent = `$${parseFloat(amountInput).toFixed(2)}`;
    newRow.appendChild(amountCell);

    const categoryCell = document.createElement("td");
    const categoryInput = document.querySelector('select[name="category"]').value;
    categoryCell.textContent = categoryInput;
    newRow.appendChild(categoryCell);

    const paymentMethodCell = document.createElement("td");
    const paymentMethodInput = document.querySelector('select[name="payment-method"]').value;
    paymentMethodCell.textContent = paymentMethodInput;
    newRow.appendChild(paymentMethodCell);

    const recurringCell = document.createElement("td");
    const recurringInput = document.querySelector('select[name="recurring"]').value;
    recurringCell.textContent = recurringInput;
    newRow.appendChild(recurringCell);

    const balanceCell = document.createElement("td");
    balanceCell.textContent = ""; // Balance will be calculated separately
    newRow.appendChild(balanceCell);

    table.appendChild(newRow);

    // Clear the form after adding the row
    document.querySelector('form').reset();
    document.getElementById("addRowButton").disabled = true;
}