//accept score, total possible score
//generate letter grade and percentage obtained
const gradeCalc = function (score, total)
{
    const percent = (score/total) * 100;
    let grade = 'NA';

    //could individually put returns in the ifs to end the function
    //however, makes redundant lines of code and is more than necessary to read
    if (percent >= 90)
    {
        grade = 'A';
    } else if (percent >= 80) {
        grade = 'B';
    } else if (percent >= 70) {
        grade = 'C';
    } else if (percent >= 60){
        grade = 'D';
    } else {
        grade = 'F';
    }

    return `Grade is: ${grade}, obtaining a score of ${percent}% from ${score}/${total} correct answers.`;
}
//tests
console.log('Expect A:');
console.log(gradeCalc(90, 100));
console.log('Expect C:');
console.log(gradeCalc(73.5, 100));
console.log('Expect F:');
console.log(gradeCalc(20, 675));