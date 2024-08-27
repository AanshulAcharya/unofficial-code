function handleMainDropdown() {
    const mainDropdown = document.getElementById('mainDropdown');
    const ciapOptions = document.getElementById('ciapOptions');
    const rubricsOptions = document.getElementById('rubricsOptions');
    const errorMessage = document.getElementById('errorMessage');

    if (mainDropdown.value === 'ESEP') {
        window.location.href = 'esep.html';
    } else if (mainDropdown.value === 'CIAP') {
        ciapOptions.style.display = 'block';
        rubricsOptions.style.display = 'none';
        errorMessage.style.display = 'none';
    } else {
        ciapOptions.style.display = 'none';
        rubricsOptions.style.display = 'none';
    }
}

function handleCIAPOptions() {
    const ciapDropdown = document.getElementById('ciapDropdown');
    const rubricsOptions = document.getElementById('rubricsOptions');

    if (ciapDropdown.value === 'Experiment') {
        window.location.href = 'experiment.html';
    } else if (ciapDropdown.value === 'Rubrics') {
        rubricsOptions.style.display = 'block';
    } else if (ciapDropdown.value === 'Attendance') {
        window.location.href = 'attendance.html';
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
    document.getElementById('ciapDropdown').value = '';
    document.getElementById('rubric1Dropdown').value = '';
    document.getElementById('rubric2Dropdown').value = '';
    document.getElementById('ciapOptions').style.display = 'none';
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
        case 'Assignments':
            window.location.href = 'assignment.html';
            break;
        case 'Tutorial':
            window.location.href = 'tutorial.html';
            break;
        case 'PPT':
            window.location.href = 'practicalppt.html';
            break;
        case 'Quiz':
            window.location.href = 'quiz.html';
            break;
        case 'Group Discussion':
            window.location.href = 'groupdiscussion.html';
            break;
        case 'Seminar Presentation':
            window.location.href = 'semppt.html';
            break;
        case 'Case Study':
            window.location.href = 'casestudy.html';
            break;
        case 'Design Thinking':
            window.location.href = 'design.html';
            break;
        case 'Innovation':
            window.location.href = 'innovation.html';
            break;
        case 'Creativity':
            window.location.href = 'creativity.html';
            break;
        case 'Project':
            window.location.href = 'project.html';
            break;
        case 'App Development':
            window.location.href = 'appdevelopment.html';
            break;
        default:
            break;
    }
}
