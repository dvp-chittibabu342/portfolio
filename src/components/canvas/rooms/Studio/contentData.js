/**
 * Studio Content Data
 * 
 * Contains technical project breakdowns and engineering documentation
 * strictly sourced from Dasari Venkata Panakala Chitti Babu's resume.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#2A52BE',
        accentColor: '#1B3B8A',
        icon: '⚡',
        label: 'Hardware & Architecture',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📄',
        label: 'System Engineering',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#107C41',
        accentColor: '#0C5B30',
        icon: '🔧',
        label: 'Technical Focus',
        shape: 'phone', // Vertical screen
    },
};

// Content data derived strictly from resume
const RAW_CONTENT_DATA = [
    {
        id: 'studio-001',
        platform: 'youtube',
        title: 'AI-Powered Road Hazard Intelligence: IMU + CV + GPS Fusion',
        description: 'Neuro-symbolic road hazard detection system fusing IMU vibration analysis, CNN-based visual classification (YOLO/MobileNet), and GPS-based multi-vehicle clustering for eMudhra Hackathon 2026.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#',
        date: 'eMudhra Hackathon 2026',
    },
    {
        id: 'studio-002',
        platform: 'blog',
        title: 'Rule-Based Confidence-Cascade Escalation Model',
        description: 'Built a rule-based confidence-cascade escalation model (log -> warn -> alert) to convert multi-vehicle detections into driver warnings and authority alerts.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: 'eMudhra Hackathon 2026',
    },
    {
        id: 'studio-003',
        platform: 'tiktok',
        title: 'Road Hazard Hardware Architecture & Feasibility',
        description: 'Produced a cost-estimated hardware architecture (ESP32, MPU6050, NEO-6M GPS, ESP32-CAM) for a 3-vehicle demo. Conducted literature survey across IEEE Xplore, arXiv, and MDPI to validate technical feasibility and novelty.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: 'eMudhra Hackathon 2026',
    },
    {
        id: 'studio-004',
        platform: 'youtube',
        title: 'ESP32-Based Health Monitoring System',
        description: 'Designed and implemented a real-time health monitoring system using ESP32, interfacing multiple physiological sensors for live vital parameter acquisition.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: '#',
        date: 'Sep 2025 – Oct 2025',
    },
    {
        id: 'studio-005',
        platform: 'blog',
        title: 'Wireless Data Transmission & System Integration',
        description: 'Enabled wireless data transmission for remote, real-time monitoring applications. Performed end-to-end hardware–software integration, testing, and debugging to ensure stable system performance.',
        thumbnail: null,
        url: '#',
        date: 'Sep 2025 – Oct 2025',
    },
    {
        id: 'studio-006',
        platform: 'tiktok',
        title: 'MediaPipe Hand Landmark Extraction Pipeline',
        description: 'Developed a computer vision pipeline using MediaPipe for hand landmark extraction from video input in Python.',
        thumbnail: null,
        url: '#',
        date: 'Nov 2025 – Dec 2025',
    },
    {
        id: 'studio-007',
        platform: 'youtube',
        title: 'CNN Gesture & Word-Sign Classification Model',
        description: 'Built a CNN-based model for gesture and word-sign classification from extracted hand landmarks.',
        thumbnail: null,
        url: '#',
        date: 'Nov 2025 – Dec 2025',
    },
    {
        id: 'studio-008',
        platform: 'blog',
        title: 'Freelance Front-End Developer — APSLOCK',
        description: 'Collaborated with a team to build the agency client-facing website using Next.js, TypeScript, and Tailwind CSS. Implemented custom animations and interactive UI components using GSAP and Framer Motion.',
        thumbnail: null,
        url: 'https://www.apslock.com/',
        date: 'Mar 2026 – Apr 2026',
    },
    {
        id: 'studio-009',
        platform: 'tiktok',
        title: 'Director of Club Services — Rotaract Club of Bangalore Warriors',
        description: 'Co-organized technical and social initiatives; strengthened teamwork, communication, and leadership skills through cross-functional collaboration.',
        thumbnail: null,
        url: '#',
        date: 'Leadership',
    },
    {
        id: 'studio-010',
        platform: 'youtube',
        title: 'B.Tech in Electronics & Communication Engineering',
        description: 'M. S. Ramaiah University of Applied Sciences, Bangalore, India. Expected Graduation: 2027 | Current Status: 3rd Year. Relevant Coursework: VLSI Design, Embedded Systems, Digital Electronics, C Programming, Python Programming.',
        thumbnail: null,
        url: '#',
        date: 'Education: 2027',
    },
    {
        id: 'studio-011',
        platform: 'blog',
        title: 'Embedded Systems & Hardware Engineering Core Skills',
        description: 'ESP32, Microcontrollers, GPIO, UART, I2C, SPI, Sensor Interfacing, Real-Time Data Acquisition, Hardware Debugging.',
        thumbnail: null,
        url: '#',
        date: 'Technical Skills',
    },
    {
        id: 'studio-012',
        platform: 'tiktok',
        title: 'FPGA, VLSI & Software Technologies',
        description: 'Verilog HDL, Digital Logic Design, FPGA Fundamentals, Intel Quartus Prime Lite, Python, C, Embedded C, OpenCV, MATLAB, Git, GitHub, VS Code, Next.js, Tailwind CSS.',
        thumbnail: null,
        url: '#',
        date: 'Technical Skills',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return CONTENT_DATA[0];
};
