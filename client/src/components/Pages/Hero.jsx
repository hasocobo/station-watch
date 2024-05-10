import SearchBar from '../Header/SearchBar'
import HeroNavigation from '../HeroNavigation'

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl">
      <h1 className="flex justify-center py-20 text-5xl leading-normal">
        <p className="letter-animation text-center">
          <span>Hoşgeldin</span> <span className="text-sky-400">Atakan, </span>
          <br />
          <span className="">ne</span> <span className=""> yapmak </span>
          <span>istiyorsun?</span>
        </p>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <HeroNavigation
          style={'hover:bg-sky-100 border-sky-100 delay-small'}
          text={'Test Oluştur'}
          link={'/testolustur'}
        />
        <HeroNavigation
          style={'hover:bg-red-100 border-red-100 delay-medium'}
          text={'Laboratuvarları Görüntüle'}
          link={'/laboratuvarlar'}
        />
        <HeroNavigation
          style={'hover:bg-orange-100 border-orange-100 delay-large'}
          text={'Test Geçmişi'}
          link={'/testgecmisi'}
        />
        <HeroNavigation
          style={'hover:bg-emerald-100 border-emerald-100 delay-xl'}
          text={'Bildirimler'}
          link={'/bildirimler'}
        />
        <div className="letter-animation delay-xxl flex w-full justify-center pt-4">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}
