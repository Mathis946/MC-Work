import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import reparationImg from '@/assets/reparation.jpg'
import installImg from '@/assets/install.jpg'
import diagImg from '@/assets/diag.jpg'

const services = [
  {
    id: 1,
    title: 'Réparations Diverses',
    description: 'MC Work vous propose des services de dépannage et de maintenance dans tous les domaines, que ce soit en plomberie, électricité, serrurerie, etc. Faites confiance à mon expertise et ma réactivité pour résoudre tous vos problèmes en un temps record. Contactez-moi dès maintenant pour un travail de qualité et un service personnalisé.',
    image: reparationImg,
    icon: '🔧',
    features: ['Plomberie', 'Électricité', 'Serrurerie', 'Maintenance générale']
  },
  {
    id: 2,
    title: 'Installation de prises et luminaires',
    description: "L'installation et la réparation de prises et luminaires permettent de garantir la sécurité de vos installations électriques et d'optimiser l'éclairage de votre espace. Un travail soigné et conforme aux normes pour votre tranquillité d'esprit.",
    image: installImg,
    icon: '💡',
    features: ['Installation de prises', 'Pose de luminaires', 'Mise aux normes', 'Conformité électrique']
  },
  {
    id: 3,
    title: 'Diagnostics et recherche de panne électriques',
    description: 'Le diagnostic et la recherche de panne demandent un savoir-faire précis et une attention particulière pour un résultat impeccable. J\'utilise des outils professionnels pour identifier rapidement la source du problème et proposer la solution la plus adaptée.',
    image: diagImg,
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#045389' }} />,
    features: ['Diagnostic complet', 'Recherche de panne', 'Tests de sécurité', 'Rapport détaillé']
  }
]

function Service() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900 text-white" style={{ background: 'linear-gradient(to bottom right, rgb(15 23 42), #045389, rgb(15 23 42))' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `url(${diagImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="relative px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm uppercase tracking-[0.3em]" style={{ color: '#04538980' }}>Nos Services</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Expertise et réactivité pour tous vos besoins
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200 sm:text-xl">
              MC Work vous propose des services de dépannage et de maintenance dans tous les domaines. 
              Faites confiance à mon expertise et ma réactivité pour résoudre tous vos problèmes rapidement 
              avec un service personnalisé et de qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space-y-16">
        {services.map((service, index) => (
          <article
            key={service.id}
            className={`group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl ${
              index % 2 === 1 ? 'sm:flex-row-reverse' : ''
            }`}
          >
            <div className={`grid gap-0 sm:grid-cols-[minmax(0,480px)_minmax(0,1fr)] ${index % 2 === 1 ? 'sm:grid-cols-[minmax(0,1fr)_minmax(0,480px)]' : ''}`}>
              <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to bottom right, rgba(4, 83, 137, 0.2), transparent)' }}></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-sm text-3xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">{service.title}</h2>
                  <div className="mt-3 h-1 w-16 rounded-full bg-[#045389]"></div>
                </div>
                <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                  {service.description}
                </p>
                <div className="mt-2">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Services inclus
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 sm:grid-cols-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#045389]"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Additional Services Info */}
      <section className="rounded-3xl border p-8 sm:p-12" style={{ borderColor: '#04538920', backgroundColor: '#04538910' }}>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: '#045389' }}>
            Pourquoi choisir MC Work ?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Réactivité</h3>
              <p className="text-sm text-gray-600">Intervention rapide pour répondre à vos urgences</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
              <p className="text-sm text-gray-600">Savoir-faire professionnel dans tous les domaines</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Qualité</h3>
              <p className="text-sm text-gray-600">Travail soigné et conforme aux normes en vigueur</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-slate-900 text-white">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-slate-900/80" />
          <img src={diagImg} alt="Intervention MC Work" className="absolute inset-0 h-full w-full object-cover opacity-30" loading="lazy" />
        </div>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-center sm:px-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Prêt à démarrer votre projet ?</h2>
          <p className="text-base text-slate-200 sm:text-lg">
            Discutons de vos besoins en dépannage ou maintenance. Une réponse rapide est garantie.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90 hover:shadow-xl" style={{ backgroundColor: '#045389', boxShadow: '0 10px 15px -3px rgba(4, 83, 137, 0.3)' }}
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Service

