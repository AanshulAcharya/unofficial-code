// Student data from student.html
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
        <td><input type="number" class="marksInput" min="0" max="5" step="1"></td>
    `;
    studentRows.appendChild(row);
});

// Add event listener for marks validation
document.querySelectorAll('.marksInput').forEach(input => {
    input.addEventListener('input', function() {
        if (this.value < 0 || this.value > 5) {
            alert('Please enter a mark between 0 and 5.');
            this.value = ''; // Clear the invalid input
        }
    });
});



