
  let expression = ""; // stores the current calculation

  function append(value) {
    expression += value;
    document.getElementById("result").textContent = expression;
  }

  function clearDisplay() {
    expression = "";
    document.getElementById("result").textContent = "0";
    document.getElementById("sub-display").textContent = "0";
  }

  function backspace() {
    expression = expression.slice(0, -1);
    document.getElementById("result").textContent = expression || "0";
  }

  function toggleSign() {
    if (expression) {
      if (expression.charAt(0) === "-") {
        expression = expression.slice(1);
      } else {
        expression = "-" + expression;
      }
      document.getElementById("result").textContent = expression;
    }
  }

  function calculate() {
    try {
      const evaluated = eval(expression);
      document.getElementById("sub-display").textContent = expression;
      document.getElementById("result").textContent = evaluated;
      expression = evaluated.toString();
    } catch (error) {
      document.getElementById("result").textContent = "Error";
    }
  }

  
// Interest Calculator Script
  
  // Event listener for the interest form
  document.getElementById("interest-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get user input values
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    // Get output display elements
    const resultDiv = document.getElementById("interest-result");
    const totalDiv = document.getElementById("total-amount");
    const errorDiv = document.getElementById("error-msg");

    // Clear previous messages
    resultDiv.textContent = "";
    totalDiv.textContent = "";
    errorDiv.textContent = "";

    // Input validation
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      errorDiv.textContent = "Please fill in all fields with valid numbers.";
      return;
    }
    if (principal <= 0 || rate <= 0 || time <= 0) {
      errorDiv.textContent = "Values must be greater than 0.";
      return;
    }

    // Calculate simple interest and total
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;

    // Display results
    resultDiv.textContent = `Simple Interest: ₹${interest.toFixed(2)}`;
    totalDiv.textContent = `Total Amount: ₹${total.toFixed(2)}`;
  });

  // Function to reset the form
  function resetForm() {
    document.getElementById("interest-form").reset();
    document.getElementById("interest-result").textContent = "";
    document.getElementById("total-amount").textContent = "";
    document.getElementById("error-msg").textContent = "";
  }

