// import { Information } from "./allInformation"

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*
B.E. Electrical And Electronics Engineering
B.E. Electronics And Communication Engineering
B.E. Computer Science And Engineering
B.Tech. Information Technology
B.E. Mechanical Engineering
B.Tech. Chemical Engineering
B.E. Bio-Medical Engineering
B.E. Civil Engineering
PG Programs

*/
// all infos
Information = {
    "UG": {
        "BME": {
            "course": "B.E. Bio-Medical Engineering",
            "sem1" : {
                "theory":[], 
                "practicals":[]
            },
            "sem2" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem3" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            }
        },
        "EEE": {
            "course": "B.E. Electrical And Electronics Engineering",
            "sem1" : {
                "theory":[], 
                "practicals":[]
            },
            "sem2" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem3" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            }
        },
        "ECE": {
            "course": "B.E. Electronics And Communication Engineering",
            "sem1" : {
                "theory":[], 
                "practicals":[]
            },
            "sem2" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem3" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            }
        },
        "CSE": {
            "course": "B.E. COMPUTER SCIENCE AND ENGINEERING",
            "sem1": {
                "theory": [
                    {
                        "S.No": "1.",
                        "COURSE CODE": "UEN1176",
                        "COURSE TITLE": "Communicative English",
                        "CATEGORY": "HS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "2.",
                        "COURSE CODE": "UMA1176",
                        "COURSE TITLE": "Algebra and Calculus",
                        "CATEGORY": "BS",
                        "CONTACT PERIODS": 5,
                        "L": 3,
                        "T": 2,
                        "P": 0,
                        "C": 4
                      },
                      {
                        "S.No": "3.",
                        "COURSE CODE": "UPH1176",
                        "COURSE TITLE": "Engineering Physics",
                        "CATEGORY": "BS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "4.",
                        "COURSE CODE": "UCY1176",
                        "COURSE TITLE": "Engineering Chemistry",
                        "CATEGORY": "BS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "5.",
                        "COURSE CODE": "UGE1176",
                        "COURSE TITLE": "Problem Solving and Programming in Python",
                        "CATEGORY": "ES",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "6.",
                        "COURSE CODE": "UGE1177",
                        "COURSE TITLE": "Engineering Graphics",
                        "CATEGORY": "ES",
                        "CONTACT PERIODS": 5,
                        "L": 1,
                        "T": 0,
                        "P": 4,
                        "C": 3
                      }
                ],
                "practicals": [
                    {
                        "S.No": "7.",
                        "COURSE CODE": "UGE1197",
                        "COURSE TITLE": "Programming in Python Lab",
                        "CATEGORY": "ES",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 1.5
                      },
                      {
                        "S.No": "8.",
                        "COURSE CODE": "UGS1197",
                        "COURSE TITLE": "Physics and Chemistry Lab",
                        "CATEGORY": "BS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 1.5
                      }
                    
                ]
            }, 
            "sem2" : {
                "theory":[
                    {
                        "S.No": "1.",
                        "COURSE CODE": "UEN1276",
                        "COURSE TITLE": "Technical English",
                        "CATEGORY": "HS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                    },
                    {
                        "S.No": "2.",
                        "COURSE CODE": "UMA1276",
                        "COURSE TITLE": "Complex Functions and Laplace Transforms",
                        "CATEGORY": "BS",
                        "CONTACT PERIODS": 5,
                        "L": 3,
                        "T": 2,
                        "P": 0,
                        "C": 4
                    },
                    {
                        "S.No": "3.",
                        "COURSE CODE": "UPH1276",
                        "COURSE TITLE": "Physics for Information Science",
                        "CATEGORY": "BS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                    },
                    {
                        "S.No": "4.",
                        "COURSE CODE": "UCY1276",
                        "COURSE TITLE": "Environmental Science",
                        "CATEGORY": "HS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                    },
                    {
                        "S.No": "5.",
                        "COURSE CODE": "UEE1276",
                        "COURSE TITLE": "Basic Electrical, Electronics and Measurement Engineering",
                        "CATEGORY": "ES",
                        "CONTACT PERIODS": 4,
                        "L": 3,
                        "T": 1,
                        "P": 0,
                        "C": 3.5
                    },
                    {
                        "S.No": "6.",
                        "COURSE CODE": "UCS1201",
                        "COURSE TITLE": "Programming in C",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 4,
                        "L": 3,
                        "T": 1,
                        "P": 0,
                        "C": 3.5
                    }
                ], 
                "practicals":[
                    {
                        "S.No": "7.",
                        "COURSE CODE": "UGE1297",
                        "COURSE TITLE": "Design Thinking and Engineering Practices Lab",
                        "CATEGORY": "ES",
                        "CONTACT PERIODS": 3,
                        "L": 0,
                        "T": 0,
                        "P": 3,
                        "C": 1.5
                    },
                    {
                        "S.No": "8.",
                        "COURSE CODE": "UCS1211",
                        "COURSE TITLE": "Programming in C Lab",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 0,
                        "T": 0,
                        "P": 3,
                        "C": 1.5
                    }
                ]
            }, 
            "sem3" : {
                "theory":[
                    {
                        "S.No": "1.",
                        "COURSE CODE": "UMA1377",
                        "COURSE TITLE": "Discrete Mathematics",
                        "CATEGORY": "BS",
                        "CONTACT PERIODS": 5,
                        "L": 3,
                        "T": 2,
                        "P": 0,
                        "C": 4
                      },
                      {
                        "S.No": "2.",
                        "COURSE CODE": "UCS1301",
                        "COURSE TITLE": "Digital Principles and System Design",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "3.",
                        "COURSE CODE": "UCS1302",
                        "COURSE TITLE": "Data Structures",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "4.",
                        "COURSE CODE": "OOP",
                        "COURSE TITLE": "Object Oriented Programming",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "5.",
                        "COURSE CODE": "USP",
                        "COURSE TITLE": "UNIX and Shell Programming",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 4,
                        "L": 2,
                        "T": 0,
                        "P": 2,
                        "C": 3
                      },
                      {
                        "S.No": "6.",
                        "COURSE CODE": "UEC1351",
                        "COURSE TITLE": "Principles of Communication Engineering",
                        "CATEGORY": "ES",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      }
                ], 
                "practicals":[
                    {
                        "S.No": "7.",
                        "COURSE CODE": "UCS1311",
                        "COURSE TITLE": "Digital Design Lab",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 0,
                        "T": 0,
                        "P": 3,
                        "C": 1.5
                      },
                      {
                        "S.No": "8.",
                        "COURSE CODE": "UCS1312",
                        "COURSE TITLE": "Data Structures Lab",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 4,
                        "L": 0,
                        "T": 0,
                        "P": 4,
                        "C": 2
                      },
                      {
                        "S.No": "9.",
                        "COURSE CODE": "UCS1313",
                        "COURSE TITLE": "Object Oriented Programming Lab",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 0,
                        "T": 0,
                        "P": 3,
                        "C": 1.5
                      }
                ]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[
                    {
                        "S.No": "1.",
                        "COURSE CODE": "UCS1701",
                        "COURSE TITLE": "Distributed Systems",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "2.",
                        "COURSE CODE": "UCS1702",
                        "COURSE TITLE": "Mobile Computing",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "3.",
                        "COURSE CODE": "UCS1703",
                        "COURSE TITLE": "Computer Graphics and Multimedia",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "4.",
                        "COURSE CODE": "UCS1704",
                        "COURSE TITLE": "Management and Ethical Practices",
                        "CATEGORY": "HS",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "5.",
                        "COURSE CODE": "PE3",
                        "COURSE TITLE": "Professional Elective 3",
                        "CATEGORY": "PE",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                      {
                        "S.No": "6.",
                        "COURSE CODE": "PE4",
                        "COURSE TITLE": "Professional Elective 4",
                        "CATEGORY": "PE",
                        "CONTACT PERIODS": 3,
                        "L": 3,
                        "T": 0,
                        "P": 0,
                        "C": 3
                      },
                ], 
                "practicals":[
                    {
                        "S.No": "7.",
                        "COURSE CODE": "UCS1711",
                        "COURSE TITLE": "Mobile Application Development Lab",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 0,
                        "T": 0,
                        "P": 3,
                        "C": 1.5
                      },
                      {
                        "S.No": "8.",
                        "COURSE CODE": "UCS1712",
                        "COURSE TITLE": "Graphics and Multimedia Lab",
                        "CATEGORY": "PC",
                        "CONTACT PERIODS": 3,
                        "L": 0,
                        "T": 0,
                        "P": 3,
                        "C": 1.5
                      }
                ]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            } 
        },
        "IT": {
            "course": "B.Tech. Information Technology",
            "sem1" : {
                "theory":[], 
                "practicals":[]
            },
            "sem2" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem3" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            }
        },
        "ME": {
            "course": "B.E. Mechanical Engineering",
            "sem1" : {
                "theory":[], 
                "practicals":[]
            },
            "sem2" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem3" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            }
        },
        "CHEM": {
            "course": "B.Tech. Chemical Engineering",
            "sem1" : {
                "theory":[], 
                "practicals":[]
            },
            "sem2" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem3" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            }
        },     
        "CIVIL": {
            "course": "B.E. Civil Engineering",
            "sem1" : {
                "theory":[], 
                "practicals":[]
            },
            "sem2" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem3" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem4" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem5" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem7" : {
                "theory":[], 
                "practicals":[]
            }, 
            "sem8" : {
                "theory":[], 
                "practicals":[]
            }
        }
    },
    "PG": {
        "COMM": {},
        "CSE": {},
        "APE": {},
        "PED": {},
        "IT": {},
        "VLSI": {},
        "EE": {},
        "MAE": {},
        "MEDE": {},
        "EST": {}
    }
}


// select main head

const courseSection = document.getElementById('r1');
const streamSection = document.getElementById('r2');
const semasterSection = document.getElementById('r3');
const gpaSection = document.getElementById('r4');


const courses = Object.keys(Information)
selectedCourse = NaN;

selectedCourseStreams = NaN;
selectedStream = NaN;

selectedStreamSemesters = NaN;
selectedSemaster = NaN;

createCourseSection();

// creating courses form available courses
function createCourseSection(){
    while(courseSection.firstChild){
        courseSection.removeChild(courseSection.lastChild);
    }
    courses.forEach(course => {
        courseSection.appendChild(createCourseElement(course));
    });    
}

function createCourseElement(course){
    let element = document.createElement('div')
    element.textContent = course
    element.classList.add('course__element');
    element.addEventListener('click', ()=>{
        const streamElements = document.querySelectorAll('.course__element');
        streamElements.forEach(c=>{
            c.classList.remove('selected')
        });
        element.classList.add('selected')
        selectedCourse = element.innerHTML;
        selectedCourseStreams = Object.keys(Information[selectedCourse]);
        createStreamSection()
    })
    return element
}

// course.forEach(co =>{
//     co.addEventListener('click', ()=>{
//         course.forEach(c=>{
//             c.classList.remove('selected')
//         })
//         co.classList.add('selected')
//         console.log(co);
//         selectedCourse = co.innerHTML;
//         console.log(selectedCourse);
//         selectedCourseStreams = Object.keys(Information[selectedCourse]);
//         createStreamSection()
//     })
// })

// select stream
// console.log(Object.keys(Information[selectedCourse]));


// create stream section from selected course 
function createStreamSection(){
    while(streamSection.firstChild){
        streamSection.removeChild(streamSection.lastChild);
    }
    selectedCourseStreams.forEach(stream => {
        streamSection.appendChild(createStreamElement(stream));
    });    
}

function createStreamElement(stream){
    let element = document.createElement('div')
    element.textContent = stream
    element.classList.add('stream__element');
    element.addEventListener('click', ()=>{
        const streamElements = document.querySelectorAll('.stream__element');
        streamElements.forEach(c=>{
            c.classList.remove('selected')
        });
        element.classList.add('selected')
        selectedStream = element.innerHTML;
        selectedStreamSemesters = Object.keys(Information[selectedCourse][selectedStream]);
        createsemasterSection();
    })
    return element
}

// semester section
function createsemasterSection(){
    while(semasterSection.firstChild){
        semasterSection.removeChild(semasterSection.lastChild);
    }
    console.log(selectedStreamSemesters);
    selectedStreamSemesters.forEach(semaster => {
        semasterSection.appendChild(createSemasterElement(semaster));
    });    
}

function createSemasterElement(semaster){
    let element = document.createElement('div')
    element.textContent = semaster
    element.classList.add('semaster__element');
    element.addEventListener('click', ()=>{
        const streamElements = document.querySelectorAll('.semaster__element');
        streamElements.forEach(c=>{
            c.classList.remove('selected')
        });
        element.classList.add('selected')
        selectedSemaster = element.innerHTML;
        console.log(selectedSemaster);

        // selectedStreamSemesters = Object.keys(Information[selectedCourse][selectedStream]);
        createGpaSection();
    })
    return element
}

//subject section
function infoSection(){
    let div = document.createElement('div');
    
    courseInfo = Information[selectedCourse][selectedStream]['course'];
console.log(courseInfo);
    let h1 = document.createElement('h1')
    h1.textContent = courseInfo
    h1.classList.add('section__title')
    div.appendChild(h1)

    let span = document.createElement('h3')
    span.textContent = selectedSemaster;
    span.classList.add('section__subtitle');
    div.appendChild(span);

    return div

}

function createSubjectElement(subject){
    let div = document.createElement('div');
    
    let subName = document.createElement('h2');
    subName.textContent = subject['COURSE CODE'] + " " + subject['COURSE TITLE'];
    subName.classList.add('subject__name');
    
   

    var select = document.createElement("select");
    select.id = subject['COURSE CODE']

    optionsValue = [10, 9, 8, 7, 6, 0];
    optionsText = ['O', 'A+', 'A', 'B+', 'B', 'F'];

    for(let i=0;i<optionsText.length;i++){
        let option = document.createElement("option")
        option.value = optionsValue[i];
        option.text = optionsText[i];
        select.appendChild(option);
    }
    
    div.appendChild(subName);
    div.appendChild(select);
    div.classList.add('items');
    return div
}

function createSubjectSection(){
    let div = document.createElement('div');
    let div11 = document.createElement('div');
    
    let sub = document.createElement('h2');
    sub.textContent = "Subjects";
    div11.appendChild(sub);

    let score = document.createElement('h2');
    score.textContent = "Score";
    div11.appendChild(score);

    div11.classList.add('items');
    div.appendChild(div11);
    // console.log(selectedSemaster);

    subjects = [...Information[selectedCourse][selectedStream][selectedSemaster]['theory'], ...Information[selectedCourse][selectedStream][selectedSemaster]['practicals']];
    console.log(subjects)
    let p = document.createElement('p');
    p.textContent = "data yet to be collected";
    p.classList.add('flag')

    if (subjects.length === 0){
        div.append(p)
    }
    // if (dictIsEmpty(subjects)){
    //     div.append(p)
    // }
    // else if(dictIsEmpty(subjects['theory'])){
    //     div.append(p)

    // }
    // else{
        // subjects['theory'].forEach(subject => {
        //     div.appendChild(createSubjectElement(subject));
        // });
        // subjects['practicals'].forEach(subject => {
        //     div.appendChild(createSubjectElement(subject));
        // }); 
        subjects.forEach(subject => {
            div.appendChild(createSubjectElement(subject));
        }); 
    // }
   
    return div;
}

function dictIsEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function resSection(){
    let div = document.createElement('div');
    
    let p = document.createElement('p');
    p.textContent = "Cal GPA"
    // p.id = "calGpa";
    p.classList.add('button');
    p.addEventListener("click", calculateGpa);
    div.appendChild(p);

    let res = document.createElement('h1')
    res.id = "res"
    div.appendChild(res)

    return div
    
    
}
function createGpaSection(){
    while(gpaSection.firstChild){
        gpaSection.removeChild(gpaSection.lastChild);
    }
    gpaSection.appendChild(infoSection());
    gpaSection.appendChild(createSubjectSection());
    gpaSection.appendChild(resSection());

    
} 

// gpa calculate
function calculateGpa() {
    totalCredit = 0;
    gp = 0;
    // alert("clicked");
    console.log(subjects);
    subjects.forEach(element => {
        // get Actual grade and add to the dictionary

        id = element["COURSE CODE"]
        const sub = document.getElementById(id);
        // console.log(sub);
        selectedOption = sub.options[sub.selectedIndex];
        // console.log(selectedOption);
        selectedValue = selectedOption.value;
        gradePoints = parseInt(selectedValue);
        element['grdPnt'] = gradePoints;
        // console.log(element);
        
        // cal total
        totalCredit+=element.C;
        
        // cal gpa
        gp += gradePoints*element.C;
        
    });
    gpa = gp/totalCredit;
    // gpa.parseFloat(2);
    const res = document.getElementById('res');
    res.innerHTML = "GPA : " + gpa.toFixed(3);

    // console.log(subjects);
  }