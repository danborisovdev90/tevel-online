export const RightPart = () => {
  return (
    <div className="right-part relative bg-white border border-gray-300 rounded-xl max-w-[477px] pb-20">
      <div className="right-part__content">
        <img src="/images/right-part-image.png" alt="right-part" />
        <div className="relative bg-gradient-to-l from-[#e10514] to-[#bc3535] text-white pt-4.5 pb-10 px-8 rounded-lg mr-9 -top-10 font-[rubik] max-w-[360px] w-full">
          <img src="/images/logo-white.svg" alt="" />
          <h3 className="text-2xl font-bold mt-3">מימון לרכב בקליק</h3>
          <p className="text-sm">הלוואה לרכישת רכב יד שנייה בין אנשים פרטיים</p>
        </div>
        <div className="max-w-[360px] mr-9">
          <p className="text-red text-2xl font-[rubik]">
            תן לנו לאתר עבורך את המימון המשתלם ביותר, מבלי לצאת מהבית
          </p>
        </div>
      </div>
    </div>
  );
};
