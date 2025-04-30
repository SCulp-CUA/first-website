const subsectionData = [
    {
        title: ["Our Approach"],
        imageSource: ["images/hold_flower.jpg"],
        imageAlt: [""],
        text: ["At Effloresco, we understand the unique needs of young adults still strying to find their place in the world and establish a healthy relationship with themselves. Our approach focuses on empowering individuals to build strong relationships, develop self-awareness, and cultivate self-confidence. Through various worksheets, online resources, individualized coaching plans, and virtual one-on-one coaching sessions, we provide a safe and supportive space for personal growth and development."]
    },
    {
        title: ["01. Intrapersonal Skills"],
        imageSource: ["images/intra_flower.jpg"],
        imageAlt: ["single red flower"],
        text: ["We specialize in guiding young adults in developing a deeper understanding of themselves and their connection with the Divine. We focus on enhancing intrapersonal skills, including self-awareness and an assessment of strengths, weaknesses, and values to support our clients in building meaningful connections and understanding themselves better."]

    },
    {
        title: ["02. Interpersonal Skills"],
        imageSource: ["images/inter_birds.jpg"],
        imageAlt: ["many birds playing"],
        text: ["Our sessions are designed to improve boundary setting techniques and conflict resolution strategies enabling clients to form healthy connections and navigate social interactions with ease."]
    },
    {
        title: ["03. Confidence and Self-Worth"],
        imageSource: ["images/confidence.jpg"],
        imageAlt: ["blooming boquet"],
        text: ["We provide resources aimed at boosting self-confidence, self-worth, and self-assurance in young adults."]
    }
]


const template = document.getElementById("section-template");
const main = document.querySelector("main");

// Populate and append sections
subsectionData.forEach((data, index) => {

    // Clone the template content
    const section = template.content.cloneNode(true);
    
    // Assign a unique ID to the section for CSS purposes
    const sectionElement = section.querySelector("section");
    sectionElement.id = `section-${index + 1}`; // Creates IDs like section-1, section-2, etc.
    

    // Populate the template content with data. first piece in the index2.html template aligns with first piece in each subsection here etc.
    section.querySelector("h2").textContent = data.title;
    const img = section.querySelector("img");
    img.src = data.imageSource;
    img.alt = data.imageAlt;
    section.querySelector("p").textContent = data.text;

    
    // Add a unique class to the image for CSS purposes
    const customClass = `image-${index + 1}`; // Generates classes like image-1, image-2, etc.
    img.classList.add(customClass);

    // Append the populated section to <main>
    main.appendChild(section);
});

//use a doc fragment. put main.append outside of the doc fragment to prevent the whole thing from rendering each time. which is what the "forEach" is doing
  
