---
title: Resume
layout: doc
---

# Resume {#resume}

<script setup>
const experiences = [
    {
        start: '2026-01',
        title: 'Senior IT Consulting & Implementation',
        org: 'Hitachi Digital',
        orgUrl: 'https://www.hitachidigital.com/',
        logo: '/images/Employer_4.png',
        roles: [
            { name: 'Tech Lead', html: `<ul><li>Desktop Publishing Platform: Contracted client is FUJIFILM (Japan) - Acted as Technical Lead for modernizing desktop app (MakeReady) used in printing document customization, directing front-end architecture, parallel processing feature development, and foundation restructuring using ElectronJS, ReactJS, NestJS, and fabric.js.</li></ul>` },
            { name: 'Senior Engineer', html: `<ul><li>Enterprise Document Automation: Contracted client is FUJIFILM (Japan) - Engineered configurable multi-step pipeline features and Microsoft Teams notification integrations across a 50+ microservice cloud ecosystem (IWPro) using Node.js, AWS Lambda, SQS, and DocumentDB.</li><li>ESG & Carbon Accounting Platform: Contracted client is Hitachi Solutions (Japan) - Built a Vue 3/PrimeVue web client (EcoAssist) featuring raw utility-to-tCO2 conversion pipelines, Scope 1 & 2 compliance reporting, and carbon credit lifecycle tracking.</li></ul>` },
        ],
    },
    {
        start: '2020-09',
        end: '2025-12',
        title: 'Senior Software Engineer',
        org: 'Orient Software Development Corp.',
        orgUrl: 'https://www.orientsoftware.net/',
        logo: '/images/Employer_2.png',
        roles: [
            { name: 'Tech Lead (Singapore Ministry of Education)', html: `<p>Led a Scrum team delivering the OPAL e-learning platform (CSL module), significantly boosting system reliability and stability by systematically resolving SSAT and SPT issues.</p>` },
            { name: 'Senior Fullstack Developer (Conexus - Norway)', html: `<p>Modernized web products (Elevate, Engage, FollowUp) by implementing BFF architecture, JWT authentication, Vue.js/Pinia, .NET Core, and FIDO biometric authentication POCs.</p>` },
            { name: 'DevOps Engineer (Conexus - Norway)', html: `<p>Executed cloud migration from on-premise BaseFarm servers to Azure Cloud, establishing automated deployments, containerized app services, and IaC.</p><ul><li>Open-Source Project: Created an Azure Firewall Policy Optimizer tool to parse ARM template JSON, eliminating rule redundancy and simplifying cloud security management. <a href="https://github.com/nguyenviettung7691/azure-firewall-policy-optimizer" target="_blank" rel="noopener noreferrer">Github</a></li></ul>` },
        ],
    },
    {
        start: '2018-01',
        end: '2020-09',
        title: 'Senior Software Developer',
        org: 'Conexus AS',
        orgUrl: 'https://www.conexus.net/',
        logo: '/images/Employer_3.png',
        roles: [
            { name: 'Tech Lead (Singapore Ministry of Education)', html: `<p>Led a Scrum team building full-stack features for the OPAL e-learning platform (CSL module), improving product stability through targeted SSAT and SPT issue resolution.</p>` },
            { name: 'Senior Frontend Developer (Conexus & Conexus SG - Norway)', html: `<p>Modernized web client architectures by upgrading legacy libraries, building reusable web components, and refining client-side workflows for products including Conexus Companion and Coursepad.</p>` },
        ],
    },
    {
        start: '2014-10',
        end: '2018-01',
        title: 'Frontend Developer',
        org: 'Orient Software Development Corp.',
        orgUrl: 'https://www.orientsoftware.net/',
        logo: '/images/Employer_2.png',
        roles: [
            { name: 'Client: Conexus (Norway).', html: `<ul><li>Responsive Web Engineering: Built and maintained responsive web applications using ASP.NET MVC (Razor), jQuery, and LESS.</li><li>Performance & UX Optimization: Ensured cross-browser compatibility, optimized asset bundling using Microsoft Optimization, and engineered modular JavaScript architectures alongside custom UI/UX graphics.</li></ul>` },
        ],
    },
    {
        start: '2013-10',
        end: '2014-09',
        title: 'Fullstack Developer',
        org: 'F2Tech (formerly VNYI)',
        orgUrl: 'https://f2tech.asia/',
        logo: '/images/Employer_1.png',
        roles: [
            { name: 'Employer: F2Tech.Asia (formerly VNYI) - Vietnam.', html: `<ul><li>Multi-Platform Product Engineering: Built core products across desktop (C# WinForms, DevExpress), web (ExtJS), and hybrid mobile platforms (Cordova, Telerik, Kendo UI).</li><li>Database Optimization: Designed and maintained complex SQL Server stored procedures to ensure high data reliability and query performance.</li></ul>` },
        ],
    },
]

const certifications = [
    {
        title: 'Claude Certified Developer - Foundations',
        url: 'https://www.credly.com/badges/8ee7fc55-e289-4861-ab44-9ca6b2737c6d/public_url',
        issuer: 'Anthropic',
        issuerUrl: 'https://www.credly.com/org/anthropic',
        logo: 'https://devicons.io/devicons/icons/anthropic-icon.svg',
        issued: '2026-11',
        desc: `<p>Earners can build, integrate, and ship production applications and agents on Claude using the Claude API, Claude Code, custom tools, and MCP servers.</p>`,
    },
    {
        title: 'Microsoft Certified: Azure Administrator Associate',
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/C1C5BBCDD21770C3?sharingId=5F11ACC34CA524D',
        issuer: 'Microsoft Credentials',
        issuerUrl: 'https://learn.microsoft.com/en-us/credentials/',
        logo: 'https://devicons.io/devicons/icons/microsoft-azure.svg',
        issued: '2026-06',
        desc: `<p>Demonstrate key skills to configure, manage, secure, and administer key professional functions in Microsoft Azure.</p>`,
    },
    {
        title: 'Certified Senior JavaScript Developer',
        url: 'https://certificates.dev/javascript/certificates/a14392fa-86d6-4a2e-9154-32ccedf0f9af',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/javascript/',
        logo: 'https://cdn.simpleicons.org/javascript',
        issued: '2026-03',
        desc: `<p>Demonstrates proficiency in advanced asynchronous programming, testing, and security vulnerability mitigation as a Senior Javascript developer.</p>`,
    },
    {
        title: 'Certified Mid-Level JavaScript Developer',
        url: 'https://certificates.dev/javascript/certificates/a0444290-62ca-4f5c-bb46-90ed9228b6ef',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/javascript/',
        logo: 'https://cdn.simpleicons.org/javascript',
        issued: '2025-11',
        desc: `<p>Demonstrated proficiency in advanced DOM manipulation and functions as a Mid-Level Javascript developer.</p>`,
    },
    {
        title: 'Certified Senior Vue.js Developer',
        url: 'https://certificates.dev/vuejs/certificates/a035486e-e918-44ac-98fd-d6ef9a74bbc4',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/vuejs/',
        logo: 'https://cdn.simpleicons.org/vuedotjs',
        issued: '2025-10',
        desc: `<p>Demonstrated suitability, advanced concepts and elements required as a Senior Vue.js Developer.</p>`,
    },
    {
        title: 'Certified Junior JavaScript Developer',
        url: 'https://certificates.dev/c/9f981598-89ce-4208-b545-8766a6e20fae',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/javascript/',
        logo: 'https://cdn.simpleicons.org/javascript',
        issued: '2025-08',
        desc: `<p>Demonstrated foundational skills, learning commitment as a Junior Javascript developer.</p>`,
    },
    {
        title: 'Certified Mid-Level Vue.js Developer',
        url: 'https://certificates.dev/vuejs/certificates/9cf3a5b7-fd94-4a17-ab22-6d17596e6c56',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/vuejs/',
        logo: 'https://cdn.simpleicons.org/vuedotjs',
        issued: '2024-09',
        desc: `<p>Demonstrated required competency to use the framework to its fullest extent and capabilities to deliver the best possible results in a role as a Vue.js Developer.</p>`,
    },
    {
        title: 'Microsoft Certified: Azure Fundamentals',
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/6A08F9787FA7B1F4?sharingId=5F11ACC34CA524D',
        issuer: 'Microsoft Credentials',
        issuerUrl: 'https://learn.microsoft.com/en-us/credentials/',
        logo: 'https://devicons.io/devicons/icons/microsoft-azure.svg',
        issued: '2023-03',
        desc: `<p>Demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.</p>`,
    },
    {
        title: 'AWS Certified Cloud Practitioner',
        url: 'https://www.credly.com/badges/b50d2d25-4689-4489-bc3b-440e985a5128/public_url',
        issuer: 'AWS Training and Certification',
        issuerUrl: 'https://aws.amazon.com/training/',
        logo: 'https://devicons.io/devicons/icons/aws.svg',
        issued: '2022-04',
        expires: '2025-04',
        desc: `<p>Demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>`,
    },
    {
        title: 'EF SET Certificate 79/100 (C2 PROFICIENT)',
        url: 'https://cert.efset.org/Yr64ri',
        issuer: 'EF SET (Education First - Standard English Test)',
        issuerUrl: 'https://www.efset.org/english-certificate/',
        logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/EF_SET_logo.svg',
        issued: '2022-02',
        desc: `<p>Demonstrated to understand:</p><ul><li>Virtually everything heard or read with ease</li><li>All spoken language at a fast, native pace</li><li>Abstract, structurally complex text and literary writings</li></ul>`,
    },
    {
        title: 'TOEIC (955/990)',
        issuer: 'IIG Vietnam',
        issuerUrl: 'https://iigvietnam.com/toeic-test/',
        logo: 'https://duhocglolink.com/wp-content/uploads/2019/05/luyen-thi-toeic-philippines-du-hoc-glolink-1.png',
        issued: '2014-03',
        expires: '2016-03',
        desc: `<p>TOEIC test has been used as a standard to assess the Listening and Reading skills of English - two essential skills in an international working environment.</p>`,
    },
    {
        title: 'TOEFL ITP (573/677)',
        issuer: 'IIG Vietnam',
        issuerUrl: 'https://iigvietnam.com/toefl-itp-test/',
        logo: 'https://www.iie.org/wp-content/uploads/2022/12/ETS-TOEFL-ITP-logo.png',
        issued: '2009-11',
        expires: '2011-11',
        desc: `<p>TOEFL ITP test is an English proficiency test for non-native speakers. It is an academic test, used to assess the English proficiency of learners from intermediate to advanced levels.</p>`,
    },
    {
        title: 'Bachelor - Software Engineering, Information Technology Faculty',
        issuer: 'Hoa Sen, University',
        issuerUrl: 'https://www.hoasen.edu.vn/en/education/university/',
        logo: 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/DH-Hoa-Sen-Main-Icon.png',
        start: '2009-09',
        issued: '2014-03',
        desc: `<p>Graduation Project: Built a multi-platform coffee shop management system featuring a C# WPF desktop app, Windows Phone client, SQL Server backend, and SignalR for real-time sync.</p>`,
    },
]

const products = [
    {
        img: '/images/Products_9.png',
        title: 'FUJIFILM IWpro',
        url: 'https://www.fujifilm.com/fbvn/en/products/software/document-management/fujifilm-iwpro',
        org: 'FUJIFILM Business Innovation',
        country: 'jp',
        countryName: 'Japan',
        desc: `FUJIFILM IWpro is an all-in-one secure platform solution for business digitisation, provide workspace for collaboration, workflow optimisation, efficient document management of metadata and documents, and versatile cloud-based printing capabilities.`
    },
    {
        img: '/images/Products_8.png',
        title: 'EcoAssist-Enterprise-Light',
        url: 'https://www.hitachi-solutions-create.co.jp/solution/ecoassist_enterprise_light/',
        org: 'Hitachi Solutions',
        country: 'jp',
        countryName: 'Japan',
        desc: `EcoAssist-Enterprise-Light streamlines the input, aggregation, and utilization of environmental data, enabling efficient centralized management of a company's environmental performance data across multiple locations.`
    },
    {
        img: '/images/Products_4.png',
        title: 'Elevate',
        url: 'https://www.conexus.net/produkter/elevate/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Norway',
        desc: `Conexus Elevate is designed to meet the documentation requirements for school environment challenges, and is built so that the team around the student can collaborate closely on the challenge.`
    },
    {
        img: '/images/Products_5.png',
        title: 'Engage',
        url: 'https://www.conexus.net/produkter/engage/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Norway',
        desc: `Conexus Engage shows where individual students and classes are succeeding, and where they need to be supplemented. The tool helps the teacher identify needs for follow-up and adaptation, and provides a useful basis for dialogue with the home.`
    },
    {
        img: '/images/Products_7.png',
        title: 'Insight',
        url: 'https://www.conexus.net/produkter/insight/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Norway',
        desc: `Conexus Insight is a treasure trove for school owners and school leaders. Get an overview of learning outcomes, download ready-made report templates, and view data from Conexus Elevate, Conexus Engage, or other data sources.`
    },
    {
        img: '/images/Products_6.png',
        title: 'Stafettloggen',
        url: 'https://www.conexus.net/produkter/stafettloggen/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Norway',
        desc: `Conexus Stafettloggen is a digital logbook for interdisciplinary collaboration around the child, based on the BTI model (better interdisciplinary efforts). The tool provides an overview of the professionals involved, their responsibilities and initiated measures, and simplifies interaction between guardians, kindergarten, school, health services and other agencies.`
    },
    {
        img: '/images/Products_3.png',
        title: 'OPAL 2.0',
        url: 'https://academyofsingaporeteachers.moe.edu.sg/professional-learning/opal/',
        org: 'Ministry of Education',
        country: 'sg',
        countryName: 'Singapore',
        desc: `OPAL2.0 is a Ministry of Education (MOE) digital learning platform for staff that advances the philosophy of PD Ownership and Leadership. It is designed primarily for personalised and collaborative learning, to nurture the 21st Century digital learner.`
    },
    {
        img: '/images/Products_2.png',
        title: 'Coursepad',
        url: 'https://www.linkedin.com/company/coursepad/',
        org: 'Civil Service College',
        country: 'sg',
        countryName: 'Singapore',
        desc: `Coursepad is a intelligent, personalised learning environment that delivers the most helpful, relevant and popular learning content to supercharge workplace learning. Our recommendation engine generates highly relevant learning recommendations based on the job, social and learning profiles of your learners and helps large organisations up-skill their workforce at scale.`
    },
    {
        img: '/images/Products_1.png',
        title: 'Quick Decision',
        url: 'https://f2tech.asia/solution/giai-phap',
        org: 'F2Tech',
        orgNote: 'formerly VNYI',
        country: 'vn',
        countryName: 'Vietnam',
        desc: `ERP system solution for F&B businesses. Has been reformed to multiple specialized solutions.`
    },
]
const clients = [
    {
        img: '/images/Clients_5.png',
        title: 'FUJIFILM Business Innovation',
        url: 'https://www.fujifilm.com/fbvn/en',
        org: 'FUJIFILM Business Innovation',
        orgNote: 'Vietnam',
        country: 'jp',
        countryName: 'Japan',
        desc: `Drawing on more than 60 years of expertise in enhancing productivity and communication through our advanced multifunctional devices and digital solutions, we are dedicated to delivering comprehensive, innovative solutions.`
    },
    {
        img: '/images/Clients_4.png',
        title: 'Hitachi Solutions',
        url: 'https://www.hitachi-solutions.com/',
        org: 'Hitachi Solutions',
        country: 'jp',
        countryName: 'Japan',
        desc: `We deliver products and services of superior value to customers worldwide through key subsidiaries in Asia, the United States and Europe.`
    },
    {
        img: '/images/Clients_1.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Norway',
        desc: `We provide schools with a platform where they can find all the insight they need, while also allowing them to plan and evaluate follow-up work.`
    },
    {
        img: '/images/Clients_3.png',
        title: 'Ministry of Education',
        url: 'https://www.moe.gov.sg/',
        org: 'Ministry of Education',
        country: 'sg',
        countryName: 'Singapore',
        desc: `The Ministry of Education (MOE) formulates and implements education policies on education structure, curriculum, pedagogy, and assessment.`
    },
    {
        img: '/images/Clients_2.png',
        title: 'Civil Service College',
        url: 'https://www.csc.gov.sg/',
        org: 'Civil Service College',
        country: 'sg',
        countryName: 'Singapore',
        desc: `The heart of learning excellence and development for the Singapore Public Service.`
    },
]
const employers = [
    {
        img: '/images/Employer_4.png',
        title: 'Hitachi Digital',
        url: 'https://www.hitachidigital.com/',
        org: 'Hitachi Digital',
        orgNote: 'Vietnam',
        country: 'jp',
        countryName: 'Japan',
        desc: `We’re building a world where we guide businesses, industries, and society on a journey to identify and accelerate new opportunities through the power of acceleration.`
    },
    {
        img: '/images/Employer_3.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Norway',
        desc: `We provide schools with a platform where they can find all the insight they need, while also allowing them to plan and evaluate follow-up work.`
    },
    {
        img: '/images/Employer_2.png',
        title: 'Orient Software Development Corp.',
        url: 'https://www.orientsoftware.com/',
        org: 'Orient Software',
        country: 'vn',
        countryName: 'Vietnam',
        desc: `We deliver end-to-end software services—building world-class solutions and empowering your projects with vetted tech talent.`
    },
    {
        img: '/images/Employer_1.png',
        title: 'F2Tech (formerly VNYI)',
        url: 'https://f2tech.asia/',
        org: 'F2Tech',
        orgNote: 'formerly VNYI',
        country: 'vn',
        countryName: 'Vietnam',
        desc: `F2 Asia Technology Joint Stock Company (F2Tech) is a professional consulting company and provides sales management software solutions and POS hardware for the F&B and retail industries.`
    },
]
</script>

## Portfolio <Badge type="tip" text="how I worked" /> {#portfolio}

### 📦 Products <Badge type="tip" text="I helped in building..." />

<Grid :data="products" />

### 🕴️ Clients <Badge type="tip" text="I am outsourced to..." />

<Grid :data="clients" />

### 🏢 Employers <Badge type="tip" text="I am employed by..." />

<Grid :data="employers" />

## Experiences <Badge type="tip" text="what I did" /> {#experiences}

<Timeline kind="experience" :data="experiences" />

## Certifications <Badge type="tip" text="what I learned" /> {#certifications}

<Timeline kind="certification" :data="certifications" />