/**
 * seo-plugin.js — Build-time SEO & Structured Data Generator
 *
 * Generates dynamic JSON-LD structured data, metadata tags, and llms.txt
 * for Dasari Venkata Panakala Chitti Babu's portfolio.
 */

const DASARI_GLOBAL = {
    siteTitle: 'Dasari Venkata Panakala Chitti Babu | Embedded Systems & Hardware Engineer',
    siteDescription: 'Interactive 3D portfolio of Dasari Venkata Panakala Chitti Babu. Embedded Systems Engineer specializing in ESP32, FPGA fundamentals, Verilog HDL, VLSI, and AI-driven hardware.',
    aboutMe: 'Electronics and Communication Engineering undergraduate at M. S. Ramaiah University of Applied Sciences, Bangalore (Graduation: 2027). Hands-on experience building embedded systems on ESP32, FPGA fundamentals, Verilog HDL, hardware-software co-design, and computer vision pipelines.',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com',
};

const DASARI_PROJECTS = [
    {
        title: 'AI Road Hazard Intelligence',
        seoTitle: 'AI-Powered Road Hazard Intelligence (eMudhra Hackathon 2026)',
        description: 'Neuro-symbolic road hazard detection system fusing IMU vibration analysis, CNN-based visual classification, and GPS-based multi-vehicle clustering. Features a confidence-cascade escalation model.',
        seoDescription: 'Neuro-symbolic road hazard detection system fusing IMU vibration analysis, CNN visual classification, and GPS-based clustering.',
        url: '',
        techStack: ['ESP32', 'MPU6050', 'NEO-6M GPS', 'ESP32-CAM', 'Python', 'OpenCV', 'CNN']
    },
    {
        title: 'ESP32 Health Monitoring System',
        seoTitle: 'ESP32-Based Health Monitoring System',
        description: 'Real-time health monitoring system using ESP32, interfacing multiple physiological sensors for live vital parameter acquisition and wireless telemetry.',
        seoDescription: 'Real-time health monitoring system using ESP32, interfacing multiple physiological sensors for live vital parameter acquisition.',
        url: '',
        techStack: ['ESP32', 'Embedded C', 'Sensors', 'UART', 'I2C', 'SPI']
    },
    {
        title: 'Hand Sign / Word Sign Detection',
        seoTitle: 'Hand Sign & Word Sign Detection System',
        description: 'Computer vision pipeline using MediaPipe for 21 hand landmark extraction and a CNN-based model for gesture and word-sign classification.',
        seoDescription: 'Computer vision pipeline using MediaPipe for hand landmark extraction and CNN for gesture classification.',
        url: '',
        techStack: ['Python', 'OpenCV', 'MediaPipe', 'CNN']
    },
    {
        title: 'Freelance Front-End Developer — APSLOCK',
        seoTitle: 'Freelance Front-End Developer — APSLOCK',
        description: 'Collaborated with a team to build the agency client-facing website using Next.js, TypeScript, and Tailwind CSS with custom GSAP and Framer Motion animations.',
        seoDescription: 'Agency website development using Next.js, TypeScript, Tailwind CSS, GSAP, and Framer Motion.',
        url: 'https://www.apslock.com/',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'GSAP', 'Framer Motion']
    }
];

const DASARI_STUDIO = [
    {
        title: 'Neuro-Symbolic Sensor Fusion for Road Hazard Intelligence',
        platform: 'article',
        description: 'Architecting an edge multi-sensor pipeline fusing MPU6050 IMU accelerometer data with ESP32-CAM visual classifications for real-time road anomaly detection.',
        readTime: '6 min',
        date: '2026-03-01'
    },
    {
        title: 'Building Real-Time Vital Telemetry with ESP32 & Embedded C',
        platform: 'article',
        description: 'Sensor bus synchronization across I2C and SPI, real-time interrupt handling, and low-latency wireless vital data transmission on dual-core ESP32.',
        readTime: '5 min',
        date: '2025-10-15'
    },
    {
        title: 'Real-Time Hand Landmark Extraction with MediaPipe & CNNs',
        platform: 'article',
        description: 'Constructing a lightweight computer vision pipeline extracting 21 3D hand coordinates for real-time sign and gesture classification.',
        readTime: '4 min',
        date: '2025-12-10'
    },
    {
        title: 'Digital Logic Design & Hardware Synthesis with Verilog HDL',
        platform: 'article',
        description: 'From behavioral RTL modeling to FPGA logic synthesis using Intel Quartus Prime Lite: clock domain crossings, finite state machines, and timing closure.',
        readTime: '7 min',
        date: '2026-01-20'
    },
    {
        title: 'Agency Web Engineering: Next.js, TypeScript & GSAP at APSLOCK',
        platform: 'article',
        description: 'Production frontend workflows: bridging responsive Tailwind design systems with high-performance 60fps GSAP scroll animations.',
        readTime: '5 min',
        date: '2026-04-01'
    }
];

const DASARI_AWARDS = [
    {
        title: 'eMudhra Hackathon 2026 — Road Hazard Intelligence',
        category: 'sotd',
        date: '2026',
        description: 'Designed neuro-symbolic road hazard detection system fusing IMU vibration, CNN vision, and multi-vehicle clustering.'
    },
    {
        title: 'Director of Club Services — Rotaract Club of Bangalore Warriors',
        category: 'sotm',
        date: '2025 - Present',
        description: 'Co-organized technical and social initiatives; strengthened teamwork, communication, and leadership through cross-functional collaboration.'
    },
    {
        title: 'Academic Honors in VLSI, Embedded Systems & Digital Electronics',
        category: 'other',
        date: '2023 - 2027',
        description: 'M. S. Ramaiah University of Applied Sciences, Bangalore. Bachelor of Technology in Electronics & Communication Engineering.'
    }
];

const DASARI_FAQS = [
    {
        question: 'Who is Dasari Venkata Panakala Chitti Babu?',
        answer: 'Dasari Venkata Panakala Chitti Babu is an Electronics and Communication Engineering undergraduate at M. S. Ramaiah University of Applied Sciences, Bangalore (Graduation 2027), specializing in Embedded Systems, ESP32, FPGA fundamentals, Verilog HDL, VLSI, and AI-driven hardware.'
    },
    {
        question: 'What are his primary technical skills?',
        answer: 'His expertise spans Embedded Systems (ESP32, Microcontrollers, GPIO, UART, I2C, SPI, Sensor Interfacing), FPGA & VLSI (Verilog HDL, Digital Logic Design, Intel Quartus Prime Lite), Programming (Python, C, Embedded C), AI/Computer Vision (OpenCV, MediaPipe, CNN), and Modern Web (Next.js, TypeScript, Tailwind CSS, React, GSAP).'
    },
    {
        question: 'How can I contact Dasari?',
        answer: 'You can contact him via email at pavandasari342@gmail.com, by phone at +91 7989127818, or connect on LinkedIn and GitHub.'
    }
];

function formatIsoDate(dateString) {
    if (!dateString) return undefined;
    if (dateString.includes('T')) return dateString;
    return `${dateString}T12:00:00Z`;
}

function buildJsonLd(globalInfo, projects, studio, awards, faqList) {
    const graph = [];

    const person = {
        '@type': 'Person',
        '@id': 'https://portfolio.dasari.dev/#person',
        name: 'Dasari Venkata Panakala Chitti Babu',
        url: 'https://portfolio.dasari.dev',
        jobTitle: 'Embedded Systems Engineer | FPGA, VLSI & AI-Driven Hardware',
        description: globalInfo.aboutMe,
        knowsAbout: [
            'Embedded Systems', 'ESP32', 'FPGA', 'Verilog HDL', 'VLSI',
            'Python', 'C', 'Embedded C', 'OpenCV', 'MediaPipe', 'CNN',
            'MATLAB', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'GSAP'
        ],
        sameAs: [
            'https://www.linkedin.com',
            'https://github.com',
            'https://www.apslock.com/'
        ]
    };
    graph.push(person);

    const website = {
        '@type': 'WebSite',
        '@id': 'https://portfolio.dasari.dev/#website',
        url: 'https://portfolio.dasari.dev',
        name: globalInfo.siteTitle,
        description: globalInfo.siteDescription,
        publisher: { '@id': 'https://portfolio.dasari.dev/#person' }
    };
    graph.push(website);

    const profilePage = {
        '@type': 'ProfilePage',
        '@id': 'https://portfolio.dasari.dev/#profilepage',
        url: 'https://portfolio.dasari.dev',
        mainEntity: { '@id': 'https://portfolio.dasari.dev/#person' },
        about: { '@id': 'https://portfolio.dasari.dev/#person' }
    };
    graph.push(profilePage);

    if (faqList && faqList.length > 0) {
        const faqPage = {
            '@type': 'FAQPage',
            '@id': 'https://portfolio.dasari.dev/#faq',
            mainEntity: faqList.map(item => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer
                }
            }))
        };
        graph.push(faqPage);
    }

    if (projects && projects.length > 0) {
        graph.push({
            '@type': 'ItemList',
            '@id': 'https://portfolio.dasari.dev/#projectslist',
            name: 'Engineering Projects by Dasari Venkata Panakala Chitti Babu',
            description: 'Selected projects in embedded systems, FPGA, computer vision, and web applications.',
            numberOfItems: projects.length,
            itemListElement: projects.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                    '@type': 'CreativeWork',
                    name: p.seoTitle || p.title,
                    description: p.seoDescription || p.description || '',
                    url: p.url || undefined,
                    creator: { '@id': 'https://portfolio.dasari.dev/#person' },
                    keywords: p.techStack ? p.techStack.join(', ') : undefined
                }
            }))
        });
    }

    return {
        '@context': 'https://schema.org',
        '@graph': graph
    };
}

function buildLlmsTxt(globalInfo, projects, studio, awards, faqList) {
    let content = `# ${globalInfo.siteTitle}\n`;
    content += `> ${globalInfo.siteDescription}\n\n`;

    content += `## Biography / About Me\n`;
    content += `${globalInfo.aboutMe}\n\n`;

    content += `## Education\n`;
    content += `- Bachelor of Technology — Electronics & Communication Engineering (Graduation: 2027)\n`;
    content += `- M. S. Ramaiah University of Applied Sciences, Bangalore, India\n`;
    content += `- Relevant Coursework: VLSI Design, Embedded Systems, Digital Electronics, C Programming, Python Programming\n\n`;

    content += `## Core Technologies & Skills\n`;
    content += `- Embedded Systems & Hardware: ESP32, Microcontrollers, GPIO, UART, I2C, SPI, Sensor Interfacing, Real-Time Data Acquisition, Hardware Debugging\n`;
    content += `- FPGA & VLSI: Verilog HDL, Digital Logic Design, FPGA Fundamentals, Intel Quartus Prime Lite\n`;
    content += `- Programming Languages: Python, C, Embedded C\n`;
    content += `- AI / Computer Vision: OpenCV, MediaPipe, CNN, Machine Learning\n`;
    content += `- Tools: MATLAB, Git, GitHub, VS Code, Jupyter Notebook\n`;
    content += `- Web Development: Next.js, TypeScript, Tailwind CSS, React, GSAP, Framer Motion\n\n`;

    if (projects && projects.length > 0) {
        content += `## Selected Portfolio Projects\n`;
        projects.forEach(p => {
            const tech = p.techStack ? ` (Tech: ${p.techStack.join(', ')})` : '';
            content += `- **${p.seoTitle || p.title}**: ${p.seoDescription || p.description || ''}${tech}\n`;
        });
        content += `\n`;
    }

    if (awards && awards.length > 0) {
        content += `## Honors & Extracurricular Activities\n`;
        awards.forEach(a => {
            content += `- **${a.title}** (${a.date}): ${a.description}\n`;
        });
        content += `\n`;
    }

    if (faqList && faqList.length > 0) {
        content += `## Frequently Asked Questions (FAQ)\n`;
        faqList.forEach(item => {
            content += `- **${item.question}**\n`;
            content += `  ${item.answer.replace(/\n/g, '\n  ')}\n`;
        });
    }

    return content;
}

export function generateSeoHtml() {
    let cachedLlmsContent = '';

    function getLlmsContent() {
        if (!cachedLlmsContent) {
            cachedLlmsContent = buildLlmsTxt(DASARI_GLOBAL, DASARI_PROJECTS, DASARI_STUDIO, DASARI_AWARDS, DASARI_FAQS);
        }
        return cachedLlmsContent;
    }

    return {
        name: 'sanity-seo-plugin',

        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                if (req.url === '/llms.txt') {
                    const content = getLlmsContent();
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    res.end(content);
                } else {
                    next();
                }
            });
        },

        async transformIndexHtml(html) {
            try {
                const globalInfo = DASARI_GLOBAL;
                const projects = DASARI_PROJECTS;
                const studio = DASARI_STUDIO;
                const awards = DASARI_AWARDS;
                const faqList = DASARI_FAQS;

                const siteTitle = globalInfo.siteTitle;
                const siteDescription = globalInfo.siteDescription;

                cachedLlmsContent = buildLlmsTxt(globalInfo, projects, studio, awards, faqList);

                let seoHtml = `\n<div id="seo-content" class="sr-only-seo">\n`;
                seoHtml += `  <header>\n`;
                seoHtml += `    <h1>${siteTitle}</h1>\n`;
                seoHtml += `    <p>${siteDescription}</p>\n`;
                seoHtml += `  </header>\n`;

                seoHtml += `  <section id="about">\n`;
                seoHtml += `    <h2>About Me</h2>\n`;
                seoHtml += `    <p>${globalInfo.aboutMe}</p>\n`;
                seoHtml += `    <a href="mailto:pavandasari342@gmail.com">Email: pavandasari342@gmail.com</a>\n`;
                seoHtml += `    <a href="tel:+917989127818">Phone: +91 7989127818</a>\n`;
                seoHtml += `  </section>\n`;

                if (projects && projects.length > 0) {
                    seoHtml += `  <section id="projects">\n    <h2>Projects</h2>\n    <ul>\n`;
                    projects.forEach(p => {
                        seoHtml += `      <li>\n        <h3>${p.seoTitle || p.title}</h3>\n        <p>${p.seoDescription || p.description || ''}</p>\n        ${p.url ? `<a href="${p.url}">Visit ${p.seoTitle || p.title}</a>\n` : ''}      </li>\n`;
                    });
                    seoHtml += `    </ul>\n  </section>\n`;
                }

                if (studio && studio.length > 0) {
                    seoHtml += `  <section id="studio">\n    <h2>Engineering Lab</h2>\n    <ul>\n`;
                    studio.forEach(s => {
                        seoHtml += `      <li>\n        <h3>${s.title}</h3>\n        <p>${s.description}</p>\n      </li>\n`;
                    });
                    seoHtml += `    </ul>\n  </section>\n`;
                }

                if (awards && awards.length > 0) {
                    seoHtml += `  <section id="awards">\n    <h2>Honors & Leadership</h2>\n    <ul>\n`;
                    awards.forEach(a => {
                        seoHtml += `      <li>\n        <h3>${a.title}</h3>\n        <p>${a.date} — ${a.description}</p>\n      </li>\n`;
                    });
                    seoHtml += `    </ul>\n  </section>\n`;
                }

                if (faqList && faqList.length > 0) {
                    seoHtml += `  <section id="faq">\n`;
                    seoHtml += `    <h2>Frequently Asked Questions (FAQ)</h2>\n`;
                    faqList.forEach(item => {
                        seoHtml += `    <article>\n`;
                        seoHtml += `      <h3>${item.question}</h3>\n`;
                        seoHtml += `      <p>${item.answer}</p>\n`;
                        seoHtml += `    </article>\n`;
                    });
                    seoHtml += `  </section>\n`;
                }

                seoHtml += `</div>\n`;

                const jsonLdSchemas = buildJsonLd(globalInfo, projects, studio, awards, faqList);
                const jsonLdScript = `\n  <!-- Dynamic Structured Data (JSON-LD) -->\n  <script type="application/ld+json">\n${JSON.stringify(jsonLdSchemas, null, 2)}\n  </script>\n`;

                let transformedHtml = html.replace(
                    /<title>(.*?)<\/title>/,
                    `<title>${siteTitle}</title>`
                );

                if (transformedHtml.includes('<meta name="description"')) {
                    transformedHtml = transformedHtml.replace(
                        /<meta name="description" content="(.*?)"\s*\/?>/,
                        `<meta name="description" content="${siteDescription}" />`
                    );
                }

                transformedHtml = transformedHtml
                    .replace(
                        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
                        `<meta property="og:title" content="${siteTitle}" />`
                    )
                    .replace(
                        /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
                        `<meta property="og:description" content="${siteDescription}" />`
                    );

                transformedHtml = transformedHtml
                    .replace(
                        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
                        `<meta name="twitter:title" content="${siteTitle}" />`
                    )
                    .replace(
                        /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
                        `<meta name="twitter:description" content="${siteDescription}" />`
                    );

                transformedHtml = transformedHtml.replace('</head>', `${jsonLdScript}</head>`);

                if (transformedHtml.includes('id="seo-content"')) {
                    transformedHtml = transformedHtml.replace(
                        /<div id="seo-content" class="sr-only-seo">[\s\S]*?<\/div>/,
                        seoHtml
                    );
                } else {
                    transformedHtml = transformedHtml.replace('</body>', `${seoHtml}</body>`);
                }

                return transformedHtml;
            } catch (error) {
                console.error('SEO Plugin Error:', error);
                return html;
            }
        },

        async generateBundle() {
            const content = getLlmsContent();
            this.emitFile({
                type: 'asset',
                fileName: 'llms.txt',
                source: content
            });
        }
    };
}
