let classList = document.getElementById("classList");
const weekCount = 10;

classList.classList.add("d-flex" ,"align-items-center", "flex-wrap" ,"gap-3" ,"my-5")

const data = {
            ytLinks : ["https://youtu.be/YK1xR1TmnIY?si=n1hnTi_uMBPeGgFm","https://youtu.be/Uj36nI2J7Ac?si=Ddgqer9lSKBDhDG3",
                    "https://youtu.be/fi5E3RFRf_k?si=_HKGi-AP_oHsJMGL","https://youtu.be/HnaOek-PqSY?si=ReGlPy0Uj-vO4kye",
                    "https://youtu.be/tcMvxFGvcfs?si=bsy6_Ge8As1ZSjCr","week-8/index.html",
                    "week-9/index.html","week-10/index.html"
                   ],
            topic : [
                    "Introduction to HTML and CSS","CSS Box Model and Ludo Layout",
                    "Form and Input types" , "Flex , Float and Margin",
                    "CSS Sudo classes and Page Responsivness","Introduction to Javascript",
                    "Javacript variables","Operators and Conditions",
                    "Functions and Recape of previous lectures","Loop,Javascript Events and Bootstrap"
                    ]
};

onload = ()=>{
for(var i = 0 ; i< weekCount ; i++){
        let classDom = document.createElement("div");
        classList.appendChild(classDom);
        classDom.classList.add("card","class-box");
    let cardbody= document.createElement("div");
    classDom.appendChild(cardbody);
    cardbody.classList.add("card-body", "d-flex", "flex-column")
    let title = document.createElement("h4");
    cardbody.appendChild(title);
    title.textContent = `Week ${i+1}`;
    title.classList.add("mb-2")
    let description = document.createElement("p");
    cardbody.appendChild(description);
    description.textContent = data.topic[i];
    let cardFooter = document.createElement("div");
    cardbody.appendChild(cardFooter);
    let a = document.createElement("a");
    cardFooter.appendChild(a);
    cardFooter.classList.add("d-flex","justify-content-between")
    a.href = `./week-${i+1}/index.html`;
    let button = document.createElement("button");
    a.appendChild(button);
    button.classList.add("btn","btn-outline-primary");
    button.textContent = "Read it!";
    let ytBtn = document.createElement("a"); 
    cardFooter.appendChild(ytBtn);
    let videoButton = document.createElement("i");
    videoButton.classList.add("ri-youtube-fill" ,"btn" ,"text-danger" , "fs-5");
    ytBtn.href = data.ytLinks[i];
    ytBtn.appendChild(videoButton);

}
}