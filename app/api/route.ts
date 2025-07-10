import { NextResponse } from 'next/server';

const data = [
    {
        id: "-OOuVgXroH7vmIBZmEbj",
        category: "Language",
        color: "",
        description:
            "Belajar bahasa Mandarin sangat penting karena bahasa ini adalah bahasa resmi di Tiongkok, Taiwan, dan salah satu dari enam bahasa resmi PBB. /nFee terterah untuk 6 sesi atau 6 kali pertemuan,/n Setiap sesi durasi 60 menit.",
        endDate: "2026-07-07",
        icon: "",
        image:
            "https://oawm4yfszaszrqgi.public.blob.vercel-storage.com/image%20%283%29-hF1n55kPfCm8ta2MjasnO90IikuVfZ.png",
        name: "Mandarin",
        price: "300000",
        startDate: "2025-03-28",
        status: "active",
        type: "private",
        updatedAt: 1749916291944,
    },
    {
        id: "-OPGZoFu2Wk1tIq9LoQ8",
        category: "Language",
        color: "#5af73b",
        description:
            "Dimulai dari dasar/na) Spesifik skill Komunikasi/nB) Tata-Bahasa /n/nLevel satu durasi 6 minggu  (6 x Synchrounous)/n/nPendaftaran dibuka dan akan ditutup sesuai tanggal yang sudah ditentukan./n/nBiaya yg tercantum adalah biaya belajar untuk per-level...",
        endDate: "2025-11-30",
        icon: "",
        image:
            "https://oawm4yfszaszrqgi.public.blob.vercel-storage.com/png-ORV3nf18NbgXVQXH5OyDPgIXUhjOxO",
        name: "English",
        price: "250000",
        startDate: 1746198005664,
        status: "active",
        type: "no private",
        updatedAt: 1749130544833,
    },
    {
        id: "-OQ43To7E61OhVFZgzYO",
        category: "Language",
        color: "",
        description:
            "bahasa Korea dari tingkat dasar hingga menengah...",
        endDate: "2025-05-31",
        icon: "",
        image:
            "https://k31kdl3eukazsfrf.public.blob.vercel-storage.com/Class/54af6f006db3461f8a5762cf44ab4b91~tplv-fhsjxsyzit-aigc_resize_2400_2400-oHnPW3mCD041ONaNe6Oj8Fh0IHISGa.webp",
        name: "Korea ",
        price: "50000",
        startDate: 1747062829371,
        status: "active",
        type: "private",
        updatedAt: 1748851377895,
    },
    {
        id: "-OPITohAdf3G34zdoN-t",
        category: "Language",          
        color: "#d8f73b",
        description:
            "Bahasa Kanton adalah ragam bahasa prestise tradisional dari bahasa Yue...",
        endDate: "2025-07-05",
        icon: "",
        image:
            "https://p16-heycan-image-sign-sg.ibyteimg.com/tos-alisg-i-fhsjxsyzit-sg/cf3cf2bf28e04908be3d651e7f08752e~tplv-fhsjxsyzit-aigc_resize:360:360.webp?lk3s=43402efa&x-expires=1748304000&x-signature=ZarlTgDFBy5DdLt6P6tLDfGGUe0%3D&format=.webp",
        name: "Cantonese",
        price: "50000",
        startDate: 1746230697027,
        status: "active",
        type: "private",
        updatedAt: 1747887697085,
    },
];

export async function GET() {
    return NextResponse.json(data);
}
