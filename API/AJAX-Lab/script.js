const body = document.getElementById("container")

fetch("https://www.reddit.com/r/aww/.json") //Fetch the data from link
.then(data => data.json()) //Then take the DATA and conver to JSON


.then(data => { 
    // console.log(data)
    for(let i = 0; i < data.data.children.length; i++){ //Then take the JSON DATA and iterate through the children length.
         const newDiv = document.createElement("div")
         let Names = data.data.children[i].data.name
         let title = data.data.children[i].data.title //Grab the value from each child and assign it a variable to be used later. IMPORTANT to remember you can do this anytime!!
         let link = data.data.children[i].data.url
         let image = data.data.children[i].data.permalink
        newDiv.innerHTML = `Name: ${Names} <br> Title: ${title} <br> Link: ${link} <br> Image: ${image} ` //change the inner text each newDIV inside of the HTML doc 
        console.log(newDiv);
        body.appendChild(newDiv); //Take the newDiv and insert it into the HTML file using the DOM.
    }  
})


