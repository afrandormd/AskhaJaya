import { Layers, Banana, PoundSterling } from "lucide-react";

export default function Superiority() {
  return (
    <section className="w-full py-12 bg-[#FDF6EC]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold font-serif text-secondary mb-3">
            Kenapa Pilih Askha Jaya?
          </h1>
          <p className="text-secondary/80">
            Temukan kelezatan kami di sini dan rasakan sendiri kenikmatannya!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-primary rounded-lg p-6 text-center hover:bg-secondary hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              {/* Icon Placeholder */}
              <Layers className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Rasa Otentik</h3>
            <p className="text-sm text-white/80">
              Cita rasa asli kripik Lampung yang tak tertanding.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-primary rounded-lg p-6 text-center hover:bg-secondary hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Banana className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Bahan Berkualitas</h3>
            <p className="text-sm text-white/80">
              Hanya menggunakan bahan segar dari alam Lampung.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-primary rounded-lg p-6 text-center hover:bg-secondary hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <PoundSterling className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">
              Cocok untuk Segala Momen
            </h3>
            <p className="text-sm text-white/80">
              Camilan nikmat untuk setiap momen hingga hadiah spesial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
