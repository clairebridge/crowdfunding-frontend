import ProjectCard from "../components/ProjectCard";
import useProjects from "../hooks/use-projects";
import "./HomePage.css";

function HomePage() {
    const { projects } = useProjects();
    return (
        <div id="project-list">
            <link id='create-project'>Create Project</link> 
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}
    
export default HomePage;