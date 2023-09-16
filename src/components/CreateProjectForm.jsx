import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postProject from "../api/post-project.js";

function CreateProjectForm() {
    const navigate = useNavigate();
    const [projectDetails, setProjectDetails] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectDetails((prevprojectDetails) => ({
            ...prevprojectDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("Starting request");
        postProject(projectDetails.title, projectDetails.description, projectDetails.goal, projectDetails.image)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => console.log(err));
        };


    return (
    <form>
        <div>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" placeholder="Enter title" onChange={handleChange} />
            
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" placeholder="Description" onChange={handleChange}/>
            
        </div>
        <div>
            <label htmlFor="goal">Goal:</label>
            <input type="number" id="goal" placeholder="goal" onChange={handleChange}/>
            
        </div>
        <div>
            <label htmlFor="image">Image:</label>
            <input type="url" id="image" placeholder="image" onChange={handleChange}/>
            
        </div>
        <button type="submit" onClick={handleSubmit}>
            Create
        </button>   
    </form>  
    );
}

export default CreateProjectForm;