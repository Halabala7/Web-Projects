const Questions = [
    {
        id: 0,
        q: "1. Jaki znak jest przedstawiony na ilustracji?",
        imageName: "znak_ustap_pierwszenstwa.png",
        a: [
            { text: "Skrzyzowanie równorzędne", isCorrect: false },
            { text: "Przejazd kolejowy bez zapór", isCorrect: false },
            { text: "Ustap pierwszenstwa", isCorrect: true },
            { text: "Odcinek jezdni o ruchu dwukierunkowym", isCorrect: false }
        ]
    },
    {
        id: 1,
        q: "2. Jaki znak jest przedstawiony na ilustracji?",
        imageName: "znak_skrzyzowanie_z_droga_pod.png",
        a: [
            { text: "Niebezpieczne zakręty - pierwszy w prawo", isCorrect: false },
            { text: "Ustap pierwszenstwa", isCorrect: false },
            { text: "Skrzyzowanie równorzędne", isCorrect: false },
            { text: "Skrzyżowanie z drogą podporządkowaną", isCorrect: true }
        ]
    },
    {
        id: 2,
        q: "3. Jaki znak jest przedstawiony na ilustracji?",
        imageName: "znak_skrzyzowanie_rownorzedne.png",
        a: [
            { text: "Przejazd kolejowy bez zapór", isCorrect: false },
            { text: "Odcinek jezdni o ruchu dwukierunkowym", isCorrect: false },
            { text: "Skrzyzowanie równorzędne", isCorrect: true },
            { text: "Ustap pierwszenstwa", isCorrect: false }
        ]
    },
    {
        id: 3,
        q: "4. Jaki znak jest przedstawiony na ilustracji?",
        imageName: "znak_odcinek_jezdni_o_ruchu_dwukierunkowym.png",
        a: [
            { text: "Niebezpieczne zakręty - pierwszy w prawo", isCorrect: false },
            { text: "Skrzyżowanie z drogą podporządkowaną", isCorrect: false },
            { text: "Przejazd kolejowy bez zapór", isCorrect: false },
            { text: "Odcinek jezdni o ruchu dwukierunkowym", isCorrect: true }
        ]
    },
    {
        id: 4,
        q: "5. Jaki znak jest przedstawiony na ilustracji?",
        imageName: "znak_niebezpieczny_zakret.png",
        a: [
            { text: "Skrzyzowanie równorzędne", isCorrect: false },
            { text: "Odcinek jezdni o ruchu dwukierunkowym", isCorrect: false },
            { text: "Ustąp piewszeństwa", isCorrect: false },
            { text: "Niebezpieczne zakręty - pierwszy w prawo", isCorrect: true }
        ]
    },
    {
        id: 5,
        q: "6. Jaki znak jest przedstawiony na ilustracji?",
        imageName: "znak_przejazd_kolejowy_bez_zapor.png",
        a: [
            { text: "Ustąp piewszeństwa", isCorrect: false },
            { text: "Odcinek jezdni o ruchu dwukierunkowym", isCorrect: false },
            { text: "Skrzyzowanie równorzędne", isCorrect: false },
            { text: "Przejazd kolejowy bez zapór", isCorrect: true }
        ]
    }
];

let score = 0;
let id = 0;

function iterate(id) {
    var endpanel = document.getElementById("panel2");
    endpanel.style.display = "none";
    
    var koniec = document.getElementById("btn4");
    koniec.style.display = "none";
    koniec.disabled = true;
    
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = '';
    
    const img = document.createElement('img');
    img.src = `../zdj/znaki/${Questions[id].imageName}`;
    img.alt = `Znak drogowy ${id}`;
    img.style.maxWidth = "100px";
    questionContainer.appendChild(img);
    
    const questionText = document.createElement('p');
    questionText.textContent = Questions[id].q;
    questionContainer.appendChild(questionText);
    
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    op1.addEventListener("click", () => {
        op1.style.cssText = "border-bottom: 0px; border-top: 7px solid #004d80;";
        op2.style.cssText = "border-bottom: 7px solid #009973; border-top: 0px;";
        op3.style.cssText = "border-bottom: 7px solid #990000; border-top: 0px; ";
        op4.style.cssText = "border-bottom: 7px solid #cca300; border-top: 0px;";
        selected = op1.value;
    });

    op2.addEventListener("click", () => {
        op1.style.cssText = "border-bottom: 7px solid #004d80; border-top: 0px;";
        op2.style.cssText = "border-bottom: 0px; border-top: 7px solid #009973";
        op3.style.cssText = "border-bottom: 7px solid #990000; border-top: 0px;";
        op4.style.cssText = "border-bottom: 7px solid #cca300; border-top: 0px;";
        selected = op2.value;
    });

    op3.addEventListener("click", () => {
        op1.style.cssText = "border-bottom: 7px solid #004d80; border-top: 0px;";
        op2.style.cssText = "border-bottom: 7px solid #009973; border-top: 0px;";
        op3.style.cssText = "border-bottom: 0px; border-top: 7px solid #990000";
        op4.style.cssText = "border-bottom: 7px solid #cca300; border-top: 0px;";
        selected = op3.value;
    });

    op4.addEventListener("click", () => {
        op1.style.cssText = "border-bottom: 7px solid #004d80; border-top: 0px;";
        op2.style.cssText = "border-bottom: 7px solid #009973; border-top: 0px;";
        op3.style.cssText = "border-bottom: 7px solid #990000; border-top: 0px;";
        op4.style.cssText = "border-bottom: 0px; border-top: 7px solid #cca300"; 
        selected = op4.value;
    });

    btn.onclick = function(){
        if(selected == "true"){
            score++
            document.getElementById("message").innerHTML = score;
        } else {
            document.getElementById("message").innerHTML = score;
        }
    }

    btn4.onclick = function(){
        if(panel1.style.display !== "none"){
            panel1.style.display = "none";
            panel2.style.display = "block";	
            document.getElementById("message2").innerHTML = score;
        } else {
            panel1.style.display = "block";
        }
    }

    btn2.disabled = "true";
    btn4.disabled = "true";

    document.getElementById("btn").addEventListener("click", function(){ 
        document.getElementById("btn2").disabled = false;
        document.getElementById("btn4").disabled = false;
    });
    
    document.getElementById("btn3").addEventListener("click", function(){
        location.reload();
    });

    document.getElementById("btn2").addEventListener("click", function(){ 
        document.getElementById("btn").disabled = false;
        op1.style.cssText = "background-color: #007acc; border-bottom: 7px solid #004d80; border-top: 0px;";
        op2.style.cssText = "background-color: #00cc99; border-bottom: 7px solid #009973; border-top: 0px;";
        op3.style.cssText = "background-color: #ff4d4d; border-bottom: 7px solid #990000; border-top: 0px;";
        op4.style.cssText = "background-color: #ffcc00; border-bottom: 7px solid #cca300; border-top: 0px;";
    });

    const evaluate = document.getElementsByClassName("evaluate");
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Prawidlowa odpowiedz";
            result[0].style.color = "green";
            result[0].display = "none";
            document.getElementById("btn").disabled = true;
        }
        if (selected == "false"){
            result[0].innerHTML = "Nieprawidlowa odpowiedz";
            result[0].style.color = "red";
            document.getElementById("btn").disabled = true;
        }
    });
}

iterate(0);

const next = document.getElementsByClassName('next')[0];
next.addEventListener("click", () => {
    if (id < Questions.length - 1) {
        id++;
        iterate(id);
        
        // Ukrycie przycisku "Koniec" dopóki to nie ostatnie pytanie
        document.getElementById("btn4").style.display = "none";
    } else {
        
        document.getElementById("panel1").style.display = "none";
        document.getElementById("panel2").style.display = "block";
        document.getElementById("message2").innerHTML = score;
        
       
        document.getElementById("btn2").style.display = "none";
    }
});


document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById("panel1").style.display = "none";
    document.getElementById("panel2").style.display = "block";
    document.getElementById("message2").innerHTML = score;
});