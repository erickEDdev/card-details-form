const CardFront = ({ cardNumber }) => {


    return (
        <div className="absolute -top-33 left-5 w-81.5">
        <img
          className=" h-auto w-full"
          src="/card-details-form/images/bg-card-front.png"
          alt=""
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-between max-w-full overflow-hidden text-white p-5">
          <img src="/card-details-form/images/card-logo.svg" className="w-[23%]" alt="" />
          <div className="flex flex-col gap-y-4">
            <span className="text-[22px] tracking-[2px] text-nowrap">{cardNumber.numberCard}</span>
            <div className="flex items-center justify-between text-[14px]">
              <span>{cardNumber.name}</span>
              <span>
                {cardNumber.mm}/{cardNumber.yy}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CardFront