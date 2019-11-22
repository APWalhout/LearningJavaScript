//accept score, total possible score
//generate letter grade and percentage obtained
let gradeCalc = function (score, total)
{
    let percent = (score/total) * 100;
    return `Grade is: ${}, obtaining a score of ${}% from ${score}/${total} correct answers.`;
}