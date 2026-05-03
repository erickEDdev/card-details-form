import { useFormContext } from "react-hook-form"

const Inp = ({ maxLength, placeholder, className = "", id, mode, name}) => {

    console.log("renderizou componente input")

    const { register } = useFormContext()
    
    return (
        <input
        placeholder={placeholder}
        type="text"
        inputMode={mode}
        id={id}
        {...register(name)}
        maxLength={maxLength}
        className={
            `flex items-center justify-start px-4 py-3 w-full rounded-[5px] border border-gray-400 outline-none text-[20px]
            placeholder:text-[20px] placeholder:text-gray-400 
            ${className}
        `}
        />
    )
}

export default Inp
/* 
 proximo passa nem todo campo precisa ser mascarado, existe maxLengh nos inputs,
 desafio, coloque somente inputs mascarados necessarios

 por que isso? de certa forma otimização também para que não re-renderize o input a cada clique mesmo
 que seja só o input alterado
 ao colocar inputs normais eles não re-renderizarão ao mudar por conta do RHF

 registrar os inputs
 */