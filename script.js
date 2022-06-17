function digitalClock() {
    let date = new Date();

    let hours = date.getHours() + "";
    
    let minutes = date.getMinutes() + "";

    let seconds = date.getSeconds() + "";
    
    let day = date.getDay();


    if (hours.length<2){
        hours = "0" + hours
    }

    if (minutes.length < 2){
        minutes = "0" + minutes
    }
    if (seconds.length < 2){
        seconds = "0" + seconds
    }

    let weekdays = ['sun', 'mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

    let clock = weekdays[day] + " " + hours + ":" + minutes + ":" + seconds;

    document.getElementById('clock').innerHTML = clock;
    console.log(clock);
}

digitalClock();


setInterval(digitalClock, 1000);
function create_new_account(){
    document.getElementById('login_card').style.display = 'none'
    document.getElementById('create_account_now').style.display = 'block'
}
function login_to_exixting_account(){
    document.getElementById('login_card').style.display = 'block'
    document.getElementById('create_account_now').style.display = 'none'
}


function check_new_account(){
    let setting_username = document.getElementById('username_input').value;
    let setting_passcode = document.getElementById('account_password_input').value;
    if(setting_passcode !== "" && Number(setting_username) !== ""){
        alert(`Account successfully created, your username  is: ${setting_username} and your and password: ****`);
    }else{
        alert("Invalid Input");
    }
}



function check(){
    const fixed_username = 'david';
    const fixed_password = 2007;
    let username = document.getElementById('username_input').value;
    let password = document.getElementById('password_input').value;
    if (username === fixed_username && Number(password) === fixed_password){
            document.getElementById('first_display').style.display = 'none';
            document.getElementById('Question1').style.display = 'block';
            document.getElementById('side_display').style.display = "block"
    }else{
        document.getElementById('wrong_details').textContent = "wrong usernme or passcode";
        document.getElementById('wrong_details').setAttribute('style', 'color: red;');
    }
}
function direct_start(){
    document.getElementById('first_display').style.display = 'none';
    document.getElementById('Question1').style.display = 'block';
    document.getElementById('side_display').style.display = "block"
    
}
function next1(){
    document.getElementById('Question1').style.display = 'none';
    document.getElementById('Question2').style.display = 'block';
}
function previous1(){
    document.getElementById('Question1').style.display = 'block';
    document.getElementById('Question2').style.display = 'none';
}

function next2(){
    document.getElementById('Question2').style.display = 'none';
    document.getElementById('Question3').style.display = 'block';
}
function previous2(){
    document.getElementById('Question2').style.display = 'block';
    document.getElementById('Question3').style.display = 'none';
}

function next3(){
    document.getElementById('Question3').style.display = 'none';
    document.getElementById('Question4').style.display = 'block';
}
function previous3(){
    document.getElementById('Question4').style.display = 'none';
    document.getElementById('Question3').style.display = 'block';
}
function next4(){
    document.getElementById('Question4').style.display = 'none';
    document.getElementById('Question5').style.display = 'block';
}

function previous4(){
    document.getElementById('Question4').style.display = 'block';
    document.getElementById('Question5').style.display = 'none';
}
function next5(){
    document.getElementById('Question5').style.display = 'none';
    document.getElementById('Question6').style.display = 'block';
}

function previous5(){
    document.getElementById('Question5').style.display = 'block';
    document.getElementById('Question6').style.display = 'none';
}
function next6(){
    document.getElementById('Question6').style.display = 'none';
    document.getElementById('Question7').style.display = 'block';
}


function previous6(){
    document.getElementById('Question6').style.display = 'block';
    document.getElementById('Question7').style.display = 'none';
}
function next7(){
    document.getElementById('Question7').style.display = 'none';
    document.getElementById('Question8').style.display = 'block';
}

function previous7(){
    document.getElementById('Question7').style.display = 'block';
    document.getElementById('Question8').style.display = 'none';
}
function next8(){
    document.getElementById('Question8').style.display = 'none';
    document.getElementById('Question9').style.display = 'block';
}

function previous8(){
    document.getElementById('Question8').style.display = 'block';
    document.getElementById('Question9').style.display = 'none';
}
function next9(){
    document.getElementById('Question9').style.display = 'none';
    document.getElementById('Question10').style.display = 'block';
}

function previous9(){
    document.getElementById('Question9').style.display = 'block';
    document.getElementById('Question10').style.display = 'none';
}



function display_q1(){
    document.getElementById('Question1').style.display = "block";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}

function display_q2(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "block";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}
function display_q3(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "block";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}
function display_q4(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "block";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}
function display_q5(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "block";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}
function display_q6(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "block";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}
function display_q7(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "block";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}
function display_q8(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "block";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "none";
}
function display_q9(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "block";
    document.getElementById('Question10').style.display = "none";
}
function display_q10(){
    document.getElementById('Question1').style.display = "none";
    document.getElementById('Question2').style.display = "none";
    document.getElementById('Question3').style.display = "none";
    document.getElementById('Question4').style.display = "none";
    document.getElementById('Question5').style.display = "none";
    document.getElementById('Question6').style.display = "none";
    document.getElementById('Question7').style.display = "none";
    document.getElementById('Question8').style.display = "none";
    document.getElementById('Question9').style.display = "none";
    document.getElementById('Question10').style.display = "block";
}


function dashboard(){
    document.getElementById('first_ui').style.display = "none";
    document.getElementById('main_dashboard').style.display = "block";
}


document.getElementById('show_navbar').style.display = "none";
function sidebar_collapse(){
    document.getElementById('sidebar_collapse').style.display = "none";
    document.getElementById('dashboard').setAttribute('style', 'width: 100%; margin-left: 0;');
    document.getElementById('collapse_navbar').style.display = "none";
    document.getElementById('show_navbar').style.display = "block";
}
function sidebar_show(){
    document.getElementById('sidebar_collapse').style.display = "grid";
    document.getElementById('dashboard').setAttribute('style', 'width: 93%; margin-left: 7vw;');
    document.getElementById('show_navbar').style.display = "none";
    document.getElementById('collapse_navbar').style.display = "block";
}




function correct1(){
    let correct_answer1 = 1;
    return (correct_answer1);
}
function correct2(){
    let correct_answer2 = 1;
    return(correct_answer2);
}
function correct3(){
    let correct_answer3 = 1;
    return(correct_answer3);
}
function correct4(){
    let correct_answer4 = 1;
    return(correct_answer4);
}
function correct5(){
    let correct_answer5 = 1;
    return(correct_answer5);
}
function correct6(){
    let correct_answer6 = 1;
    return(correct_answer6);
}
function correct7(){
    let correct_answer7 = 1;
    return(correct_answer7);
}
function correct8(){
    let correct_answer8 = 1;
    return(correct_answer8);
}
function correct9(){
    let correct_answer9 = 1;
    return(correct_answer9);
}
function correct10(){
    let correct_answer10 = 1;
    return(correct_answer10);
}

// let total_score = correct_answer1 + correct_answer2 + correct_answer3 + correct_answer4 + correct_answer5 + correct_answer6 + correct_answer7 + correct_answer8 + correct_answer9 + correct_answer10
// alert(total_score);

function submit(){
    let total_score = correct1() + correct2() + correct3() + correct4() + zcorrect5() + correct6() + correct7() + correct8() + correct9() + correct10();
    alert(total_score);
}

function click_event1(){
    let texting = document.getElementById('ans1').value
    if(texting = true){
        // alert('sure');
        return 1;
    }else if(texting1 = false){
        return 0;
    }
}
function click_event2(){
    let texting2 = document.getElementById('ans2').value
    if(texting2 = true){
        // alert('sure');
        return 1;
    }else if(texting2 = false){
        return 0;
    }
}
function click_event3(){
    let texting3 = document.getElementById('ans3').value
    if(texting3 = true){
        // alert('sure');
        return 1;
    }else if(texting3 = false){
        return 0;
    }
}
function click_event4(){
    let texting4 = document.getElementById('ans4').value
    if(texting4 = true){
        // alert('sure');
        return 1;
    }else if(texting4 = false){
        return 0;
    }
}
function click_event5(){
    let texting5 = document.getElementById('ans5').value
    if(texting5 = true){
        // alert('sure');
        return 1;
    }else if(texting5 = false){
        return 0;
    }
}

// function total_score(){
//     let new_total = click_event1()  + click_event2() + click_event3() + click_event4() + click_event5();
//     alert(new_total);
// }


function click_check1(){
    function clicked(){
        let checkbox = document.getElementById('ans1').value;
        if(checkbox = true){
            return 1;
        }else if(checkbox = false){
            return 0;
        }
    }
    return clicked()
}


let option1 = "unchecked"
let option2 = "unchecked"
let option3 = "unchecked"
let option4 = "unchecked"
let option5 = "unchecked"
let option6 = "unchecked"
let option7 = "unchecked"
let option8 = "unchecked"
let option9 = "unchecked"
let option10 = "unchecked"

let option1 = document.getElementById('option1');

option1.addEventListener('click', 
    () => {
        if(option1 === "checked"){
            option1 = "unchecked"
        }else{
            option1 = "checked"
        }
    }
)

function mark_exam(){
    if(){
        
    }
}