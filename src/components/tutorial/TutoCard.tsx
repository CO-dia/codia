import { useHeader } from "../../hooks/useHeader";

interface TutoCard {
    title: string,
    description: string,
    imagePath: string,
}

const TutoCard = ({
    title,
    description,
    imagePath
}: TutoCard) => {
    const { isDarkMode } = useHeader() || {};

    return (
        <div 
            className={"flex w-1/2 my-5 rounded-md " + (isDarkMode ? '' : 'codia-aliceblue-text')}
            style={{backgroundColor: isDarkMode ? '#021F3775' : '#345166'}}>
            <div className="w-3/5 p-3">
                <p className="text-3xl">{title}</p>
                <p className="w-5/6 pl-8 my-5">{description}</p>
            </div>
            <div className="w-6/12 p-3">
                <img src={imagePath} className="rounded-md" alt="Étape 1" />
            </div>
        </div>
    )
};

export default TutoCard;
