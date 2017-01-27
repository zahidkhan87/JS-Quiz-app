var para = document.getElementById('demo');
var div = document.getElementById("quesAns");
var main = document.getElementsByClassName("main")[0];
var i = 0;



            // SET TIMER TO 05 MINUTES



 function timer(){
    
    div.style.display = "Block";
    var min = 4;
    var sec = 59;
    var int = setInterval(function(){
        if(min < 10 && sec < 10){
            para.innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if( min < 10){
            para.innerHTML = "0" + min + ":" + sec;
        }
        else if( sec < 10){
            para.innerHTML = min + ":"+ "0" + sec;
        }
        
       else{ para.innerHTML = min + ":" + sec;}
        sec--;
        
         if(min < 0){
            clearInterval(int);
            para.innerHTML = "Time Finished...!";
            result();
        
        }
        else if(sec == 0){
            min--;
            sec = 60;
        }
    }, 1000);
}


        //   QUESTIONS FOR QUIZ



var questions = [];
var answers = ["var book = new Object();", "indexOf()", "sub()", "global variable" , "toUpperCase()", "All of the above", "window.location='http://www.newlocation.com';", "local variable"];

var ques1 = {
    question : 'Which of the following code creates an object? ' ,
    a : 'var book = Object();' ,
    b : 'var book = new Object();' ,
    c : 'var book = new OBJECT();' ,
    d : 'var book = new Book();'
}
var ques2 = {
    question : 'Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?' ,
    a : 'indexOf()' ,
    b : 'join()' ,
    c : 'lastIndexOf()' ,
    d : 'findIndex()'
}
var ques3 = {
    question : 'Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a &ltsub&gt tag?' ,
    a : 'sup()' ,
    b : 'small()' ,
    c : 'strike()' ,
    d : 'sub()'
}
var ques4 = {
    
    question : 'Which of the following type of variable is visible everywhere in your JavaScript code? ' ,
    a : 'local variable' ,
    b : 'global variable' ,
    c : 'Both of the above' ,
    d : 'None of the above'
}
var ques5 = {
    question : 'Which of the following function of String object returns the calling string value converted to upper case?' ,
    a : 'toLocalUpperCase()' ,
    b : 'toUpperCase()' ,
    c : 'toString() ' ,
    d : 'substring()'
}
var ques6 = {
    question : 'Which of the following is an advantage of using JavaScript??' ,
    a : 'Less server interaction' ,
    b : 'Immediate feedback to the visitors' ,
    c : 'Increased interactivity ' ,
    d : 'All of the above'
}
var ques7 = {
    question : 'Which of the following is the correct syntax to redirect a url using JavaScript?' ,
    a : "document.location='http://www.newlocation.com';" ,
    b : "browser.location='http://www.newlocation.com';" ,
    c : "navigator.location='http://www.newlocation.com';" ,
    d : "window.location='http://www.newlocation.com';" 
}
var ques8 = {
    question : 'Which of the following type of variable is visible only within a function where it is defined?' ,
    a : 'local variable' ,
    b : 'global variable' ,
    c : 'Both of the above' ,
    d : 'None of the above'
}
questions.push(ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8);



var nextBtn = document.getElementById("nxt");
var qPara = document.getElementById('ques');
var options = document.getElementsByClassName('options');
var slct = document.getElementsByName('choices');





        // JUMP TO NEXT QUESTION




function nxtQues(){
    nextBtn.setAttribute("disabled", "disabled");
    var x = i + 1;
    div.style.display = "Block";
    main.style.display = "none";
    document.getElementById("qcounter").innerHTML = "Question " + x;
    qPara.innerHTML = questions[i]["question"];
    
    options[0].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["a"];
    options[1].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["b"];
    options[2].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["c"];
    options[3].innerHTML = "<input type = 'radio' onclick = 'makeEnable()' name= 'choices' >" + questions[i]["d"];
}

function makeEnable(){
    nextBtn.disabled =false;
}

var correctAns = 0;



    // CHECK ANSWERS




function next(){
    for(var j = 0; j < slct.length; j++){
        if(slct[j].checked){
        choice = slct[j].nextSibling.textContent;
        }    
    }
    if(choice == answers[i]){
        correctAns++;
    }
    if(i == 7){
         result();
    }
    i++;
    nxtQues();
}


            // RESULT



function result(){
   document.getElementsByClassName("qa")[0].style.display = "none";
    document.getElementsByClassName("results")[0].style.display = "Block";
    document.getElementById("rightAns").innerHTML = correctAns + " " + "out of 8";
    var prcntge = (correctAns/8)* 100 ;
    document.getElementById("score").innerHTML = prcntge  + "%";
    if(prcntge <= 60 ){
        document.getElementById("remarks").innerHTML = "SORRY! YOU ARE FAILED...";
    }
    else if(prcntge > 60 && prcntge < 90 ){
        document.getElementById("remarks").innerHTML = "PASSED! BUT YOU CAN BE MORE BETTER";
    }
    else{
        document.getElementById("remarks").innerHTML = "CHEERS!!! YOU ARE GENIOUS";
    }
    
}

function tryAgain(){
    window.location.reload();
}