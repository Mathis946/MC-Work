function Contact() {
  return (
    <section className="space-y-10">
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact</h1>
        <p className="text-lg text-gray-600">
          Une question ou un besoin urgent ? Contactez MC Work et obtenez une réponse rapide pour votre intervention.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Coordonnées</h2>
          <dl className="mt-6 space-y-5 text-gray-700">
            <div>
              <dt className="text-sm uppercase tracking-wide text-gray-500">Téléphone</dt>
              <dd className="mt-1 text-lg font-semibold text-[#045389]">07.86.22.98.00</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-gray-500">Email</dt>
              <dd className="mt-1 text-lg font-semibold text-[#045389]">Mcwork93@gmail.com</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Disponibilité</h2>
          <p className="mt-4 text-gray-600">
            Interventions à Noisy-le-Sec et alentours, du lundi au samedi. Pour une urgence, appelez directement afin d&apos;obtenir un créneau prioritaire.
          </p>
          <div className="mt-6">
            <a
              href="tel:+33786229800"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90" style={{ backgroundColor: '#045389', boxShadow: '0 10px 15px -3px rgba(4, 83, 137, 0.3)' }}
            >
              Appeler MC Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


