document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const pagination = document.querySelector('.pagination');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    pagination.textContent = `${index + 1} of ${slides.length}`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});
document.addEventListener("DOMContentLoaded", () => {
  // Define filters and links for each tab
  const tabContent = {
    all: {
      filters: ["Everything", "Most Popular", "Recently Added"],
      links: ["Advanced Search", "Browse All", "Help"]
    },
    books: {
      filters: ["Fiction", "Non-fiction", "E-books", "Printed Books"],
      links: ["New Arrivals", "Authors", "Genres"]
    },
    articles: {
      filters: ["Journals", "Magazines", "Research Papers"],
      links: ["Databases", "Citations Help", "Top Journals"]
    },
    audio: {
      filters: ["DVD", "Streaming Video", "CD", "Streaming Audio", "Images"],
      links: ["New Releases", "Top Rated", "Library Help"]
    },
    other: {
      filters: ["Theses", "Reports", "Manuscripts"],
      links: ["Archives", "Special Collections", "Contact Librarian"]
    }
  };

  const tabs = document.querySelectorAll(".tabs button");
  const filtersDiv = document.querySelector(".filters");
  const linksDiv = document.querySelector(".links");

  // Function to update filters & links
  function updateContent(tab) {
    filtersDiv.innerHTML = tabContent[tab].filters
      .map(f => `<label><input type="radio" name="format" /> ${f}</label>`)
      .join("<br>");

    linksDiv.innerHTML = tabContent[tab].links
      .map(l => `<a href="#">${l}</a>`)
      .join(" ");
  }

  // Default load (All tab)
  updateContent("all");

  // Add click listeners to tabs
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all
      tabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Update filters & links
      const tab = btn.getAttribute("data-tab");
      updateContent(tab);
    });
  });
})