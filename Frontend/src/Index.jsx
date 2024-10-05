import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Anuncio from './components/Anuncio';

// Banner
import bannertiendasD2 from './assets/img/banners/BannerTiendasD2.webp'

const bannerMain = [bannertiendasD2];
function Home() {

  return (
    <>
      <div>
      <NavBar />
      <Banner banner={bannerMain} />
      <Carousel />
      <Cards />
      <Anuncio />
      <Footer />
    </div>
    </>
  )
}

export default Home
