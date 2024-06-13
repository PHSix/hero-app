export default function Header() {
  const headerItems = ['Home', 'Gallery', 'Shop', 'Contrat'].map(item => ({ title: item, href: '/' }))

  return (
    <header className="w-full flex items-center justify-between px-4 xl:justify-normal xl:px-0 xl:max-w-[1280px] xl:mx-auto">
      <div className="flex text-xl xl:text-3xl items-center gap-4">
        <img alt="logo" src="/images/logo.png" className="h-[2em]" />
        <div>
          BIZPUSH
        </div>
      </div>
      <ul className="gap-8 flex-1 justify-center hidden md:flex">
        {headerItems
          .map(item => <li key={item.title} className="py-2 px-4 cursor-pointer">{item.title}</li>)}
      </ul>

      <div className="flex gap-4">
        <img alt="search" src="/images/search-icon.png" width={24} height={24} className="cursor-pointer" />
        <div className="flex gap-2 cursor-pointer">
          <img alt="shop" src="/images/shop-icon.png" width={24} height={24} />
          <div className="rounded-xl bg-black px-2 text-center">0</div>
        </div>
      </div>
    </header>
  )
}
