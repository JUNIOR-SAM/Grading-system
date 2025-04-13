function gradeScore() {
    const score = grading.value;
    let grade = parseInt(score);
    if ( grade >= 75  && grade <= 100) {
        gradeSystem.innerHTML = 'A - Excellent 😂😂😂 <br> keep it up'
    }
    else if ( grade >= 70 && grade <= 74) {
        gradeSystem.innerHTML = 'AB - Very Good 👍 <br> Great job!'
    }
    else if ( grade >= 65 && grade <= 69) {
    gradeSystem.innerHTML = 'B - Good  😊 <br> Well done!'
    }
    else if ( grade >= 60 && grade <= 64) {
        gradeSystem.innerHTML = 'BC - Credit 😌 <br> Nice effort!'
    }
    else if ( grade >= 55 && grade <= 59) {
    gradeSystem.innerHTML = 'C - Credit 🙂 <br> You can do better!'
    }
    else if ( grade >= 50 && grade <= 54) {
        gradeSystem.innerHTML = 'CD - Credit 😐<br>  Keep improving!'
    }
    else if (grade >= 45 && grade <= 49) {
    gradeSystem.innerHTML = 'D - Pass  😅<br>  Barely made it!'
    }
    else if ( grade >= 40 && grade <= 44) {
    gradeSystem.innerHTML = 'E - Pass 😓 <br> Try harder next time!'
    }
    else if ( grade >= 0 && grade <= 39) {
    gradeSystem.innerHTML = 'F - Fail 😭😭😭 <br> Don’t give up!'
    }
    else {
        gradeSystem.innerHTML = 'invalid score ❌❌❌' ; 
    }
}