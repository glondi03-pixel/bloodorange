// ─── Language / Translation System ───────────────────────────────────────────

let currentLanguage = 'en';

const translations = {
    en: {
        // Nav
        'nav-home': 'Home',
        'nav-artists': 'Artists',
        'nav-gallery': 'Gallery',
        'nav-contact': 'Contact',
        'nav-shop': 'Shop',
        // Hero
        'hero-subtitle': 'Open mind, open space',
        'hero-description': 'Tattooing as a shared experience',
        'cta-book': 'Book Your Session',
        // About
        'about-title': 'Welcome to Our Studio',
        'about-subtitle': 'If we were to describe Blood Orange Tattoo with one word, it would be comfort. Our goal is to provide an experience where you feel welcome, listened to, and at ease. That\'s why so many of our clients love coming back to our safe and calming space.',
        'card1-title': 'Modern vision',
        'card1-text': 'Our style is built on clean lines, balanced composition, and designs made to age well.',
        'card2-title': 'Talented Artists',
        'card2-text': 'We combine passion for craft with technical care to create tattoos that feel personal, expressive, and timeless.',
        'card3-title': 'Prime Location',
        'card3-text': 'Located at Brusselsestraat 33 6211 PB, in the heart of Maastricht, The Netherlands.',
        // Recent Work
        'recent-title': 'Recent Work',
        'recent-subtitle': 'Explore our latest tattoo creations',
        'gallery-overlay': 'Recent Work',
        'view-gallery': 'View Full Gallery',
        // Reviews
        'reviews-title': 'What Our Clients Say',
        'reviews-count': 'Based on Google reviews',
        'google-reviews-btn': 'Read All Reviews on Google',
        // Artists page
        'artists-title': 'Meet Our Artists',
        'artists-subtitle': 'Our team is composed of dedicated tattoo artists who truly care about delivering quality work. With their expertise, creativity, and unique artistic approach, they\'ll help turn your ideas into the tattoo you\'ve been dreaming of.',
        'davide-role': 'Owner & tattoo artist',
        'jurate-role': 'Tattoo Artist',
        'simone-role': 'Tattoo Artist',
        'davide-card-desc': 'Founder of Blood Orange Tattoo Studio, specializing in clean illustrative surrealism and engraving-inspired tattoo techniques.',
        'jurate-card-desc': 'Skilled in various styles with a love for anime-inspired designs and geek-themed tattoos.',
        'simone-card-desc': 'A creative soul with a focus on naive and life-inspired themes.',
        'view-profile': 'View Profile',
        // Davide profile
        'davide-specialty-tag': 'Illustrative, Surrealism & Modern Tattoos',
        'about-davide': 'About Davide',
        'davide-bio': 'Founder of Blood Orange Tattoo Studio, Davide is a skilled artist with many years of experience. He began his tattoo journey in 2015 and has continually evolved since, exploring new techniques and expanding his artistic vision. Davide\'s tattoos are defined by clean lines and soft shading, resulting in pieces that feel both modern and timeless. Beyond technical mastery, he is known for his collaborative mindset, believing that every tattoo should be a shared process between artist and client. This philosophy ensures that each piece is not only visually striking but also deeply personal and meaningful.',
        'davide-sp1-title': 'Illustrative Surrealism',
        'davide-sp1-text': 'Creating dreamlike, otherworldly compositions that blend reality with imagination through detailed illustration work.',
        'davide-sp2-title': 'Custom Design',
        'davide-sp2-text': 'Every piece is uniquely crafted in collaboration with clients, ensuring truly one-of-a-kind artwork.',
        'davide-sp3-title': 'Engraving Techniques',
        'davide-sp3-text': 'With a deep appreciation for history and art collections, Davide enjoys working in engraving and etching styles, where his precise linework elevates classical subjects.',
        'portfolio-label': 'Portfolio',
        // Jūratė profile
        'jurate-specialty-tag': 'Anime, Geeky, Spooky',
        'about-jurate': 'About Jūratė',
        'jurate-bio': 'Jūratė brings a calm, geeky energy to Blood Orange Tattoo with her distinctive approach to tattooing. Originally from Lithuania, her internship led her to Maastricht, where she fell in love with the city and decided to stay. Her style is incredibly versatile and adaptive, blending fine-line work with bold illustrative pieces. Jūratė has developed a particular expertise in anime and pop culture-inspired tattoos, bringing your loved characters to life. What sets Jūratė apart is her meticulous attention to detail and her ability to capture the essence of her clients\' visions. She approaches each project with genuine enthusiasm, treating every tattoo as an opportunity to create something unique and meaningful.',
        'jurate-sp1-title': 'Anime & Video Games',
        'jurate-sp1-text': 'Bringing your favorite characters and iconic scenes to life with vibrant, detailed tattoos inspired by anime and gaming culture.',
        'jurate-sp2-title': 'Fineline Work',
        'jurate-sp2-text': 'Delicate, precise linework, perfect for minimalistic designs, botanical illustrations and elegant compositions.',
        'jurate-sp3-title': 'Dark & Spooky',
        'jurate-sp3-text': 'Bold blackwork and moody designs perfect for gothic, horror, and atmospheric tattoos.',
        // Simone profile
        'simone-specialty-tag': 'Naive, illustrative and doodle tattoos',
        'about-simone': 'About Simone',
        'simone-bio': 'Simone, professionally known as Spinmanguru, brings a playful, experimental edge to Blood Orange Tattoo. With a background in graphic design, she has a refined sense for translating complex ideas into simple, tangible imagery. Working across photography, illustration, graphic design, and editing, Simone has grown into a true creative all-rounder. This diverse experience shaped her unique approach to tattooing: intuitive, curious, and always open to exploration. She is currently mastering the art of tattooing, by apprenticing. Simone\'s style lives in the world of naive, doodle and illustrative tattooing, a blend of spontaneity and intention. She creates her designs intuitively, allowing each piece to form naturally while still capturing the feeling her clients want to express. The result is work that feels personal, honest, and unmistakably her own.',
        'simone-sp1-title': 'Conceptual Art',
        'simone-sp1-text': 'Simone has a strong ability to transform complex ideas into meaningful yet tangible pieces/designs.',
        'simone-sp2-title': 'Distinctive work',
        'simone-sp2-text': 'Having a distinctive style, she works intuitively creating naive and illustrative art.',
        'simone-sp3-title': 'Naive/daily-life inspired',
        'simone-sp3-text': 'Bringing character to every piece, with her spontaneous approach.',
        // Gallery
        'gallery-title': 'Our Portfolio',
        'gallery-subtitle': 'Browse through our work',
        // Shop
        'shop-coming-soon': 'Coming Soon',
        // Contact
        'contact-title': 'Book Your Tattoo',
        'contact-subtitle': 'Clear communication helps us create exactly what you envision. Please provide as many details as you can so we can assist you properly.',
        'form-success': 'Thank you, we will get back to you as soon as possible',
        'label-name': 'Your Name *',
        'label-email': 'Your Email *',
        'label-phone': 'Phone Number *',
        'label-idea': 'Your Tattoo Idea *',
        'label-placement': 'Placement (Optional)',
        'label-size': 'Size in cm (Optional)',
        'label-budget': 'Budget (Optional, from €80)',
        'label-ref1': 'Reference Picture 1 (Optional)',
        'label-ref2': 'Reference Picture 2 (Optional)',
        'form-submit': 'Submit Booking Request',
        'placeholder-idea': 'Describe your tattoo idea in detail...',
        'placeholder-placement': 'e.g., Forearm, Upper arm, Back...',
        'placeholder-size': 'e.g., 10x15 cm',
        // Get In Touch
        'getin-title': 'Get In Touch',
        'getin-subtitle': 'Follow us for daily updates',
        'loc-title': 'Location',
        'followus-title': 'Follow us for daily updates and behind the scenes:',
        'walkins-title': 'Walk-Ins',
        'walkins-text': 'We welcome walk-ins everyday - Just come in and let\'s work on your idea together',
        // Thank You
        'thankyou-title': 'Thank You!',
        'thankyou-message': 'We will get back to you as soon as possible',
        'return-home': 'Return to Home',
        // Footer
        'footer-tagline1': 'Open mind, open space',
        'footer-tagline2': 'Tattooing as a shared experience',
        'footer-loc': 'Location',
        'footer-netherlands': 'Netherlands',
        'footer-links-title': 'Quick Links',
        'footer-follow': 'Follow us',
        'footer-copy': '© 2025 Blood Orange Tattoo. All rights reserved.',
    },
    nl: {
        // Nav
        'nav-home': 'Home',
        'nav-artists': 'Artiesten',
        'nav-gallery': 'Galerij',
        'nav-contact': 'Contact',
        'nav-shop': 'Shop',
        // Hero
        'hero-subtitle': 'Open geest, open ruimte',
        'hero-description': 'Tatoeëren als gedeelde ervaring',
        'cta-book': 'Boek Je Sessie',
        // About
        'about-title': 'Welkom in Ons Studio',
        'about-subtitle': 'Als we Blood Orange Tattoo in één woord zouden omschrijven, zou het comfort zijn. Ons doel is een ervaring te bieden waarbij je je welkom, gehoord en op je gemak voelt. Daarom komen zo veel van onze klanten graag terug naar onze veilige en rustgevende ruimte.',
        'card1-title': 'Moderne visie',
        'card1-text': 'Onze stijl is gebaseerd op strakke lijnen, uitgebalanceerde compositie en ontwerpen die goed verouderen.',
        'card2-title': 'Getalenteerde Artiesten',
        'card2-text': 'We combineren passie voor het vak met technische zorg om tatoeages te creëren die persoonlijk, expressief en tijdloos aanvoelen.',
        'card3-title': 'Toplocatie',
        'card3-text': 'Gevestigd aan Brusselsestraat 33 6211 PB, in het hart van Maastricht, Nederland.',
        // Recent Work
        'recent-title': 'Recent Werk',
        'recent-subtitle': 'Ontdek onze nieuwste tatoeage creaties',
        'gallery-overlay': 'Recent Werk',
        'view-gallery': 'Bekijk Volledige Galerij',
        // Reviews
        'reviews-title': 'Wat Onze Klanten Zeggen',
        'reviews-count': 'Gebaseerd op Google reviews',
        'google-reviews-btn': 'Lees Alle Reviews op Google',
        // Artists page
        'artists-title': 'Ontmoet Onze Artiesten',
        'artists-subtitle': 'Ons team bestaat uit toegewijde tatoeage artiesten die oprecht geven om kwaliteitswerk. Met hun expertise, creativiteit en unieke artistieke aanpak helpen ze jouw ideeën te verwezenlijken in de tatoeage waarvan je altijd gedroomd hebt.',
        'davide-role': 'Eigenaar & tatoeage artiest',
        'jurate-role': 'Tatoeage Artiest',
        'simone-role': 'Tatoeage Artiest',
        'davide-card-desc': 'Oprichter van Blood Orange Tattoo Studio, gespecialiseerd in strakke illustratief surrealisme en gravure-geïnspireerde tatoeage technieken.',
        'jurate-card-desc': 'Bedreven in verschillende stijlen met een liefde voor anime-geïnspireerde ontwerpen en geek-thema tatoeages.',
        'simone-card-desc': 'Een creatieve ziel met een focus op naïeve en dagelijks leven-geïnspireerde thema\'s.',
        'view-profile': 'Bekijk Profiel',
        // Davide profile
        'davide-specialty-tag': 'Illustratief, Surrealisme & Moderne Tatoeages',
        'about-davide': 'Over Davide',
        'davide-bio': 'Oprichter van Blood Orange Tattoo Studio, is Davide een bekwame artiest met vele jaren ervaring. Hij begon zijn tatoeage-reis in 2015 en heeft zich sindsdien voortdurend ontwikkeld, waarbij hij nieuwe technieken verkende en zijn artistieke visie uitbreidde. Davide\'s tatoeages worden gekenmerkt door strakke lijnen en zachte arcering, wat resulteert in stukken die zowel modern als tijdloos aanvoelen. Naast technische beheersing staat hij bekend om zijn collaboratieve instelling, met de overtuiging dat elke tatoeage een gedeeld proces moet zijn tussen artiest en klant. Deze filosofie zorgt ervoor dat elk stuk niet alleen visueel aantrekkelijk is, maar ook diep persoonlijk en betekenisvol.',
        'davide-sp1-title': 'Illustratief Surrealisme',
        'davide-sp1-text': 'Het creëren van droomachtige, bovenaardse composities die realiteit met verbeelding vermengen door gedetailleerd illustratiewerk.',
        'davide-sp2-title': 'Maatwerk Ontwerp',
        'davide-sp2-text': 'Elk stuk wordt uniek gemaakt in samenwerking met klanten, wat zorgt voor echt uniek kunstwerk.',
        'davide-sp3-title': 'Gravure Technieken',
        'davide-sp3-text': 'Met een diepe waardering voor geschiedenis en kunstcollecties werkt Davide graag in gravure- en etsingstijlen, waarbij zijn precieze lijnwerk klassieke onderwerpen verheft.',
        'portfolio-label': 'Portfolio',
        // Jūratė profile
        'jurate-specialty-tag': 'Anime, Geeky, Spooky',
        'about-jurate': 'Over Jūratė',
        'jurate-bio': 'Jūratė brengt een rustige, geekachtige energie mee naar Blood Orange Tattoo met haar onderscheidende benadering van tatoeëren. Oorspronkelijk uit Litouwen leidde haar stage haar naar Maastricht, waar ze verliefd werd op de stad en besloot te blijven. Haar stijl is ongelooflijk veelzijdig en adaptief, waarbij ze fijn lijnwerk combineert met opvallende illustratieve stukken. Jūratė heeft een bijzondere expertise ontwikkeld in anime en popcultuur-geïnspireerde tatoeages, waarbij ze jouw favoriete personages tot leven brengt. Wat Jūratė onderscheidt, is haar nauwgezette aandacht voor detail en haar vermogen om de essentie van de visies van haar klanten vast te leggen. Ze benadert elk project met oprechte enthousiasme en behandelt elke tatoeage als een kans om iets unieks en betekenisvols te creëren.',
        'jurate-sp1-title': 'Anime & Videospellen',
        'jurate-sp1-text': 'Jouw favoriete personages en iconische scènes tot leven brengen met levendige, gedetailleerde tatoeages geïnspireerd op anime en gamingcultuur.',
        'jurate-sp2-title': 'Fineline Werk',
        'jurate-sp2-text': 'Delicaat, precies lijnwerk, perfect voor minimalistische ontwerpen, botanische illustraties en elegante composities.',
        'jurate-sp3-title': 'Donker & Spooky',
        'jurate-sp3-text': 'Opvallend blackwork en stemmige ontwerpen perfect voor gotische, horror en atmosferische tatoeages.',
        // Simone profile
        'simone-specialty-tag': 'Naïef, illustratief en doodle tatoeages',
        'about-simone': 'Over Simone',
        'simone-bio': 'Simone, professioneel bekend als Spinmanguru, brengt een speelse, experimentele rand naar Blood Orange Tattoo. Met een achtergrond in grafisch ontwerp heeft ze een verfijnd gevoel voor het vertalen van complexe ideeën naar eenvoudige, tastbare beelden. Werkend op het gebied van fotografie, illustratie, grafisch ontwerp en editing, is Simone uitgegroeid tot een echte creatieve all-rounder. Deze gevarieerde ervaring heeft haar unieke benadering van tatoeëren gevormd: intuïtief, nieuwsgierig en altijd open voor exploratie. Ze beheerst momenteel de kunst van het tatoeëren, als leerling. Simone\'s stijl leeft in de wereld van naïef, doodle en illustratief tatoeëren, een mix van spontaniteit en intentie. Ze creëert haar ontwerpen intuïtief, waardoor elk stuk op een natuurlijke manier vorm krijgt terwijl het toch het gevoel vastlegt dat haar klanten willen uitdrukken. Het resultaat is werk dat persoonlijk, eerlijk en onmiskenbaar haar eigen is.',
        'simone-sp1-title': 'Conceptuele Kunst',
        'simone-sp1-text': 'Simone heeft een sterk vermogen om complexe ideeën te vertalen naar betekenisvolle maar tastbare stukken en ontwerpen.',
        'simone-sp2-title': 'Onderscheidend werk',
        'simone-sp2-text': 'Met een onderscheidende stijl werkt ze intuïtief en creëert ze naïeve en illustratieve kunst.',
        'simone-sp3-title': 'Naïef / dagelijks leven geïnspireerd',
        'simone-sp3-text': 'Karakter brengen in elk stuk, met haar spontane aanpak.',
        // Gallery
        'gallery-title': 'Ons Portfolio',
        'gallery-subtitle': 'Blader door ons werk',
        // Shop
        'shop-coming-soon': 'Binnenkort Beschikbaar',
        // Contact
        'contact-title': 'Boek Je Tatoeage',
        'contact-subtitle': 'Duidelijke communicatie helpt ons precies te maken wat jij voor ogen hebt. Geef zo veel mogelijk details zodat we je goed kunnen helpen.',
        'form-success': 'Dank je wel, we nemen zo snel mogelijk contact met je op',
        'label-name': 'Jouw Naam *',
        'label-email': 'Jouw E-mail *',
        'label-phone': 'Telefoonnummer *',
        'label-idea': 'Jouw Tatoeage Idee *',
        'label-placement': 'Plaatsing (Optioneel)',
        'label-size': 'Grootte in cm (Optioneel)',
        'label-budget': 'Budget (Optioneel, vanaf €80)',
        'label-ref1': 'Referentiefoto 1 (Optioneel)',
        'label-ref2': 'Referentiefoto 2 (Optioneel)',
        'form-submit': 'Boekingsverzoek Indienen',
        'placeholder-idea': 'Beschrijf jouw tatoeage idee in detail...',
        'placeholder-placement': 'bijv., Onderarm, Bovenarm, Rug...',
        'placeholder-size': 'bijv., 10x15 cm',
        // Get In Touch
        'getin-title': 'Neem Contact Op',
        'getin-subtitle': 'Volg ons voor dagelijkse updates',
        'loc-title': 'Locatie',
        'followus-title': 'Volg ons voor dagelijkse updates en achter de schermen:',
        'walkins-title': 'Walk-Ins',
        'walkins-text': 'We verwelkomen walk-ins elke dag – Kom gewoon binnen en laten we samen aan jouw idee werken',
        // Thank You
        'thankyou-title': 'Dank Je Wel!',
        'thankyou-message': 'We nemen zo snel mogelijk contact met je op',
        'return-home': 'Terug naar Home',
        // Footer
        'footer-tagline1': 'Open geest, open ruimte',
        'footer-tagline2': 'Tatoeëren als gedeelde ervaring',
        'footer-loc': 'Locatie',
        'footer-netherlands': 'Nederland',
        'footer-links-title': 'Snelle Links',
        'footer-follow': 'Volg Ons',
        'footer-copy': '© 2025 Blood Orange Tattoo. Alle rechten voorbehouden.',
    }
};

function setLanguage(lang) {
    currentLanguage = lang;

    // Update all data-i18n text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    // Update all data-i18n-placeholder elements
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update lang toggle labels to show opposite language
    document.querySelectorAll('.lang-label').forEach(label => {
        label.textContent = lang === 'en' ? 'NL' : 'EN';
    });

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Save preference
    localStorage.setItem('language', lang);
}

function toggleLanguage() {
    setLanguage(currentLanguage === 'en' ? 'nl' : 'en');
}

// ─── End Language System ──────────────────────────────────────────────────────

// Imgur Album ID
const IMGUR_ALBUM_ID = '51GDiVz';

// Google Sheets Published URL (we'll convert it to JSON format)
const GOOGLE_SHEETS_ID = '17dO5hlZVaJddYUG5PFyIFvMIrOwIqEeRnKgZ3zoOfmY';
const GOOGLE_SHEETS_GID = '0'; // First sheet, change if using different sheet

// Gallery Google Sheets
const GALLERY_SHEETS_ID = '1tD8ZFsCvLIuwaQMnwmqm3JfaoG1jslee2CdOWVbmsuQ';
const GALLERY_SHEETS_GID = '0';


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
            
            // Check if image is external (needs crossorigin)
            const isExternalImage = photo.startsWith('http') || photo.includes('drive.google.com');
            const crossoriginAttr = isExternalImage ? 'crossorigin="anonymous"' : '';

            productCard.innerHTML = `
                <div style="position: relative; overflow: hidden; aspect-ratio: 1 / 1; background: var(--dark); margin-bottom: 1rem; border-radius: 8px;">
                    <img src="${photo}"
                         alt="${name}"
                         ${crossoriginAttr}
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
        // ALL portfolio images from portfolio folder
        const portfolioImages = [
            // Davide Licini - 17 images
            { link: 'portfolio/davide/1.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/2.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/3.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/4.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/IMG_6332 2-2.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/IMG_8872 2-3.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK00068.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK03872-6.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK04636.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK05057-3.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK05961 3.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK07134 2-2.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK07585.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK07780 2.jpeg', artist: 'Davide Licini' },
            { link: 'portfolio/davide/INK08033-6.jpeg', artist: 'Davide Licini' },
            // Jūratė Nemiga - 8 images
            { link: 'portfolio/jurate/1j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/2j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/3j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/4j.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/IMG_5329.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/IMG_5372.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/IMG_5467.jpeg', artist: 'Jūratė Nemiga' },
            { link: 'portfolio/jurate/INK04438-3.jpeg', artist: 'Jūratė Nemiga' },
            // Simone Smids - 4 images
            { link: 'portfolio/simone/IMG_4213.jpeg', artist: 'Simone Smids' },
            { link: 'portfolio/simone/IMG_4491 2-2.jpeg', artist: 'Simone Smids' },
            { link: 'portfolio/simone/IMG_4675.jpeg', artist: 'Simone Smids' },
            { link: 'portfolio/simone/IMG_5006.jpeg', artist: 'Simone Smids' }
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

        // Normalize artist names to handle variations (e.g., "Jurate" vs "Jūratė")
        function normalizeArtistName(name) {
            const normalized = name.toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove diacritics
                .trim();

            // Map normalized names back to canonical display names
            if (normalized.includes('jurate') || normalized.includes('nemiga')) {
                return 'Jūratė Nemiga';
            }
            if (normalized.includes('davide') || normalized.includes('licini')) {
                return 'Davide Licini';
            }
            if (normalized.includes('simone') || normalized.includes('smids')) {
                return 'Simone Smids';
            }
            // Default: return original name with proper capitalization
            return name.split(' ').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ).join(' ');
        }

        // Group items by artist with name normalization
        const artistGroups = {};
        galleryItems.forEach(item => {
            const normalizedName = normalizeArtistName(item.artist);
            if (!artistGroups[normalizedName]) {
                artistGroups[normalizedName] = [];
            }
            artistGroups[normalizedName].push(item);
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

            // Grid for artist's tattoos
            const artistGrid = document.createElement('div');
            artistGrid.className = 'drive-gallery-grid';

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
                // Only set crossOrigin for external images (Google Drive, imgur, etc.)
                if (!item.link.startsWith('portfolio/')) {
                    img.crossOrigin = 'anonymous';
                }
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

// Load saved theme + language preferences
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('darkMode');
    // Default to dark mode unless explicitly saved as 'false'
    if (savedTheme === 'false') {
        document.body.classList.remove('dark-mode');
    } else {
        // Apply dark mode by default
        document.body.classList.add('dark-mode');
    }

    // Apply saved language (default to 'en')
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validate file sizes (10MB limit for Formspree)
            const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes
            const fileInputs = this.querySelectorAll('input[type="file"]');

            for (let fileInput of fileInputs) {
                if (fileInput.files.length > 0) {
                    const file = fileInput.files[0];
                    if (file.size > MAX_FILE_SIZE) {
                        alert(`File "${file.name}" is too large. Maximum file size is 10MB. Please resize or compress your image.`);
                        return;
                    }
                }
            }

            // Send form data
            const formData = new FormData(this);

            // Submit to Formspree - don't set headers manually when sending files
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
                    // Reset form
                    this.reset();
                } else {
                    return response.json().then(data => {
                        console.error('Form submission error:', data);
                        alert('There was a problem submitting your form: ' + (data.error || 'Please try again.'));
                    });
                }
            }).catch(error => {
                console.error('Form submission error:', error);
                alert('There was a problem submitting your form. Please try again.');
            });
        });
    }
});


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
