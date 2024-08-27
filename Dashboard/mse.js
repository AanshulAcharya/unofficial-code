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
                    <td><input type="number" max="20" min="0" oninput="validateMarks(this)"></td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading student data:', error));
};

function validateMarks(input) {
    const value = parseInt(input.value);
    if (value > 20 || value < 0) {
        showPopup("Please enter a valid mark (0-20).");
        input.value = '';
    }
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
