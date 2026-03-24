import React, { useState } from "react";
import axios from "axios";
import Logo from "../../logo/logo1.svg";

function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/newsletter", formData);
      alert("You're in! Check your inbox soon.");
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-[#002325] rounded-2xl p-8 flex flex-col gap-6">
      {/* Logo */}
      <div className="flex justify-center">
        <img src={Logo} alt="ZipRecruiter" className="h-8 object-contain" />
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[#4ADE80] font-bold text-lg">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#EEEADE] text-[#002325] placeholder-gray-400 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4ADE80]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-[#4ADE80] font-bold text-lg">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Type your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#EEEADE] text-[#002325] placeholder-gray-400 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#4ADE80]"
          />
        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={handleSubmit}
        className="w-full bg-[#4ADE80] hover:bg-[#22c55e] text-[#002325] font-bold py-3 rounded-lg transition-colors duration-200"
      >
        Join the Newsletter
      </button>

      {/* Disclaimer */}
      <p className="text-white/60 text-xs leading-relaxed">
        By submitting your information, you agree to receive communications from{" "}
        <span className="text-white font-semibold">ZipRecruiter</span>.
      </p>
      <p className="text-white/60 text-xs -mt-4">
        Read our{" "}
        <a
          href="/privacy"
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
