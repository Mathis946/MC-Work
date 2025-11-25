function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="flex w-full flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8 lg:flex-row lg:justify-between">
        <div className="max-w-sm">
          <h2 className="text-lg font-semibold tracking-wide text-gray-900">Me contacter</h2>
          <p className="mt-2 text-sm text-gray-500">
            Besoin d’un accompagnement informatique&nbsp;? Appelez-nous ou écrivez-nous.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-700">
          <div>
            <strong className="block text-gray-900">Nous appeler</strong>
            <a href="tel:+33786229800" className="mt-1 block text-[#045389] hover:opacity-80 transition">07.86.22.98.00</a>
          </div>
          <div>
            <strong className="block text-gray-900">Adresse e-mail</strong>
            <a href="mailto:Mcwork93@gmail.com" className="mt-1 block text-[#045389] hover:opacity-80 transition">Mcwork93@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 bg-white/60">
        <div className="w-full px-4 py-4 text-sm text-gray-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} MC Work. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}

export default Footer


