// **USE STRICT**

const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
        
    },
]

const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
}
const buildProjects = () => {
    let domString = "";
    for(let i = 0; i < projects.length; i++){
        if (projects[i].available){
            domString+=`<div class="projectCards">
                          <img src="${projects[i].screenshot}" alt="${projects[i].title}" class="projectimage"/>
                          <div class="details">
                           <h1 class="title">${projects[i].title}</h1>
                           <p class="description">${projects[i].description}</p>
                           <p class="technologies">${projects[i].technologiesUsed}</p>
                           <a href="${projects[i].githubUrl}" class="githublink"><i class="github"></i></a>
                           <a href="${projects[i].url}" class="projectlink"><i class="url"></i></a>
                          </div>
                        </div>` 
        }
    }
    printToDom("projects", domString);
}

const init = () => {
    buildProjects();
}

init();