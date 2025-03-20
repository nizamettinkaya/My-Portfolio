import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formError, setFormError] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 57.7089, // Göteborg’un enlem değeri
    lng: 11.9746, // Göteborg’un boylam değeri
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const response = await fetch("https://formsubmit.co/your@email.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true); // Başarıyla gönderildi
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); // Sayfanın yenilenmesini engelle
  //   setIsSubmitting(true);
  //   setFormError(null);

  //   try {
  //     const response = await fetch("https://formsubmit.co/dev.nkaya@hotmail.com", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: new URLSearchParams(formData).toString(),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Form submission failed");
  //     }

  //     setIsSubmitted(true);
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //   } catch (error) {
  //     setFormError("Something went wrong. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        console.log("Konum bilgisi alınamadı, varsayılan konum kullanılıyor.");
      },
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or want to discuss a potential collaboration? Feel free to
              reach out to me using the contact form or through my contact information.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-white p-8 shadow-md dark:bg-gray-900"
          >
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            {/* <form action="https://formsubmit.co/dev.nkaya@hotmail.com" method="POST" className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className="w-full p-3 border rounded-md" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" required className="w-full p-3 border rounded-md" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message *" rows={4} required className="w-full p-3 border rounded-md"></textarea>
              <button type="submit" className="w-full p-3 bg-primary-600 text-white rounded-md hover:bg-primary-700">
                Send Message <FiSend className="inline ml-2" />
              </button>
            </form> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                required
                className="w-full rounded-md border p-3"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                required
                className="w-full rounded-md border p-3"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                rows={4}
                required
                className="w-full rounded-md border p-3"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-primary-600 p-3 text-white hover:bg-primary-700"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <FiSend className="ml-2 inline" />
              </button>
              {isSubmitted && (
                <p className="flex items-center font-medium text-green-600">
                  <FiCheck className="mr-2" /> Message sent, thank you!
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-center">
                <FiMail className="mr-3 text-primary-600" size={24} />
                <a
                  href="mailto:dev.nkaya@hotmail.com"
                  className="text-gray-900 hover:underline dark:text-white"
                >
                  dev.nkaya@hotmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 text-primary-600" size={24} />
                <a
                  href="tel:+46727776428"
                  className="text-gray-900 hover:underline dark:text-white"
                >
                  +46 (072) 777-6428
                </a>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-3 text-primary-600" size={24} />
                <p className="text-gray-900 dark:text-white">Göteborg, Sweden</p>
              </div>
            </div>
            <div className="mt-6">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${location.lng - 0.01},${location.lat - 0.01},${location.lng + 0.01},${location.lat + 0.01}&layer=mapnik`}
                className="h-64 w-full rounded-md"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
