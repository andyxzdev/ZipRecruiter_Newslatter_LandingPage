import React, { useState } from "react";
import Logo from "../../logo/logo1.svg";

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sanitize = (text) => {
    return text.normalize("NFKD").replace(/[^\w\s@.-]/gi, "");
  };

  const handleSubmit = () => {
    const name = sanitize(formData.name);
    const email = sanitize(formData.email);

    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    const numero = "5524993215864";

    const mensagem =
      "New Newsletter Signup\n\n" + "Name: " + name + "\n" + "Email: " + email;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
      setFormData({ name: "", email: "" });
    }, 300);
  };

  return (
    <div className="lg:absolute w-full max-w-sm mx-auto bg-[#002325] rounded-2xl p-8 flex flex-col gap-6">
      <div className="flex justify-center">
        <img src={Logo} alt="Logo" className="h-8 object-contain" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[#4ADE80] font-bold text-lg">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#EEEADE] text-[#002325] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4ADE80]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#4ADE80] font-bold text-lg">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#EEEADE] text-[#002325] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4ADE80]"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`cursor-pointer w-full font-bold py-3 rounded-lg transition-all duration-200 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#4ADE80] hover:bg-[#22c55e] text-[#002325]"
        }`}
      >
        {loading ? "Sending..." : "Join the Newsletter"}
      </button>

      {/* 🔥 Texto + link de privacidade (reintroduzido) */}
      <p className="text-white/60 text-xs leading-relaxed">
        By submitting your information, you agree to receive communications from{" "}
        <span className="text-white font-semibold">ZipRecruiter</span>.
      </p>

      <p className="text-white/60 text-xs -mt-4">
        Read our{" "}
        <a
          href="https://www.ziprecruiter.global/en/privacy"
          target="_blank"
          rel="noreferrer"
          className="text-[#4ADE80] underline hover:text-green-300"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

export default Forms;
