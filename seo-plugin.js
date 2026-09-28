/**
 * seo-plugin.js — Build-time SEO & Structured Data Generator
 *
 * Generates dynamic JSON-LD structured data, metadata tags, and llms.txt
 * strictly sourced from Dasari Venkata Panakala Chitti Babu's resume.
 */

const DASARI_GLOBAL = {
    siteTitle: 'Dasari Venkata Panakala Chitti Babu | Embedded Systems & Hardware Engineer',
    siteDescription: 'Interactive 3D portfolio of Dasari Venkata Panakala Chitti Babu. Embedded Systems Engineer specializing in ESP32, FPGA fundamentals, Verilog HDL, VLSI, and AI-driven hardware.',
    aboutMe: 'Electronics and Communication Engineering undergraduate at M. S. Ramaiah University of Applied Sciences, Bangalore (Graduation: 2027). Hands-on experience building embedded systems on ESP32, FPGA fundamentals, Verilog HDL, hardware-software co-design, and computer vision pipelines.',
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
        title: 'AI-Powered Road Hazard Intelligence: IMU + CV + GPS Fusion',
        platform: 'architecture',
        description: 'Neuro-symbolic road hazard detection system fusing IMU vibration analysis, CNN-based visual classification (YOLO/MobileNet), and GPS-based multi-vehicle clustering for eMudhra Hackathon 2026.',
        date: '2026'
    },
    {
        title: 'Rule-Based Confidence-Cascade Escalation Model',
        platform: 'system',
        description: 'Built a rule-based confidence-cascade escalation model (log -> warn -> alert) to convert multi-vehicle detections into driver warnings and authority alerts.',
        date: '2026'
    },
    {
        title: 'Road Hazard Hardware Architecture & Feasibility',
        platform: 'hardware',
        description: 'Produced a cost-estimated hardware architecture (ESP32, MPU6050, NEO-6M GPS, ESP32-CAM) for a 3-vehicle demo. Conducted literature survey across IEEE Xplore, arXiv, and MDPI.',
        date: '2026'
    },
    {
        title: 'ESP32-Based Health Monitoring System',
        platform: 'system',
        description: 'Designed and implemented a real-time health monitoring system using ESP32, interfacing multiple physiological sensors for live vital parameter acquisition.',
        date: 'Sep 2025 – Oct 2025'
    },
    {
        title: 'MediaPipe Hand Landmark Extraction Pipeline',
        platform: 'software',
        description: 'Developed a computer vision pipeline using MediaPipe for hand landmark extraction from video input in Python, with CNN gesture classification.',
        date: 'Nov 2025 – Dec 2025'
    },
    {
        title: 'Agency Client Website Engineering — APSLOCK',
        platform: 'web',
        description: 'Collaborated with a team to build the agency client-facing website using Next.js, TypeScript, and Tailwind CSS with custom GSAP and Framer Motion animations.',
        date: 'Mar 2026 – Apr 2026',
        url: 'https://www.apslock.com/'
    }
];

const DASARI_ACTIVITIES = [
    {
        title: 'eMudhra Hackathon 2026 — Road Hazard Intelligence',
        category: 'project',
        date: '2026',
        description: 'Designed neuro-symbolic road hazard detection system fusing IMU vibration, CNN vision, and multi-vehicle clustering.'
    },
    {
        title: 'Director of Club Services — Rotaract Club of Bangalore Warriors',
        category: 'leadership',
        date: 'Extracurricular',
        description: 'Co-organized technical and social initiatives; strengthened teamwork, communication, and leadership through cross-functional collaboration.'
    },
    {
        title: 'Relevant Engineering Coursework — M. S. Ramaiah University of Applied Sciences',
        category: 'education',
        date: 'Expected Graduation: 2027',
        description: 'VLSI Design, Embedded Systems, Digital Electronics, C Programming, Python Programming.'
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
        answer: 'You can contact him via email at pavandasari342@gmail.com, by phone at +91 7989127818, or connect on LinkedIn (https://www.linkedin.com/in/dvpchittibabu342/) and GitHub (https://github.com/dvp-chittibabu342).'
    }
];

function buildJsonLd(globalInfo, projects, studio, activities, faqList) {
    const graph = [];

    const person = {
        '@type': 'Person',
        '@id': '#person',
        name: 'Dasari Venkata Panakala Chitti Babu',
        jobTitle: 'Embedded Systems Engineer | FPGA, VLSI & AI-Driven Hardware',
        description: globalInfo.aboutMe,
        knowsAbout: [
            'Embedded Systems', 'ESP32', 'FPGA', 'Verilog HDL', 'VLSI',
            'Python', 'C', 'Embedded C', 'OpenCV', 'MediaPipe', 'CNN',
            'MATLAB', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'GSAP'
        ],
        sameAs: [
            'https://github.com/dvp-chittibabu342',
            'https://www.linkedin.com/in/dvpchittibabu342/',
            'https://www.apslock.com/'
        ]
    };
    graph.push(person);

    const website = {
        '@type': 'WebSite',
        '@id': '#website',
        name: globalInfo.siteTitle,
        description: globalInfo.siteDescription,
        publisher: { '@id': '#person' }
    };
    graph.push(website);

    const profilePage = {
        '@type': 'ProfilePage',
        '@id': '#profilepage',
        mainEntity: { '@id': '#person' },
        about: { '@id': '#person' }
    };
    graph.push(profilePage);

    if (faqList && faqList.length > 0) {
        const faqPage = {
            '@type': 'FAQPage',
            '@id': '#faq',
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
            '@id': '#projectslist',
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
                    creator: { '@id': '#person' },
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

function buildLlmsTxt(globalInfo, projects, studio, activities, faqList) {
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

    if (activities && activities.length > 0) {
        content += `## Leadership & Extracurricular Activities\n`;
        activities.forEach(a => {
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
            cachedLlmsContent = buildLlmsTxt(DASARI_GLOBAL, DASARI_PROJECTS, DASARI_STUDIO, DASARI_ACTIVITIES, DASARI_FAQS);
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
                const activities = DASARI_ACTIVITIES;
                const faqList = DASARI_FAQS;

                const siteTitle = globalInfo.siteTitle;
                const siteDescription = globalInfo.siteDescription;

                cachedLlmsContent = buildLlmsTxt(globalInfo, projects, studio, activities, faqList);

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
                seoHtml += `    <a href="https://www.linkedin.com/in/dvpchittibabu342/" target="_blank" rel="noopener noreferrer">LinkedIn: dvpchittibabu342</a>\n`;
                seoHtml += `    <a href="https://github.com/dvp-chittibabu342" target="_blank" rel="noopener noreferrer">GitHub: dvp-chittibabu342</a>\n`;
                seoHtml += `  </section>\n`;

                if (projects && projects.length > 0) {
                    seoHtml += `  <section id="projects">\n    <h2>Projects</h2>\n    <ul>\n`;
                    projects.forEach(p => {
                        seoHtml += `      <li>\n        <h3>${p.seoTitle || p.title}</h3>\n        <p>${p.seoDescription || p.description || ''}</p>\n        ${p.url ? `<a href="${p.url}">Visit ${p.seoTitle || p.title}</a>\n` : ''}      </li>\n`;
                    });
                    seoHtml += `    </ul>\n  </section>\n`;
                }

                if (studio && studio.length > 0) {
                    seoHtml += `  <section id="studio">\n    <h2>Engineering Documentation</h2>\n    <ul>\n`;
                    studio.forEach(s => {
                        seoHtml += `      <li>\n        <h3>${s.title}</h3>\n        <p>${s.description}</p>\n      </li>\n`;
                    });
                    seoHtml += `    </ul>\n  </section>\n`;
                }

                if (activities && activities.length > 0) {
                    seoHtml += `  <section id="activities">\n    <h2>Leadership & Activities</h2>\n    <ul>\n`;
                    activities.forEach(a => {
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

                const jsonLdSchemas = buildJsonLd(globalInfo, projects, studio, activities, faqList);
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
