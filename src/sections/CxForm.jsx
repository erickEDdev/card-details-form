import { useId } from "react";
import Inp from "../components/Inp";
import { useStorage } from "../store/Storage";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schema/schema";
import CardFront from "../components/CardFront";
import { IMaskInput } from "react-imask";

const CxForm = () => {
  const nameID = useId();
  const numberID = useId();
  const dateID = useId();
  const mmyyID = useId();
  const cvcID = useId();

  const cardNumber = useStorage((state) => state.infos);

  const { handleSubmit, getValues, control } = useForm({
    resolver: zodResolver(schema)
  })

  const onInvalid = (erros) => {
    const allData = getValues() // <-- pega tudo, mesmo inválido
    
  }

  const onValid = (data) => {
    console.log(data)
    window.alert("formulario valido!!!")
  }

  return (
    <div className="flex justify-center items-center relative pt-10 max-lg:landscape:pt-80 max-lg:landscape:pb-60 px-7 h-full w-full bg-red-white">
      <CardFront cardNumber={cardNumber} />
      <form className="max-w-full space-y-8" onSubmit={handleSubmit(onValid, onInvalid)}>
        <div className="space-y-6">

          {/* inputs parte 1 */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor={nameID} className="label">
              CARDHOLDER NAME
            </label>   
                <Inp
                    id={"text"}
                    type={"number"}
                    placeholder={"e.g. Jane Appleseed"}        
                />
          </div>

          {/* inputs parte 2 */}
          <div className="flex flex-col gap-y-2">
            <label htmlFor={numberID} className="label">
              CARD NUMBER
            </label>
            <Controller // adaptador entre RHF e um input complexo como IMask
                name="number"// nome do campo/input
                control={control}// control --> conecta esse campo ao formulário global
                render={({ field }) => { 
                    console.log("re-renderizou controller 2")
                    return(
                        <IMaskInput
                            unmask={true}// sem mascara?
                            id={numberID}
                            placeholder={"e.g. 1234 5678 9123 0000"}
                            mask={"**** **** **** ****"}
                            value={field.value}
                            onAccept={(value) => field.onChange(value)}
                            type="text"
                            className={
                                `flex items-center justify-start px-4 py-3 w-full rounded-[5px] border border-gray-400 outline-none text-[20px]
                                placeholder:text-[20px] placeholder:text-gray-400 
                            `}
                        />
                    )
                }}
            />
                
          </div>

          {/* inputs parte 3 */}
          <div className="flex flex-col gap-y-2">
            {/* caixas labels */}
            <div className="flex gap-x-5">
              <div className="flex gap-x-2">
                <label htmlFor={dateID} className="whitespace-nowrap label">
                  EXP. DATE
                </label>
                <label htmlFor={mmyyID} className="label">
                  (MM/YY)
                </label>
              </div>
              <label htmlFor={cvcID} className="label">
                cvc
              </label>
            </div>

            {/* caixa inpus */}
            <div className="flex gap-x-3">
              <Inp
                id={dateID}
                placeholder={"mm"}
                className="w-22!"
                type="number"
                maxLength={"2"}
                mode={"numeric"}
              />
              <Inp
                id={mmyyID}
                placeholder={"yy"}
                className="w-22!"
                type="number"
                maxLength={"2"}
                mode={"numeric"}
              />
              <Inp 
               id={cvcID} 
               placeholder={"e.g 123"}   
               type="number"
               maxLength={"3"}
               mode={"numeric"} 
              />
            </div>
          </div>
        </div>

        <button
          className="px-4 py-4 w-full bg-[#220930] text-white rounded-[10px] text-[18px]"
          type="submit"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CxForm;
