// var questions = ["Q1. Tell us something about yourself.","Q2. Do you wish to change your domain? If yes, why?","Q3. Describe an experience of yours wherein you were asked to do something which you didn't like to do and how you handled it?","Q4. What are your expectations from the company?","Q5. Will you be comfortable relocating?"]
// var arr = ["https://www.youtube.com/embed/AQ2Nm1doZow","https://www.youtube.com/embed/AGWTYuBn4rM", "https://www.youtube.com/embed/h1o_pz3MRWo", "https://www.youtube.com/embed/mABIcEXtEzs", "https://www.youtube.com/embed/2JpkMXinO1M"];

let questions =[
    {
        question: "Q1. Tell us something about yourself.",
        video: 'https://www.youtube.com/embed/m5kR7TPAkSw'
    },
    {
        question: "Q2. Do you wish to change your domain? If yes, why?",
        video: 'https://www.youtube.com/embed/Q-GB8buU3no'
    },{
        question:"Q3. Describe an experience of yours wherein you were asked to do something which you didn't like to do and how you handled it?",
        video: 'https://www.youtube.com/embed/gg0Vwfg_MBc'
    },{
        question:"Q4. What are your expectations from the company?",
        video: 'https://www.youtube.com/embed/K8kilBwt0XE'
    },{
        question:"Q5. Will you be comfortable relocating?",
        video: 'https://www.youtube.com/embed/w5m5xOnjjyI'
    }
]

var candidate = 'Rwitobaan Sheikh'
i=0;
g=0;
var comments = [];
var grades = [];

for(j=0;j<questions.length;j++){
    
    comments.push("");
    grades.push(0);
}
window.onload = function question(){

    console.log(document.getElementById('candidate'), 'hii')
    document.getElementById('candidate').innerHTML="Candidate Name: "+candidate;
    console.log(comments);
    let qs = document.getElementById("qs")
    questions.map((_arr, k)=> qs.innerHTML += `<button onclick='goToQuestion(${k})'> Q${k+1}</button>`)

    var ctx = document.getElementById('myChart').getContext('2d');
    var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['O', 'C', 'E', 'A','N'],
        datasets: [{
            label: 'ability',
            data: [1,2,3,4,5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 2
        }]},
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 5
            }
        }
    }
    
});


}
function Nextques() {
    i+=1;
    if(i<questions.length){
        document.getElementById("mainImg").src = questions[i].video;
        document.getElementById("comment").value=comments[i];
        document.getElementById("question").innerHTML=questions[i].question;
        uncheck();
    }
    else{
        sessionStorage.setItem("grades",JSON.stringify(grades));
        sessionStorage.setItem("comments",JSON.stringify(comments));
        window.open("result.html"); 
        i-=1;
    }
  }
function Prevques() {
    i -= 1;
    if(i>=0){
        document.getElementById("mainImg").src = questions[i].video;
        document.getElementById("comment").value=comments[i];
        document.getElementById("question").innerHTML=questions[i].question;
        uncheck();
    }
    else{
        alert("This is the first video");
        i+=1;   
    }
}

function goToQuestion(questionNumber){
     document.getElementById("mainImg").src = questions[questionNumber].video;
     i=questionNumber;
     document.getElementById("comment").value=comments[i];
     document.getElementById("question").innerHTML=questions[i].question;
     uncheck();
}
function save(){
    comments[i]=document.getElementById("comment").value;
    var ele = document.getElementsByName('mark'); 
              
    for(j = 0; j < ele.length; j++) { 
        if(ele[j].checked) 
            grades[i]=ele[j].value; 
    }
    console.log(comments);
    console.log(grades);
}
function uncheck() {
    var e = document.getElementsByName('mark');

    for(j = 0; j < e.length; j++) { 
        if(grades[i] != 0) {
            e[grades[i]-1].checked = true;
            break;
        }
        else
            e[j].checked = false; 
    }
}