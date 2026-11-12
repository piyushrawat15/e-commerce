
(() => {
  "use strict";

  const products = [
    {
      id: 1,
      name: "Essential Heavyweight Tee",
      category: "T-shirts",
      price: 899,
      oldPrice: 1199,
      badge: "NEW ARRIVAL",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      name: "Relaxed Oxford Shirt",
      category: "Shirts",
      price: 1499,
      oldPrice: null,
      badge: "",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      name: "Everyday Pullover Hoodie",
      category: "Hoodies",
      price: 1899,
      oldPrice: 2199,
      badge: "BESTSELLER",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      name: "Relaxed Utility Trouser",
      category: "Trousers",
      price: 1699,
      oldPrice: null,
      badge: "",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 5,
      name: "Minimal Logo Tee",
      category: "T-shirts",
      price: 749,
      oldPrice: null,
      badge: "NEW ARRIVAL",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 6,
      name: "Everyday Overshirt",
      category: "Shirts",
      price: 1799,
      oldPrice: 1999,
      badge: "",
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 7,
      name: "Core Crew Sweatshirt",
      category: "Hoodies",
      price: 1599,
      oldPrice: null,
      badge: "",
      image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 8,
      name: "Canvas Everyday Tote",
      category: "Accessories",
      price: 499,
      oldPrice: null,
      badge: "",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80"
    },
    {
      id : 9,
      name: "Brahma Distressed // 400 GSM Oversized Hoodie",
      category:"Hoodies",
      price:1999,
      oldPrice:2499,
      badge: "",
      image: "green hoodie.webp"
    }
  ];

  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];

  let activeFilter = "All";
  let toastTimer;

  const formatPrice = price =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(price);

  const escapeHTML = text =>
    String(text).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);

  function createProductCard(product) {
    return `
      <article class="product-card">
        <div class="product-image">
          <img
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.name)}"
            loading="lazy"
          >

          ${product.badge
            ? `<span class="product-badge">${escapeHTML(product.badge)}</span>`
            : ""
          }

          <button
            class="product-hover"
            type="button"
            data-product="${product.id}"
          >
            Quick view · ${formatPrice(product.price)} ↗
          </button>
        </div>

        <div class="product-meta">
          <div>
            <p class="product-name">${escapeHTML(product.name)}</p>
            <p class="product-category">${escapeHTML(product.category)}</p>
          </div>

          <div class="product-price">
            ${product.oldPrice
              ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
              : ""
            }
            ${formatPrice(product.price)}
          </div>
        </div>
      </article>
    `;
  }

  function renderNewArrivals() {
    const sorted = [
      ...products.filter(product => product.badge === "NEW ARRIVAL"),
      ...products.filter(product => product.badge !== "NEW ARRIVAL")
    ];

    $("#newProducts").innerHTML =
      sorted.slice(0, 4).map(createProductCard).join("");
  }

  function renderProducts() {
    const query = $("#searchInput").value.trim().toLowerCase();
    const sort = $("#sortSelect").value;

    let filtered = products.filter(product => {
      const matchesCategory =
        activeFilter === "All" || product.category === activeFilter;

      const matchesSearch =
        `${product.name} ${product.category}`.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    $("#allProducts").innerHTML =
      filtered.map(createProductCard).join("");

    $("#noResults").classList.toggle("hidden", filtered.length > 0);

    $$(".filter").forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === activeFilter
      );
    });
  }

  function showToast(message) {
    const toast = $("#toast");

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }

  $("#menuToggle").addEventListener("click", () => {
    const open = $("#nav").classList.toggle("open");

    $("#menuToggle").setAttribute("aria-expanded", String(open));
    $("#menuToggle").textContent = open ? "×" : "☰";
  });

  $$("#nav a").forEach(link => {
    link.addEventListener("click", () => {
      $("#nav").classList.remove("open");
      $("#menuToggle").setAttribute("aria-expanded", "false");
      $("#menuToggle").textContent = "☰";
    });
  });

  $("#searchButton").addEventListener("click", () => {
    $("#shop").scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      $("#searchInput").focus();
    }, 350);
  });

  $("#searchInput").addEventListener("input", renderProducts);
  $("#sortSelect").addEventListener("change", renderProducts);

  $("#filterRow").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");

    if (!button) return;

    activeFilter = button.dataset.filter;
    renderProducts();
  });

  document.addEventListener("click", event => {
    const categoryLink = event.target.closest("[data-category]");

    if (categoryLink) {
      activeFilter = categoryLink.dataset.category;
      renderProducts();
    }

    const productButton = event.target.closest("[data-product]");

    if (productButton) {
      const product = products.find(
        item => item.id === Number(productButton.dataset.product)
      );

      if (product) {
        showToast(
          `${product.name} · ${formatPrice(product.price)}. Product details will be added next.`
        );
      }
    }
  });

  $("#newsletterForm").addEventListener("submit", event => {
    event.preventDefault();

    $("#newsletterMessage").textContent =
      "Thanks for your interest. This demo does not send or store emails.";

    $("#emailInput").value = "";
    showToast("Newsletter demo submitted.");
  });

  $("#year").textContent = new Date().getFullYear();

  renderNewArrivals();
  renderProducts();
})();
