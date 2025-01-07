// Tailwind Dark Mode Configuration
tailwind.config = {
  darkMode: "class",
};

// Dark mode toggle function
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark");
}
function toggleDarkMode() {
  const htmlElement = document.documentElement;
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  // Toggle dark mode on the HTML element
  htmlElement.classList.toggle("dark");

  // Toggle icon visibility based on dark mode state
  if (htmlElement.classList.contains("dark")) {
    // Dark mode active, show moon icon, hide sun icon
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    // Dark mode inactive, show sun icon, hide moon icon
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}



// fungsi tombol ^
function toggleMenu() {
  const menu = document.getElementById("menu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const closeIcon = document.getElementById("closeIcon");

  menu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

//fungsi atas bawah
window.onscroll = function () {
    const button = document.getElementById("scrollToTop");

    // Cek jika scroll lebih dari 200px, tampilkan tombol
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      button.classList.remove("hidden"); // Menampilkan tombol
    } else {
      button.classList.add("hidden"); // Menyembunyikan tombol
    }
  };

  // Fungsi untuk menggulir ke atas saat tombol diklik
  document.getElementById("scrollToTop").onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Scroll halus ke atas
    });
  };

// slider gambar

const images = [
    "images/1.png",
    "images/2.png"
    ];
    
    let currentImageIndex = 0; // Index gambar saat ini
    const imageElement1 = document.getElementById("image-slider-1");
    const imageElement2 = document.getElementById("image-slider-2");
    
    // Fungsi untuk mengganti gambar dengan transisi smooth
    function changeImage() {
    // Mulai dengan menyembunyikan gambar yang sedang tampil
    if (currentImageIndex % 2 === 0) {
      imageElement1.classList.add("opacity-0");
      imageElement2.classList.remove("opacity-0");
    } else {
      imageElement2.classList.add("opacity-0");
      imageElement1.classList.remove("opacity-0");
    }
    
    // Tunggu transisi selesai (1 detik) sebelum mengganti gambar
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length; // Beralih ke gambar berikutnya
      const newImage = images[currentImageIndex];
    
      // Ganti sumber gambar yang sedang tampil
      if (currentImageIndex % 2 === 0) {
        imageElement1.src = newImage;
      } else {
        imageElement2.src = newImage;
      }
    
      // Kembalikan opacity untuk gambar yang baru
      if (currentImageIndex % 2 === 0) {
        imageElement1.classList.remove("opacity-0");
      } else {
        imageElement2.classList.remove("opacity-0");
      }
    }, 1000);
    }
    
    // Ganti gambar setiap 5 detik
    setInterval(changeImage, 3000);