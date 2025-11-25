import { Link } from 'react-router-dom'
import heroImg from '@/assets/outils.jpg'
import installImg from '@/assets/install.jpg'
import diagImg from '@/assets/diag.jpg'
import reparationImg from '@/assets/reparation.jpg'

const galleryImages = [
  {
    src: diagImg,
    alt: 'Diagnostic électrique en cours',
  },
  {
    src: installImg,
    alt: 'Installation de matériel',
  },
  {
    src: reparationImg,
    alt: 'Réparation technique',
  },
  {
    src: heroImg,
    alt: 'Outils de maintenance',
  },
]

function Home() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative grid gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:px-16">
          <div className="flex flex-col gap-6">
            <span className="text-sm uppercase tracking-[0.3em]" style={{ color: '#04538980' }}>MC Work</span>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">Sérénité assurée avec MC Work.</h1>
            <p className="text-base text-slate-200">
              Bienvenue sur MC Work ! Basé à Noisy-le-Sec, je vous accompagne avec rigueur et sourire pour toutes vos demandes de dépannage multi technique. Votre satisfaction est ma priorité&nbsp;: je vous assure un service de qualité, rapide et professionnel.
            </p>
            <div>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90" style={{ backgroundColor: '#045389', boxShadow: '0 10px 15px -3px rgba(4, 83, 137, 0.3)' }}>
                Contactez-nous
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <img src={heroImg} alt="Outils" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-8 text-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Agent de maintenance professionnel</h2>
            <p className="mt-4 text-base text-gray-600">
              MC Work vous propose des services de dépannage et de maintenance dans tous les domaines&nbsp;: plomberie, électricité, serrurerie… Profitez de mon expertise et de ma réactivité pour résoudre vos problèmes rapidement avec un service personnalisé.
            </p>
          </div>
          <ul className="grid gap-3 text-left text-base text-gray-700 sm:grid-cols-2 sm:gap-4">
            {['Réparations diverses', 'Installations de prises et luminaires', 'Recherche de panne', 'Diagnostics électriques'].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#045389]"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <Link to="/services" className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-[#045389]/10" style={{ borderColor: '#045389', color: '#045389' }}>
              Tous les services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Agent de maintenance polyvalent</h2>
          <p className="mt-4 text-base text-gray-600">
            MC Work est un agent de maintenance qualifié et expérimenté, spécialisé dans le dépannage multi technique. Alliant sourire, amabilité et professionnalisme, je réponds à toutes vos demandes à Noisy-le-Sec pour un service de qualité.
          </p>
          <div className="mt-6">
            <a href="#/travaux" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Nos travaux
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {galleryImages.map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img src={image.src} alt={image.alt} className="h-56 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="rounded-3xl border p-8 sm:p-12" style={{ borderColor: '#04538920', backgroundColor: '#04538910' }}>
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: '#045389' }}>Les avis clients</h2>
          <blockquote className="rounded-2xl bg-white p-8 text-left shadow-sm">
            <p className="text-base text-gray-700">
              «&nbsp;J&apos;ai fait appel à MC Work pour une panne électrique chez moi et je n&apos;ai pas été déçu&nbsp;! Très professionnel, rapide et efficace dans son travail. Je le recommande vivement pour tous vos besoins de dépannage multi technique.&nbsp;»
            </p>
            <cite className="mt-4 block text-sm font-semibold" style={{ color: '#045389' }}>ENEID HOME</cite>
          </blockquote>
          <div>
            <a href="#/temoignages" className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-[#045389]/10" style={{ borderColor: '#045389', color: '#045389' }}>
              Témoignages clients
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-slate-900/80" />
          <img src={diagImg} alt="Intervention MC Work" className="absolute inset-0 h-full w-full object-cover opacity-40" loading="lazy" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center sm:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Besoin de nous contacter&nbsp;?</h2>
          <p className="text-base text-slate-200">Discutons de vos besoins en dépannage ou maintenance. Une réponse rapide est garantie.</p>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90" style={{ backgroundColor: '#045389', boxShadow: '0 10px 15px -3px rgba(4, 83, 137, 0.3)' }}>
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home


