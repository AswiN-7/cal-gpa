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


const gpaCal = document.getElementById('calGpa')
const res = document.getElementById('res');


function calculateGpa() {
    totalCredit = 0;
    gp = 0;
    // alert("clicked");
    subjects.forEach(element => {
        // get Actual grade and add to the dictionary

        id = element.id
        const sub = document.getElementById(id);
        // console.log(sub);
        selectedOption = sub.options[sub.selectedIndex];
        // console.log(selectedOption);
        selectedValue = selectedOption.value;
        gradePoints = parseInt(selectedValue);
        element['grdPnt'] = gradePoints;
        
        // cal total
        totalCredit+=element.credit;
        
        // cal gpa
        gp += gradePoints*element.credit;
        
    });
    gpa = gp/totalCredit;

    res.innerHTML = "GPA : " + gpa;

    // console.log(subjects);

  }


gpaCal.addEventListener("click", calculateGpa);


subjects = [{
    id : "sub1",
    sub : "UCS1701",
    credit : 3
}, 
{
    id : "sub2",
    sub : "UCS1702",
    credit : 3
}, 
{
    id : "sub3",
    sub : "UCS1703",
    credit : 3
},
{
    id : "sub4",
    sub : "UCS1704",
    credit : 3
},
{
    id : "sub5",
    sub : "PE1",
    credit : 3
},
{
    id : "sub6",
    sub : "PE2",
    credit : 3
}, 
{
    id : "sub7",
    sub : "UCS1711",
    credit : 1.5
},
{
    id : "sub8",
    sub : "UCS1712",
    credit : 1.5
}] 

arr_subs= ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8']
// arr_capture = []


// const sub1 = document.getElementById('sub1')
// console.log(arr_capture);

// const text = arr_capture[0].options[1].text;
// console.log(text)

console.log(subjects);