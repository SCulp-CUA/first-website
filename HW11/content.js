fetch("https://picsum.photos/v2/list?page=2&limit=10")
    .then(async (res) => {
        const dataa = await res.json();
        console.log("List of Data", dataa);
     
    


const template = document.getElementById("section-template");
const main = document.querySelector("main");

// Populate and append sections
dataa.forEach((data, index) => {

    // Clone the template content
    const section = template.content.cloneNode(true);

    // Populate the template content with data
    const img = section.querySelector("img");
    img.src = data.download_url;
    console.log(data.download_url)
   
    // Append the populated section to <main>
    main.appendChild(section);
});

    })
    .catch(err => console.error(err));
