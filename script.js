const music1 = new Audio('audio/grade A.mp3');
const music2 = new Audio('audio/grade B.mp3');
const music3 = new Audio('audio/grade C.mp3');
const music4 = new Audio('audio/none.mp3');

function stopAllMusic() {
    [music1, music2, music3, music4].forEach(music => {
        music.pause();
        music.currentTime = 0;
    });
}

function gradeScore() {
    const score = grading.value;
    let grade = parseInt(score);

    if (isNaN(grade)) {
        gradeSystem.innerHTML = 'Please enter a valid number';
        grading.value = "";
        return;
    }

    if (grade >= 75 && grade <= 100) {
        gradeSystem.innerHTML = 'A - Excellent 😂😂😂 <br> keep it up';
        gradeSystem.style.backgroundColor='green'
        gradeSystem.style.color='white'
        gradeSystem.style.fontStyle='italic'
        gradeSystem.style.fontSize='18px'
        gradeSystem.style.height='60px'
        gradeSystem.style.paddingTop='5px'
        music1.play();
    }
    else if (grade >= 70 && grade <= 74) {
        gradeSystem.innerHTML = 'AB - Very Good 👍 <br> Great job!';
        gradeSystem.style.backgroundColor='blue'
        gradeSystem.style.color='white'
        gradeSystem.style.fontStyle='italic'
        gradeSystem.style.fontSize='18px'
        gradeSystem.style.height='60px'
        gradeSystem.style.paddingTop='5px'

        music2.play();
    }
    else if (grade >= 65 && grade <= 69) {
        gradeSystem.innerHTML = 'B - Good  😊 <br> Well done!';
        gradeSystem.style.backgroundColor='yellow'
        gradeSystem.style.color='black'
        gradeSystem.style.fontStyle='italic'
        gradeSystem.style.fontSize='18px'
        gradeSystem.style.height='70px'
        music3.play();
    }
    else if (grade >= 60 && grade <= 64) {
        gradeSystem.innerHTML = 'BC - Credit 😌 <br> Nice effort!';
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
        gradeSystem.style.backgroundColor='red'
        gradeSystem.style.color='white'
        gradeSystem.style.fontStyle='italic'
        gradeSystem.style.fontSize='18px'
        gradeSystem.style.height='55px'
        gradeSystem.style.paddingTop='5px'
    }
    else {
        gradeSystem.innerHTML = 'invalid score ❌❌❌' ;
        gradeSystem.style.backgroundColor='red'
        gradeSystem.style.color='white'
        gradeSystem.style.fontStyle='italic'
        gradeSystem.style.fontSize='18px'
        gradeSystem.style.height='55px'
        music4.play(); 
        music1.pause(); 
    }
}