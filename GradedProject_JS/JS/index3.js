let searchbtn = document.getElementById('searchbtn');

const [one, two, three, four, five, six] = files;

const arrHR = [four];
const arrManager = [three, five, six];
const arrEng = [one, two];

function manager() {

    let x = document.getElementById('btn_pre');
    x.style.visibility = 'hidden';
    let y = document.getElementById('btn_next');
    y.style.visibility = 'visible';

    let i = 0;

    function display() {
        if (i >= 1) {
            x.style.visibility = 'visible'
        } else {
            x.style.visibility = 'hidden'
        }
        if (i <= arrManager.length - 2) {
            y.style.visibility = 'visible'
        } else {
            y.style.visibility = 'hidden'
        }
        main.innerHTML = `
    <div class="name">
                <i class="fa fa-user-circle-o" id="icon"></i>
                <p id="full_name">${arrManager[i].basics.name}</p>
                <p id="applied"><span>Applied For - </span>
                    <span id="applied_for">${arrManager[i].basics.AppliedFor}</span>
                </p>
            </div>
            <section>
            <div class="aside">
                <br />
                <h3>Personal Information</h3>
                <p id="number">${arrManager[i].basics.phone}</p>
                <p id="email">${arrManager[i].basics.email}</p>
                <a href="${arrManager[i].basics.profiles.url}" id="linkedin" target="_blank">LinkedIn Profile</a>
                <br /><br />
    
                <h3>Address</h3>
                <p id="address">${arrManager[i].basics.location.address}</p>
                <p id="pin_code">${arrManager[i].basics.location.postalCode}</p>
                <p id="city">${arrManager[i].basics.location.city}</p>
                <p id="state">${arrManager[i].basics.location.state}</p>
                <br />
    
                <h3>Technical Skills</h3>
                <h4>${arrManager[i].skills.name}</h4>
                <h4>Level - ${arrManager[i].skills.level}</h4>
                <p id="skill_1">${arrManager[i].skills.keywords[0]}</p>
                <p id="skill_2">${arrManager[i].skills.keywords[1]}</p>
                <p id="skill_3">${arrManager[i].skills.keywords[2]}</p>
                <p id="skill_4">${arrManager[i].skills.keywords[3]}</p>
                <p id="skill_5">${arrManager[i].skills.keywords[4]}</p>
                <br />
    
                <h3>Hobbies</h3>
                <p id="hobby_1">${arrManager[i].interests.hobbies[0]}</p>
                <p id="hobby_2">${arrManager[i].interests.hobbies[1]}</p>
                <p id="hobby_3">${arrManager[i].interests.hobbies[2]}</p>
            </div>
        </section>
    
        <section>
            <div class="profile">
                <h2>Work Experience In Previous Company</h2>
                <br />
    
                <div>
                    <span class="bold">Company Name -</span>
                    <span id="company">${arrManager[i].work["Company Name"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Position -</span>
                    <span id="position">${arrManager[i].work.Position}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Start Date -</span>
                    <span id="start_date">${arrManager[i].work["Start Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">End Date -</span>
                    <span id="end_date">${arrManager[i].work["End Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Summary -</span>
                    <span id="summary">
                    ${arrManager[i].work.Summary}
                    </span>
                </div>
                <br />
    
                <h2>Projects</h2> <br />
                <div>
                    <span class="bold">${arrManager[i].projects.name} -</span>
                    <span id="projects">
                    ${arrManager[i].projects.description}
                    </span>
                </div>
                <br />
    
                <h2>Education</h2> <br />
                <ul>
                    <li>
                        <span class="bold">UG -</span>
                        <span id="uginstitute">${arrManager[i].education.UG.institute}</span>
                        <span id="ugcourse">${arrManager[i].education.UG.course}</span>
                        <span id="ugcourse_start_dt">${arrManager[i].education.UG["Start Date"]}</span>
                        <span id="ugcourse_end_dt">${arrManager[i].education.UG["End Date"]}</span>
                        <span id="ugcgpa"> - CGPA ${arrManager[i].education.UG.cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">Senior Secondary -</span>
                        <span id="ssinstitute">${arrManager[i].education["Senior Secondary"].institute}</span>
                        <span id="sscgpa"> - CGPA ${arrManager[i].education["Senior Secondary"].cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">High School -</span>
                        <span id="hsinstitute">${arrManager[i].education["High School"].institute}</span>
                        <span id="hscgpa"> - CGPA ${arrManager[i].education["High School"].cgpa}</span>
                    </li>
                </ul>
                <br />
    
                <h2>Internship</h2> <br />
                <ul>
                    <li>
                        <span class="bold">Company Name -</span>
                        <span id="inter_company">${arrManager[i].Internship["Company Name"]}</span>
                    </li>
                    <li>
                        <span class="bold">Position -</span>
                        <span id="inter_position">${arrManager[i].Internship.Position}</span>
                    </li>
                    <li>
                        <span class="bold">Start Date -</span>
                        <span id="inter_start_date">${arrManager[i].Internship["Start Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">End Date -</span>
                        <span id="inter_end_date">${arrManager[i].Internship["End Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">Summary -</span>
                        <span id="inter_summary">${arrManager[i].Internship.Summary}
                        </span>
                    </li>
                </ul>
                <br />
    
                <h2>Achievements</h2> <br />
                <p id="achievements">${arrManager[i].achievements.Summary}
                </p>
                <br />
                <br />
            </div>
        </section>
    
        <hr />
        <br /> `
    }

    x.addEventListener('click', () => {
        if (i == 0) i = arrManager.length - 1;
        i--;
        display();
    });
    y.addEventListener('click', () => {
        if (i == arrManager.length - 1) i = -1;
        i++;
        display();
    });
};



function hr() {
    x.style.visibility = 'hidden';
    y.style.visibility = 'hidden';

    main.innerHTML = `
    <div class="name">
                <i class="fa fa-user-circle-o" id="icon"></i>
                <p id="full_name">${arrHR[0].basics.name}</p>
                <p id="applied"><span>Applied For - </span>
                    <span id="applied_for">${arrHR[0].basics.AppliedFor}</span>
                </p>
            </div>
    
        <section>
            <div class="aside">
                <br />
                <h3>Personal Information</h3>
                <p id="number">${arrHR[0].basics.phone}</p>
                <p id="email">${arrHR[0].basics.email}</p>
                <a href="${arrHR[0].basics.profiles.url}" id="linkedin" target="_blank">LinkedIn Profile</a>
                <br /><br />
    
                <h3>Address</h3>
                <p id="address">${arrHR[0].basics.location.address}</p>
                <p id="pin_code">${arrHR[0].basics.location.postalCode}</p>
                <p id="city">${arrHR[0].basics.location.city}</p>
                <p id="state">${arrHR[0].basics.location.state}</p>
                <br />
    
                <h3>Technical Skills</h3>
                <h4>${arrHR[0].skills.name}</h4>
                <h4>Level - ${arrHR[0].skills.level}</h4>
                <p id="skill_1">${arrHR[0].skills.keywords[0]}</p>
                <p id="skill_2">${arrHR[0].skills.keywords[1]}</p>
                <p id="skill_3">${arrHR[0].skills.keywords[2]}</p>
                <p id="skill_4">${arrHR[0].skills.keywords[3]}</p>
                <p id="skill_5">${arrHR[0].skills.keywords[4]}</p>
                <br />
    
                <h3>Hobbies</h3>
                <p id="hobby_1">${arrHR[0].interests.hobbies[0]}</p>
                <p id="hobby_2">${arrHR[0].interests.hobbies[1]}</p>
                <p id="hobby_3">${arrHR[0].interests.hobbies[2]}</p>
            </div>
        </section>
    
        <section>
            <div class="profile">
                <h2>Work Experience In Previous Company</h2>
                <br />
    
                <div>
                    <span class="bold">Company Name -</span>
                    <span id="company">${arrHR[0].work["Company Name"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Position -</span>
                    <span id="position">${arrHR[0].work.Position}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Start Date -</span>
                    <span id="start_date">${arrHR[0].work["Start Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">End Date -</span>
                    <span id="end_date">${arrHR[0].work["End Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Summary -</span>
                    <span id="summary">
                    ${arrHR[0].work.Summary}
                    </span>
                </div>
                <br />
    
                <h2>Projects</h2> <br />
                <div>
                    <span class="bold">${arrHR[0].projects.name} -</span>
                    <span id="projects">
                    ${arrHR[0].projects.description}
                    </span>
                </div>
                <br />
    
                <h2>Education</h2> <br />
                <ul>
                    <li>
                        <span class="bold">UG -</span>
                        <span id="uginstitute">${arrHR[0].education.UG.institute}</span>
                        <span id="ugcourse">${arrHR[0].education.UG.course}</span>
                        <span id="ugcourse_start_dt">${arrHR[0].education.UG["Start Date"]}</span>
                        <span id="ugcourse_end_dt">${arrHR[0].education.UG["End Date"]}</span>
                        <span id="ugcgpa"> - CGPA ${arrHR[0].education.UG.cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">Senior Secondary -</span>
                        <span id="ssinstitute">${arrHR[0].education["Senior Secondary"].institute}</span>
                        <span id="sscgpa"> - CGPA ${arrHR[0].education["Senior Secondary"].cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">High School -</span>
                        <span id="hsinstitute">${arrHR[0].education["High School"].institute}</span>
                        <span id="hscgpa"> - CGPA ${arrHR[0].education["High School"].cgpa}</span>
                    </li>
                </ul>
                <br />
    
                <h2>Internship</h2> <br />
                <ul>
                    <li>
                        <span class="bold">Company Name -</span>
                        <span id="inter_company">${arrHR[0].Internship["Company Name"]}</span>
                    </li>
                    <li>
                        <span class="bold">Position -</span>
                        <span id="inter_position">${arrHR[0].Internship.Position}</span>
                    </li>
                    <li>
                        <span class="bold">Start Date -</span>
                        <span id="inter_start_date">${arrHR[0].Internship["Start Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">End Date -</span>
                        <span id="inter_end_date">${arrHR[0].Internship["End Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">Summary -</span>
                        <span id="inter_summary">${arrHR[0].Internship.Summary}
                        </span>
                    </li>
                </ul>
                <br />
    
                <h2>Achievements</h2> <br />
                <p id="achievements">${arrHR[0].achievements.Summary}
                </p>
                <br />
                <br />
            </div>
        </section>
    
        <hr />
        <br /> `
};


function eng() {

    let x = document.getElementById('btn_pre');
    x.style.visibility = 'hidden';
    let y = document.getElementById('btn_next');
    y.style.visibility = 'visible';

    let i = 0;

    function display() {
        if (i >= 1) {
            x.style.visibility = 'visible'
        } else {
            x.style.visibility = 'hidden'
        }
        if (i <= arrEng.length - 2) {
            y.style.visibility = 'visible'
        } else {
            y.style.visibility = 'hidden'
        }
        main.innerHTML = `
    <div class="name">
                <i class="fa fa-user-circle-o" id="icon"></i>
                <p id="full_name">${arrEng[i].basics.name}</p>
                <p id="applied"><span>Applied For - </span>
                    <span id="applied_for">${arrEng[i].basics.AppliedFor}</span>
                </p>
            </div>
            <section>
            <div class="aside">
                <br />
                <h3>Personal Information</h3>
                <p id="number">${arrEng[i].basics.phone}</p>
                <p id="email">${arrEng[i].basics.email}</p>
                <a href="${arrEng[i].basics.profiles.url}" id="linkedin" target="_blank">LinkedIn Profile</a>
                <br /><br />
    
                <h3>Address</h3>
                <p id="address">${arrEng[i].basics.location.address}</p>
                <p id="pin_code">${arrEng[i].basics.location.postalCode}</p>
                <p id="city">${arrEng[i].basics.location.city}</p>
                <p id="state">${arrEng[i].basics.location.state}</p>
                <br />
    
                <h3>Technical Skills</h3>
                <h4>${arrEng[i].skills.name}</h4>
                <h4>Level - ${arrEng[i].skills.level}</h4>
                <p id="skill_1">${arrEng[i].skills.keywords[0]}</p>
                <p id="skill_2">${arrEng[i].skills.keywords[1]}</p>
                <p id="skill_3">${arrEng[i].skills.keywords[2]}</p>
                <p id="skill_4">${arrEng[i].skills.keywords[3]}</p>
                <p id="skill_5">${arrEng[i].skills.keywords[4]}</p>
                <br />
    
                <h3>Hobbies</h3>
                <p id="hobby_1">${arrEng[i].interests.hobbies[0]}</p>
                <p id="hobby_2">${arrEng[i].interests.hobbies[1]}</p>
                <p id="hobby_3">${arrEng[i].interests.hobbies[2]}</p>
            </div>
        </section>
    
        <section>
            <div class="profile">
                <h2>Work Experience In Previous Company</h2>
                <br />
    
                <div>
                    <span class="bold">Company Name -</span>
                    <span id="company">${arrEng[i].work["Company Name"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Position -</span>
                    <span id="position">${arrEng[i].work.Position}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Start Date -</span>
                    <span id="start_date">${arrEng[i].work["Start Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">End Date -</span>
                    <span id="end_date">${arrEng[i].work["End Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Summary -</span>
                    <span id="summary">
                    ${arrEng[i].work.Summary}
                    </span>
                </div>
                <br />
    
                <h2>Projects</h2> <br />
                <div>
                    <span class="bold">${arrEng[i].projects.name} -</span>
                    <span id="projects">
                    ${arrEng[i].projects.description}
                    </span>
                </div>
                <br />
    
                <h2>Education</h2> <br />
                <ul>
                    <li>
                        <span class="bold">UG -</span>
                        <span id="uginstitute">${arrEng[i].education.UG.institute}</span>
                        <span id="ugcourse">${arrEng[i].education.UG.course}</span>
                        <span id="ugcourse_start_dt">${arrEng[i].education.UG["Start Date"]}</span>
                        <span id="ugcourse_end_dt">${arrEng[i].education.UG["End Date"]}</span>
                        <span id="ugcgpa"> - CGPA ${arrEng[i].education.UG.cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">Senior Secondary -</span>
                        <span id="ssinstitute">${arrEng[i].education["Senior Secondary"].institute}</span>
                        <span id="sscgpa"> - CGPA ${arrEng[i].education["Senior Secondary"].cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">High School -</span>
                        <span id="hsinstitute">${arrEng[i].education["High School"].institute}</span>
                        <span id="hscgpa"> - CGPA ${arrEng[i].education["High School"].cgpa}</span>
                    </li>
                </ul>
                <br />
    
                <h2>Internship</h2> <br />
                <ul>
                    <li>
                        <span class="bold">Company Name -</span>
                        <span id="inter_company">${arrEng[i].Internship["Company Name"]}</span>
                    </li>
                    <li>
                        <span class="bold">Position -</span>
                        <span id="inter_position">${arrEng[i].Internship.Position}</span>
                    </li>
                    <li>
                        <span class="bold">Start Date -</span>
                        <span id="inter_start_date">${arrEng[i].Internship["Start Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">End Date -</span>
                        <span id="inter_end_date">${arrEng[i].Internship["End Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">Summary -</span>
                        <span id="inter_summary">${arrEng[i].Internship.Summary}
                        </span>
                    </li>
                </ul>
                <br />
    
                <h2>Achievements</h2> <br />
                <p id="achievements">${arrEng[i].achievements.Summary}
                </p>
                <br />
                <br />
            </div>
        </section>
    
        <hr />
        <br /> `
    }

    x.addEventListener('click', () => {
        if (i == 0) i = arrManager.length - 1;
        i--;
        display();
    });
    y.addEventListener('click', () => {
        if (i == arrManager.length - 1) i = -1;
        i++;
        display();
    });
};

searchbtn.addEventListener('click', () => {
    let search = document.getElementById('searchbox').value;
    //console.log(search);

    switch (search) {
        case 'Manager':
            initialtextmanager();
            manager();
            break;
        case 'HR':
            hr();
            break;
        case 'Software Engineer':
            initialtexteng();
            eng();
            break;
        case 'software engineer':
            initialtexteng();
            eng();
            break;
        case 'hr':
            hr();
            break;
        case 'manager':
            initialtextmanager();
            manager();
            break;
        default:
            main.innerHTML = `                 
                 <div class="alert">  
                 <i class="fa fa-meh-o" id="icon"></i>               
                 <strong>SEARCH RESULT NOT FOUND!</strong> 
                 <p>No Applications for this Job.<p>
                 </div> 
                 <br/> `
            setTimeout(() => {
                location.reload();
            }, 2000)
    }
});

function initialtextmanager() {
    let i = 0;
    main.innerHTML = `
    <div class="name">
                <i class="fa fa-user-circle-o" id="icon"></i>
                <p id="full_name">${arrManager[i].basics.name}</p>
                <p id="applied"><span>Applied For - </span>
                    <span id="applied_for">${arrManager[i].basics.AppliedFor}</span>
                </p>
            </div>
            <section>
            <div class="aside">
                <br />
                <h3>Personal Information</h3>
                <p id="number">${arrManager[i].basics.phone}</p>
                <p id="email">${arrManager[i].basics.email}</p>
                <a href="${arrManager[i].basics.profiles.url}" id="linkedin" target="_blank">LinkedIn Profile</a>
                <br /><br />
    
                <h3>Address</h3>
                <p id="address">${arrManager[i].basics.location.address}</p>
                <p id="pin_code">${arrManager[i].basics.location.postalCode}</p>
                <p id="city">${arrManager[i].basics.location.city}</p>
                <p id="state">${arrManager[i].basics.location.state}</p>
                <br />
    
                <h3>Technical Skills</h3>
                <h4>${arrManager[i].skills.name}</h4>
                <h4>Level - ${arrManager[i].skills.level}</h4>
                <p id="skill_1">${arrManager[i].skills.keywords[0]}</p>
                <p id="skill_2">${arrManager[i].skills.keywords[1]}</p>
                <p id="skill_3">${arrManager[i].skills.keywords[2]}</p>
                <p id="skill_4">${arrManager[i].skills.keywords[3]}</p>
                <p id="skill_5">${arrManager[i].skills.keywords[4]}</p>
                <br />
    
                <h3>Hobbies</h3>
                <p id="hobby_1">${arrManager[i].interests.hobbies[0]}</p>
                <p id="hobby_2">${arrManager[i].interests.hobbies[1]}</p>
                <p id="hobby_3">${arrManager[i].interests.hobbies[2]}</p>
            </div>
        </section>
    
        <section>
            <div class="profile">
                <h2>Work Experience In Previous Company</h2>
                <br />
    
                <div>
                    <span class="bold">Company Name -</span>
                    <span id="company">${arrManager[i].work["Company Name"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Position -</span>
                    <span id="position">${arrManager[i].work.Position}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Start Date -</span>
                    <span id="start_date">${arrManager[i].work["Start Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">End Date -</span>
                    <span id="end_date">${arrManager[i].work["End Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Summary -</span>
                    <span id="summary">
                    ${arrManager[i].work.Summary}
                    </span>
                </div>
                <br />
    
                <h2>Projects</h2> <br />
                <div>
                    <span class="bold">${arrManager[i].projects.name} -</span>
                    <span id="projects">
                    ${arrManager[i].projects.description}
                    </span>
                </div>
                <br />
    
                <h2>Education</h2> <br />
                <ul>
                    <li>
                        <span class="bold">UG -</span>
                        <span id="uginstitute">${arrManager[i].education.UG.institute}</span>
                        <span id="ugcourse">${arrManager[i].education.UG.course}</span>
                        <span id="ugcourse_start_dt">${arrManager[i].education.UG["Start Date"]}</span>
                        <span id="ugcourse_end_dt">${arrManager[i].education.UG["End Date"]}</span>
                        <span id="ugcgpa"> - CGPA ${arrManager[i].education.UG.cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">Senior Secondary -</span>
                        <span id="ssinstitute">${arrManager[i].education["Senior Secondary"].institute}</span>
                        <span id="sscgpa"> - CGPA ${arrManager[i].education["Senior Secondary"].cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">High School -</span>
                        <span id="hsinstitute">${arrManager[i].education["High School"].institute}</span>
                        <span id="hscgpa"> - CGPA ${arrManager[i].education["High School"].cgpa}</span>
                    </li>
                </ul>
                <br />
    
                <h2>Internship</h2> <br />
                <ul>
                    <li>
                        <span class="bold">Company Name -</span>
                        <span id="inter_company">${arrManager[i].Internship["Company Name"]}</span>
                    </li>
                    <li>
                        <span class="bold">Position -</span>
                        <span id="inter_position">${arrManager[i].Internship.Position}</span>
                    </li>
                    <li>
                        <span class="bold">Start Date -</span>
                        <span id="inter_start_date">${arrManager[i].Internship["Start Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">End Date -</span>
                        <span id="inter_end_date">${arrManager[i].Internship["End Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">Summary -</span>
                        <span id="inter_summary">${arrManager[i].Internship.Summary}
                        </span>
                    </li>
                </ul>
                <br />
    
                <h2>Achievements</h2> <br />
                <p id="achievements">${arrManager[i].achievements.Summary}
                </p>
                <br />
                <br />
            </div>
        </section>
    
        <hr />
        <br /> `
};

function initialtexteng() {
    let i = 0;
    main.innerHTML = `
    <div class="name">
                <i class="fa fa-user-circle-o" id="icon"></i>
                <p id="full_name">${arrEng[i].basics.name}</p>
                <p id="applied"><span>Applied For - </span>
                    <span id="applied_for">${arrEng[i].basics.AppliedFor}</span>
                </p>
            </div>
            <section>
            <div class="aside">
                <br />
                <h3>Personal Information</h3>
                <p id="number">${arrEng[i].basics.phone}</p>
                <p id="email">${arrEng[i].basics.email}</p>
                <a href="${arrEng[i].basics.profiles.url}" id="linkedin" target="_blank">LinkedIn Profile</a>
                <br /><br />
    
                <h3>Address</h3>
                <p id="address">${arrEng[i].basics.location.address}</p>
                <p id="pin_code">${arrEng[i].basics.location.postalCode}</p>
                <p id="city">${arrEng[i].basics.location.city}</p>
                <p id="state">${arrEng[i].basics.location.state}</p>
                <br />
    
                <h3>Technical Skills</h3>
                <h4>${arrEng[i].skills.name}</h4>
                <h4>Level - ${arrEng[i].skills.level}</h4>
                <p id="skill_1">${arrEng[i].skills.keywords[0]}</p>
                <p id="skill_2">${arrEng[i].skills.keywords[1]}</p>
                <p id="skill_3">${arrEng[i].skills.keywords[2]}</p>
                <p id="skill_4">${arrEng[i].skills.keywords[3]}</p>
                <p id="skill_5">${arrEng[i].skills.keywords[4]}</p>
                <br />
    
                <h3>Hobbies</h3>
                <p id="hobby_1">${arrEng[i].interests.hobbies[0]}</p>
                <p id="hobby_2">${arrEng[i].interests.hobbies[1]}</p>
                <p id="hobby_3">${arrEng[i].interests.hobbies[2]}</p>
            </div>
        </section>
    
        <section>
            <div class="profile">
                <h2>Work Experience In Previous Company</h2>
                <br />
    
                <div>
                    <span class="bold">Company Name -</span>
                    <span id="company">${arrEng[i].work["Company Name"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Position -</span>
                    <span id="position">${arrEng[i].work.Position}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Start Date -</span>
                    <span id="start_date">${arrEng[i].work["Start Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">End Date -</span>
                    <span id="end_date">${arrEng[i].work["End Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Summary -</span>
                    <span id="summary">
                    ${arrEng[i].work.Summary}
                    </span>
                </div>
                <br />
    
                <h2>Projects</h2> <br />
                <div>
                    <span class="bold">${arrEng[i].projects.name} -</span>
                    <span id="projects">
                    ${arrEng[i].projects.description}
                    </span>
                </div>
                <br />
    
                <h2>Education</h2> <br />
                <ul>
                    <li>
                        <span class="bold">UG -</span>
                        <span id="uginstitute">${arrEng[i].education.UG.institute}</span>
                        <span id="ugcourse">${arrEng[i].education.UG.course}</span>
                        <span id="ugcourse_start_dt">${arrEng[i].education.UG["Start Date"]}</span>
                        <span id="ugcourse_end_dt">${arrEng[i].education.UG["End Date"]}</span>
                        <span id="ugcgpa"> - CGPA ${arrEng[i].education.UG.cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">Senior Secondary -</span>
                        <span id="ssinstitute">${arrEng[i].education["Senior Secondary"].institute}</span>
                        <span id="sscgpa"> - CGPA ${arrEng[i].education["Senior Secondary"].cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">High School -</span>
                        <span id="hsinstitute">${arrEng[i].education["High School"].institute}</span>
                        <span id="hscgpa"> - CGPA ${arrEng[i].education["High School"].cgpa}</span>
                    </li>
                </ul>
                <br />
    
                <h2>Internship</h2> <br />
                <ul>
                    <li>
                        <span class="bold">Company Name -</span>
                        <span id="inter_company">${arrEng[i].Internship["Company Name"]}</span>
                    </li>
                    <li>
                        <span class="bold">Position -</span>
                        <span id="inter_position">${arrEng[i].Internship.Position}</span>
                    </li>
                    <li>
                        <span class="bold">Start Date -</span>
                        <span id="inter_start_date">${arrEng[i].Internship["Start Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">End Date -</span>
                        <span id="inter_end_date">${arrEng[i].Internship["End Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">Summary -</span>
                        <span id="inter_summary">${arrEng[i].Internship.Summary}
                        </span>
                    </li>
                </ul>
                <br />
    
                <h2>Achievements</h2> <br />
                <p id="achievements">${arrEng[i].achievements.Summary}
                </p>
                <br />
                <br />
            </div>
        </section>
    
        <hr />
        <br /> `
};