// import React, { useState } from "react";
// import imghero from "../assets/images/imghero.png";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         const errorData = await response.json();
//         setStatus(`Error: ${errorData.error || "Unknown error occurred"}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <section
//       data-aos="fade-up"
//       data-aos-delay="300"
//       className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
//     >
//       <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
//         <aside className="w-full md:w-1/2 relative">
//           <div
//             className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px]
//             sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#97284d] via-[#f56c6c] to-[#3a55a5] 
//             shadow-[0_0_70px_rgba(100,149,237,0.7)]"
//           ></div>
//           <img
//             src={imghero}
//             alt="Contact illustration"
//             className="h-[300px] sm:h-[400px] md:h-[450px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
//           />
//         </aside>

//         {/* Contact Form */}
//         <section id="contact" className="p-8 w-full md:w-1/2">
//           <header className="mb-6">
//             <h2 className="text-4xl font-bold text-center text-white">
//               Contact Me
//             </h2>
//           </header>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-gray-300 font-medium mb-2"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-300 font-medium mb-2"
//               >
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your e-mail"
//                 className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-gray-300 font-medium mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message"
//                 className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1d3c91] 
//               hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-lg"
//             >
//               Send Message
//             </button>
//             {status && <p className="text-white mt-4">{status}</p>}
//           </form>
//         </section>
//       </article>
//     </section>
//   );
// }

// import React, { useState } from "react";
// import imghero from "../assets/images/imghero.png";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       // Wysyłanie danych formularza na endpoint /send-email
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" }); // Reset form
//       } else {
//         const errorData = await response.json();
//         setStatus(`Error: ${errorData.error || "Unknown error occurred"}`);
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <section
//       data-aos="fade-up"
//       data-aos-delay="300"
//       className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
//     >
//       <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
//         <aside className="w-full md:w-1/2 relative">
//           <div
//             className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px]
//             sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#97284d] via-[#f56c6c] to-[#3a55a5] 
//             shadow-[0_0_70px_rgba(100,149,237,0.7)]"
//           ></div>
//           <img
//             src={imghero}
//             alt="Contact illustration"
//             className="h-[300px] sm:h-[400px] md:h-[450px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
//           />
//         </aside>

//         {/* Contact Form */}
//         <section id="contact" className="p-8 w-full md:w-1/2">
//           <header className="mb-6">
//             <h2 className="text-4xl font-bold text-center text-white">
//               Contact Me
//             </h2>
//           </header>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-gray-300 font-medium mb-2"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-300 font-medium mb-2"
//               >
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Your e-mail"
//                 className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-gray-300 font-medium mb-2"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Your message"
//                 className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1d3c91] 
//               hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-lg"
//             >
//               Send Message
//             </button>
//             {status && <p className="text-white mt-4">{status}</p>}
//           </form>
//         </section>
//       </article>
//     </section>
//   );
// }



import React, { useState } from "react";
import imghero from "../assets/images/imghero.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const errorData = await response.json();
        setStatus(`Error: ${errorData.error || "Unknown error occurred"}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 mt-10 relative">
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative">
          <div className="absolute w-[350px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#97284d] via-[#f56c6c] to-[#3a55a5]"></div>
          <img
            src={imghero}
            alt="Contact illustration"
            className="h-[300px] sm:h-[400px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
          />
        </aside>
        <section id="contact" className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">Contact Me</h2>
          </header>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your e-mail"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full px-4 py-2 bg-gray-900 rounded-lg"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-[#1d3c91] text-white py-2 px-6 rounded-full">
              Send Message
            </button>
            {status && <p className="text-white mt-4">{status}</p>}
          </form>
        </section>
      </article>
    </section>
  );
}
