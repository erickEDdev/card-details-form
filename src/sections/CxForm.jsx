import Inp from "../components/Inp"

const CxForm = () => {


    return (
        <div className="flex justify-center items-center px-10 h-full w-full bg-white">
            <form className="max-w-full space-y-6 bg-blue-400">
                <div className="flex flex-col bg-red-500">
                    <span>CARDHOLDER NAME</span>
                    <Inp placeholder={""} type={"text"} />
                </div>
                <div className="flex flex-col bg-red-500">
                    <span>CARD NUMBER</span>
                    <input type="text" />
                </div>
                <div>
                    <div className="flex bg-red-500">
                        <span>EXP. DATE (MM/YY)</span>
                        <span>cvc</span>
                    </div>
                    <div className="flex max-w-full overflow-hidden bg-red-500">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <button className="w-full bg-[#220930] text-white" type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default CxForm