console.log(files);
console.log(files[0].basics.name);

let main = document.querySelector('.main');

let x = document.getElementById('btn_pre');
x.style.visibility = 'hidden';
let y = document.getElementById('btn_next');

let i = 0;

function display() {
    if (i >= 1) {
        x.style.visibility = 'visible'
    } else {
        x.style.visibility = 'hidden'
    }
    if (i <= files.length - 2) {
        y.style.visibility = 'visible'
    } else {
        y.style.visibility = 'hidden'
    }
    main.innerHTML = `
    <div class="name">
                <i class="fa fa-user-circle-o" id="icon"></i>
                <p id="full_name">${files[i].basics.name}</p>
                <p id="applied"><span>Applied For - </span>
                    <span id="applied_for">${files[i].basics.AppliedFor}</span>
                </p>
            </div>
    
        <section>
            <div class="aside">
                <br />
                <h3>Personal Information</h3>
                <p id="number">${files[i].basics.phone}</p>
                <p id="email">${files[i].basics.email}</p>
                <a href="${files[i].basics.profiles.url}" id="linkedin" target="_blank">LinkedIn Profile</a>
                <br /><br />
    
                <h3>Address</h3>
                <p id="address">${files[i].basics.location.address}</p>
                <p id="pin_code">${files[i].basics.location.postalCode}</p>
                <p id="city">${files[i].basics.location.city}</p>
                <p id="state">${files[i].basics.location.state}</p>
                <br />
    
                <h3>Technical Skills</h3>
                <h4>${files[i].skills.name}</h4>
                <h4>Level - ${files[i].skills.level}</h4>
                <p id="skill_1">${files[i].skills.keywords[0]}</p>
                <p id="skill_2">${files[i].skills.keywords[1]}</p>
                <p id="skill_3">${files[i].skills.keywords[2]}</p>
                <p id="skill_4">${files[i].skills.keywords[3]}</p>
                <p id="skill_5">${files[i].skills.keywords[4]}</p>
                <br />
    
                <h3>Hobbies</h3>
                <p id="hobby_1">${files[i].interests.hobbies[0]}</p>
                <p id="hobby_2">${files[i].interests.hobbies[1]}</p>
                <p id="hobby_3">${files[i].interests.hobbies[2]}</p>
            </div>
        </section>
    
        <section>
            <div class="profile">
                <h2>Work Experience In Previous Company</h2>
                <br />
    
                <div>
                    <span class="bold">Company Name -</span>
                    <span id="company">${files[i].work["Company Name"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Position -</span>
                    <span id="position">${files[i].work.Position}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Start Date -</span>
                    <span id="start_date">${files[i].work["Start Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">End Date -</span>
                    <span id="end_date">${files[i].work["End Date"]}</span>
                </div>
                <br />
    
                <div>
                    <span class="bold">Summary -</span>
                    <span id="summary">
                    ${files[i].work.Summary}
                    </span>
                </div>
                <br />
    
                <h2>Projects</h2> <br />
                <div>
                    <span class="bold">${files[i].projects.name} -</span>
                    <span id="projects">
                    ${files[i].projects.description}
                    </span>
                </div>
                <br />
    
                <h2>Education</h2> <br />
                <ul>
                    <li>
                        <span class="bold">UG -</span>
                        <span id="uginstitute">${files[i].education.UG.institute}</span>
                        <span id="ugcourse">${files[i].education.UG.course}</span>
                        <span id="ugcourse_start_dt">${files[i].education.UG["Start Date"]}</span>
                        <span id="ugcourse_end_dt">${files[i].education.UG["End Date"]}</span>
                        <span id="ugcgpa"> - CGPA ${files[i].education.UG.cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">Senior Secondary -</span>
                        <span id="ssinstitute">${files[i].education["Senior Secondary"].institute}</span>
                        <span id="sscgpa"> - CGPA ${files[i].education["Senior Secondary"].cgpa}</span>
                    </li>
    
                    <li>
                        <span class="bold">High School -</span>
                        <span id="hsinstitute">${files[i].education["High School"].institute}</span>
                        <span id="hscgpa"> - CGPA ${files[i].education["High School"].cgpa}</span>
                    </li>
                </ul>
                <br />
    
                <h2>Internship</h2> <br />
                <ul>
                    <li>
                        <span class="bold">Company Name -</span>
                        <span id="inter_company">${files[i].Internship["Company Name"]}</span>
                    </li>
                    <li>
                        <span class="bold">Position -</span>
                        <span id="inter_position">${files[i].Internship.Position}</span>
                    </li>
                    <li>
                        <span class="bold">Start Date -</span>
                        <span id="inter_start_date">${files[i].Internship["Start Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">End Date -</span>
                        <span id="inter_end_date">${files[i].Internship["End Date"]}</span>
                    </li>
                    <li>
                        <span class="bold">Summary -</span>
                        <span id="inter_summary">${files[i].Internship.Summary}
                        </span>
                    </li>
                </ul>
                <br />
    
                <h2>Achievements</h2> <br />
                <p id="achievements">${files[i].achievements.Summary}
                </p>
                <br />
                <br />
            </div>
        </section>
    
        <hr />
        <br /> `
}

x.addEventListener('click', () => {
    if (i == 0) i = files.length - 1;
    i--;
    display();
});
y.addEventListener('click', () => {
    if (i == files.length - 1) i = -1;
    i++;
    display();
});

let viewAll = document.querySelector('#allbtn');
viewAll.addEventListener('click', () => {
    location.reload();
});