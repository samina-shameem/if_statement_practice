//variables

const form = document.getElementById('gradeForm');
const resultDiv = document.getElementById('result');

//event listner for form submission

form.addEventListener('submit', function (event) {
    event.preventDefault();//prvent page refresh.

    //retrive i/p values
    const studentName = document.getElementById('studentName').value;
    const stuentScore = parseInt(document.getElementById('studentScore').value, 10);

    //check datatypes and valide score.
    if (typeof studentScore === 'number' && stuentScore >= 0 && stuentScore <= 100) {

        //determine grade using if conditions
        let grade;
        if (stuentScore >= 90) {
            grade = 'A';
        } else if (stuentScore >= 80) {
            grade = 'B';
        } else if (stuentScore >= 60) {
            grade = 'C';
        } else if (stuentScore >= 70) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        //display result using DOM manipulation
        resultDiv.innerHTML = `
          <p><strong>${studentName}</strong> scored <strong>${stuentScore}</strong>.</p>
          <p>Grade:<strong>${grade}</strong></p>
        `;

    }else{

        //error handling
        resultDiv.textContent = 'Please enter a valid score (0-100).';
    }
});