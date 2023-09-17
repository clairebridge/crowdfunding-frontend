import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge.js";

function pledgeProjectForm() {
    const navigate = useNavigate();
    const [pledgeDetails, setPledgeDetails] = useState({
        amount: "",
        comment: "",
        anonymous: "",
        project: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledgeDetails((prevpledgeDetails) => ({
            ...prevpledgeDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log("Starting request");
        postPledge(pledgeDetails.amount, pledgeDetails.comment, pledgeDetails.anonymous, pledgeDetails.project)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((err) => console.log(err));
        };


    return (
    <form>
        <div>
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" placeholder="Enter amount" onChange={handleChange} />
            
        </div>
        <div>
            <label htmlFor="comment">Comment:</label>
            <input type="text" id="comment" placeholder="Comment" onChange={handleChange}/>
            
        </div>
        <div>
            <label htmlFor="anonymous">anonymous:</label>
            <input type="boolean" id="anonymous" placeholder="anonymous" onChange={handleChange}/>
            
        </div>
        <div>
            <label htmlFor="project">Project:</label>
            <input type="number" id="project" placeholder="project" onChange={handleChange}/>
            
        </div>
        <button type="submit" onClick={handleSubmit}>
            Pledge
        </button>   
    </form>  
    );
}

export default pledgeProjectForm;