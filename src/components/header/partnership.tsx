// components/partnership.tsx
'use client';

import Image from 'next/image';

export default function Partnership() {
  return (
    <section className="relative py-12 bg-[#eaf4ff] text-center">
      {/* Decorative blobs (you can place real SVGs or styled images) */}
      <div className="absolute top-4 left-4 w-16 h-16 bg-blue-200 rounded-full opacity-30 blur-xl" />
      <div className="absolute top-4 right-4 w-16 h-16 bg-blue-200 rounded-full opacity-30 blur-xl" />

      <h2 className="text-blue-900 text-sm uppercase tracking-wider mb-6">As Seen On:</h2>

      <div className="flex flex-wrap justify-between items-center gap-10 px-12 max-w-7xl mx-auto">
        <Image src="/images/ben.png" alt="Benzinga" width={140} height={60} />
        <Image src="/images/tcj.png" alt="The Chronicle Journal" width={160} height={60} />
        <Image src="/images/fox.webp" alt="FOX" width={100} height={60} />
        <Image src="/images/tgamc.png" alt="TGA Media Corp" width={140} height={60} />
        <Image src="/images/daily.png" alt="Starkville Daily News" width={180} height={60} />
        <Image src="/images/ncn.png" alt="NCN" width={90} height={60} />
        <Image src="/images/bar.png" alt="Barchart" width={130} height={60} />
      </div>


      <p className="text-xs mt-8 text-blue-800 italic">
        AND OVER 400 NEWS SITES
      </p>
    </section>
  );
}
