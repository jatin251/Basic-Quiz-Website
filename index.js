
 const questions = [
    {
        question: "How many days makes a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },

    {
        question: "How many players are allowed on a cricket match?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "Who is the President of india?",
        optionA: "Donald Trump",
        optionB: "Ramanath Kovid",
        optionC: " Narendra Modi",
        optionD: "Venkaiah Naidu",
        correctOption: "optionBs"
    },

    {
        question: "30 days has ______ ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },

    {
        question: "How manay hours can be found in a day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "_____ is the hottest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "Ten",
        optionB: "Twelve",
        optionC: "Eight",
        optionD: "Eleven",
        correctOption: "optionD"
    },

    {
        question: "Who is the owner of microsoft",
        optionA: "Eminem",
        optionB: "Bill Gates",
        optionC: "Chris Brown",
        optionD: "John Cena",
        correctOption: "optionB"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the india?",
        optionA: "River Ganga",
        optionB: "River yamna",
        optionC: "River saltaj",
        optionD: "River krisna",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a human have ?",
        optionA: "38",
        optionB: "32",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which national team won the cricket World cup in 2011 ?",
        optionA: "England",
        optionB: "Sri-Lanka",
        optionC: "Austrila",
        optionD: "India",
        correctOption: "optionD"
    },

    {
        question: "Which  Indiastate was Narendra modi Born ?",
        optionA: "Rajasthan",
        optionB: "New-Delhi",
        optionC: "Gujrat",
        optionD: "Uttar Pradesh",
        correctOption: "option C"
    },

    {
        question: "How man states does  India have ?",
        optionA: "34",
        optionB: "30",
        optionC: "29",
        optionD: "31",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of India ?",
        optionA: "Delhi",
        optionB: "Jaipur",
        optionC: "Mumbai",
        optionD: "Kollata",
        correctOption: "optionA"
    },

    {
        question: "Jaipur is also known as ?",
        optionA: "Blue City",
        optionB: "Clean city",
        optionC: " Pink City ",
        optionD: "Green city",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of USA ?",
        optionA: "New york",
        optionB: "washingthon",
        optionC: "New delhi",
        optionD: "L A",
        correctOption: "optionB"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionB"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many legs does an Octopus have ?",
        optionA: "nine",
        optionB: "seven",
        optionC: "eight",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many  hand fingers  does an adult human have ?",
        optionA: "10",
        optionB: "9",
        optionC: "20",
        optionD: "8",
        correctOption: "optionA"
    }

]


let shuffledQuestions = []

function handleQuestions() { 
   
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++

            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}




function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    
    setTimeout(() => {
        if (indexNumber <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}