document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('SubjectModal');
    const closeModalBtn = modal.querySelector('.close');
    const subjectForm = document.getElementById('SubjectForm');
    const subjectTableBody = document.querySelector('#SubjectTable tbody');

    // Open the modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    subjectForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get form values
        const subject = document.getElementById('Subject').value;
        const teacher = document.getElementById('Teacher').value;
        const duration = document.getElementById('Duration').value;

        // Create a new row for the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${subject}</td>
            <td>${teacher}</td>
            <td>${duration}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        subjectTableBody.appendChild(newRow);

        // Clear form fields
        subjectForm.reset();

        // Close the modal
        modal.style.display = 'none';
    });

    // Handle delete button click
    subjectTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.remove();
        }
    });
});
