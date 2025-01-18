const startPortfolio = () => {
  const profileScreen = document.getElementById("profileScreen");
  const mainContent = document.getElementById("mainContent");
  const fullscreenVideo = document.getElementById("fullscreenVideo");

  // Show the video
  fullscreenVideo.classList.add("active");

  // Hide profile screen
  profileScreen.style.display = "none";

  const showMainContent = () => {
    // Ensure video element is removed after transition
    fullscreenVideo.remove();

    // Display main content
    mainContent.style.display = "block";

    // Reinitialize any nav or page listeners if needed
    initNavbar(); // Ensure your navbar setup is done here
  };

  // Handle video ending or fallback to timeout
  fullscreenVideo.onended = showMainContent;

  setTimeout(() => {
    if (fullscreenVideo.parentNode) {
      showMainContent();
    }
  }, 3000); // Adjust to the duration of your video
};

// Example navbar reinitialization function (if required)
const initNavbar = () => {
  // Add event listeners for all nav links, including the Netflix button
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior

      // Scroll smoothly to the section
      const sectionId = link.getAttribute("data-section");
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Update active link
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Optionally, show the section if you're dynamically hiding others
      document.querySelectorAll(".content-section").forEach((sec) => {
        sec.classList.remove("active");
      });
      section.classList.add("active");
    });
  });
};
