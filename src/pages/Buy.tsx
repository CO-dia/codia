import { AddressFinder } from "@ideal-postcodes/address-finder";
import { useEffect } from "react";

const Buy = () => {
    useEffect(() => {
        const controller = AddressFinder.setup({
            inputField: "#line_1", // Target <input> to host Address Finder
            apiKey: "ak_test", // API Key from your account
            outputFields: {
                // Target address fields
                line_1: "#line_1",
                line_2: "#line_2",
                line_3: "#line_3",
                post_town: "#post_town",
                postcode: "#postcode",
                country: "#country",
            },
        });
    }, [])
    

    return (
        <div>
            <div className="flex flex-col items-center mt-36 text-center w-1/2">
                <p className="text-8xl mb-12">Buy</p>
                <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div className="flex flex-col items-center mt-36 text-center w-1/2">
                <form className="flex flex-col items-center">
                    <input type="text" id="line_1" placeholder="Address line 1" />
                    <input type="text" id="line_2" placeholder="Address line 2" />
                    <input type="text" id="line_3" placeholder="Address line 3" />
                    <input type="text" id="post_town" placeholder="Post town" />
                    <input type="text" id="postcode" placeholder="Postcode" />
                    <input type="text" id="country" placeholder="Country" />
                </form>
            </div>
        </div>
    )
};

export default Buy;
