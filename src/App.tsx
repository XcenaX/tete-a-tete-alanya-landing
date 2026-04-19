import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  Heart,
  MapPin,
  MessageCircle,
  Palmtree,
  Plane,
  Send,
  Sparkles,
  Star,
  Sun,
  Users,
  Waves,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const commonIncludes = [
  'VIP-трансфер из аэропорта и обратно',
  'Проживание в апартаментах премиум-класса',
  'Личная программа отдыха',
  'Сопровождение на протяжении всего отдыха',
];

const tours = [
  {
    slug: 'bachelorette',
    title: 'Девичник',
    subtitle: 'Женское путешествие для перезагрузки, красоты и ярких эмоций!',
    price: 'от 1200 €',
    priceNote: 'без перелёта на человека',
    people: 'минимум 4 человека',
    image: '/pack2.png',
    badge: 'Для подруг',
    teaser:
      'Море, yoga, spa, закаты, красивые ужины и то самое состояние, когда хочется снова почувствовать себя лёгкой, живой и наполненной!',
    highlights: ['Yoga, spa и забота о себе', 'Танцы, караоке и клубы', 'Ночные купания и закаты'],
    description: [
      'Это не просто поездка с подругами, а красивое женское путешествие, где можно выдохнуть, расслабиться и отпустить всё лишнее!',
      'Мы собираем программу под ваше настроение: yoga и spa днём, красивые ужины на закате, танцы, караоке, клубы и даже ночные купания в море, если хочется прожить всё ярко!',
    ],
  },
  {
    slug: 'friends',
    title: 'Friends',
    subtitle: 'Для компании, которая хочет прожить отпуск громко, красиво и со вкусом!',
    price: 'от 1200 €',
    priceNote: 'без перелёта на человека',
    people: 'от 4 человек',
    image: '/pack4.png',
    badge: 'Для друзей',
    teaser:
      'Яхты, барбекю, рыбалка, стильные места, ночная жизнь и ощущение: вот это мы действительно отдохнули!',
    highlights: ['Яхты, барбекю и море', 'Рыбалка, горы и локации', 'Рестораны, бары, клубы'],
    description: [
      'Этот формат для тех, кто хочет сорваться компанией и прожить Аланью на максимуме: солнце, море, драйв и лёгкость!',
      'Днём можно выбирать яхты, барбекю у моря, рыбалку, поездки в горы и красивые локации, а вечером уходить в ужины, караоке, бары, клубы и долгие разговоры у моря!',
    ],
  },
  {
    slug: 'family',
    title: 'Family',
    subtitle: 'Тёплый семейный отдых, где действительно хорошо и взрослым, и детям!',
    price: 'от 3800 €',
    priceNote: 'без перелёта',
    people: 'от 3 человек',
    image: '/pack3.png',
    badge: 'Для семьи',
    teaser:
      'Тёплый семейный отдых, где действительно хорошо и взрослым, и детям: красиво, спокойно и без лишней суеты!',
    highlights: ['Лучшие пляжи и бассейны', 'Семейные кафе и прогулки', 'Удобный ритм без спешки'],
    description: [
      'Это отдых, где не нужно решать бесконечные бытовые вопросы и придумывать, чем заняться завтра.',
      'Мы выстраиваем комфортный ритм поездки так, чтобы у семьи оставались силы на главное: быть вместе, смеяться и жить моментом.',
    ],
  },
  {
    slug: 'romantic',
    title: 'Romantic',
    subtitle: 'Путешествие для двоих с приватностью, эстетикой и красивыми моментами!',
    price: 'от 3200 €',
    priceNote: 'без перелёта',
    people: '2 человека',
    image: '/pack1.png',
    badge: 'Для двоих',
    teaser:
      'Путешествие для двоих, где всё создано для любви, красоты, закатов и особенных моментов!',
    highlights: ['романтические ужины', 'уединённые виды и закаты', 'годовщина, honeymoon, proposal'],
    description: [
      'Этот формат создан для любви, спокойствия и особенных моментов, которые хочется помнить ещё долго.',
      'Это может быть медовый месяц, годовщина, предложение или просто красивый отдых вдвоём, где всё подстроено под ваше настроение.',
    ],
  },
];

const reasons = [
  {
    icon: <Heart className="h-7 w-7 text-[#C18C5D]" />,
    title: 'Индивидуальный подход',
    text: 'Каждый тур собирается под гостей, их ритм, желания и настроение отдыха.',
  },
  {
    icon: <Building2 className="h-7 w-7 text-[#C18C5D]" />,
    title: 'Премиальные апартаменты',
    text: 'Подбираем проживание с красивой атмосферой, комфортом и ощущением уровня.',
  },
  {
    icon: <Compass className="h-7 w-7 text-[#C18C5D]" />,
    title: 'Личная программа',
    text: 'Не массовый туризм, а продуманный авторский формат с нужным вам характером.',
  },
  {
    icon: <Sparkles className="h-7 w-7 text-[#C18C5D]" />,
    title: 'Сопровождение и забота',
    text: 'Мы берём организацию на себя, чтобы вы просто проживали отдых красиво и легко.',
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedTour, setSelectedTour] = useState<(typeof tours)[number] | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!selectedTour) {
      document.body.style.overflow = '';
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTour(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedTour]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3ee] text-[#2C2A28]">
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#f7f3ee]/95 shadow-lg backdrop-blur-md' : 'bg-gradient-to-b from-black/45 to-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-12 md:py-4">
          <img
            src="/tlogo.png"
            alt="Tête-à-Tête Alanya"
            className={`h-12 object-contain transition-all duration-300 sm:h-14 md:h-[72px] ${!scrolled ? 'brightness-0 invert' : ''}`}
          />

          <a
            href="#contact"
            className={`shrink-0 rounded-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-all sm:px-6 sm:text-xs sm:tracking-[0.25em] ${
              scrolled
                ? 'bg-[#C18C5D] text-white hover:bg-[#aa774a]'
                : 'bg-white/95 text-[#2C2A28] hover:bg-white'
            }`}
          >
            Связаться
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center">
        <div className="absolute inset-0">
          <img src="/658-1920x1080-blur_1.jpg" alt="Побережье Аланьи" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,25,24,0.58),rgba(26,25,24,0.34)_34%,rgba(247,243,238,0.94)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_24%_44%,rgba(32,31,29,0.52),rgba(32,31,29,0.18)_30%,rgba(32,31,29,0)_58%)]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-20 pt-36 md:px-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl rounded-[2rem] bg-[linear-gradient(135deg,rgba(25,24,23,0.34),rgba(25,24,23,0.14))] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur-[6px] md:px-8 md:py-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur-sm sm:text-xs sm:tracking-[0.3em]"
            >
              <Star className="h-3.5 w-3.5" />
              Жизнь — Здесь и Сейчас!
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="max-w-4xl font-serif text-5xl leading-[0.95] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)] md:text-7xl lg:text-8xl"
            >
              Аланья
              <br />
              <span className="italic text-[#f8dfc5]">рай на земле!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-white/96 drop-shadow-[0_6px_18px_rgba(0,0,0,0.28)] md:text-xl"
            >
              Место, где море, горы, солнце, зелень и спокойствие соединяются в атмосферу красивой жизни и отдыха,
              который запоминается состоянием!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#tours"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C18C5D] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#aa774a]"
              >
                Выбрать тур
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/905362925205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="grid gap-4 sm:grid-cols-3 lg:max-w-xl"
          >
            {[
              { icon: <Waves className="h-5 w-5" />, text: 'Море и горы рядом' },
              { icon: <Sun className="h-5 w-5" />, text: 'Солнце почти круглый год' },
              { icon: <Palmtree className="h-5 w-5" />, text: 'Атмосфера красивой жизни' },
            ].map((item) => (
              <div
                key={item.text}
                className="rounded-[1.75rem] border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.1))] p-5 text-white shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/16 shadow-inner">{item.icon}</div>
                <p className="text-sm font-medium leading-relaxed text-white/96 drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-12 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C18C5D]">О месте</p>
          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Аланья дарит не просто отдых,
            <span className="italic text-[#C18C5D]"> а состояние!</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-[#2C2A28]/82">
            <p>
              Аланью не зря называют раем на земле! Здесь легко дышится, хочется замедлиться, смотреть на море,
              встречать закаты и снова чувствовать вкус жизни!
            </p>
            <p>
              Море, горы, мягкий климат, зелень круглый год, красивые виды, уютные кафе и особая атмосфера
              спокойствия делают Аланью местом, куда хочется возвращаться снова и снова!
            </p>
            <p>
              Для многих особенно важно и то, что здесь легко адаптироваться, легко отдыхать и легко чувствовать
              себя свободно даже в первой поездке!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img src="/photo1.png" alt="Терраса у моря в Аланье" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-[1.5rem] bg-[#1f4e68] px-5 py-4 text-sm font-medium text-white shadow-xl">
            Красота, покой, солнце и море рядом
          </div>
        </motion.div>
      </section>

      <section className="bg-[#efe7de]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Tête-à-Tête Alanya —
                <span className="italic text-[#C18C5D]"> авторские туры с атмосферой, заботой и красотой!</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-[#2C2A28]/84">
              <p>
                Мы создаём не просто поездки, а красивые истории отдыха: для двоих, для семьи, для друзей и для
                ярких женских путешествий!
              </p>
              <p>
                Для нас отдых — это не шаблонный маршрут и не список экскурсий. Это состояние, эмоции, красота,
                лёгкость, вдохновение и ощущение, что всё вокруг складывается именно для вас!
              </p>
              <p>
                Мы берём на себя организацию, проживание, трансферы, сопровождение и ритм поездки, чтобы вам осталось
                только проживать главное: жизнь здесь и сейчас!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tours" className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#C18C5D]">Форматы туров</p>
          <h2 className="font-serif text-4xl md:text-6xl">Выберите своё настроение отдыха!</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#2C2A28]/78">
            Каждый тур — это особая история, собранная под ваше настроение, желания и формат отдыха! А всё подробное
            мы открываем внутри каждого тура, чтобы лендинг оставался лёгким и красивым.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {tours.map((tour, index) => (
            <motion.article
              key={tour.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-[#2C2A28]/6 bg-white shadow-[0_18px_60px_rgba(44,42,40,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(44,42,40,0.14)]"
            >
              <div className="relative">
                <img src={tour.image} alt={tour.title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2C2A28]">
                  {tour.badge}
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-4xl md:text-5xl">{tour.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85 md:text-base">{tour.subtitle}</p>
                </div>
              </div>

              <div className="p-7 md:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#2C2A28]/8 pb-6">
                  <div>
                    <div className="font-serif text-4xl text-[#C18C5D]">{tour.price}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2C2A28]/55">
                      {tour.priceNote}
                    </div>
                  </div>
                  <div className="rounded-full bg-[#f7f3ee] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2C2A28]/70">
                    {tour.people}
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-[#2C2A28]/82">{tour.teaser}</p>

                <ul className="mt-6 space-y-3">
                  {tour.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-[#2C2A28]/82">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C18C5D]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedTour(tour)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C18C5D] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_30px_rgba(193,140,93,0.28)] transition hover:-translate-y-0.5 hover:bg-[#aa774a] hover:shadow-[0_18px_38px_rgba(193,140,93,0.34)]"
                  >
                    Подробнее
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2C2A28]/45">
                    Программа собирается индивидуально
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[#1f2930] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28">
          <div className="mb-14 max-w-xl">
            <h2 className="font-serif text-4xl md:text-6xl text-[#f3cda6]">Почему выбирают Tête-à-Tête Alanya</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/78">
              Потому что мы создаём отдых не по шаблону, а по ощущению: красиво, комфортно, легко и действительно
              запоминающеся!
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/6 p-7 shadow-[0_16px_50px_rgba(0,0,0,0.16)] backdrop-blur-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/8">{reason.icon}</div>
                <h3 className="font-serif text-3xl">{reason.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-white/74">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/996-1920x800.jpg" alt="Закат в Аланье" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,31,36,0.6),rgba(25,31,36,0.72))]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center text-white md:px-12 md:py-36">
          <h2 className="font-serif text-4xl md:text-6xl text-[#f3cda6]">Атмосфера, которую хочется прожить!</h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/82 md:text-xl">
            Тёплый воздух, кофе с видом на пальмы, красивые комплексы, бассейны, яхты, вечерние огни, уютные ужины,
            смех и ощущение, что жизнь стала красивее. Именно из таких деталей рождается отдых, который хочется
            повторить снова.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center md:px-12 md:py-32">
        <p className="mb-4 text-2xl font-bold uppercase tracking-[0.25em] text-[#C18C5D]">Ваше красивое путешествие</p>
        <h2 className="font-serif text-4xl leading-tight md:text-6xl">Может начаться уже сейчас!</h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#2C2A28]/82">
          Расскажите, какой отдых вам хочется прожить, а мы соберём для вас авторский тур в Аланье с атмосферой,
          комфортом, эстетикой и полным сопровождением.
        </p>
        <p className="mx-auto mt-5 max-w-[19rem] text-[15px] leading-[1.65] text-[#2C2A28]/66 sm:max-w-3xl sm:text-base sm:leading-relaxed">
          Для двоих, для семьи, для подруг или для компании друзей. С морем, солнцем, красивыми локациями и
          ощущением, что всё идеально сложилось именно для вас.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/905362925205"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:min-w-[230px] sm:w-auto items-center justify-center gap-3 rounded-full bg-[#C18C5D] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#aa774a]"
          >
            <MessageCircle className="h-4 w-4" />
            Подобрать тур
          </a>
          <a
            href="https://t.me/Ir_lebedeva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:min-w-[230px] sm:w-auto items-center justify-center gap-2 rounded-full border border-[#2C2A28]/14 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.16em] text-[#2C2A28] transition hover:border-[#C18C5D] hover:text-[#C18C5D] sm:gap-3 sm:text-sm sm:tracking-[0.2em]"
          >
            <Send className="h-4 w-4" />
            Написать в Telegram
          </a>
        </div>
      </section>

      <AnimatePresence>
        {selectedTour ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1c1b1a]/75 p-4 backdrop-blur-sm"
            onClick={() => setSelectedTour(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedTour(null)}
              className="fixed right-10 top-10 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-[#1f2930]/94 text-white shadow-[0_14px_34px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:bg-[#172028] md:hidden"
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-[#fbf8f4] shadow-[0_28px_90px_rgba(0,0,0,0.3)]"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.title}
                  className="h-[250px] w-full object-cover sm:h-[280px] md:h-auto md:aspect-[16/7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <button
                  type="button"
                  onClick={() => setSelectedTour(null)}
                  className="absolute right-4 top-4 hidden h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#2C2A28] transition hover:bg-white md:flex md:right-5 md:top-5"
                  aria-label="Закрыть"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute left-5 right-20 top-5 text-white md:left-8 md:right-24 md:top-8">
                  <div className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#2C2A28]">
                    {selectedTour.badge}
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white md:bottom-8 md:left-8 md:right-8">
                  <h3 className="font-serif text-4xl md:text-6xl">{selectedTour.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/88 md:text-base">
                    {selectedTour.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid gap-10 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8 lg:p-10">
                <div className="space-y-6">
                  <div className="rounded-[1.5rem] border border-[#2C2A28]/8 bg-white p-6 shadow-sm">
                    <div className="font-serif text-4xl text-[#C18C5D]">{selectedTour.price}</div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#2C2A28]/55">
                      {selectedTour.priceNote}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#f7f3ee] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2C2A28]/75">
                        <Users className="h-4 w-4 text-[#C18C5D]" />
                        {selectedTour.people}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-[#f7f3ee] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2C2A28]/75">
                        <Plane className="h-4 w-4 text-[#C18C5D]" />
                        Перелёт отдельно
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#C18C5D]/20 bg-[#fffaf4] p-6">
                    <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C18C5D]">Что включено</div>
                    <ul className="space-y-3">
                      {commonIncludes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#2C2A28]/82">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C18C5D]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#C18C5D]">Подробно о формате</div>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-[#2C2A28]/84 md:text-lg">
                    {selectedTour.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <div className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C18C5D]">Основные акценты</div>
                    <ul className="space-y-3">
                      {selectedTour.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#2C2A28]/82 md:text-base">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C18C5D]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 rounded-[1.5rem] bg-[#1f2930] p-6 text-white">
                    <p className="text-base leading-relaxed text-white/82">
                      Каждая программа собирается индивидуально под гостей, под настроение, под желания и под формат
                      отдыха. Мы адаптируем насыщенность, ритм и наполнение именно под вас.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <a
                        href="https://wa.me/905362925205"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C18C5D] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#aa774a] sm:text-sm sm:tracking-[0.18em]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Подобрать этот тур
                      </a>                      
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
