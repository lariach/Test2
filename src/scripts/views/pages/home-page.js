const HomePage = {
  async render() {
    return `
      <!-- ======= Hero Section ======= -->
      <section class="hero">
          <div class="content">
              <div class="information">
                  <h1 id="hero-text1">Temukan Ketenangan dengan Dukungan Profesional</h1>
                  <h1 id="hero-text2">Kami Mendengarkan, Kami Peduli, Kami Membantu</h1>
              </div>
              <div class="button">
                  <a class="login" href="http://localhost:3000/login" class="btn-get-started scrollto">Login</a>
                  <a class="register" href="http://localhost:3000/register" class="btn-get-started scrollto">Register</a>
              </div>
          </div>
          <div class="hero-banner" id="hero">
              <img
                  src="https://img.freepik.com/free-photo/young-asia-female-professional-physician-doctor-using-digital-tablet-sharing-good-health-test-news-with-happy-male-patient-sit-couch-house_7861-2765.jpg?t=st=1717546540~exp=1717550140~hmac=75830282cae569ccec3bc97b90ba09b00fcf827f6c27f8b47ba5c2f3c5b3fc16&w=1060"
                          alt="Hero 1"
                          class="active"
                      />
              <img
                  src="https://img.freepik.com/free-photo/woman-therapist-taking-notes-man-therapy-office-with-mask_23-2148759138.jpg?t=st=1717546697~exp=1717550297~hmac=e6d500de7e580fa032c1721e3f7a31fcaf3381a1bb6060f5dea9799c52afe72e&w=996"
                  alt="Hero 2"
              />
              <img
                  src="https://img.freepik.com/free-photo/people-working-elegant-cozy-office-space_23-2149548689.jpg?t=st=1717546797~exp=1717550397~hmac=11ca74f134f44a33ce0e90ed079e8a63163f529887df3804a36a40b11f93e0cc&w=996"
                  alt="Hero 3"
              />
          </div>
      </section>
      <!-- ======= Hero Section ======= -->
      
      <section id="why-us" class="why-us">
          <div class="container">
              <div class="row">
                  <div class="col-l-8 d-flex align-items-stretch">
                      <div class="icon-boxes flex flex-column justify-content-center">
                          <div class="row">
                              <div class="col-xl-4 d-flex align-items-stretch">
                                  <div class="icon-box mt-4 mt-xl-0">
                                      <i class="fa fa-comments" aria-hidden="true"></i>
                                      <h4>Akses ke Para Ahli Terpercaya</h4>
                                      <p>Website kami memberikan Anda akses mudah ke psikolog dan terapis profesional yang berpengalaman dan terpercaya.</p>
                                  </div>
                              </div>
                              <div class="col-xl-4 d-flex align-items-stretch">
                                  <div class="icon-box mt-4 mt-xl-0">
                                      <i class="fa fa-clock" aria-hidden="true"></i>
                                      <h4>Kenyamanan dan Fleksibilitas</h4>
                                      <p>Konsultasi kesehatan mental bisa dilakukan kapan saja dan di mana saja. Anda tidak perlu lagi khawatir dengan jadwal yang padat atau lokasi yang jauh.</p>
                                  </div>
                              </div>
                              <div class="col-xl-4 d-flex align-items-stretch">
                                  <div class="icon-box mt-4 mt-xl-0">
                                      <i class="fa fa-lock" aria-hidden="true"></i>
                                      <h4>Privasi dan Keamanan Terjamin</h4>
                                      <p>Data dan informasi pribadi Anda dilindungi dengan teknologi keamanan terkini, sehingga Anda bisa merasa aman dan tenang dalam berbagi cerita dan mendapatkan bantuan.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <!-- End .content-->
                  </div>
              </div>
          </div>
      </section>
      <!-- End Why Us Section -->
  
      <!-- ======= About Section ======= -->
      <section id="about" class="about">
          <div class="container-fluid">
            <div class="main-text">
                <h3>Hai! Salam kenal dari kami, TherapEase!<br/>Tempat terbaik untuk berbagi cerita dengan aman dan nyaman.</h3>
                <p>TherapEase adalah platform konsultasi kesehatan mental online yang hadir untuk memberikanmu 
                    pengalaman konsultasi yang aman dan nyaman. Dengan visi untuk meningkatkan kualitas layanan 
                    kesehatan mental di Indonesia, kami berkomitmen pada profesionalisme, standar etika tertinggi, 
                    dan kenyamananmu di setiap sesi konsultasi.</p>
            <div/>
              <div class="row">
                  <div
                      class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                      <img src="./images/home-page/about/group.png" alt="Group Image">
                  </div>
                  <div
                      class="content col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fa fa-video-camera" aria-hidden="true"></i>
                          </div>
                          <h4 class="title">
                              <a href="">Dapat dilakukan melalui video call</a>
                          </h4>
                          <p class="description">Bangun koneksi terbaikmu bersama para konsultan supaya
                              mereka dapat membantumu menjadi lebih tenang!</p>
                      </div>
  
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fa fa-calendar" aria-hidden="true"></i>
                          </div>
                          <h4 class="title">
                              <a href="">Atur jadwal</a>
                          </h4>
                          <p class="description">Buatlah jadwalmu dan sesuaikan dengan konsultan</p>
                      </div>
  
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fa fa-wifi" aria-hidden="true"></i>
                          </div>
                          <h4 class="title">
                              <a href="">Pastikan koneksi bagus</a>
                          </h4>
                          <p class="description">Selagi sesi konsultasi online berlangsung pastikan koneksimu bagus</p>
                      </div>
  
                  </div>
              </div>
  
          </div>
      </section>
      <!-- End About Section -->
  
      <!-- ======= Services Section ======= -->
      <section id="services" class="services">
          <div class="container">
  
              <div class="section-title">
                  <h1>Services</h1>
                  <p>Apa masalah kamu?</p>
              </div>
  
              <div class="row">
                  <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fas fa-heart-broken"></i>
                          </div>
                          <h4>
                              <a href="">Masalah kesehatan hati</a>
                          </h4>
                          <p>Masalah percintaan menjadi hal yang sering dialami oleh para remaja, tetapi
                              jangan pernah abaikan ini!</p>
                      </div>
                  </div>
  
                  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fas fa-sad-tear"></i>
                          </div>
                          <h4>
                              <a href="">Masalah kesehatan mental</a>
                          </h4>
                          <p>Masalah mental seringkali diabaikan oleh para remaja, perundungan atau
                              bullying membuat mental mereka menjadi down</p>
                      </div>
                  </div>
  
                  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fas fa-brain"></i>
                          </div>
                          <h4>
                              <a href="">Masalah kejiwaan</a>
                          </h4>
                          <p>Gangguan kesehatan mental yang dibiarkan tanpa penanganan dapat berkembang
                              menjadi kondisi yang disebut sakit jiwa. Beberapa orang bisa saja mengalami hal
                              tersebut akibat tekanan dan berbagai persoalan hidup yang dialaminya.</p>
                      </div>
                  </div>
  
                  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fas fa-transgender"></i>
                          </div>
                          <h4>
                              <a href="">Masalah penyimpangan seksual</a>
                          </h4>
                          <p>Kelainan seksual adalah suatu keadaan di mana seseorang memilih obyek seks
                              yang tidak wajar. Misalnya memilih binatang, mayat, anak-anak kecil sebagai
                              obyek seks, atau suka disakiti saat berhubungan seks. Kelainan ini didapat sejak
                              kecil. Bisa dari lingkungan pergaulan, akibat trauma, atau kelainan genetika.</p>
                      </div>
                  </div>
  
                  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fas fa-pills"></i>
                          </div>
                          <h4>
                              <a href="">Masalah penyalahgunaan Napza</a>
                          </h4>
                          <p>Perkembangan seseorang dalam masa anak-anak dan remaja akan membentuk
                              perkembangan diri orang tersebut di masa dewasa. Pada masa remaja, justru
                              keinginan untuk mencoba-coba, mengikuti trend dan gaya hidup, serta
                              bersenang-senang besar sekali. Walaupun semua kecenderungan itu wajar-wajar
                              saja, tetapi hal itu bisa juga memudahkan remaja untuk terdorong menyalahgunakan
                              narkoba.</p>
                      </div>
                  </div>
  
                  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                      <div class="icon-box">
                          <div class="icon">
                              <i class="fas fa-baby"></i>
                          </div>
                          <h4>
                              <a href="">Masalah kehamilan yang tidak diinginkan</a>
                          </h4>
                          <p>KTD atau kehamilan tidak diinginkan merupakan kehamilan saat dimana salah
                              satu atau kedua belah pihak dari pasangan tidak menginginkan terjadinya
                              kehamilan sama sekali atau kehamilan yang sebenarnya diinginkan tapi tidak pada
                              saat itu.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
      <section class="container-flow">
          <div class="section-flow">
              <h1>Alur Konsultasi</h1>
              <p>Bagaimana cara melakukan konsultasi ?</p>
          </div>
          <div class="box">
              <div class="box-item">
                  <img src="./images/home-page/flow/layanan.png" alt="Image 4">
                  <h2>Cari Layanan</h2>
              </div>
              <span>></span>
              <div class="box-item">
                  <img src="./images/home-page/flow/konsultan.png" alt="Image 5">
                  <h2>Pilih Konsultan</h2>
              </div>
              <span>></span>
              <div class="box-item">
                  <img src="./images/home-page/flow/chat.png" alt="Image 7">
                  <h2>Buat Jadwal</h2>
              </div>
              <span>></span>
              <div class="box-item">
                  <img src="./images/home-page/flow/jadwal.png" alt="Image 6">
                  <h2>Konsultasi</h2>
              </div>
          </div>
      </section>
  
      <section class="ProfilTeam">
      <div class="container">
          <h1>Our Team</h1>
          <p>Kami bersinergi dengan tujuan yang sama</p>
          <div class="team-profile">
              <div class="team-member">
                  <img src="./images/home-page/team/HaqqulAmal.jpg" alt="Member 1">
                  <a href="">Haqqul Amal Jiddan</a>
                  <p>Full Stack Developer</p>
              </div>
              <div class="team-member">
                  <img src="./images/home-page/team/team1.png" alt="Member 2">
                  <a href="">Galang Satria Pratama Putra</a>
                  <p>Full Stack Developer</p>
              </div>
              <div class="team-member">
                  <img src="./images/home-page/team/ChairalOctavyanz.jpg"" alt="Member 3">
                  <a href="">Chairal Octavyanz</a>
                  <p>Full Stack Developer</p>
              </div>
          </div>
        </div>
      </section>
  
      <section class="supportby">
          <h1 class="judul">Bekerja sama dengan <span class="highlight">kami</span></h1>
          <p class="paragraf"><span class="highlight">TherapEase</span> menyediakan layanan edukasi dan konsultasi seputar masalah kesehatan mental kamu.</p>
          <div class="gambar">
              <img src="./images/home-page/partner/mbkm.png" alt="Gambar 1" class="kampus-merdeka-img">
              <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1973487/1973487-1563248797755-7e69686001d3e.jpg" alt="Dicoding" class="dicoding-img">
          </div>
      </section>
  
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    function animateBanner() {
      const bannerImages = document.querySelectorAll('#hero img');
      let currentIndex = 0;

      setInterval(() => {
        bannerImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % bannerImages.length;
        bannerImages[currentIndex].classList.add('active');
      }, 5000);
    }

    animateBanner();
  },
};

export default HomePage;
