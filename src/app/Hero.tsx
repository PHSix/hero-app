export default function Hero() {
  return (
    <section className="grid grid-cols-1 grid-rows-1 xl:grid-cols-2 items-center xl:max-w-[1280px] xl:w-full mx-auto">
      <div className="w-full px-6 text-lg py-8 xl:text-xl xl:px-0 xl:py-0">
        <div className="font-bold text-[2em]  xl:text-[3em] " style={{ lineHeight: '2em' }}>
          {'PURCHASE YOUR '}
          <u>SHOES</u>
          {' NOW.'}
        </div>
        <div className="text-[1em] my-8 " style={{ lineHeight: '38px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor morbi velit turpis et dolor sit morbi odio id. Aliquam ultricies tortor ac.
        </div>

        <div className="w-full relative max-w-[600px]">
          <button className="px-12 py-4 bg-white rounded-md text-red-700 text-xl">Shop Now</button>
          <img src="/images/button-arrow.svg" alt="button arrow" className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
          <div className="flex justify-end">
            <img src="/images/button-score.svg" alt="button-score" />
          </div>
        </div>

      </div>

      <div className="px-6 hidden xl:block xl:px-0 relative">
        <img className="absolute bottom-[10px] right-[100px] z-0" src="/images/hero-arrow.svg" alt="hero arrow" />
        <img className="absolute object-cover top-0 left-0 z-10" src="/images/hero-mask.svg " />
        <img alt="img" className="object-cover relative z-1" src="/images/hero-img.svg" />

        <div
          className="p-4 rounded-md w-[250px] h-[110px] bg-white/30 text-black absolute bottom-[-50px] right-0 text-[14px]"
          style={{
            borderWidth: '2px',
            borderColor: 'linear-gradient(120deg, #A61473, #05F2F2)',
          }}
        >
          <div className="font-bold mb-[10px]">
            Get Up to 30% Off
          </div>
          You can get 30% off this product
          if you are buying now
        </div>
      </div>

    </section>
  )
}
