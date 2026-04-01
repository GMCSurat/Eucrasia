import { useState } from "react";
import { UserPlus } from "lucide-react";

export default function Registration() {
  const [selectedCategory, setSelectedCategory] = useState<
    "UG" | "PG" | "OTHER" | null
  >(null);

  const forms = {
    UG: [
      { name: "Batch 103", link: "https://docs.google.com/forms/d/19W3ZxE_DDxaJ3agZiFzd-dFhaufKbTU5WiTPRWEiPvc/viewform?usp=header" },
      { name: "Batch 104", link: "https://docs.google.com/forms/d/1htxdMCqPIIzdRE5NR6UxEa-cFoj9pNvDydczF_kXidM/viewform?usp=header" },
      { name: "Batch 105", link: "https://docs.google.com/forms/d/1RUPwL9zAcHVGwsjH2iUtGUV07D0Q1-32hBk8ge8Kbxw/viewform?usp=header" },
      { name: "Batch 106", link: "https://docs.google.com/forms/d/1XhxcBk-lMhvLVzb26qa-ExkKFpDfqkKoQkomAWyzXhY/viewform?usp=header" },
      { name: "Batch 107", link: "https://docs.google.com/forms/d/1tJAegqXvEMyk3Huyd0LxkMMUL4nIe_BEDVG3DqlPjXc/viewform?usp=header" },
    ],
    PG: [
      { name: "PGY", link: "https://docs.google.com/forms/d/13O2StsfXDT_xcnbRE0KPusXRSd_BGL6G_viRv7W6ByU/viewform?usp=header" }
    ],
    OTHER: [
      { name: "Other College Registration", link: "https://docs.google.com/forms/d/1zaNdx0IjS1Uomfuo40MPJ69JCuY6nAS8ujM0if5gnmQ/viewform?usp=header" }
    ],
  };

  const colorClasses = {
    UG: {
      border: "border-red-500",
      hover: "hover:border-red-500",
      text: "text-red-500",
      button: "bg-red-600 hover:bg-red-700",
    },
    PG: {
      border: "border-blue-500",
      hover: "hover:border-blue-500",
      text: "text-blue-500",
      button: "bg-blue-600 hover:bg-blue-700",
    },
    OTHER: {
      border: "border-green-500",
      hover: "hover:border-green-500",
      text: "text-green-500",
      button: "bg-green-600 hover:bg-green-700",
    },
  };

  const handleClick = (category: "UG" | "PG" | "OTHER") => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-5xl font-bold text-red-600 text-center mb-16">
          REGISTRATION
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {["UG", "PG", "OTHER"].map((category) => (
            <div
              key={category}
              onClick={() =>
                handleClick(category as "UG" | "PG" | "OTHER")
              }
              className={`p-8 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? colorClasses[category].border
                  : `border-gray-700 ${colorClasses[category].hover}`
              } bg-gray-900/50`}
            >
              <div className="flex justify-between mb-4">
                <h3
                  className={`text-3xl font-bold ${colorClasses[category].text}`}
                >
                  {category === "UG"
                    ? "UG Registration"
                    : category === "PG"
                    ? "PG Registration"
                    : "Other College"}
                </h3>
                <UserPlus
                  className={colorClasses[category].text}
                  size={32}
                />
              </div>

              <p className="text-gray-400">
                Click to view registration forms
              </p>
            </div>
          ))}
        </div>

        {/* EXPANSION PANEL */}
        {selectedCategory && (
          <div className="mt-12 max-w-3xl mx-auto bg-gray-900/60 backdrop-blur-md p-8 rounded-xl border border-gray-800 animate-fadeIn">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {selectedCategory === "UG"
                ? "UG Event Registrations"
                : selectedCategory === "PG"
                ? "PG Registration"
                : "Other College Registration"}
            </h3>

            <div className="space-y-4">
              {forms[selectedCategory].map((form, index) => (
                <a
                  key={index}
                  href={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center p-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                    colorClasses[selectedCategory].button
                  }`}
                >
                  {form.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}