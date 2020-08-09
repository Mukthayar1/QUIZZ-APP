window.onload = function(){
    show(0)
}



var questions = [
    
{
    id: 1,
    question  : "Full Form Of CPU",
    right_answer : "Central Processing Unit",
    option: [
        "Central Power Unit",
        "Central Potential Unit",
        "Centi Power Unit",
        "Central Processing Unit"
        
    ]
},


{
    id: 2,
    question  : "Best smart phone in the world",
    right_answer : "SAMSUANG",
    option: [
        "IPHONE",
        "SAMSUANG",
        "HAWAII",
        "CAMMON"
        
    ]
},

{
id: 3,
question  : "Best FRUIT phone in the world",
right_answer : "MANGO",
option: [
    "APPLE",
    "MANGO",
    "BANANA",
    "PEA"
    
]
}


]


let question_count = 0;
var point = 0;
var c = 0;
function next() {
    let user_answer = document.querySelector('li.option.active').innerHTML;
    // user answer


    if (user_answer == questions[question_count].right_answer) {
        point += 10;
        c++;
        sessionStorage.setItem("Correct", c)
        var a = user_answer + " is " + "RIGHT";
        console.log(a)
        sessionStorage.setItem("points", point)
    } else {
        var a = user_answer + " is " + "wrong"
        console.log(a)
        point += 0

    }
    console

    if (question_count == questions.length - 1) {
        stop()
        alert(" Total Marks :: 30 " + "Obtained Marks :: "+ point)
        location.href = "index.html"
        return;
    }


    question_count++;
    show(question_count)
}

function show(e)
{
    var ques = document.getElementById("question")

    ques.innerHTML = `<h1> ${questions[e].question} </h1>
    
    <ul class="list">
    <li class="option">${questions[e].option[0]}</li>
    <li class="option">${questions[e].option[1]}</li>
    <li class="option">${questions[e].option[2]}</li>
    <li class="option">${questions[e].option[3]}</li>
    </ul>

    
    `
    active()
}

function active()
{
    let option1 = document.querySelectorAll("li.option")

    for(let i = 0 ; i < option1.length ; i++)
    {
        option1[i].onclick = function(){

        for (let j = 0 ; j < option1.length ; j++)
        {
                if(option1[j].classList.contains("active"))
                {
                    option1[j].classList.remove("active")
                }

        }

            
                option1[i].classList.add("active")



               
                   
                   
                
            }
    }


   
}
