async function getProducts() {
  return Promise.resolve().then(() => [
    {
      assertUrl: '/images/product-1.svg',
      title: 'Nike Running shoe',
      solidOut: 500,
      reviews: 116000,
      price: 100,
    },
    {
      assertUrl: '/images/product-2.svg',
      title: 'Nike shoe Airmax',
      solidOut: 500,
      reviews: 116000,
      price: 115,
    },
    {
      assertUrl: '/images/product-3.svg',
      title: 'Jordan Sneakers',
      solidOut: 500,
      reviews: 116000,
      price: 50,
    },
    {
      assertUrl: '/images/product-4.svg',
      title: 'Nike Running shoe 2',
      solidOut: 500,
      reviews: 116000,
      price: 220,
    },
  ])
}

export default async function Products() {
  const products = await getProducts()
  return (
    <section className="px-6 xl:mt-0 xl:px-0 xl:w-full xl:max-w-[1280px] mx-auto">
      <div className="text-[1.5em] xl:text[3em] font-bold xl:mb-[1em]">POPULAR PRODUCTS</div>
      <div className="grid grid-cols-1 auto-rows-auto xl:grid-cols-4 justify-between">
        {products.map(item => (
          <div className="py-4" key={item.title}>
            <div
              className="w-[300px] h-[200px] rounded-t-2xl bg-white/30 border-2 flex justify-center items-center  mb-8 relative"
              style={{
                borderColor: 'linear-gradient(0deg, #A61473, #FFFFFF, #05F2F2)',
              }}
            >
              <img src={item.assertUrl} alt={item.title} />
              <img src="/images/collect.svg" alt="collect" className="absolute h-8 w-8 top-2 right-2" />
            </div>
            <div className="px-4 w-full text-black">
              <div className="flex gap-2">
                <img src="/images/star.svg" />
                (11.6k Reviews)
              </div>
              <div className="mt-[5px]">
                {item.title}
              </div>
              <div className="flex justify-between items-center mt-[10px]">
                <div className="font-bold">{`$${item.price}`}</div>
                <div className="h-8 line-through">{`${item.solidOut} Sold Out`}</div>
                <button className="bg-[#A61473] rounded-xl px-4 py-2 text-white">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
