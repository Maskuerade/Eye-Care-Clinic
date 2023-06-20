// script.js

document.addEventListener('DOMContentLoaded', function() {
    const pageContent = document.querySelector('.main-content');
  
    function loadPage(page) {
      // Fetch the content of the page from the server or load it from a local file
      // For simplicity, let's assume the content is stored in separate HTML files
      fetch(`src/pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
          pageContent.innerHTML = html;
          document.getElementById('currentPageTitle').textContent = page;
        })
        .catch(error => {
          console.error('Error loading page:', error);
        });
    }
  
    // Event listener for the sidebar links
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
  
        const page = this.getAttribute('href');
        loadPage(page);
      });
    });
  
    // Load the initial page when the document loads
    loadPage('dashboard');
  });
  