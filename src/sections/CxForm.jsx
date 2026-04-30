import Inp from "../components/Inp"

const CxForm = () => {


    return (
        <div className="flex justify-center items-center px-8 h-full w-full bg-white">
            <form className="max-w-full space-y-6 border">
                <div className="flex flex-col ">
                    <span className="tracking-[2px] text-mist-800">CARDHOLDER NAME</span>
                    <Inp placeholder={"e.g. Jane Appleseed"} type={"text"} />
                </div>
                <div className="flex flex-col ">
                    <span className="tracking-[2px] text-gray-800">CARD NUMBER</span>
                   <Inp placeholder={"e.g. 1234 5678 9123 0000"} type={""} />
                </div>
                <div>
                    <div className="flex ">
                        <div className="">
                            <span className="tracking-[2px]">EXP. DATE</span>
                            <Inp placeholder={"mm"} type={"text"} className="border-blue-600! w-20!" />
                        </div>
                        <div>
                            <span>(MM/YY)</span>
                            <Inp placeholder={"yy"} type={"text"} className="w-20!" />
                        </div>
                        <div className="">
                            <span>cvc</span>
                            <Inp placeholder={"e.g 123"} type={"text"} />
                        </div>
                    </div>
                </div>
                <button className="px-4 py-4 w-full bg-[#220930] text-white rounded-[10px] text-[18px]" type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default CxForm