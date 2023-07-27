import React from 'react';
import Slider from 'react-slick';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiDownload } from 'react-icons/fi';

import appImage1 from './asset/wel-image.png';
import appImage2 from './asset/lp-image.png';
import appImage3 from './asset/rute-image.png';
import appImage4 from './asset/detec-image.png';
import appImage5 from './asset/home-image.png';
import appImage6 from './asset/lap-image.png';
import appImage7 from './asset/rec-image.png';

import appImage8 from './asset/allapp-image.png';
import logo1 from './asset/atcs-logo.png';
import logo2 from './asset/dishub-logo.png';
import logo3 from './asset/bmkg-logo.png';

const App = () => {
  const handleDownloadClick = () => {
    // Arahkan pengguna ke file aplikasi yang disimpan secara lokal
    window.location.href = '/app-findtraffic.apk';
  };

  // Konfigurasi slider settings
  const sliderSettings = {
    dots: true, // Menampilkan tanda titik untuk navigasi
    infinite: true, // Mengaktifkan slide tak terbatas
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow: 1, // Jumlah slide yang ditampilkan sekaligus
    slidesToScroll: 1, // Jumlah slide yang digeser setiap kali navigasi (1 untuk geser satu per satu)
    autoplay: true, // Aktifkan autoplay otomatis
    autoplaySpeed: 2000, // Interval waktu autoplay (ms)
  };

  const captions = [
    "Pantau tujuan mu!", // Untuk appImage1
    "Dengan Aplikasi Traffic Tracking", // Untuk appImage2
    "Tersedia peta penyebaran kemacetan", // Untuk appImage3
    "Deteksi Kemacetan melalui CCTV", // Untuk appImage4
    "Rekomendasi hindari kemacetan", // Untuk appImage7
    "Informasi Lalu lintas", // Untuk appImage5
    "Dapat membuat laporan kepada prasarana jalan", // Untuk appImage6
  ];

  const [currentCaption, setCurrentCaption] = React.useState(captions[0]);

  return (
    <div className="app-container">
      <header>  
      </header>
      <main>
        <section className="promo-section">
          <Slider
            {...sliderSettings}
            afterChange={(currentSlide) => setCurrentCaption(captions[currentSlide])}
          >
            <div className="center">
              <img src={appImage1} alt="Aplikasi Screenshot" className="app-image" />
            </div>
            <div className="center">
              <img src={appImage2} alt="Aplikasi Screenshot" className="app-image" />
            </div>
            <div className="center">
              <img src={appImage3} alt="Aplikasi Screenshot" className="app-image" />
            </div>
            <div>
              <img src={appImage4} alt="Aplikasi Screenshot" className="app-image" />
            </div>
            <div>
              <img src={appImage7} alt="Aplikasi Screenshot" className="app-image" />
            </div>
            <div className="center">
              <img src={appImage5} alt="Aplikasi Screenshot" className="app-image" />
            </div>
            <div className="center">
              <img src={appImage6} alt="Aplikasi Screenshot" className="app-image" />
            </div>
            {/* Tambahkan div dan img untuk setiap foto aplikasinya */}
          </Slider>
          <div className="app-description">
          <h2>{currentCaption}</h2>
          <img src={appImage8} alt="Download Aplikasi" className="button-image" />

            <p>
              Nikmati kenyamanan berkendara dengan Aplikasi Lalu Lintas yang dilengkapi kecerdasan buatan (AI). Aplikasi ini memberikan deteksi kemacetan real-time melalui kamera lalu lintas dan sensor, serta laporan kemacetan yang andal dari pengguna. Selain itu, informasi terperinci tentang penyebab kemacetan, prediksi waktu pulihnya, dan informasi cuaca akan membantu pengemudi merencanakan perjalanan dengan lebih bijaksana. Antarmuka user-friendly yang intuitif juga memastikan pengalaman navigasi yang lancar. Bergabunglah sekarang dan nikmati perjalanan tanpa hambatan!
            </p>
         
          </div>
          <div className="button-container">
            <button onClick={handleDownloadClick}>
              <FiDownload /> Download Aplikasi
            </button>
          </div>
        </section>
      </main>
      <footer>
        <p>Bekerja sama dengan:</p>
        <div className="footer-logos">
          <img src={logo1} alt="Logo 1" className="footer-logo" />
          <img src={logo2} alt="Logo 2" className="footer-logo" />
          <img src={logo3} alt="Logo 3" className="footer-logo" />
        </div>
        <p>Hak Cipta © 2023 Developer Megianto </p>
      </footer>
    </div>
  );
};

export default App;
