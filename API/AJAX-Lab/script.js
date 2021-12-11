const body = document.getElementById("container")

fetch("https://www.reddit.com/r/aww/.json") //Fetch the data from link
.then(data => data.json()) //Then take the DATA and conver to JSON


.then(data => { 
    // console.log(data)
    for(let i = 0; i < data.data.children.length; i++){ //Then take the JSON DATA and iterate through the "children data" length. 
        
        const section = document.getElementById("section")//Create new section container for every object
        //Title of post
        const title = data.data.children[i].data.title; //Grab the value from each child and assign it a variable to be used later. IMPORTANT to remember you can do this anytime!!  Creat H2 for Title and create somewhere to put it
        const postHeading = document.createElement("h2");
        postHeading.innerText = title;//add title to h2
        section.append(postHeading); //append h2
        //Name of user
        const Names = data.data.children[i].data.name;//Create h3 for Name of poster
        const nameOfUser = document.createElement("h3");
        nameOfUser.innerText = Names;// Insert Names into the H3 element
        section.append(nameOfUser);//append completed H3 element into the section
        //Image
        let image = data.data.children[i].data.thumbnail; //Create img element
        const postsImage = document.createElement("img");
        postsImage.setAttribute("src", image);
        section.append(postsImage);
       //Link
        let link = data.data.children[i].data.permalink;//create anchor element and grab the data
        let url = "http://reddit.com" + link
        const newLinkPara = document.createElement("p")
        const newLink = document.createElement("a");
        newLink.setAttribute("href", url)
        newLink.target ="_blank";
        newLink.innerText = "Click to follow link to Reddit!"
        newLinkPara.append(newLink);
        section.append(newLink);

        
    }  
})


