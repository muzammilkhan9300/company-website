"use client";

import React from "react";
import { siteConfig } from "@/config/site";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.146 4.189 4.389-1.152zm12.338-6.195c-.322-.16-1.902-.938-2.197-1.045-.295-.107-.51-.16-.725.16-.215.321-.832 1.045-1.02 1.259-.188.214-.376.241-.698.08-.322-.16-1.36-.501-2.59-1.598-.956-.853-1.602-1.907-1.79-2.229-.188-.321-.02-.495.141-.655.145-.144.322-.375.483-.563.16-.188.214-.321.322-.536.107-.214.053-.402-.027-.563-.08-.16-.725-1.748-.994-2.392-.262-.628-.529-.543-.725-.553-.188-.009-.402-.009-.616-.009-.214 0-.563.08-.858.402-.295.321-1.127 1.102-1.127 2.685 0 1.583 1.153 3.11 1.314 3.324.161.214 2.27 3.466 5.5 4.862.768.332 1.368.53 1.835.679.771.246 1.474.211 2.03.128.62-.093 1.902-.777 2.17-1.527.268-.75.268-1.392.188-1.527-.08-.135-.295-.215-.617-.376z"/>
      </svg>
      <span className="text-sm font-semibold hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
