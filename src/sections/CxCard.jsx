const CxCard = () => {
  return (
    <div className="h-fit pl-25 pb-15 pr-7 pt-13 bg-[url(/card-details-form/images/bg-main-mobile.png)] bg-no-repeat bg-cover">
      <div className="relative w-fit">
        <img src="/card-details-form/images/bg-card-back.png" alt="imagem do verso do cartão" />
        <span className="absolute top-18 right-10 text-[14px] text-gray-200 font-bold">000</span>
      </div>
    </div>
  );
};

export default CxCard;
