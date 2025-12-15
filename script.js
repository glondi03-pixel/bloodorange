// Imgur Album ID
const IMGUR_ALBUM_ID = '51GDiVz';

// Google Sheets Published URL (we'll convert it to JSON format)
const GOOGLE_SHEETS_ID = '17dO5hlZVaJddYUG5PFyIFvMIrOwIqEeRnKgZ3zoOfmY';
const GOOGLE_SHEETS_GID = '0'; // First sheet, change if using different sheet

// Gallery Google Sheets
const GALLERY_SHEETS_ID = '1tD8ZFsCvLIuwaQMnwmqm3JfaoG1jslee2CdOWVbmsuQ';
const GALLERY_SHEETS_GID = '0';

// Handle Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);

            // Submit to Formspree
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Show thank you page
                    showPage('thankyou');
                    // Reset form
                    contactForm.reset();
                } else {
                    alert('There was a problem submitting your form. Please try again.');
                }
            }).catch(error => {
                alert('There was a problem submitting your form. Please try again.');
            });
        });
    }
});

// Page Navigation Function
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageName + '-page').classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
    
    // Load gallery if navigating to gallery page
    if (pageName === 'gallery') {
        loadGalleryImages();
    }
    
    // Load shop if navigating to shop page
    if (pageName === 'shop') {
        loadShopProducts();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Prevent default link behavior
    return false;
}

// Load Shop Products from Google Sheets using CSV
async function loadShopProducts() {
    const container = document.getElementById('shop-container');
    
    container.innerHTML = '<div class="gallery-loading">Loading products...</div>';
    
    try {
        console.log('Attempting to fetch Google Sheet...');
        console.log('Sheet ID:', GOOGLE_SHEETS_ID);
        
        // Try multiple URL formats (order matters - start with most reliable)
        const urls = [
            // Try corsproxy.io first (works better with local files)
            `https://corsproxy.io/?${encodeURIComponent(`https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_ID}/export?format=csv&gid=${GOOGLE_SHEETS_GID}`)}`,
            // Try allorigins
            `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_ID}/export?format=csv&gid=${GOOGLE_SHEETS_GID}`)}`,
            // Direct export URL
            `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_ID}/export?format=csv&gid=${GOOGLE_SHEETS_GID}`,
            // Alternative format
            `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_ID}/gviz/tq?tqx=out:csv&gid=${GOOGLE_SHEETS_GID}`
        ];
        
        let csvText = null;
        let lastError = null;
        
        // Try each URL
        for (const url of urls) {
            try {
                console.log('Trying URL:', url);
                const response = await fetch(url);
                console.log('Response status:', response.status);
                
                if (response.ok) {
                    csvText = await response.text();
                    console.log('Successfully fetched data');
                    console.log('First 200 chars:', csvText.substring(0, 200));
                    break;
                } else {
                    lastError = `HTTP ${response.status}: ${response.statusText}`;
                }
            } catch (err) {
                console.error('Fetch error:', err);
                lastError = err.message;
            }
        }
        
        if (!csvText) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--off-white); display: flex; align-items: center; justify-content: center; min-height: 300px;">
                    <h3 style="color: var(--orange); font-size: 2rem;">Shop coming soon</h3>
                </div>
            `;
            return;
        }
        
        // Parse CSV data - improved parser for quoted fields
        const lines = csvText.split('\n').filter(line => line.trim());
        
        if (lines.length < 2) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--off-white); display: flex; align-items: center; justify-content: center; min-height: 300px;">
                    <h3 style="color: var(--orange); font-size: 2rem;">Shop coming soon</h3>
                </div>
            `;
            return;
        }
        
        // Function to parse CSV line properly handling quotes
        function parseCSVLine(line) {
            const result = [];
            let current = '';
            let inQuotes = false;
            
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                const nextChar = line[i + 1];
                
                if (char === '"') {
                    if (inQuotes && nextChar === '"') {
                        current += '"';
                        i++;
                    } else {
                        inQuotes = !inQuotes;
                    }
                } else if (char === ',' && !inQuotes) {
                    result.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            result.push(current.trim());
            return result;
        }
        
        // Skip header row
        const dataRows = lines.slice(1);
        
        // Parse each row
        const products = dataRows.map(line => {
            const fields = parseCSVLine(line);
            
            if (fields.length < 4 || !fields[0]) return null;
            
            return {
                name: fields[0],
                price: fields[1],
                photo: fields[2],
                stripeLink: fields[3]
            };
        }).filter(product => product && product.name);
        
        if (products.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--off-white); display: flex; align-items: center; justify-content: center; min-height: 300px;">
                    <h3 style="color: var(--orange); font-size: 2rem;">Shop coming soon</h3>
                </div>
            `;
            return;
        }
        
        container.innerHTML = '';
        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(4, 1fr)';
        container.style.gap = '2rem';
        container.style.padding = '1rem 0';
        
        products.forEach((product, index) => {
            // Extract values from CSV-parsed product object
            const { name, price, photo, stripeLink } = product;
            
            console.log(`Product ${index + 1}:`, {
                name: name,
                price: price,
                photo: photo,
                stripeLink: stripeLink
            });
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card scale-in';
            productCard.style.cssText = `
                background: transparent;
                border: none;
                overflow: hidden;
                transition: all 0.3s ease;
            `;
            
            productCard.innerHTML = `
                <div style="position: relative; overflow: hidden; aspect-ratio: 1 / 1; background: var(--dark); margin-bottom: 1rem; border-radius: 8px;">
                    <img src="${photo}" 
                         alt="${name}" 
                         crossorigin="anonymous"
                         style="width: 100%; height: 100%; object-fit: cover; object-position: center; filter: grayscale(0%); transition: all 0.4s ease; display: block;"
                         onload="console.log('Image loaded successfully:', '${photo}');"
                         onerror="console.error('Failed to load image:', '${photo}'); this.style.display='none'; this.parentElement.innerHTML='<div style=&quot;width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--orange);text-align:center;padding:2rem;&quot;>Image not available</div>';">
                </div>
                <div style="padding: 0;">
                    <h3 style="color: var(--white); font-size: 0.95rem; margin-bottom: 0.5rem; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase;">${name}</h3>
                    <p style="color: var(--off-white); font-size: 0.9rem; font-weight: 400; margin-bottom: 1rem;">€${price}</p>
                    <a href="${stripeLink || '#'}" 
                       target="_blank"
                       style="display: inline-block; text-align: center; background: transparent; color: var(--white); 
                              padding: 0.75rem 1.5rem; font-weight: 400; border: 1px solid var(--white); 
                              transition: all 0.3s; text-decoration: none; font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; border-radius: 4px;"
                       onmouseover="this.style.background='var(--white)'; this.style.color='var(--black)';"
                       onmouseout="this.style.background='transparent'; this.style.color='var(--white)';">
                        Buy Now
                    </a>
                </div>
            `;
            
            // Minimal hover effect for image
            productCard.addEventListener('mouseenter', () => {
                const img = productCard.querySelector('img');
                if (img) img.style.opacity = '0.85';
            });
            
            productCard.addEventListener('mouseleave', () => {
                const img = productCard.querySelector('img');
                if (img) img.style.opacity = '1';
            });
            
            container.appendChild(productCard);
            
            // Trigger animation
            setTimeout(() => productCard.classList.add('visible'), 100 * index);
        });
        
    } catch (error) {
        console.error('Error loading shop products:', error);
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--off-white); display: flex; align-items: center; justify-content: center; min-height: 300px;">
                <h3 style="color: var(--orange); font-size: 2rem;">Shop coming soon</h3>
            </div>
        `;
    }
}

// Load Imgur Album - Fetch and display images directly
// Load Gallery Images from Google Sheets
async function loadGalleryImages() {
    const container = document.getElementById('gallery-container');

    container.innerHTML = '<div class="gallery-loading">Loading gallery...</div>';

    try {
        // Hardcoded portfolio images from artists section
        const portfolioImages = [
            // Davide Licini
            { link: 'portfolio/davide/1.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/2.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/3.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/4.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/IMG_6332 2-2.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/IMG_8872 2-3.jpeg', artist: 'Davide Licini' },
            // Jūratė Nemiga
            { link: 'portfolio/jurate/1j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/2j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/3j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/4j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/IMG_5329.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/IMG_5372.jpeg', artist: 'Jūratė Nemiga' },
            // Simone Smids
            { link: 'portfolio/simone/IMG_4675.jpeg', artist: 'Simone Smids' },
            { link: 'portfolio/simone/IMG_5006.jpeg', artist: 'Simone Smids' },
            { link: 'portfolio/simone/IMG_4213.jpeg', artist: 'Simone Smids' },
            { link: 'portfolio/simone/IMG_4491 2-2.jpeg', artist: 'Simone Smids' }
        ];

        console.log('Loading gallery from Google Sheets...');

        // Try multiple URL formats
        const urls = [
            `https://corsproxy.io/?${encodeURIComponent(`https://docs.google.com/spreadsheets/d/${GALLERY_SHEETS_ID}/export?format=csv&gid=${GALLERY_SHEETS_GID}`)}`,
            `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://docs.google.com/spreadsheets/d/${GALLERY_SHEETS_ID}/export?format=csv&gid=${GALLERY_SHEETS_GID}`)}`,
            `https://docs.google.com/spreadsheets/d/${GALLERY_SHEETS_ID}/export?format=csv&gid=${GALLERY_SHEETS_GID}`,
            `https://docs.google.com/spreadsheets/d/${GALLERY_SHEETS_ID}/gviz/tq?tqx=out:csv&gid=${GALLERY_SHEETS_GID}`
        ];

        let csvText = null;
        let lastError = null;

        for (const url of urls) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    csvText = await response.text();
                    console.log('Gallery data fetched successfully');
                    break;
                } else {
                    lastError = `HTTP ${response.status}`;
                }
            } catch (err) {
                lastError = err.message;
            }
        }

        // CSV parser
        function parseCSVLine(line) {
            const result = [];
            let current = '';
            let inQuotes = false;

            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                const nextChar = line[i + 1];

                if (char === '"') {
                    if (inQuotes && nextChar === '"') {
                        current += '"';
                        i++;
                    } else {
                        inQuotes = !inQuotes;
                    }
                } else if (char === ',' && !inQuotes) {
                    result.push(current.trim());
                    current = '';
                } else {
                    current += char;
                }
            }
            result.push(current.trim());
            return result;
        }

        let galleryItems = [...portfolioImages]; // Start with portfolio images

        // Try to load Google Sheets images
        if (csvText) {
            // Parse CSV
            const lines = csvText.split('\n').filter(line => line.trim());

            if (lines.length >= 2) {
                // Skip header row
                const dataRows = lines.slice(1);

                console.log('Total lines:', lines.length);
                console.log('Data rows count:', dataRows.length);

                // Parse gallery items from sheets
                const sheetItems = dataRows.map(line => {
                    const fields = parseCSVLine(line);
                    if (fields.length < 1 || !fields[0]) return null;

                    let imageLink = fields[0];

                    // Convert Google Drive links to direct image URLs
                    if (imageLink.includes('drive.google.com')) {
                        const match = imageLink.match(/\/d\/([^\/]+)/);
                        if (match) {
                            const fileId = match[1];
                            imageLink = `https://drive.google.com/uc?export=view&id=${fileId}`;
                        }
                    }

                    return {
                        link: imageLink,
                        artist: (fields[1] || 'Unknown Artist').trim()
                    };
                }).filter(item => item && item.link);

                console.log(`Found ${sheetItems.length} gallery images from Google Sheets`);

                // Add sheet items to gallery items
                galleryItems = galleryItems.concat(sheetItems);
            }
        }

        console.log(`Total gallery items: ${galleryItems.length}`);

        if (galleryItems.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 3rem; color: var(--off-white);">
                    <h3 style="color: var(--orange); margin-bottom: 1rem;">No images found</h3>
                    <p>Please add images to the gallery sheet.</p>
                </div>
            `;
            return;
        }

        // Group items by artist
        const artistGroups = {};
        galleryItems.forEach(item => {
            if (!artistGroups[item.artist]) {
                artistGroups[item.artist] = [];
            }
            artistGroups[item.artist].push(item);
        });

        console.log('Artists found:', Object.keys(artistGroups));

        // Clear container
        container.innerHTML = '';
        container.style.display = 'block';

        // Create section for each artist
        Object.keys(artistGroups).sort().forEach((artistName, artistIndex) => {
            const artistItems = artistGroups[artistName];

            // Create artist section
            const artistSection = document.createElement('div');
            artistSection.className = 'artist-gallery-section fade-in';
            artistSection.id = `gallery-${artistName.toLowerCase().replace(/\s+/g, '-')}`;

            // Artist title
            const artistTitle = document.createElement('h3');
            artistTitle.textContent = artistName;
            artistSection.appendChild(artistTitle);

            // Artist subtitle
            const artistSubtitle = document.createElement('div');
            artistSubtitle.className = 'artist-subtitle';
            artistSubtitle.textContent = `${artistItems.length} tattoo${artistItems.length !== 1 ? 's' : ''}`;
            artistSection.appendChild(artistSubtitle);

            // Grid for artist's tattoos
            const artistGrid = document.createElement('div');
            artistGrid.className = 'drive-gallery-grid';
            artistGrid.style.cssText = `
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1.5rem;
                padding: 1rem 0;
            `;

            // Add each tattoo
            artistItems.forEach((item, index) => {
                const galleryCard = document.createElement('div');
                galleryCard.className = 'gallery-item-custom scale-in';
                galleryCard.style.cssText = `
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 1 / 1;
                    border: 1px solid var(--grey);
                    border-radius: 8px;
                    background: var(--dark);
                    cursor: pointer;
                `;

                const img = document.createElement('img');
                img.src = item.link;
                img.alt = `Tattoo by ${item.artist}`;
                img.loading = 'lazy';
                img.crossOrigin = 'anonymous';
                img.style.cssText = `
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(10%) contrast(105%);
                    transition: all 0.4s ease;
                    display: block;
                `;

                // Click to view full size
                galleryCard.addEventListener('click', () => {
                    openLightbox(item.link);
                });

                // Hover effect
                galleryCard.addEventListener('mouseenter', () => {
                    img.style.transform = 'scale(1.05)';
                    img.style.filter = 'grayscale(0%) contrast(110%)';
                });

                galleryCard.addEventListener('mouseleave', () => {
                    img.style.transform = 'scale(1)';
                    img.style.filter = 'grayscale(10%) contrast(105%)';
                });

                galleryCard.appendChild(img);
                artistGrid.appendChild(galleryCard);

                // Trigger animation
                setTimeout(() => galleryCard.classList.add('visible'), 100 * index);
            });

            artistSection.appendChild(artistGrid);
            container.appendChild(artistSection);

            // Trigger section animation
            setTimeout(() => artistSection.classList.add('visible'), 200 * artistIndex);
        });

    } catch (error) {
        console.error('Error loading gallery:', error);
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--off-white);">
                <h3 style="color: var(--orange); margin-bottom: 1rem;">Unable to load gallery</h3>
                <p style="margin-bottom: 1rem;">Error: ${error.message}</p>
                <p style="font-size: 0.9rem; color: var(--light-grey);">
                    Make sure the gallery sheet is published to web (File → Share → Publish to web → CSV format)
                </p>
            </div>
        `;
    }
}

// Lightbox functions
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const nav = document.getElementById('mobile-nav');
    const burger = document.querySelector('.burger-menu');
    nav.classList.toggle('active');
    burger.classList.toggle('active');
}

function closeMobileMenu() {
    const nav = document.getElementById('mobile-nav');
    const burger = document.querySelector('.burger-menu');
    nav.classList.remove('active');
    burger.classList.remove('active');
}

// Theme Toggle Function
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Load saved theme preference - defaults to light mode
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkMode');
    // Only add dark-mode if explicitly saved as 'true'
    // Otherwise default to light mode (no class)
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        // Explicitly remove dark-mode class and ensure light mode
        document.body.classList.remove('dark-mode');
    }

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Send form data
            const formData = new FormData(this);

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Show success message
                    document.getElementById('form-success-message').style.display = 'block';
                    this.style.display = 'none';
                }
            }).catch(error => {
                console.error('Form submission error:', error);
            });
        });
    }
});

// Language Toggle Function
function toggleLanguage() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.classList.toggle('active');
    });

    // Save preference to localStorage
    const activeLang = document.querySelector('.lang-option.active').dataset.lang;
    localStorage.setItem('language', activeLang);

    // In future, this could trigger actual language switching
    console.log('Language toggled to:', activeLang);
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));
});
