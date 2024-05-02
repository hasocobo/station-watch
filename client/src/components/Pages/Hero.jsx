import SearchBar from "../Header/SearchBar"
import HeroNavigation from "../HeroNavigation"


export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl py-20 flex justify-center leading-normal">
        <p className="text-center letter-animation">
          <span>Hoşgeldin</span> <span className="text-sky-400">Atakan, </span>
          <br />
          <span className="">
            ne
          </span>  <span className=""> yapmak </span>
          <span>istiyorsun?</span>
        </p>
      </h1>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        <HeroNavigation style={"hover:bg-sky-100 border-sky-100 delay-small"} text={"Test Oluştur"} link={"/testolustur"} />
        <HeroNavigation style={"hover:bg-red-100 border-red-100 delay-medium"} text={"Laboratuvarları Görüntüle"} link={"/laboratuvarlar"}/>
        <HeroNavigation style={"hover:bg-orange-100 border-orange-100 delay-large"} text={'Test Geçmişi'} link={"/testgecmisi"}/>
        <HeroNavigation style={"hover:bg-emerald-100 border-emerald-100 delay-xl"} text={'Bildirimler'} link={"/bildirimler"}/>
        <div className="w-full flex justify-center letter-animation delay-xxl pt-4">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}