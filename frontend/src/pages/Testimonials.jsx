import { Link } from 'react-router-dom'
import diagImg from '@/assets/diag.jpg'

const testimonials = [
  {
    id: 1,
    name: 'ENEID HOME',
    text: 'J\'ai fait appel à MC Work pour une panne électrique chez moi et je n\'ai pas été déçu ! Il a été très professionnel, rapide et efficace dans son travail. Je le recommande vivement pour tous vos besoins en dépannage multi technique.',
    rating: 5,
    service: 'Dépannage électrique',
    date: '2024'
  },
  {
    id: 2,
    name: 'Client particulier',
    text: 'Intervention rapide et efficace pour une fuite d\'eau. MC Work a su identifier le problème rapidement et le résoudre avec professionnalisme. Service de qualité, je recommande !',
    rating: 5,
    service: 'Plomberie',
    date: '2024'
  },
  {
    id: 3,
    name: 'Client particulier',
    text: 'Installation de plusieurs prises électriques réalisée avec soin. Travail propre, respect des normes et conseils pertinents. Très satisfait du service.',
    rating: 5,
    service: 'Installation électrique',
    date: '2024'
  }
]

function Testimonials() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }

  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br via-white text-gray-900" style={{ background: 'linear-gradient(to bottom right, #04538910, white, #04538910)' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `url(${diagImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="relative px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-[#045389]">Témoignages</span>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              La satisfaction de nos clients
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
              Découvrez les retours d&apos;expérience des clients MC Work. Chaque intervention est menée avec professionnalisme,
              écoute et réactivité pour garantir votre sérénité.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="flex text-2xl">{renderStars(5)}</div>
              <span className="text-sm font-semibold text-gray-700">5.0 / 5.0</span>
              <span className="text-sm text-gray-500">basé sur {testimonials.length} avis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="space-y-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#045389]/40"
            >
              <div className="flex flex-col gap-6">
                {/* Header with rating */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex text-lg">{renderStars(testimonial.rating)}</div>
                    <span className="text-xs font-medium uppercase tracking-wide text-[#045389]">
                      {testimonial.service}
                    </span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg" style={{ background: 'linear-gradient(to bottom right, #045389, #045389)' }}>
                    {testimonial.name.charAt(0)}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                    «&nbsp;{testimonial.text}&nbsp;»
                  </p>
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <cite className="block text-sm font-semibold not-italic text-gray-900">
                      {testimonial.name}
                    </cite>
                    <span className="text-xs text-gray-500">{testimonial.date}</span>
                  </div>
                  <div className="text-3xl" style={{ color: '#04538920' }}>"</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action for new testimonials */}
        <div className="rounded-3xl border-2 border-dashed p-8 sm:p-12" style={{ borderColor: '#04538940', backgroundColor: '#04538910' }}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: '#045389' }}>
              Partagez votre expérience
            </h2>
            <p className="mt-4 text-base sm:text-lg" style={{ color: '#045389' }}>
              Vous avez bénéficié de nos services ? Votre témoignage nous aide à améliorer continuellement 
              notre offre et aide d&apos;autres clients à faire leur choix.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90 hover:shadow-xl" style={{ backgroundColor: '#045389', boxShadow: '0 10px 15px -3px rgba(4, 83, 137, 0.3)' }}
              >
                Laisser un témoignage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            MC Work en chiffres
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-[#045389] sm:text-5xl">100%</div>
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">Satisfaction</div>
              <div className="mt-2 text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-[#045389] sm:text-5xl">24h</div>
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">Réactivité</div>
              <div className="mt-2 text-sm text-gray-600">Délai d&apos;intervention</div>
            </div>
            <div className="text-center">
              <div className="mb-3 text-4xl font-bold text-[#045389] sm:text-5xl">5★</div>
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500">Note moyenne</div>
              <div className="mt-2 text-sm text-gray-600">Basée sur les avis clients</div>
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
          <h2 className="text-3xl font-semibold sm:text-4xl">Besoin de nos services ?</h2>
          <p className="text-base text-slate-200 sm:text-lg">
            Rejoignez nos clients satisfaits. Contactez-nous dès aujourd&apos;hui pour une intervention rapide et professionnelle.
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

export default Testimonials


