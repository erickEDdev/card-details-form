const Inp = ({ placeholder, type, className = "" }) => {


    return (
        <input placeholder={placeholder} type={type} 
            className={`flex items-center justify-start px-4 py-3 w-full rounded-[5px] border border-red-600 placeholder:text-2xl placeholder:text-gray-400 ${className}`}
        />
    )
}

export default Inp