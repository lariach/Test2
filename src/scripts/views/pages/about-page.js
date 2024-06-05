const AboutPage = {
  async render() {
    return `
          <section class="aboutPage">
            <div class="container">
                <div class="about-logo">
                    <h2>Tentang Kami</h2>
                      <img src="./images/home-page/about/about-logo.png">
                </div>
                <div class="row">
                    <div
                          class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                          <div class="icon-box">
                              <h4>Visi</h4>
                              <p>Menjadi platform terpercaya dan terdepan dalam menyediakan dukungan kesehatan mental yang mudah diakses, ramah remaja, dan berkualitas tinggi, guna menciptakan generasi muda yang sehat secara mental dan emosional.</p>
                              <h4>Misi</h4>
                              <p>1. Menyediakan Aksesibilitas: Menyediakan layanan konsultasi kesehatan mental yang mudah diakses dan anonim bagi semua remaja tanpa memandang latar belakang sosial ekonomi.</p>
                              <p>2. Edukasi dan Kesadaran: Meningkatkan kesadaran tentang pentingnya kesehatan mental melalui artikel, seminar online, dan materi edukatif yang disesuaikan untuk remaja.</p>
                              <p>3. Dukungan Profesional: Memberikan dukungan langsung dari profesional kesehatan mental berlisensi untuk membantu remaja mengatasi masalah mereka dengan cara yang efektif dan aman.</p>
                              <p>4. Komunitas dan Keterlibatan: Membangun komunitas yang suportif di mana remaja dapat berbagi pengalaman, bertukar informasi, dan mendapatkan dukungan dari teman sebaya dalam lingkungan yang aman dan positif.</p>
                          </div>
                    </div>
                      <div
                          class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-2 px-lg-4">
                          <div class="about-text">
                          <h3>TherapEase hadir untuk memberikan solusi untuk kalian para remaja</h3>
                          <p class="indent">TherapEase adalah sebuah platform website yang didedikasikan untuk menyediakan layanan konsultasi kesehatan mental khusus untuk remaja. Platform ini dirancang untuk memberikan akses yang mudah, cepat, dan anonim kepada remaja yang membutuhkan dukungan psikologis. Melalui TherapEase, remaja dapat berkomunikasi dengan para profesional kesehatan mental, mengikuti sesi konseling, mengakses artikel edukatif, dan berpartisipasi dalam forum diskusi yang aman dan suportif.</p>
                          <p class="indent">Proyek ini bertujuan untuk mengatasi stigma terhadap kesehatan mental, meningkatkan kesadaran, dan menyediakan dukungan yang esensial bagi kesejahteraan mental remaja.</p>
                          <p class="indent">TherapEase hadir sebagai respons terhadap peningkatan kasus kesehatan mental di kalangan remaja yang seringkali tidak terdeteksi atau tidak ditangani dengan baik. Banyak remaja yang merasa ragu atau takut untuk mencari bantuan karena stigma atau ketidakpahaman mengenai pentingnya kesehatan mental.</p>
                          <p class="indent">Kami memahami bahwa kesehatan mental sama pentingnya dengan kesehatan fisik, dan remaja memerlukan dukungan yang sesuai untuk mengatasi berbagai tekanan dan tantangan yang mereka hadapi di masa pertumbuhan.</p>
                          </div>
                    </div>

            </div>
      </section>
        `;
  },

  async afterRender() {
    // After Render Here
  },
};

export default AboutPage;
