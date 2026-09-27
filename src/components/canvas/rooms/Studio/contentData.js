/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

// Sample content data - replace with real content later
const RAW_CONTENT_DATA = [
    // ============ Technical Deep Dives (Video / Presentation Demos) ============
    {
        id: 'yt-001',
        platform: 'youtube',
        title: 'Neuro-Symbolic Road Hazard Intelligence: IMU + CV + GPS',
        description: 'Multi-vehicle road hazard detection system fusing IMU vibration telemetry, CNN visual detection (YOLO/MobileNet), and GPS spatial clustering with a confidence-cascade model for eMudhra Hackathon 2026.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-02-15',
        views: '1.2K',
        duration: '15:32',
    },
    {
        id: 'yt-002',
        platform: 'youtube',
        title: 'Real-Time Health Monitoring on ESP32 & Wireless Telemetry',
        description: 'End-to-end hardware-software integration interfacing multiple physiological sensors to an ESP32 microcontroller with real-time wireless transmission and signal acquisition.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2025-10-15',
        views: '840',
        duration: '12:20',
    },
    {
        id: 'yt-003',
        platform: 'youtube',
        title: 'Hand Landmark Extraction & Gesture CNN with MediaPipe',
        description: 'Developing an end-to-end computer vision pipeline using MediaPipe for 21 3D hand landmark coordinates and custom CNN classification for gesture and word-sign recognition.',
        thumbnail: null,
        url: '#',
        date: '2025-12-10',
        views: '2.4K',
        duration: '18:40',
    },
    {
        id: 'yt-004',
        platform: 'youtube',
        title: 'Digital Logic Design & Verilog HDL on Intel Quartus',
        description: 'Synthesizing digital logic and hardware architectures using Verilog HDL with simulation and timing verification in Intel Quartus Prime Lite.',
        thumbnail: null,
        url: '#',
        date: '2025-11-20',
        views: '1.8K',
        duration: '14:15',
    },
    {
        id: 'yt-005',
        platform: 'youtube',
        title: 'Modern Frontend Engineering for APSLOCK Agency Website',
        description: 'Collaborative production frontend build utilizing Next.js, TypeScript, Tailwind CSS, GSAP, and Framer Motion for interactive client experiences.',
        thumbnail: null,
        url: 'https://www.apslock.com/',
        date: '2026-03-25',
        views: '3.1K',
        duration: '16:50',
    },
    {
        id: 'yt-006',
        platform: 'youtube',
        title: 'Microcontroller Protocols: UART, SPI & I2C Hardware Debugging',
        description: 'Practical hardware debugging techniques, sensor interfacing, and timing validation for low-power embedded communication buses.',
        thumbnail: null,
        url: '#',
        date: '2025-09-18',
        views: '2.8K',
        duration: '21:00',
    },
    {
        id: 'yt-007',
        platform: 'youtube',
        title: 'Multi-Vehicle Telemetry Clustering & Edge Escalation',
        description: 'Designing distributed confidence escalation models (Log -> Warn -> Alert) across low-cost hardware nodes (ESP32, MPU6050, NEO-6M, ESP32-CAM).',
        thumbnail: null,
        url: '#',
        date: '2026-01-20',
        views: '1.5K',
        duration: '22:15',
    },
    {
        id: 'yt-008',
        platform: 'youtube',
        title: 'MATLAB & Signal Processing for Sensor Data Acquisition',
        description: 'Filtering noisy physiological and accelerometer data with digital signal processing techniques in MATLAB and Python.',
        thumbnail: null,
        url: '#',
        date: '2025-08-14',
        views: '1.9K',
        duration: '17:30',
    },

    // ============ Engineering Articles & Project Reports ============
    {
        id: 'blog-001',
        platform: 'blog',
        title: 'eMudhra Hackathon 2026: Designing Road Hazard AI',
        description: 'Deep dive into our neuro-symbolic road hazard intelligence system, fusing IMU vibration analysis, CNN-based visual classification, and GPS-based multi-vehicle clustering.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-02-20',
        readTime: '6 min',
    },
    {
        id: 'blog-002',
        platform: 'blog',
        title: 'Hardware-Software Co-Design with ESP32 & Embedded C',
        description: 'Key lessons from designing and testing a real-time health monitoring system with wireless physiological sensor streaming.',
        thumbnail: null,
        url: '#',
        date: '2025-10-25',
        readTime: '8 min',
    },
    {
        id: 'blog-003',
        platform: 'blog',
        title: 'Computer Vision for Assistive Technology',
        description: 'Using MediaPipe hand landmarks and CNN classification to interpret real-time gestures and word signs from video feeds.',
        thumbnail: null,
        url: '#',
        date: '2025-12-15',
        readTime: '5 min',
    },
    {
        id: 'blog-004',
        platform: 'blog',
        title: 'FPGA Fundamentals & RTL Synthesis with Verilog',
        description: 'Exploring digital logic design, state machines, and FPGA fundamentals using Intel Quartus Prime Lite.',
        thumbnail: null,
        url: '#',
        date: '2025-11-05',
        readTime: '7 min',
    },
    {
        id: 'blog-005',
        platform: 'blog',
        title: 'Building Interactive Web Applications with Next.js & GSAP',
        description: 'How full-stack web development skills and motion choreography with GSAP complement hardware engineering projects at APSLOCK.',
        thumbnail: null,
        url: 'https://www.apslock.com/',
        date: '2026-03-10',
        readTime: '6 min',
    },
    {
        id: 'blog-006',
        platform: 'blog',
        title: 'Cross-Functional Leadership at Rotaract Club Bangalore Warriors',
        description: 'Co-organizing technical and social initiatives, team coordination, and community engagement as Director of Club Services.',
        thumbnail: null,
        url: '#',
        date: '2025-09-30',
        readTime: '5 min',
    },
    {
        id: 'blog-007',
        platform: 'blog',
        title: 'Literature Review: Road Hazard Detection Methodologies',
        description: 'Validating technical novelty and feasibility across IEEE Xplore, arXiv, and MDPI research papers.',
        thumbnail: null,
        url: '#',
        date: '2026-01-15',
        readTime: '9 min',
    },
    {
        id: 'blog-008',
        platform: 'blog',
        title: 'Sensor Calibration & Real-Time Data Acquisition',
        description: 'Practical strategies for calibrating MPU6050 IMU, NEO-6M GPS, and physiological analog sensors.',
        thumbnail: null,
        url: '#',
        date: '2025-09-05',
        readTime: '6 min',
    },

    // ============ Technical Insights & Lab Notes ============
    {
        id: 'tt-001',
        platform: 'tiktok',
        title: 'ESP32 Sensor Interfacing Tips ⚡',
        description: 'Configuring I2C pullups and avoiding noise on analog ADC lines.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-01-09',
        views: '15.2K',
        likes: '1.2K',
    },
    {
        id: 'tt-002',
        platform: 'tiktok',
        title: 'Verilog FSM State Encoding 🛠️',
        description: 'One-hot vs Binary encoding in FPGA design workflows.',
        thumbnail: null,
        url: '#',
        date: '2026-01-03',
        views: '8.5K',
        likes: '756',
    },
    {
        id: 'tt-003',
        platform: 'tiktok',
        title: 'MediaPipe 21 Landmarks in Python 🖐️',
        description: 'Extracting normalized 3D hand keypoints in under 10ms.',
        thumbnail: null,
        url: '#',
        date: '2025-12-25',
        views: '22.1K',
        likes: '3.4K',
    },
    {
        id: 'tt-004',
        platform: 'tiktok',
        title: 'IMU Vibration Analysis with MPU6050 📈',
        description: 'Detecting road potholes via Z-axis acceleration spikes.',
        thumbnail: null,
        url: '#',
        date: '2025-12-18',
        views: '12.3K',
        likes: '1.1K',
    },
    {
        id: 'tt-005',
        platform: 'tiktok',
        title: 'Embedded C Memory Alignment 🧠',
        description: 'Understanding struct padding and cache efficiency.',
        thumbnail: null,
        url: '#',
        date: '2025-12-12',
        views: '45.2K',
        likes: '5.8K',
    },
    {
        id: 'tt-006',
        platform: 'tiktok',
        title: 'UART Baud Rate Clock Drift ⏱️',
        description: 'Calculating oscillator error margins for reliable serial links.',
        thumbnail: null,
        url: '#',
        date: '2025-12-05',
        views: '18.7K',
        likes: '2.1K',
    },
    {
        id: 'tt-007',
        platform: 'tiktok',
        title: 'Intel Quartus Timing Closure ⚡',
        description: 'Analyzing setup and hold violations in digital circuits.',
        thumbnail: null,
        url: '#',
        date: '2025-11-28',
        views: '33.4K',
        likes: '4.2K',
    },
    {
        id: 'tt-008',
        platform: 'tiktok',
        title: 'GSAP UI Motion Micro-Interactions ✨',
        description: 'Smooth magnetic buttons and physics-based spring transitions.',
        thumbnail: null,
        url: '#',
        date: '2025-11-20',
        views: '28.9K',
        likes: '3.6K',
    },
    {
        id: 'tt-009',
        platform: 'tiktok',
        title: 'NEO-6M GPS NMEA Sentence Parsing 🛰️',
        description: 'Extracting latitude and longitude coordinates in real time.',
        thumbnail: null,
        url: '#',
        date: '2025-11-15',
        views: '19.3K',
        likes: '2.4K',
    },
    {
        id: 'tt-010',
        platform: 'tiktok',
        title: 'CNN Feature Map Visualizations 🔍',
        description: 'Inspecting convolutional kernel filters for sign language shapes.',
        thumbnail: null,
        url: '#',
        date: '2025-11-08',
        views: '41.2K',
        likes: '5.1K',
    },
    {
        id: 'tt-011',
        platform: 'tiktok',
        title: 'Wireless Telemetry with ESP32 WebSockets 📡',
        description: 'Low-latency physiological signal streaming to local dashboards.',
        thumbnail: null,
        url: '#',
        date: '2025-11-01',
        views: '25.6K',
        likes: '3.0K',
    },
    {
        id: 'tt-012',
        platform: 'tiktok',
        title: 'Next.js + Tailwind Component Architecture 🎨',
        description: 'Reusable type-safe component design for agency websites.',
        thumbnail: null,
        url: '#',
        date: '2025-10-25',
        views: '31.8K',
        likes: '4.0K',
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

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
