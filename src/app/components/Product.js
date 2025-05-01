import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Product1 from "../assets/iWartel.png";
import Product2 from "../assets/Imcpas.png";
import Product3 from "../assets/Paypas.png";
import "swiper/css";

export default function CardCarousel({ setActiveModal }) {
  const cards = [
    {
      key: "wartelsus", // Tambahkan key untuk memudahkan setActiveModal
      title: "I-Wartelsus",
      description: "I-Wartelsus adalah fasilitas telekomunikasi berbasis teknologi data yang terintegrasi online secara nasional.",
      image: Product1,
    },
    {
      key: "imcPas",
      title: "IMC PAS",
      description: "IMC PAS adalah fasilitas pusat pemantauan berbasis teknologi data yang terintegrasi online secara nasional.",
      image: Product2,
    },
    {
      key: "payPas",
      title: "Pay PAS",
      description: "Pay PAS adalah sistem pembayaran elektronik yang memanfaatkan virtual account dan teknologi biometrik.",
      image: Product3,
    },
  ];

  return (
    <div className="w-full pt-6">
      <h1 className="text-center mt-10 mb-10 text-xl font-bold">Our Product</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="px-4"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-[#4B5563] shadow-lg rounded-lg p-6">
              <Image src={card.image} alt={card.title} className="w-full h-22 p-3 object-contain shadow-[10px_0px_50px_rgba(80,110,255,0.3)] rounded-md" />
              <h2 className="mt-4 text-xl font-bold">{card.title}</h2>
              <p className="text-gray-600 text-lg">{card.description}</p>
              <button 
                onClick={() => setActiveModal(card.key)} 
                className="mt-5 px-4 py-2 bg-blue-500 text-[8px] text-white rounded-lg"
              >
                Lihat lebih detail
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
