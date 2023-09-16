const token = window.localStorage.getItem("token")

async function postProject (title, description, goal, image) {
    const url =`${import.meta.env.VITE_API_URL}/projects/`;
    const response =await fetch(url,{
        method:"POST",
    // We need to tell the server that we are sending JSON dataso we set the Content-Type header to application/jsonheaders:
    headers: {
        "Content-Type":"application/json",
        "Authorization": `Token ${token}`
    },
    body:JSON.stringify({
        "title": title,
        "description": description,
        "goal": goal,
        "image": image,
        "is_open": true,
        //TODO - get the real date here
        //what format does the backend want for the date? we can do 
        "date_created": "2024-04-08T14:28:23Z"
    }),
});

if (!response.ok) {
    const fallbackError =`Error trying to create project`;

    const data =await response.json().catch(() =>{
        throw new Error(fallbackError);
    });

    const errorMessage = data?.detail?? fallbackError;
    throw new Error(errorMessage);  
}

return await response.json();
}

export default postProject;