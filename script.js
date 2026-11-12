const PRODUCT_DATA = {
  serum: {
    tag: "Cuidado Facial",
    title: "Cacay Amazon Origin Sérum",
    description: "Sérum facial antienvejecimiento de producto terminado, 100 % natural.",
    image: "assets/images/serum.jpg",
    packaging: "Frasco de vidrio ámbar de 30 ml con gotero.",
    application: "Aplicación directa en el cuidado facial de piel madura.",
    benefits: "Absorción rápida y efecto seco, hidratación profunda y retinol natural (Tacay, s. f.)."
  },
  shampoo: {
    tag: "Cuidado Capilar",
    title: "Cacay Active Shampoo",
    description: "Shampoo capilar con aceite de cacay como componente principal y formulación 100 % natural.",
    image: "assets/images/shampoo.jpg",
    packaging: "Frasco plástico biodegradable de 250 ml.",
    application: "Aplicación directa sobre el cuero cabelludo para mejorar la hidratación y la recuperación capilar.",
    benefits: "Aporta ácidos grasos (72,7 % de ácido linoleico en un análisis de lote) a la formulación (Mi Cosmética Casera, s. f.)."
  },
  exfoliant: {
    tag: "Cosmética Circular",
    title: "Cacay Nut Exfoliant",
    description: "Crema exfoliante que aprovecha la torta residual del prensado de la nuez.",
    image: "assets/images/exfoliant.jpg",
    packaging: "Envase ecológico de 200 ml.",
    application: "Exfoliante físico corporal, en un esquema de cosmética circular.",
    benefits: "Usa un subproducto con 32,56 % de proteína y 527 mg de calcio por 100 g (Tacay, s. f.), lo que reduce el desperdicio."
  }
};

function toggleProductDetails(productKey) {
  const detailsEl = document.getElementById(`details-${productKey}`);
  const card = document.querySelector(`[data-product="${productKey}"]`);
  const btn = card.querySelector(".btn-details");
  const textSpan = btn.querySelector(".btn-details-text");

  const isHidden = detailsEl.hasAttribute("hidden");
  if (isHidden) {
    detailsEl.removeAttribute("hidden");
    btn.setAttribute("aria-expanded", "true");
    textSpan.textContent = "Ocultar detalles";
  } else {
    detailsEl.setAttribute("hidden", "");
    btn.setAttribute("aria-expanded", "false");
    textSpan.textContent = "Visualizar qué más tiene";
  }
  if (typeof updateScrollTransitions === "function") {
    updateScrollTransitions();
  }
}

function openProductModal(productKey) {
  const data = PRODUCT_DATA[productKey];
  if (!data) return;

  document.getElementById("modal-img").src = data.image;
  document.getElementById("modal-img").alt = data.title;
  document.getElementById("modal-tag").textContent = data.tag;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-desc").textContent = data.description;
  document.getElementById("modal-packaging").textContent = data.packaging;
  document.getElementById("modal-application").textContent = data.application;
  document.getElementById("modal-benefits").textContent = data.benefits;

  const modal = document.getElementById("product-modal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("product-modal").addEventListener("click", (event) => {
  if (event.target.id === "product-modal") {
    closeProductModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProductModal();
  }
});

function handleClubSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById("club-name");
  const emailInput = document.getElementById("club-email");
  const feedback = document.getElementById("club-feedback");

  const userName = nameInput.value.trim();
  feedback.textContent = `¡Gracias por unirte a El Club Kaya${userName ? ", " + userName : ""}! Te hemos registrado con éxito.`;
  feedback.removeAttribute("hidden");
  event.target.reset();
}

// Efecto de desvanecimiento y movimiento suave entre páginas al hacer scroll
const pageSections = Array.from(document.querySelectorAll("[data-page-section]"));
const pageDots = Array.from(document.querySelectorAll(".page-dot"));

function updateScrollTransitions() {
  const viewportHeight = window.innerHeight;
  const viewportCenter = viewportHeight / 2;

  let closestSectionId = pageSections[0]?.id;
  let minDistance = Infinity;

  pageSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const stage = section.querySelector(".section-stage");
    if (!stage) return;

    const sectionCenter = rect.top + rect.height / 2;
    const distanceFromCenter = sectionCenter - viewportCenter;
    const absDistance = Math.abs(distanceFromCenter);

    if (absDistance < minDistance) {
      minDistance = absDistance;
      closestSectionId = section.id;
    }

    // Si la sección es más alta que la pantalla (ej. al desplegar detalles),
    // mantenerla 100% visible mientras su cuerpo ocupe la pantalla
    const isCoveringViewport = rect.top <= viewportHeight * 0.18 && rect.bottom >= viewportHeight * 0.82;

    if (isCoveringViewport) {
      stage.style.opacity = "1";
      stage.style.transform = "translateY(0px) scale(1)";
      stage.style.filter = "blur(0px)";
      return;
    }

    // Progreso de salida hacia arriba (cuando bajas a la siguiente página)
    // o de entrada desde abajo
    let progress = 0;
    if (rect.top > viewportHeight * 0.15) {
      // Entrando desde abajo
      progress = Math.min(1, Math.max(0, (rect.top - viewportHeight * 0.12) / (viewportHeight * 0.72)));
      const opacity = Math.max(0.04, 1 - Math.pow(progress, 1.25));
      const translateY = progress * 64;
      const scale = 1 - progress * 0.06;
      const blur = progress * 4;

      stage.style.opacity = opacity.toFixed(3);
      stage.style.transform = `translateY(${translateY.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      stage.style.filter = `blur(${blur.toFixed(1)}px)`;
    } else if (rect.bottom < viewportHeight * 0.85) {
      // Desapareciendo hacia arriba al bajar a la siguiente sección
      progress = Math.min(1, Math.max(0, (viewportHeight * 0.88 - rect.bottom) / (viewportHeight * 0.72)));
      const opacity = Math.max(0.04, 1 - Math.pow(progress, 1.2));
      const translateY = -progress * 64;
      const scale = 1 - progress * 0.06;
      const blur = progress * 4;

      stage.style.opacity = opacity.toFixed(3);
      stage.style.transform = `translateY(${translateY.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      stage.style.filter = `blur(${blur.toFixed(1)}px)`;
    } else {
      stage.style.opacity = "1";
      stage.style.transform = "translateY(0px) scale(1)";
      stage.style.filter = "blur(0px)";
    }
  });

  // Actualizar punto activo del indicador lateral
  pageDots.forEach((dot) => {
    if (dot.dataset.target === closestSectionId) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateScrollTransitions();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

window.addEventListener("resize", updateScrollTransitions);
document.addEventListener("DOMContentLoaded", updateScrollTransitions);
updateScrollTransitions();

// Observador para disparar las animaciones de creación cuando se llega a cada página
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        // Reiniciar cuando sale de la vista para que al volver a bajar/subir se vuelva a animar
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.22
  }
);

pageSections.forEach((section) => {
  sectionObserver.observe(section);
});



