//simple quiz
//
//has to ask 5 questions
//keep track of correct answers
//afterwards how many questions right in total
//rank the player gold / silver etc 


var questionOne = prompt('1. Whats the color of the sky?');
questionOne = questionOne.toLowerCase();
var goodQuestionCount = 0;


if (questionOne === 'blue') {
    alert('Good job, the sky is indeed ' + questionOne + '.')
    goodQuestionCount += 1;
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly, come on you got this!');
} else {
    alert('Sadly, that is not the right answer.')
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly, come on you got this!');
} 

var questionTwo = prompt('2. Whats the color of the snow?');
questionTwo = questionTwo.toLowerCase();

if (questionTwo === 'white') {
    alert('Good job, the snow is indeed ' + questionTwo + '.')
    goodQuestionCount += 1;
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly, you are on fire!');
} else {
    alert('Sadly, that is not the right answer.')
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly, come on use your brain!');
} 

var questionThree = prompt('3. Whats the color of the sun?');
questionThree = questionThree.toLowerCase();

if (questionThree === 'yellow') {
    alert('Good job, the sun is indeed ' + questionThree + '.')
    goodQuestionCount += 1;
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly, let\'s celebrate already!');
} else {
    alert('Sadly, that is not the right answer.')
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly. Have you seen the sun lately?');
} 


var questionFour = prompt('4. Whats the color of the GREEN garbagetruck?');
questionFour = questionFour.toLowerCase();

if (questionFour === 'green') {
    alert('Good job, the green garbagetruck is indeed ' + questionFour + '.')
    goodQuestionCount += 1;
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly. You are my hero!');
} else {
    alert('Sadly, that is not the right answer.')
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly, how can you mess this up!');
} 



var questionFive = prompt('5. What is the color of the unicorn?');
questionFive = questionFive.toLowerCase();

if (questionFive === 'unicorns do not exist') {
    alert('Good job, unicorns do not exist indeed')
    goodQuestionCount += 1;
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly. And you probably cheated.');
} else {
    alert('Unicorns do not exist, but nice try.')
    alert('You have answered ' + goodQuestionCount + ' out of 5 correctly. Good job, you made it through the test.');
} 

if (goodQuestionCount === 5) {
    alert('You have done this test several times now, but here is a gold medal to cheer you up. Have a nice day!');
} else if (goodQuestionCount < 5 && goodQuestionCount > 1) {
    alert('Since you made it to the end with ' + goodQuestionCount + ' acceptable answers, here is a silver medal as a reward. Sorry about the unicorn.');
} else {
    alert('Thanks for showing up. Here is a bronze medal to celebrate your ' + goodQuestionCount + ' correct answers. Have a colorful day!')
}













