function calculateLoan() {
    loanAmount = document.getElementById("loan-amount").value;
    intrestRate = document.getElementById("intrest-rate").value;
    MonthsToPay = document.getElementById("months-to-pay").value;

    intrest = (loanAmount * (intrestRate * 0.01)) / MonthsToPay;
    monthlyPayment = (loanAmount / MonthsToPay + intrest).toFixed(2);
    document.getElementById("payment").innerHTML =
        `Monthly Payment: ${monthlyPayment}`;

}

