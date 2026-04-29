import React from "react";

function Page() {
    return (
        <div className="bg-amber-50 h-screen">
            <div className="">

                <div className="flex">

                    <div>
                        <h1 className="text-5xl text-blue-800 font-bold font-sans mt-30 ml-40">haiu guys</h1>
                        <div className="w-180 gap-5">
                            <p className="text-blue-700 font-semibold ml-40 mt-5 font-sans">Pantai adalah salah satu tempat wisata alam yang banyak diminati karena keindahan pemandangannya. Saat berada di pantai, kita dapat melihat hamparan laut biru yang luas, seolah-olah menyatu dengan langit di garis horizon. Suara ombak yang bergulung dan memecah di tepi pantai menghadirkan rasa tenang dan damai. Pasirnya terasa lembut di kaki, terkadang berwarna putih bersih atau kecokelatan tergantung wilayahnya. Tidak jarang, pepohonan kelapa di sepanjang garis pantai melambai tertiup angin, menambah suasana tropis yang menyegarkan. Matahari terbenam di pantai adalah pemandangan yang sangat indah—langit berubah menjadi warna jingga keemasan hingga ungu, membuat siapa saja terpukau. Pantai menjadi tempat yang tepat untuk bersantai, bermain, ataupun menikmati keindahan alam yang menakjubkan.
                            </p>
                        </div>
                    </div>

                    <img
                        src="/assets/beach6.jpg"
                        alt="pp"
                        className="h-100 rounded-full object-cover mt-30 ml-20 border-3 border-white shadow-2xl hover: transition-transform duration-300 hover:scale-105"
                    />

                </div>

            </div>
        </div>
    );
}

export default Page;