document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'en';
    const path = window.location.pathname;

    // Determine page type
    let page = 'terms';
    if (path.includes('privacy')) page = 'privacy';
    else if (path.includes('accessibility')) page = 'accessibility';

    // RTL Languages
    const rtlLangs = ['ar', 'he', 'ur', 'fa', 'yi', 'dv', 'ps', 'ku', 'sd', 'ug'];
    const isRtl = rtlLangs.includes(lang);

    // Set HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    if (isRtl) {
        document.documentElement.classList.add('rtl');
    } else {
        document.documentElement.classList.remove('rtl');
    }

    // Find content container
    const contentDiv = document.querySelector('.max-w-4xl');
    if (!contentDiv) return;

    // Create text container
    const textContainer = document.createElement('div');
    textContainer.className = 'mt-8 whitespace-pre-wrap leading-relaxed text-slate-700';
    textContainer.style.fontFamily = 'inherit';
    contentDiv.appendChild(textContainer);

    // Fetch content
    const filename = `${page}/${lang}.txt`;

    fetch(filename)
        .then(response => {
            if (!response.ok) {
                // Fallback to English if not found and not already English
                if (lang !== 'en') {
                    // Try fetching English version
                    return fetch(`${page}/en.txt`);
                }
                throw new Error('File not found');
            }
            return response;
        })
        .then(response => {
            if (!response.ok) throw new Error('Fallback failed');
            return response.text();
        })
        .then(text => {
            // Check for custom link syntax [[text]]
            const parts = text.split(/\[\[(.*?)\]\]/);
            textContainer.innerHTML = ''; // Clear previous content

            parts.forEach((part, index) => {
                if (index % 2 === 1) {
                    // This is the link text inside [[...]]
                    const link = document.createElement('a');
                    link.href = `?lang=he`;
                    link.className = 'text-brand-primary hover:underline cursor-pointer font-medium';
                    link.textContent = part;
                    textContainer.appendChild(link);
                } else {
                    // This is regular text
                    textContainer.appendChild(document.createTextNode(part));
                }
            });
        })
        .catch(err => {
            console.error('Failed to load text:', err);
            textContainer.textContent = 'Failed to load content. Please try again later.';
        });
});
