export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to connect? Reach out directly through phone or WhatsApp for immediate assistance
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Phone Contact */}
          <div className="card p-8 text-center animate-slide-up">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Call Directly
            </h3>
            <p className="text-gray-600 mb-6">
              Get immediate assistance with a direct phone call. Available during business hours.
            </p>
            <a 
              href="tel:+251991856292"
              className="btn-primary w-full"
            >
              📞 Call +251 99 185 6292
            </a>
          </div>

          {/* WhatsApp Contact */}
          <div className="card p-8 text-center animate-slide-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              WhatsApp Chat
            </h3>
            <p className="text-gray-600 mb-6">
              Send a message on WhatsApp for quick responses and easy communication.
            </p>
            <a 
              href="https://wa.me/251991856292"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              💬 Start WhatsApp Chat
            </a>
          </div>

          {/* Telegram Contact */}
          <div className="card p-8 text-center animate-slide-up lg:col-span-1 md:col-span-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✈️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Telegram Community
            </h3>
            <p className="text-gray-600 mb-6">
              Join our Telegram channel for exclusive content, updates, and community discussions.
            </p>
            <a 
              href="https://t.me/tagbridge"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-600/20 w-full inline-block"
            >
              ✈️ Join @tagbridge
            </a>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Contact Me Directly?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Personalized Service</h4>
                <p className="text-gray-600 text-sm">Get tailored recommendations based on your specific needs</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                <p className="text-gray-600 text-sm">Fast replies and immediate assistance when you need it</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Direct Communication</h4>
                <p className="text-gray-600 text-sm">No middleman - speak directly with me about your requirements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EAT)
          </p>
          <p className="text-gray-500 mt-2">
            WhatsApp messages are monitored 24/7 for your convenience
          </p>
        </div>
      </div>
    </section>
  )
}