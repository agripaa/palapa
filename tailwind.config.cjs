/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        inter: ['Plus Jakarta Sans'],
        custom: ['Zen Tokyo Zoo'],
        },

        keyframes: {
          marquee: {
            "0%": { transform: "translateX(0%)" }, // Mulai dari posisi awal
            "100%": { transform: "translateX(-50%)" }, // Bergerak ke kiri
          },
        
          kito: {
            "0%": { transform: "translateX(-50%)" }, // Mulai dari kiri
            "100%": { transform: "translateX(0%)" }, // Bergerak ke kanan
          },
        },
        
        animation: {
          marquee: "marquee 85s linear infinite", // Marquee bergerak ke kiri
          kito: "kito 85s linear infinite", // Kito bergerak ke kanan
        },
        

        // keyframes: {
        //   marquee: {
        //     "0%": { transform: "translateX(100%)" },
        //     "100%": { transform: "translateX(-200%)" }, // Hanya -50% karena ada duplikasi
        //   },

        //   marqus: {
        //     "0%": { transform: "translateX(100%)" },
        //     "0%": { transform: "translateX(-200%)" }, // Hanya -50% karena ada duplikasi
        //   },
          
        // },
        // animation: {
        //   marquee: "marquee 35s linear infinite",
        //   marqus: "marqus 35s linear infinite", // Ubah durasi sesuai kebutuhan
        // },


    },
  },
  plugins: [],
};
