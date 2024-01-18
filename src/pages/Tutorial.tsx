import TutoCard from "../components/tutorial/TutoCard";

const Tutorial = () => {
    return (
        <div className="flex flex-col items-center">
            <h1>How to use ?</h1>
            <div className="flex flex-col items-center mt-8">
                <TutoCard 
                    title="1. Lorem ipsum dolor"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imagePath="../images/1.png"/>
                <TutoCard 
                    title="2. Lorem ipsum dolor"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    imagePath="../images/2.png"/>
            </div>
        </div>
    );
};

export default Tutorial;