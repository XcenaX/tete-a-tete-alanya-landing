import { motion } from 'motion/react';
import {
  ArrowRight,
  Heart,
  MapPin,
  Sparkles,
  Check,
  Send,
  Plane,
  Building2,
  Compass,
  Calendar,
  Users,
  Utensils,
  Sun,
  Ship,
  Map,
  Camera,
  Waves,
  Smile,
  Music,
  Wine,
  Umbrella,
  Navigation,
  Leaf,
  Palette,
  MessageCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const formats = [
  {
    title: 'Романтика',
    positioning: 'Не просто поездка, а личное время вдвоем в красивой атмосфере и без лишней суеты.',
    price: 'от 3 200 €',
    priceDesc: 'за двоих',
    specs: [
      { text: 'Для пары', icon: <Heart className="w-3 h-3" /> },
      { text: 'Индивидуальный формат', icon: <Compass className="w-3 h-3" /> },
    ],
    included: [
      { text: 'Перелет', icon: <Plane className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
      { text: 'Апартаменты класса люкс', icon: <Building2 className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
    ],
    features: [
      { text: 'Ужины с видом на море', icon: <Utensils className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Пикник на закате', icon: <Sun className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Яхта по желанию', icon: <Ship className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Прогулки по старому городу', icon: <Map className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Фотосессии', icon: <Camera className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
    ],
    img: '/pack1.png',
  },
  {
    title: 'Family',
    positioning: 'Отдых, который объединяет семью и оставляет теплые воспоминания надолго.',
    price: 'от 3 500 €',
    priceDesc: 'на семью',
    specs: [
      { text: '7-10 дней', icon: <Calendar className="w-3 h-3" /> },
      { text: 'Семейный отдых', icon: <Users className="w-3 h-3" /> },
    ],
    included: [
      { text: 'Перелет', icon: <Plane className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
      { text: 'Апартаменты премиум-класса', icon: <Building2 className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
    ],
    features: [
      { text: 'Мягкий климат', icon: <Sun className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Безопасные пляжи и чистое море', icon: <Waves className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Комфорт и спокойствие', icon: <Smile className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Совместные семейные активности', icon: <Heart className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
    ],
    img: '/pack3.png',
  },
  {
    title: 'Friends',
    positioning: 'Драйв, свобода и яркие впечатления. Ваш личный сценарий для самой запоминающейся поездки года.',
    price: 'от 1 500 €',
    priceDesc: 'за человека',
    specs: [
      { text: '10 дней', icon: <Calendar className="w-3 h-3" /> },
      { text: 'Группа 4-6 человек', icon: <Users className="w-3 h-3" /> },
    ],
    included: [
      { text: 'Перелет', icon: <Plane className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
      { text: 'Проживание', icon: <Building2 className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
      { text: 'Сценарий поездки', icon: <Compass className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
    ],
    features: [
      { text: 'Лучшие клубы, включая Illusion', icon: <Music className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Вечеринки', icon: <Wine className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Пляжный отдых', icon: <Umbrella className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Красивые локации Алании', icon: <MapPin className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Полное сопровождение', icon: <Navigation className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
    ],
    img: '/pack4.png',
  },
  {
    title: 'Women',
    positioning: 'Эмоциональная перезагрузка, красота, свобода и новые впечатления в бережной атмосфере.',
    price: 'от 1 500 €',
    priceDesc: 'за человека',
    specs: [
      { text: '10 дней', icon: <Calendar className="w-3 h-3" /> },
      { text: 'Группа 4-6 девушек', icon: <Users className="w-3 h-3" /> },
    ],
    included: [
      { text: 'Перелет', icon: <Plane className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
      { text: 'Проживание', icon: <Building2 className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
      { text: 'Программа', icon: <Compass className="w-4 h-4 text-[#C18C5D] shrink-0 mt-0.5" /> },
    ],
    features: [
      { text: 'Йога и медитации', icon: <Leaf className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'SPA и забота о себе', icon: <Sparkles className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Арт-встречи и творчество', icon: <Palette className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Вечеринки и прогулки', icon: <Wine className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
      { text: 'Женская атмосфера', icon: <Heart className="w-4 h-4 text-[#C18C5D]/60 shrink-0 mt-0.5" /> },
    ],
    img: '/pack2.png',
  },
];

const advantages = [
  {
    icon: <Heart className="w-8 h-8 stroke-2 text-[#C18C5D]" />,
    title: 'Сценарий под вас',
    desc: 'Мы не продаем шаблоны. Мы слушаем вас и собираем программу, которая точно совпадает с вашим настроением и ожиданиями.',
  },
  {
    icon: <Sparkles className="w-8 h-8 stroke-2 text-[#C18C5D]" />,
    title: 'Эстетика в деталях',
    desc: 'Лучшие виды, проверенные локации, уютные рестораны и детали, которые превращают поездку в красивую историю.',
  },
  {
    icon: <Check className="w-8 h-8 stroke-2 text-[#C18C5D]" />,
    title: 'Полное сопровождение',
    desc: 'От встречи в аэропорту до брони ужинов и маршрутов по городу. Вам остается только приехать и отдыхать.',
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2A28] font-sans overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-300 ${
          scrolled ? 'bg-[#FAF8F5] shadow-md' : 'bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="flex items-center">
          <img
            src="/tlogo.png"
            alt="Tête-à-Tête Alanya"
            className={`h-14 md:h-[72px] object-contain transition-all duration-300 ${!scrolled && 'brightness-0 invert'}`}
          />
        </div>
        <a
          href="#contact"
          className={`px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-full transition-all shadow-lg hover:scale-105 ${
            scrolled ? 'bg-[#C18C5D] text-white hover:bg-[#a6754a]' : 'bg-[#FAF8F5] text-[#2C2A28] hover:bg-white'
          }`}
        >
          Связаться
        </a>
      </nav>

      <section className="relative h-[95vh] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/658-1920x1080-blur_1.jpg"
            alt="Средиземноморское побережье"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C2A28]/50 via-[#2C2A28]/30 to-[#FAF8F5]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-[#FAF8F5] font-semibold drop-shadow-md"
          >
            Boutique Travel Experience
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-[#FAF8F5] leading-[1.1] mb-8 drop-shadow-lg"
          >
            Не просто тур.
            <br />
            <span className="italic font-normal">Ваше состояние.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-[#FAF8F5] text-lg md:text-xl font-medium max-w-xl mx-auto mb-12 drop-shadow-md"
          >
            Красивые, продуманные поездки в Аланию. Мы берем на себя заботы, оставляя вам эстетику, тепло и эмоции.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            href="#formats"
            className="group flex items-center gap-4 px-8 py-4 bg-[#C18C5D] text-white rounded-full hover:bg-[#a6754a] transition-all shadow-xl font-semibold hover:shadow-2xl hover:-translate-y-1"
          >
            <span className="text-sm tracking-widest uppercase">Выбрать формат</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C2A28] mb-8 leading-tight font-medium">
              Отдых, в котором
              <br />
              всё <span className="italic text-[#C18C5D]">уже продумано</span>
            </h2>
            <div className="space-y-6 text-[#2C2A28]/90 font-normal text-lg md:text-xl leading-relaxed">
              <p>
                Мы не продаем стандартные путевки. Мы создаем сценарии, где вам не нужно принимать решения, искать
                локации или заботиться о трансферах.
              </p>
              <p>
                Вам остается лишь наслаждаться теплом Средиземноморья, бокалом вина на закате и временем с теми, кто
                вам дорог.
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img src="/photo1.png" alt="Терраса у моря" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-[#C18C5D]/40 rounded-full z-[-1]"></div>
          </div>
        </div>
      </section>

      <section id="formats" className="py-24 bg-[#EBE5DF]">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm tracking-[0.2em] uppercase text-[#C18C5D] font-bold mb-4 block">
              Коллекция впечатлений
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C2A28] font-medium">
              Форматы путешествий
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {formats.map((format, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col bg-[#FAF8F5] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl border border-[#2C2A28]/5 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={format.img}
                    alt={format.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent z-0"></div>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 pr-6">
                    <h3 className="font-serif text-4xl md:text-5xl font-medium text-[#FAF8F5] drop-shadow-md">
                      {format.title}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <p className="font-medium text-[#2C2A28] text-sm md:text-base leading-relaxed mb-6 italic">
                    {format.positioning}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-serif text-3xl lg:text-4xl text-[#C18C5D]">{format.price}</span>
                    {format.priceDesc && (
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#2C2A28]/50">
                        {format.priceDesc}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {format.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#2C2A28]/10 rounded-full text-[10px] uppercase tracking-wider text-[#2C2A28]/80 font-bold shadow-sm"
                      >
                        {spec.icon}
                        {spec.text}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col justify-end">
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C18C5D] mb-3 opacity-80">
                        Что включено
                      </div>
                      <ul className="space-y-2.5">
                        {format.included.map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#2C2A28]/90 font-medium">
                            {inc.icon}
                            <span>{inc.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-[#2C2A28]/10">
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C18C5D] mb-3 opacity-80">
                        В сценарии
                      </div>
                      <ul className="space-y-2.5">
                        {format.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#2C2A28]/80 font-medium">
                            {feature.icon}
                            <span className="leading-relaxed">{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C2A28] font-medium mb-8">
            Как мы работаем
          </h2>
          <p className="text-[#2C2A28] text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Выбирая Tête-à-Tête Alanya, вы выбираете легкую организацию и премиальный подход к каждой детали.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {advantages.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg border border-[#2C2A28]/5 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#C18C5D]/30 flex items-center justify-center mb-6 bg-[#FAF8F5] shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#2C2A28] mb-4">{feature.title}</h3>
              <p className="text-[#2C2A28]/90 font-normal leading-relaxed text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-32 flex items-center justify-center shadow-2xl">
        <div className="absolute inset-0">
          <img
            src="/996-1920x800.jpg"
            alt="Вид на море на закате"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#2C2A28]/60"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-[#FAF8F5] font-medium leading-normal italic drop-shadow-xl">
              "Самое дорогое в наши дни - это время и свобода выбора. Мы берем на себя планирование, чтобы вы могли
              просто жить в моменте."
            </h2>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto text-center">
        <span className="text-sm tracking-[0.2em] uppercase text-[#C18C5D] font-bold mb-6 block">Ваш следующий шаг</span>
        <h2 className="font-serif text-4xl md:text-6xl text-[#2C2A28] font-medium mb-8">
          Создадим ваш идеальный отдых?
        </h2>
        <p className="text-[#2C2A28] text-lg md:text-xl font-normal mb-12 max-w-2xl mx-auto leading-relaxed">
          Напишите нам, чтобы обсудить формат вашей поездки, даты и пожелания. Мы ответим быстро и предложим несколько
          красивых сценариев.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://t.me/Ir_lebedeva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 w-full sm:w-auto bg-[#C18C5D] text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#a6754a] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Send className="w-5 h-5" />
            <span>Телеграм</span>
          </a>
          <a
            href="https://wa.me/905362925205"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-10 py-5 w-full sm:w-auto border-2 border-[#2C2A28] text-[#2C2A28] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#25D366] hover:text-[#FAF8F5] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Whatsapp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
