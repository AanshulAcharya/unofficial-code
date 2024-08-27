// Assuming the student details are the same as provided in the student.html file

// Hardcoded student data as per the provided student.html
const students = [
    { rollNo: '101', name: 'John Doe' },
    { rollNo: '102', name: 'Jane Smith' },
    { rollNo: '103', name: 'Jane' },
    { rollNo: '104', name: 'Devashree' }
];

// Dynamically add student rows to the table
const studentRows = document.getElementById('studentRows');
students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${student.rollNo}</td>
        <td>${student.name}</td>
        <td><input type="number" class="marksInput" min="0" max="10" step="1"></td>
    `;
    studentRows.appendChild(row);
});

// Add event listener for marks validation
document.querySelectorAll('.marksInput').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0 || this.value > 10) {
            alert('Please enter a mark between 0 and 10.');
            this.value = ''; // Clear the invalid input
        }
    });
});