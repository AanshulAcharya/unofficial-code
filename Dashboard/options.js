function handleMainDropdown() {
    const mainDropdown = document.getElementById('mainDropdown');
    const cceOptions = document.getElementById('cceOptions');
    const rubricsOptions = document.getElementById('rubricsOptions');
    const errorMessage = document.getElementById('errorMessage');

    if (mainDropdown.value === 'MSE') {
        window.location.href = 'mse.html';
    } else if (mainDropdown.value === 'CCE') {
        cceOptions.style.display = 'block';
        rubricsOptions.style.display = 'none';
        errorMessage.style.display = 'none';
    } else {
        cceOptions.style.display = 'none';
        rubricsOptions.style.display = 'none';
    }
}

function handleCCEOptions() {
    const cceDropdown = document.getElementById('cceDropdown');
    const rubricsOptions = document.getElementById('rubricsOptions');

    if (cceDropdown.value === 'Attendance') {
        window.location.href = 'cceattendance.html';
    } else if (cceDropdown.value === 'Rubrics') {
        rubricsOptions.style.display = 'block';
    } else {
        rubricsOptions.style.display = 'none';
    }
}

function checkDuplicates() {
    const rubric1 = document.getElementById('rubric1Dropdown').value;
    const rubric2 = document.getElementById('rubric2Dropdown').value;
    const errorMessage = document.getElementById('errorMessage');
    const fixButton = document.getElementById('fixButton');

    if (rubric1 && rubric2 && rubric1 === rubric2) {
        errorMessage.style.display = 'block';
        fixButton.disabled = true;
    } else {
        errorMessage.style.display = 'none';
        fixButton.disabled = false;
    }
}

function fixChoices() {
    const goToButtons = document.getElementById('goToButtons');
    goToButtons.style.display = 'block';
}

function resetSelections() {
    document.getElementById('mainDropdown').value = '';
    document.getElementById('cceDropdown').value = '';
    document.getElementById('rubric1Dropdown').value = '';
    document.getElementById('rubric2Dropdown').value = '';
    document.getElementById('cceOptions').style.display = 'none';
    document.getElementById('rubricsOptions').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('goToButtons').style.display = 'none';
    document.getElementById('fixButton').disabled = false;
}

function goToPage(rubric) {
    const rubric1 = document.getElementById('rubric1Dropdown').value;
    const rubric2 = document.getElementById('rubric2Dropdown').value;
    let selectedRubric;

    if (rubric === 'rubric1') {
        selectedRubric = rubric1;
    } else {
        selectedRubric = rubric2;
    }

    switch (selectedRubric) {
        case 'Presentation':
            window.location.href = 'presentation.html';
            break;
        case 'Discussion':
            window.location.href = 'discussion.html';
            break;
        case 'Seminar':
            window.location.href = 'seminar.html';
            break;
        case 'Quiz':
            window.location.href = 'quiz.html';
            break;
        case 'Case Study':
            window.location.href = 'casestudy.html';
            break;
        case 'Design':
            window.location.href = 'design.html';
            break;
        case 'Innovation':
            window.location.href = 'innovation.html';
            break;
        default:
            break;
    }
}
