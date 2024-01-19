import BuyForm from "../components/buy/BuyForm";

const Buy = () => {

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mt-3 w-1/2">
                <p className="text-8xl mb-12">Buy</p>
                <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <BuyForm />
        </div>
    )
};

export default Buy;
