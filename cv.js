let url = "cv.json";

async function getCv() {

    let response = await fetch(url);

    if (response.ok) {
        let cv = await response.json();

        // getting html elements to put data in
        const divEducation = document.getElementById("education");
        const divWork = document.getElementById("work");

        // adding eductation data 
        for (i = 0; i < cv.education.length; i++) {
            // creating the html elements needed
            const section = document.createElement("section");
            const h3 = document.createElement("h3");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");
            const p = document.createElement("p");

            // adding text from json file to created elements
            h3.textContent = cv.education[i].title;
            span1.textContent = cv.education[i].school;
            span2.textContent = cv.education[i].year;
            p.textContent = cv.education[i].description;

            // adding the elements to the html
            divEducation.appendChild(section);
            section.appendChild(h3);
            section.appendChild(span1);
            section.appendChild(span2);
            section.appendChild(p);
        }
        // adding work data
        for (i = 0; i < cv.work.length; i++) {
            // creating the html elements needed
            const section = document.createElement("section");
            const h3 = document.createElement("h3");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");
            const p = document.createElement("p");

            // adding text from json file to created elements
            h3.textContent = cv.work[i].title;
            span1.textContent = cv.work[i].workplace;
            span2.textContent = cv.work[i].year;
            p.textContent = cv.work[i].description;

            // adding the elements to the html
            divWork.appendChild(section);
            section.appendChild(h3);
            section.appendChild(span1);
            section.appendChild(span2);
            section.appendChild(p);
        }

    } else {
        console.log("HTTP-Error: " + response.status);
    }
}

getCv();