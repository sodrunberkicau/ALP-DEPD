import ClassGrid from "@/components/class-grid"
import { Suspense } from "react"
import { ClassesSkeleton } from "@/components/skeletons"
import { SearchFilter } from "@/components/search-filter"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { filterClasses } from "@/lib/utils"


export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string; categories?: string; type?: string; status?: string }
}) {

  const data = [
    {
      "id": "-OOuVgXroH7vmIBZmEbj",
      "category": "Language",
      "color": "",
      "description": "Belajar bahasa Mandarin sangat penting karena bahasa ini adalah bahasa resmi di Tiongkok, Taiwan, dan salah satu dari enam bahasa resmi PBB. /nFee terterah untuk 6 sesi atau 6 kali pertemuan,/n Setiap sesi durasi 60 menit.",
      "endDate": "2026-07-07",
      "icon": "",
      "image": "https://oawm4yfszaszrqgi.public.blob.vercel-storage.com/image%20%283%29-hF1n55kPfCm8ta2MjasnO90IikuVfZ.png",
      "name": "Mandarin",
      "price": "300000",
      "startDate": "2025-03-28",
      "status": "active",
      "type": "private",
      "updatedAt": 1749916291944
    },
    {
        "id": "-OPGZoFu2Wk1tIq9LoQ8",
        "category": "Language",
        "color": "#5af73b",
        "description": "Dimulai dari dasar/na) Spesifik skill Komunikasi/nB) Tata-Bahasa /n/nLevel satu durasi 6 minggu  (6 x Synchrounous)/n/nPendaftaran dibuka dan akan ditutup sesuai tanggal yang sudah ditentukan./n/nBiaya yg tercantum adalah biaya belajar untuk per-level. Dengan sistem per-level anda bisa belajar secara bertahap, melihat perkembangan nyata kemampuan bahasa inggris anda, dan melanjutkan ke tahap berikutnya dengan lebih percaya diri. Belajar jadi lebih ringan, fleksibel, dan terukur.",
        "endDate": "2025-11-30",
        "icon": "",
        "image": "https://oawm4yfszaszrqgi.public.blob.vercel-storage.com/png-ORV3nf18NbgXVQXH5OyDPgIXUhjOxO",
        "name": "English",
        "price": "250000",
        "startDate": 1746198005664,
        "status": "active",
        "type": "no private",
        "updatedAt": 1749130544833
    },
        {
        "id": "-OQ43To7E61OhVFZgzYO",
        "category": "Language",
        "color": "",
        "description": "bahasa Korea dari tingkat dasar hingga menengah. Baik Anda seorang pemula yang sama sekali belum pernah belajar bahasa Korea, atau Anda yang ingin meningkatkan kemampuan bahasa Korea Anda, kursus ini menawarkan pendekatan yang komprehensif dan menyenangkan. jika langsung sekali bayar untuk 5 sesi maka akan dapat bonus 1 sesi selama promo berlaku. 1 sesi durasi 60 Menit.",
        "endDate": "2025-05-31",
        "icon": "",
        "image": "https://k31kdl3eukazsfrf.public.blob.vercel-storage.com/Class/54af6f006db3461f8a5762cf44ab4b91~tplv-fhsjxsyzit-aigc_resize_2400_2400-oHnPW3mCD041ONaNe6Oj8Fh0IHISGa.webp",
        "name": "Korea ",
        "price": "50000",
        "startDate": 1747062829371,
        "status": "active",
        "type": "private",
        "updatedAt": 1748851377895
    },
        {
        "id": "-OPITohAdf3G34zdoN-t",
        "category": "Language",
        "color": "#d8f73b",
        "description": "Bahasa Kanton adalah ragam bahasa prestise tradisional dari bahasa Yue, bahasa Sinitik yang termasuk dalam rumpun bahasa Sino-Tibet. Bahasa ini berasal dari kota Guangzhou dan Delta Sungai Mutiara di sekitarnya./n/nfee yang tertera untuk durasi 60 menit atau satu sesi . anda bisa mengambil 5 sesi atau lebih sekali bayar.",
        "endDate": "2025-07-05",
        "icon": "",
        "image": "https://p16-heycan-image-sign-sg.ibyteimg.com/tos-alisg-i-fhsjxsyzit-sg/cf3cf2bf28e04908be3d651e7f08752e~tplv-fhsjxsyzit-aigc_resize:360:360.webp?lk3s=43402efa&x-expires=1748304000&x-signature=ZarlTgDFBy5DdLt6P6tLDfGGUe0%3D&format=.webp",
        "name": "Cantonese",
        "price": "50000",
        "startDate": 1746230697027,
        "status": "active",
        "type": "private",
        "updatedAt": 1747887697085
    },
  ]
  const filteredClasses = filterClasses(data, searchParams)

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">

      <main>
        <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-5 dark:opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-transparent dark:from-zinc-950 dark:to-transparent"></div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100">
                  Tingkatkan Keahlian Anda Bersama SlangTech
                </h1>
                <p className="mx-auto max-w-[800px] text-zinc-600 md:text-xl/relaxed lg:text-xl/relaxed dark:text-zinc-400">
                  Platform pelatihan profesional dengan kurikulum terkini dan instruktur berpengalaman. Mulai perjalanan
                  belajar Anda dan raih karir impian.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <a
                  href="#kelas"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-gradient-to-r from-zinc-800 to-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-all duration-300 hover:shadow-lg hover:from-zinc-700 hover:to-zinc-800 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:from-zinc-200 dark:to-zinc-50 dark:text-zinc-900 dark:hover:from-zinc-100 dark:hover:to-zinc-200 dark:focus-visible:ring-zinc-300"
                >
                  Lihat Kelas
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-900 shadow-sm transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300"
                >
                  Hubungi Kami
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>100+ Kelas</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>50+ Instruktur</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>10.000+ Alumni</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="kelas" className="py-12 md:py-16 lg:py-20 bg-zinc-50 dark:bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-block rounded-lg bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800">
                Katalog Kelas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-zinc-900 dark:text-zinc-50">
                Semua Kelas
              </h2>
              <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
                Pilih kelas yang sesuai dengan kebutuhan dan minat Anda
              </p>
            </div>

            <SearchFilter classes={filteredClasses} />

            <Suspense fallback={<ClassesSkeleton />}>
              <ClassGrid classes={filteredClasses} />
            </Suspense>
          </div>
        </section>

        <Testimonials />

        <Newsletter />
      </main>

    </div>
  )
}
