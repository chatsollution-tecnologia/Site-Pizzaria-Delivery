import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Instagram, 
  Pizza,
  Phone,
  X,
  MessageCircle,
  ReceiptText
} from "lucide-react";

export default function App() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  const units = [
    {
      name: "Unidade Vilar Dos Teles",
      link: "https://pizzariadelivery.net.br/pizzaria_delivery",
      icon: <ReceiptText className="w-8 h-8 text-white" />,
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Unidade Duque de Caxias",
      link: "https://app.cardapioweb.com/rede_pizzaria_delivery", 
      icon: <ReceiptText className="w-8 h-8 text-white" />,
      color: "from-orange-600 to-yellow-500"
    },
  ];

  const whatsappUnits = [
    { name: "Zap Vilar dos Teles", number: "5521988590189" },
    { name: "Zap Duque de Caxias", number: "5521990576139" },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')`,
          referrerPolicy: "no-referrer"
        } as any}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-red-950/90 via-black/80 to-black/95" />

      {/* Floating Particles Effect (CSS only) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-orange-500 rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Section */}
        <header className="pt-16 pb-10 flex flex-col items-center">
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-orange-500 blur-2xl opacity-20 rounded-full animate-pulse" />
            <div className="relative w-32 h-32 rounded-full border-4 border-white/90 p-2 bg-gradient-to-tr from-red-600 to-orange-500 shadow-[0_0_30px_rgba(239,68,68,0.4)] flex items-center justify-center">
              <Pizza className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl font-black tracking-tighter uppercase text-white drop-shadow-md">
              Pizzaria
            </h1>
            <h2 className="text-2xl font-bold tracking-[0.3em] uppercase text-orange-400 -mt-1 drop-shadow-md">
              Delivery
            </h2>
          </motion.div>
        </header>

        {/* Main Content */}
        <main className="max-w-xl mx-auto w-full px-6 py-8 flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center space-y-3"
          >
            <span className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-black uppercase tracking-widest rounded-full">
              Desde 2013
            </span>
            <p className="text-white/90 text-xl font-medium italic">
              Seja bem-vindo(a)!
            </p>
            <div className="h-1 w-12 bg-orange-500 mx-auto rounded-full" />
          </motion.div>

          <div className="w-full flex flex-col gap-5">
            {units.map((unit, index) => (
              <motion.a
                key={unit.name}
                href={unit.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`group relative w-full bg-gradient-to-r ${unit.color} rounded-2xl p-1 shadow-2xl transition-all duration-300`}
              >
                <div className="bg-zinc-900/90 backdrop-blur-sm rounded-[14px] p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${unit.color} shadow-lg`}>
                      {unit.icon}
                    </div>
                    <span className="font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-orange-400 transition-colors">
                      {unit.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-orange-500 transition-all">
                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Media */}
          <section className="mt-8 flex flex-col items-center gap-6">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-orange-500/80">
              Siga-nos
            </h3>
            <div className="flex gap-8">
              <motion.a
                href="https://www.instagram.com/pizzariadelivery.rj/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#f97316" }}
                className="text-white/70 transition-all p-3 bg-white/5 rounded-full hover:bg-white/10 backdrop-blur-md"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.button
                onClick={() => setShowWhatsapp(true)}
                whileHover={{ scale: 1.2, color: "#f97316" }}
                className="text-white/70 transition-all p-3 bg-white/5 rounded-full hover:bg-white/10 backdrop-blur-md"
              >
                <Phone className="w-6 h-6" />
              </motion.button>
            </div>
          </section>
        </main>

        {/* Whatsapp Modal */}
        <AnimatePresence>
          {showWhatsapp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowWhatsapp(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl"
              >
                <button 
                  onClick={() => setShowWhatsapp(false)}
                  className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Fale Conosco</h3>
                  <p className="text-zinc-400 text-sm">Escolha a unidade para o WhatsApp</p>
                </div>

                <div className="flex flex-col gap-3">
                  {whatsappUnits.map((unit) => (
                    <a
                      key={unit.number}
                      href={`https://wa.me/${unit.number}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 px-6 bg-zinc-800 hover:bg-green-600 rounded-2xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {unit.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-auto py-12 flex flex-col items-center gap-4">
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-4" />
          <p className="text-white/40 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Pizzaria Delivery
          </p>
          <div className="flex flex-col items-center gap-1">
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] text-center px-4">
              Qualidade e tradição em cada fatia
            </p>
            <p className="text-[10px] text-zinc-500 mt-2">
              Feito com dedicação por{" "}
              <a 
                href="https://hbtsolucoesdigitais.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-400 font-bold hover:text-sky-300 transition-colors"
              >
                @omazzoca 🚀
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
