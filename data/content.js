const subsectionData = [
        {
            title:["What is a life Coach"],
            imageSource: ["images/road.jpg"],
            imageAlt: ["a man walking down a road at sunset"],
            text: [" Sometimes, just talking through a problem to listening ears is the solution. Life coaches do that and much more. Life coaches don't solve your problems for you, but offer advice so you can achieve goals, build confidence, and create positive change. Life can be overwhelming, and it can push your dreams to the back burner. A life coach helps you develop an organized plan to foster success in areas such as personal relationships, career change or advancement, and long term dreams."]
              
        },
        {
            title:["What to Expect"],
            imageSource: ["images/convo.jpg"],
            imageAlt: ["conversation between two people"],
            text: ["Sessions are typically one hour long, and you can anticipate a productive conversation with a coach who uses active listening, insightful questioning, and goal setting exercises."]
            
        },
        {
            title:["How to tell if you would benefit"],
            imageSource: ["images/Stones.jpg"],
            imageAlt: ["a stack of stones"],
            text: ["If you know you struggle with making decisions, a life coach can help you develop trust in yourself that you are capable of making the right choice. If you had a major life change, a coach can help restore order. If you always find yourself in a bad or unfulfilling relationship it might be time to explore more about yourself and your attachment style. If you want to change careers, a coach can guide you."]
        },
        {
            title:["My areas of expertise"],
            imageSource: ["images/love_respect.jpg"],
            imageAlt: ["sitting and reading a book"],
            text: ["I have a deep interest in interpersonal relationships: friendships, dating, situationships, etc. I've seen the good, the bad, and the ugly. Through the process, I've witnessed myself become truer, more confident, and stronger. Through books and sheer experience, I have much to offer. I want to share what I have taken years of classes, reading, and heartbreak to learn. If you would accept my advice, allow me to hear your story."]
        },
          {
            title: ["Testimonials"],
            imageSource: ["images/stars.jpg"],
            imageAlt: ["star lights on a string"],
            text: ["'I can't recommend this life coaching service enough! From the moment I began working with Nece, I felt understood, supported, and motivated to make real changes in my life. The sessions are always tailored to my specific goals, and she provides insightful guidance and practical tools that I can easily apply in my everyday life.' -Medical Student 2024","'I've gained so much clarity about my personal and professional path, and I've started making decisions with confidence. The transformation has been incredible! The service is truly dedicated to helping you become the best version of yourself.' -Single Mom of Two, 2024", "'If you're looking for someone who is compassionate, knowledgeable, and genuinely committed to your success, Floresco is the coaching service you need!' -New Business Owner, 2025"]  
        // Somehow, I want to make each review have its own line
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
  
