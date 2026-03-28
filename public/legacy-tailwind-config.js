window.tailwind = window.tailwind || {};
window.tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['var(--font-inter)', 'sans-serif'],
                    },
                    colors: {
                        bebbi: {
                            void: '#02110b',   /* Fast schwarzer Hintergrund */
                            deep: '#064e3b',   /* Dunkelgrün */
                            main: '#10b981',   /* Hauptgrün */
                            neon: '#34d399',   /* Neon Akzent */
                            panel: '#f4f6f7',  /* Off-white für Panels */
                        }
                    },
                    backgroundImage: {
                        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
                    },
                    boxShadow: {
                        'glow': '0 0 20px rgba(52, 211, 153, 0.4)',
                        'neon': '0 0 10px rgba(52, 211, 153, 0.6), 0 0 20px rgba(52, 211, 153, 0.3)',
                    }
                }
            }
        };
