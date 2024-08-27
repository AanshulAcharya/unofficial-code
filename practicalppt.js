window.onload = function() {
    fetch('student.html')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const students = doc.querySelectorAll('#studentTable tbody tr');

            const tbody = document.querySelector('#rubricTable tbody');

            students.forEach(student => {
                const rollNumber = student.children[0].innerText;
                const name = student.children[1].innerText;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${rollNumber}</td>
                    <td>${name}</td>
                    <td><input type="number" max="4" min="0" data-max="4" oninput="validateAndCalculate(this)"></td>
                    <td><input type="number" max="4" min="0" data-max="4" oninput="validateAndCalculate(this)"></td>
                    <td><input type="number" max="4" min="0" data-max="4" oninput="validateAndCalculate(this)"></td>
                    <td><input type="number" max="4" min="0" data-max="4" oninput="validateAndCalculate(this)"></td>
                    <td><input type="number" max="2" min="0" data-max="2" oninput="validateAndCalculate(this)"></td>
                    <td><input type="number" max="2" min="0" data-max="2" oninput="validateAndCalculate(this)"></td>
                    <td><span class="total-marks">0</span></td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading student data:', error));
};

function validateAndCalculate(input) {
    const max = parseInt(input.getAttribute('data-max'), 10);
    const value = parseInt(input.value, 10);

    if (value < 0 || value > max || isNaN(value)) {
        showPopup(`Error: Marks for should be between 0 and ${max}.`);
        input.value = ''; // Clear the input
    } else {
        calculateTotal(input.closest('tr'));
    }
}

function calculateTotal(row) {
    const inputs = row.querySelectorAll('input[type="number"]');
    let total = 0;

    inputs.forEach(input => {
        const value = parseInt(input.value, 10);
        if (!isNaN(value)) {
            total += value;
        }
    });

    row.querySelector('.total-marks').innerText = total;
}

function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    
    popupMessage.innerText = message;
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
