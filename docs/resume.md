---
title: Resume
layout: doc
---

# Resume {#resume}

<script setup>
const imgWrapperStyles = 'style="display:inline-flex;width:50px;height:50px;background-color:#fff;align-items:center;border-radius:5px;padding:2px;margin-right:10px;box-shadow:var(--vp-shadow-3)"';
const imgStyles = 'style="width:48px;"';
const aAttr = 'target="_blank"';

const experiences = [
    { badge: 'Coming soon', title: '???' },
    {
        badge: 'Jan 2026 → Current',
        title: 'Senior IT Consulting & Implementation',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_4.png" ${imgStyles}></div><a href="https://www.hitachids.com/vn-english/" ${aAttr}>Hitachi Digital Services Vietnam</a>`,
        content: `<p>★ Tech Lead:
<ul>
<li>Desktop Publishing Platform (Client: FUJIFILM): Acted as Technical Lead for desktop app migration (Pintail), directing front-end architecture, parallel processing feature development, and foundation restructuring using ElectronJS, ReactJS, NestJS, and fabric.js.</li>
</ul>

★ Senior Engineer:
<ul>
<li>Enterprise Document Automation (Client: FUJIFILM): Engineered configurable multi-step pipeline features and Microsoft Teams notification integrations across a 50+ microservice cloud ecosystem (IWPro) using Node.js, AWS Lambda, SQS, and DocumentDB.</li>
<li>ESG & Carbon Accounting Platform (Client: Hitachi Solutions): Built a Vue 3/PrimeVue web client (EcoAssist) featuring raw utility-to-tCO2 conversion pipelines, Scope 1 & 2 compliance reporting, and carbon credit lifecycle tracking.</li>
</ul>
</p>`
    },
    {
        badge: 'Sep 2020 → Dec 2025',
        title: 'Senior Software Engineer',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp.</a>`,
        content: `<p>★ Tech Lead (Singapore Ministry of Education):
Led a Scrum team delivering the OPAL e-learning platform (CSL module), significantly boosting system reliability and stability by systematically resolving SSAT and SPT issues.</p>

<p>★ Senior Fullstack Developer (Conexus - Norway):
Modernized web products (Elevate, Engage, FollowUp) by implementing BFF architecture, JWT authentication, Vue.js/Pinia, .NET Core, and FIDO biometric authentication POCs.</p>

<p>★ DevOps Engineer (Conexus - Norway): Executed cloud migration from on-premise BaseFarm servers to Azure Cloud, establishing automated deployments, containerized app services, and IaC.
<ul>
<li>Open-Source Project: Created an Azure Firewall Policy Optimizer tool to parse ARM template JSON, eliminating rule redundancy and simplifying cloud security management. <a href="https://github.com/nguyenviettung7691/azure-firewall-policy-optimizer">Github</a></li>
</ul>
        </p>`
    },
    {
        badge: 'Jan 2018 → Sep 2020',
        title: 'Senior Software Developer',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_3.png" ${imgStyles}></div><a href="https://www.conexus.net/" ${aAttr}>Conexus AS</a>`,
        content: `<p>★ Tech Lead (Singapore Ministry of Education): Led a Scrum team building full-stack features for the OPAL e-learning platform (CSL module), improving product stability through targeted SSAT and SPT issue resolution.</p>

<p>★ Senior Frontend Developer (Conexus & Conexus SG - Norway): Modernized web client architectures by upgrading legacy libraries, building reusable web components, and refining client-side workflows for products including Conexus Companion and Coursepad.</p>`
    },
    {
        badge: 'Oct 2014 → Jan 2018',
        title: 'Frontend Developer',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp.</a>`,
        content: `<p>★ Client: Conexus (Norway).
<ul>
<li>Responsive Web Engineering: Built and maintained responsive web applications using ASP.NET MVC (Razor), jQuery, and LESS.</li>
<li>Performance & UX Optimization: Ensured cross-browser compatibility, optimized asset bundling using Microsoft Optimization, and engineered modular JavaScript architectures alongside custom UI/UX graphics.</li>
</ul></p>`
    },
    {
        badge: 'Oct 2013 → Sep 2014',
        title: 'Fullstack Developer',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_1.png" ${imgStyles}></div><a href="https://f2tech.asia/" ${aAttr}>F2Tech (formerly VNYI)</a>`,
        content: `<p>★ Employer: F2Tech.Asia (formerly VNYI) - Vietnam.
<ul>
<li>Multi-Platform Product Engineering: Built core products across desktop (C# WinForms, DevExpress), web (ExtJS), and hybrid mobile platforms (Cordova, Telerik, Kendo UI).</li>
<li>Database Optimization: Designed and maintained complex SQL Server stored procedures to ensure high data reliability and query performance.</li>
</ul></p>`
    },
]

const certifications = [
    { badge: 'Coming soon', title: '???' },
    {
        badge: 'Jun 2026',
        title: `<a href="https://learn.microsoft.com/api/credentials/share/en-us/nvtung/C1C5BBCDD21770C3?sharingId=5F11ACC34CA524D" ${aAttr}>Microsoft Certified: Azure Administrator Associate</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" ${imgStyles}></div><a href="https://learn.microsoft.com/en-us/credentials/" ${aAttr}>Microsoft Credentials</a>`,
        content: `<p>Demonstrate key skills to configure, manage, secure, and administer key professional functions in Microsoft Azure.</p>`
    },
    {
        badge: 'Mar 2026',
        title: `<a href="https://certificates.dev/javascript/certificates/a14392fa-86d6-4a2e-9154-32ccedf0f9af" ${aAttr}>Certified Senior JavaScript Developer</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/javascript" ${imgStyles}></div><a href="https://certificates.dev/javascript/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Demonstrates proficiency in advanced asynchronous programming, testing, and security vulnerability mitigation as a Senior Javascript developer.</p>`
    },
    {
        badge: 'Nov 2025',
        title: `<a href="https://certificates.dev/javascript/certificates/a0444290-62ca-4f5c-bb46-90ed9228b6ef" ${aAttr}>Certified Mid-Level JavaScript Developer</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/javascript" ${imgStyles}></div><a href="https://certificates.dev/javascript/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Demonstrated proficiency in advanced DOM manipulation and functions as a Mid-Level Javascript developer.</p>`
    },
    {
        badge: 'Oct 2025',
        title: `<a href="https://certificates.dev/vuejs/certificates/a035486e-e918-44ac-98fd-d6ef9a74bbc4" ${aAttr}>Certified Senior Vue.js Developer</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/vuedotjs" ${imgStyles}></div><a href="https://certificates.dev/vuejs/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Demonstrated suitability, advanced concepts and elements required as a Senior Vue.js Developer.</p>`
    },
    {
        badge: 'Aug 2025',
        title: `<a href="https://certificates.dev/c/9f981598-89ce-4208-b545-8766a6e20fae" ${aAttr}>Certified Junior JavaScript Developer</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/javascript" ${imgStyles}></div><a href="https://certificates.dev/javascript/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Demonstrated foundational skills, learning commitment as a Junior Javascript developer.</p>`
    },
    {
        badge: 'Sep 2024',
        title: `<a href="https://certificates.dev/vuejs/certificates/9cf3a5b7-fd94-4a17-ab22-6d17596e6c56" ${aAttr}>Certified Mid-Level Vue.js Developer</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/vuedotjs" ${imgStyles}></div><a href="https://certificates.dev/vuejs/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Demonstrated required competency to use the framework to its fullest extent and capabilities to deliver the best possible results in a role as a Vue.js Developer.</p>`
    },
    {
        badge: 'Mar 2023',
        title: `<a href="https://learn.microsoft.com/api/credentials/share/en-us/nvtung/6A08F9787FA7B1F4?sharingId=5F11ACC34CA524D" ${aAttr}>Microsoft Certified: Azure Fundamentals</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" ${imgStyles}></div><a href="https://learn.microsoft.com/en-us/credentials/" ${aAttr}>Microsoft Credentials</a>`,
        content: `<p>Demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.</p>`
    },
    {
        badge: 'Apr 2022 → Apr 2025',
        title: `<a href="https://www.credly.com/badges/b50d2d25-4689-4489-bc3b-440e985a5128/public_url" ${aAttr}>AWS Certified Cloud Practitioner</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" ${imgStyles}></div><a href="https://aws.amazon.com/training/" ${aAttr}>AWS Training and Certification</a>`,
        content: `<p>Demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>`
    },
    {
        badge: 'Feb 2022',
        title: `<a href="https://cert.efset.org/Yr64ri" ${aAttr}>EF SET Certificate 79/100 (C2 PROFICIENT)</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://upload.wikimedia.org/wikipedia/en/f/f1/EF_SET_logo.svg" ${imgStyles}></div><a href="https://www.efset.org/english-certificate/" ${aAttr}>EF SET (Education First - Standard English Test)</a>`,
        content: `<p>Demonstrated to understand:</p>
        <ul>
            <li>Virtually everything heard or read with ease</li>
            <li>All spoken language at a fast, native pace</li>
            <li>Abstract, structurally complex text and literary writings</li>
        </ul>`
    },
    {
        badge: 'Mar 2014 → Mar 2016',
        title: `TOEIC (955/990)`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://duhocglolink.com/wp-content/uploads/2019/05/luyen-thi-toeic-philippines-du-hoc-glolink-1.png" ${imgStyles}></div><a href="https://iigvietnam.com/toeic-test/" ${aAttr}>IIG Vietnam</a>`,
        content: `<p>TOEIC test has been used as a standard to assess the Listening and Reading skills of English - two essential skills in an international working environment.</p>`
    },
    {
        badge: 'Nov 2009 → Nov 2011',
        title: `TOEFL ITP (573/677)`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://www.iie.org/wp-content/uploads/2022/12/ETS-TOEFL-ITP-logo.png" ${imgStyles}></div><a href="https://iigvietnam.com/toefl-itp-test/" ${aAttr}>IIG Vietnam</a>`,
        content: `<p>TOEFL ITP test is an English proficiency test for non-native speakers. It is an academic test, used to assess the English proficiency of learners from intermediate to advanced levels.</p>`
    },
    {
        badge: 'Sep 2009 → Mar 2014',
        title: `Bachelor - Software Engineering, Information Technology Faculty</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/DH-Hoa-Sen-Main-Icon.png" ${imgStyles}></div><a href="https://www.hoasen.edu.vn/en/education/university/" ${aAttr}>Hoa Sen, University</a>`,
        content: `<p>Graduation Project: Built a multi-platform coffee shop management system featuring a C# WPF desktop app, Windows Phone client, SQL Server backend, and SignalR for real-time sync.</p>`
    },
]

const gridDescStyles = 'style="display:flex;align-items:center;gap:0.2rem;margin:0.2rem 0;"';

const products = [
    {
        img: '/images/Products_9.png',
        title: 'FUJIFILM IWpro (Capture/Automation)',
        url: 'https://www.fujifilm.com/fbvn/en/products/software/document-management/fujifilm-iwpro',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>FUJIFILM Business Innovation <small style="font-size:0.8rem">(Vietnam)</small></b></div>FUJIFILM IWpro is an all-in-one secure platform solution for business digitisation, provide workspace for collaboration, workflow optimisation, efficient document management of metadata and documents, and versatile cloud-based printing capabilities.`
    },
    {
        img: '/images/Products_8.png',
        title: 'EcoAssist-Enterprise-Light (Global Web Client)',
        url: 'https://www.hitachi-solutions-create.co.jp/solution/ecoassist_enterprise_light/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>Hitachi Solutions</b></div>EcoAssist-Enterprise-Light streamlines the input, aggregation, and utilization of environmental data, enabling efficient centralized management of a company's environmental performance data across multiple locations.`
    },
    {
        img: '/images/Products_4.png',
        title: 'Elevate',
        url: 'https://www.conexus.net/produkter/elevate/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Elevate is designed to meet the documentation requirements for school environment challenges, and is built so that the team around the student can collaborate closely on the challenge.`
    },
    {
        img: '/images/Products_5.png',
        title: 'Engage',
        url: 'https://www.conexus.net/produkter/engage/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Engage shows where individual students and classes are succeeding, and where they need to be supplemented. The tool helps the teacher identify needs for follow-up and adaptation, and provides a useful basis for dialogue with the home.`
    },
    {
        img: '/images/Products_7.png',
        title: 'Insight',
        url: 'https://www.conexus.net/produkter/insight/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Insight is a treasure trove for school owners and school leaders. Get an overview of learning outcomes, download ready-made report templates, and view data from Conexus Elevate, Conexus Engage, or other data sources.`
    },
    {
        img: '/images/Products_6.png',
        title: 'Stafettloggen',
        url: 'https://www.conexus.net/produkter/stafettloggen/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Stafettloggen is a digital logbook for interdisciplinary collaboration around the child, based on the BTI model (better interdisciplinary efforts). The tool provides an overview of the professionals involved, their responsibilities and initiated measures, and simplifies interaction between guardians, kindergarten, school, health services and other agencies.`
    },
    {
        img: '/images/Products_3.png',
        title: 'OPAL 2.0',
        url: 'https://academyofsingaporeteachers.moe.edu.sg/professional-learning/opal/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Ministry of Education</b></div>OPAL2.0 is a Ministry of Education (MOE) digital learning platform for staff that advances the philosophy of PD Ownership and Leadership. It is designed primarily for personalised and collaborative learning, to nurture the 21st Century digital learner.`
    },
    {
        img: '/images/Products_2.png',
        title: 'Coursepad',
        url: 'https://www.linkedin.com/company/coursepad/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Civil Service College</b></div>Coursepad is a intelligent, personalised learning environment that delivers the most helpful, relevant and popular learning content to supercharge workplace learning. Our recommendation engine generates highly relevant learning recommendations based on the job, social and learning profiles of your learners and helps large organisations up-skill their workforce at scale.`
    },
    {
        img: '/images/Products_1.png',
        title: 'Quick Decision',
        url: 'https://f2tech.asia/solution/giai-phap',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>F2Tech <small style="font-size:0.8rem">(formerly VNYI)</small></b></div>ERP system solution for F&B businesses. Has been reformed to multiple specialized solutions.`
    },
]
const clients = [
    {
        img: '/images/Clients_5.png',
        title: 'FUJIFILM Business Innovation Vietnam',
        url: 'https://www.fujifilm.com/fbvn/en',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>FUJIFILM Business Innovation <small style="font-size:0.8rem">(Vietnam)</small></b></div>Drawing on more than 60 years of expertise in enhancing productivity and communication through our advanced multifunctional devices and digital solutions, we are dedicated to delivering comprehensive, innovative solutions.`
    },
    {
        img: '/images/Clients_4.png',
        title: 'Hitachi Solutions',
        url: 'https://www.hitachi-solutions.com/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>Hitachi Solutions</b></div>We deliver products and services of superior value to customers worldwide through key subsidiaries in Asia, the United States and Europe.`
    },
    {
        img: '/images/Clients_1.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>We provide schools with a platform where they can find all the insight they need, while also allowing them to plan and evaluate follow-up work.`
    },
    {
        img: '/images/Clients_3.png',
        title: 'Ministry of Education (Singapore)',
        url: 'https://www.moe.gov.sg/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Ministry of Education</b></div>The Ministry of Education (MOE) formulates and implements education policies on education structure, curriculum, pedagogy, and assessment.`
    },
    {
        img: '/images/Clients_2.png',
        title: 'Civil Service College (Singapore)',
        url: 'https://www.csc.gov.sg/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Civil Service College</b></div>The heart of learning excellence and development for the Singapore Public Service.`
    },
]
const employers = [
    {
        img: '/images/Employer_4.png',
        title: 'Hitachi Digital Services Vietnam',
        url: 'https://www.hitachids.com/vn-english/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>Hitachi Digital Services <small style="font-size:0.8rem">(Vietnam)</small></b></div>We’re building a world where we guide businesses, industries, and society on a journey to identify and accelerate new opportunities through the power of acceleration.`
    },
    {
        img: '/images/Employer_3.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>We provide schools with a platform where they can find all the insight they need, while also allowing them to plan and evaluate follow-up work.`
    },
    {
        img: '/images/Employer_2.png',
        title: 'Orient Software Development Corp. Vietnam',
        url: 'https://www.orientsoftware.com/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>Orient Software</b></div>We deliver end-to-end software services—building world-class solutions and empowering your projects with vetted tech talent.`
    },
    {
        img: '/images/Employer_1.png',
        title: 'F2Tech (formerly VNYI)',
        url: 'https://f2tech.asia/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>F2Tech <small style="font-size:0.8rem">(formerly VNYI)</small></b></div>F2 Asia Technology Joint Stock Company (F2Tech) is a professional consulting company and provides sales management software solutions and POS hardware for the F&B and retail industries.`
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

<Timeline :data="experiences" />

## Certifications <Badge type="tip" text="what I learned" /> {#certifications}

<Timeline :data="certifications" />