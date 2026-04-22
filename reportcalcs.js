function calculateCholesterol() {
    const displayArea = document.getElementById('cholesterol-result');
    
    if (displayArea) {
        displayArea.innerHTML = "";
        displayArea.className = "result-box";
        displayArea.style.display = "none";
    }

    try {
        const total = parseFloat(document.getElementById('total-cholesterol').value);
        const ldl = parseFloat(document.getElementById('ldl-cholestrol').value);
        const hdl = parseFloat(document.getElementById('hdl-cholestrol').value);
        const triglycerides = parseFloat(document.getElementById('triglycerides').value);

        if (isNaN(total) || isNaN(ldl) || isNaN(hdl) || isNaN(triglycerides)) {
            throw new Error("Please enter all lipid values to get an analysis.");
        }

        if (total < 0 || ldl < 0 || hdl < 0 || triglycerides < 0) {
            throw new Error("Values cannot be negative.");
        }

        let resultHTML = "<strong>Cholesterol Analysis Result:</strong><br>";
        resultHTML += (total < 200) ? "✅ Total Cholesterol: Normal<br>" : "⚠️ Total Cholesterol: High<br>";
        resultHTML += (ldl < 100) ? "✅ LDL (Bad): Optimal<br>" : "⚠️ LDL (Bad): High<br>";
        resultHTML += (hdl > 60) ? "✅ HDL (Good): Excellent<br>" : "⚠️ HDL (Good): Low<br>";

        if (displayArea) {
            displayArea.innerHTML = resultHTML;
            displayArea.style.display = "block";
            displayArea.classList.add("success-box");
        }

    } catch (error) {
        if (displayArea) {
            displayArea.innerHTML = `<strong>Error:</strong> ${error.message}`;
            displayArea.style.display = "block";
            displayArea.classList.add("error-box");
        }
    }
}

function calculateDiabetes() {
    const displayArea = document.getElementById('diabetes-result');
    
    if (displayArea) {
        displayArea.innerHTML = "";
        displayArea.className = "result-box";
        displayArea.style.display = "none";
    }

    try {
        const glucose = parseFloat(document.getElementById('fasting-glucose').value);

        if (isNaN(glucose)) {
            throw new Error("Please enter your fasting glucose level.");
        }

        if (glucose < 0) {
            throw new Error("Glucose level cannot be negative.");
        }

        let resultHTML = "<strong>Diabetes Screening Result:</strong><br>";
        if (glucose < 100) resultHTML += "✅ Fasting glucose: Normal<br>";
        else if (glucose <= 125) resultHTML += "⚠️ Fasting glucose: Prediabetes range<br>";
        else resultHTML += "🛑 Fasting glucose: Diabetes range<br>";

        if (displayArea) {
            displayArea.innerHTML = resultHTML;
            displayArea.style.display = "block";
            displayArea.classList.add("success-box");
        }

    } catch (error) {
        if (displayArea) {
            displayArea.innerHTML = `<strong>Error:</strong> ${error.message}`;
            displayArea.style.display = "block";
            displayArea.classList.add("error-box");
        }
    }
}

// Function to handle result clearing during reset
function resetResults(id) {
    const displayArea = document.getElementById(id);
    if (displayArea) {
        displayArea.innerHTML = "";
        displayArea.style.display = "none";
        displayArea.className = "result-box";
    }
}
