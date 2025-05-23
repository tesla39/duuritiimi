import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const response = await fetch('https://formspree.io/f/mwpopevo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  
    setIsSubmitting(false);
  };


  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitted(true);
  //     setFormData({ name: '', email: '', phone: '', message: '' });

  //     // Reset success message after 5 seconds
  //     setTimeout(() => {
  //       setSubmitted(false);
  //     }, 5000);
  //   }, 1500);
  // };

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">{t('contactUs')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact information */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('contactInfo')}</h3>
              <p className="text-gray-600">
                {t('contactDirectly')}
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4 items-start">
                <div className="text-teal p-2 bg-teal bg-opacity-10 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold">{t('email')}</h4>
                  <a href="mailto:info@duuritiimi.fi" className="text-gray-600 hover:text-teal">
                    info@duuritiimi.fi
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-teal p-2 bg-teal bg-opacity-10 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold">{t('phoneLabel')}</h4>
                  <a href="tel:+358501234567" className="text-gray-600 hover:text-teal">
                    +358 50 123 4567
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="text-teal p-2 bg-teal bg-opacity-10 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold">{t('address')}</h4>
                  <address className="not-italic text-gray-600">
                  Koulukatu 13, <br />
                    30100 Forssa
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-sm p-6 lg:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-teal mb-4 inline-flex items-center justify-center w-16 h-16 bg-teal bg-opacity-10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('thankYou')}</h3>
                <p className="text-gray-600">{t('willContactSoon')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal focus:border-teal"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal focus:border-teal"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('phoneNumber')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal focus:border-teal"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      {t('message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal focus:border-teal"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-yellow-500 text-white font-bold rounded-md border border-yellow-600 hover:bg-yellow-600 transition-colors disabled:opacity-70"
                  >
                  {isSubmitting ? t('sending') : t('sendMessage')}
    </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
