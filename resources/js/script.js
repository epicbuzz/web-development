let ul = document.getElementById("myList");
ul.classList.add("d-flex" ,"align-items-center" ,"justify-content-between" ,"flex-wrap" ,"gap-3" ,"mt-4")
const linksByWeek = {
            weeks : ["Week 1" ,"Week 2" ,
                     "Week 3" ,"Week 4" ,
                     "Week 5" ,"Week 6" ,
                     "Week 7" ,"Week 8" ,
                     "Week 9" ,"Week 10"
                    ],
            links : ["week-1/intro.html","week-2/ludo.html",
                    "week-3/form.html","week-4/index.html",
                    "week-5/index.html","week-6/index.html",
                    "week-7/index.html","week-8/index.html",
                    "week-9/index.html","week-10/index.html"
                   ],
            topic : [
                    "Introduction to HTML and CSS","CSS Box Model and Ludo Layout",
                    "Form and input types" , "Flex , Float and Margin",
                    "CSS Sudo classes and Page Responsivness","Introduction to Javascript",
                    "Javacript variables","Operators and Conditions",
                    "Functions and Recape of previous lectures","Loop,Javascript Events and Bootstrap"
                    ]
};
for(var i = 0 ; i< linksByWeek.weeks.length ; i++){
    let li = document.createElement("LI");
    ul.appendChild(li);
    li.classList.toggle("list-group-item");
    let box = document.createElement("div");
    li.appendChild(box);
    box.classList.add("card","max-width");
    let div = document.createElement("div");
    box.appendChild(div);
    div.classList.add("card-body")
    let h4 = document.createElement("h4");
    div.appendChild(h4);
    h4.textContent = linksByWeek.weeks[i];
    h4.classList.add("text-center")
    let h6 = document.createElement("h6");
    div.appendChild(h6);
    h6.textContent = linksByWeek.topic[i];
    let a = document.createElement("a");
    div.appendChild(a);
    a.href = linksByWeek.links[i];
    let button = document.createElement("button");
    a.appendChild(button);
    button.classList.add("btn","btn-outline-primary");
    button.textContent = "Read it!";
}