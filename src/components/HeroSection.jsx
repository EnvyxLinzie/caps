const HeroSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Cybercaps Layanan Terbaik Untuk Kamu Yang
        <span className="bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          Memiliki Bisnis
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Kami sediakan berbagai macam jasa yang bisa membantu bisnis kamu secara online,
        Butuh Jasa Yang Tidak Ada? Hubungi Kami Melalui Tombol Dibawah
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://t.me/Capscyber"
          className="bg-gradient-to-r from-blue-500 to-blue-800 py-3 px-4 mx-3 rounded-md"
        >
          Contact Us
        </a>
        <a href="https://t.me/cybercaps" className="py-3 px-4 mx-3 rounded-md border">
          Join Telegram
        </a>
      </div>
      
    </div>
  );
};

export default HeroSection;
