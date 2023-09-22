import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postPledge from "../api/post-pledge.js";

function pledgeProjectForm() {
    const navigate = useNavigate();
    const [pledgeDetails, setPledgeDetails] = useState({
        amount: "",
        comment: "",
        anonymous: false,
        project: "",
    });

    const handleChange = (event) => {
        if (event.target.id === 'anonymous'){
            setPledgeDetails((prevpledgeDetails) => ({
                ...prevpledgeDetails,
                anonymous: event.target.checked,
            }));
            console.log(pledgeDetails.anonymous, event.target.checked)
        }
        else {
            const { id, value } = event.target;
            console.log(id, value)
            setPledgeDetails((prevpledgeDetails) => ({
                ...prevpledgeDetails,
                [id]: value,
            }));
        }

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
        {JSON.stringify(pledgeDetails)}
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
            <input type="checkbox" id="anonymous" placeholder="anonymous" onChange={handleChange}/>
            
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