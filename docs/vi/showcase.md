---
title: Trưng bày
layout: doc
---

# Trưng bày {#showcase}

## 📚 Bộ kỹ năng {#skillsets}

<script setup>
const skillset = [
    { icon: 'vuedotjs', color: '#4FC08D', title: 'Vue.js', desc: 'Framework JavaScript Cấp tiến - Một framework dễ tiếp cận, hiệu suất cao và linh hoạt để xây dựng giao diện người dùng web.', url: 'https://vuejs.org/', items: [
        { icon: 'vuedotjs', color: '#4FC08D', title: 'Vue.js', desc: 'Core Framework', url: 'https://vuejs.org/' },
        { icon: 'vuetify', color: '#1867C0', title: 'Vuetify', desc: 'UI Components Library', url: 'https://vuetifyjs.com/en/' },
        { icon: 'vite', color: '#646CFF', title: 'Vite', desc: 'Build Tool', url: 'https://vitejs.dev/' },
        { icon: 'vitest', color: '#6E9F18', title: 'Vitest', desc: 'Testing Framework', url: 'https://vitest.dev/' },
        { icon: 'vitepress', color: '#5C73E7', title: 'VitePress', desc: 'Static Site Generator', url: 'https://vitepress.dev/' },
        { icon: '/images/vue-i18n-logo.svg', title: 'Vue I18n', desc: 'Internationalization plugin', url: 'https://vue-i18n.intlify.dev/' },
        { icon: 'vuedotjs', color: '#34495e', title: 'Vue Router', desc: 'Client-side routing', url: 'https://router.vuejs.org/' },
        { icon: '/images/vueuse.svg', title: 'VueUse', desc: 'Composition Utilities', url: 'https://vueuse.org/' },
        { icon: 'nuxt', color: '#00DC82', title: 'Nuxt', desc: 'Progressive Web Framework', url: 'https://nuxt.com/' },
        { icon: '/images/Pinialogo.svg', title: 'Pinia', desc: 'State Management', url: 'https://pinia.vuejs.org/' },

        { icon: 'capacitor', color: '#119EFF', title: 'Capacitor', desc: 'Native runtime for web app', url: 'https://capacitorjs.com/', wishlist: true },
    ]},
    { icon: '/images/Microsoft_Azure.svg', color: '#38c1f0', title: 'Azure', desc: 'Azure là nền tảng đám mây đáng tin cậy để xây dựng, triển khai và quản lý các giải pháp sáng tạo.', url: 'https://azure.microsoft.com/en-us', items: [
        { icon: '/images/azure-icons/devops/10261-icon-service-Azure-DevOps.svg', title: 'DevOps', desc: 'Build and deploy applications', url: 'hhttps://azure.microsoft.com/en-us/products/devops/' },
        { icon: '/images/azure-icons/app services/10035-icon-service-App-Services.svg', title: 'App Service', desc: 'Web apps and APIs', url: 'https://azure.microsoft.com/en-us/products/app-service' },
        { icon: '/images/azure-icons/networking/10061-icon-service-Virtual-Networks.svg', title: 'Virtual Networks', desc: 'Private network', url: 'https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-overview' },
        { icon: '/images/azure-icons/monitor/00012-icon-service-Application-Insights.svg', title: 'Application Insights', desc: 'Real-time monitoring of applications', url: 'https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview' },
        { icon: '/images/azure-icons/containers/10104-icon-service-Container-Instances.svg', title: 'Container Instances', desc: 'Run a container', url: 'https://azure.microsoft.com/en-us/products/container-instances/' },
        { icon: '/images/azure-icons/security/10245-icon-service-Key-Vaults.svg', title: 'Key Vaults', desc: 'Storing and accessing secrets', url: 'https://azure.microsoft.com/en-us/products/key-vault/' },
        { icon: '/images/azure-icons/networking/10067-icon-service-Network-Security-Groups.svg', title: 'Network Security Groups', desc: 'Internal network firewall', url: 'https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview' },
        { icon: '/images/azure-icons/networking/10064-icon-service-DNS-Zones.svg', title: 'DNS Zones', desc: 'Host DNS domain', url: 'https://azure.microsoft.com/en-us/products/dns/' },
        { icon: '/images/azure-icons/compute/10028-icon-service-Virtual-Machines-(Classic).svg', title: 'Virtual Machine', desc: 'Computing resources', url: 'https://azure.microsoft.com/en-us/products/virtual-machines/' },
    ]},
    { icon: '/images/Amazon_Web_Services_Logo.svg', color: '#f59e0b', title: 'AWS', desc: `Amazon Web Services (AWS) là nền tảng đám mây toàn diện và được áp dụng rộng rãi nhất trên thế giới, cung cấp hơn 200 dịch vụ đầy đủ tính năng từ các trung tâm dữ liệu trên toàn cầu.`, url: 'https://aws.amazon.com/', items: [
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Front-End-Web-Mobile/16/Arch_AWS-Amplify_16.svg', title: 'Amplify', desc: 'Full-stack web & mobile development', url: 'https://aws.amazon.com/amplify' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Storage/16/Arch_Amazon-Simple-Storage-Service_16.svg', title: 'S3', desc: 'Simple Storage Service', url: 'https://aws.amazon.com/s3' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Networking-Content-Delivery/16/Arch_Amazon-CloudFront_16.svg', title: 'CloudFront', desc: 'CDN service', url: 'https://aws.amazon.com/cloudfront' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Networking-Content-Delivery/16/Arch_Amazon-Route-53_16.svg', title: 'Route 53', desc: 'DNS service', url: 'https://aws.amazon.com/route53' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Compute/16/Arch_Amazon-EC2_16.svg', title: 'EC2', desc: 'Compute in the Cloud', url: 'https://aws.amazon.com/ec2' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Security-Identity-Compliance/16/Arch_AWS-IAM-Identity-Center_16.svg', title: 'IAM', desc: 'Identity and Access Management', url: 'https://aws.amazon.com/iam' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Management-Governance/16/Arch_AWS-CloudFormation_16.svg', title: 'CloudFormation', desc: 'IaC service', url: 'https://aws.amazon.com/cloudformation' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Security-Identity-Compliance/16/Arch_Amazon-Cognito_16.svg', title: 'Cognito', desc: 'Customer IaC service', url: 'https://aws.amazon.com/cognito' },
        { icon: '/images/aws-icons/Architecture-Service-Icons_02072025/Arch_Database/16/Arch_Amazon-DynamoDB_16.svg', title: 'DynamoDB', desc: 'NoSQL database', url: 'https://aws.amazon.com/dynamodb' }
    ]},
    {break:true},
    { icon: '/images/frontend.png', color: '#F7DF1E', title: 'Front-end', items: [
        { icon: 'html5', color: '#E34F26', title: 'HTML', desc: 'Hyper Text Markup Language', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { icon: 'css', color: '#663399', title: 'CSS', desc: 'Cascading Style Sheets', url: 'https://github.com/CSS-Next/css-next' },
        { icon: 'javascript', color: '#F7DF1E', title: 'JavaScript', desc: 'Web Programming Language', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        
        { break: true },
        { icon: 'tailwindcss', color: '#06B6D4', title: 'Tailwind CSS', desc: 'Utility-first CSS framework', url: 'https://tailwindcss.com/' },
        { icon: 'sass', color: '#CC6699', title: 'Sass', desc: 'CSS extension language', url: 'https://sass-lang.com/' },
        { icon: 'less', color: '#1D365D', title: 'Less', desc: 'CSS extension language', url: 'https://lesscss.org/' },
        { icon: 'bootstrap', color: '#7952B3', title: 'Bootstrap', desc: 'Responsive UI toolkit', url: 'https://getbootstrap.com/' },
        { icon: 'typescript', color: '#3178C6', title: 'TypeScript', desc: 'Strongly typed JS', url: 'https://www.typescriptlang.org/' },
        { icon: 'jquery', color: '#0769AD', title: 'jQuery', desc: 'JavaScript library', url: 'https://jquery.com/' },

        { break: true },
        { icon: 'git', color: '#F05032', title: 'Git', desc: 'Version control system', url: 'https://git-scm.com/' },
        { icon: 'github', title: 'GitHub', desc: 'Developer platform', url: 'https://github.com/' },
        { icon: 'bitbucket', color: '#0052CC', title: 'Bitbucket', desc: 'Git solution for Jira', url: 'https://bitbucket.org/product/' },

        { break: true },
        { icon: 'npm', color: '#CB3837', title: 'npm', desc: 'Package manager', url: 'https://www.npmjs.com/' },
        { icon: 'bun', title: 'Bun', desc: 'JS runtime', url: 'https://bun.com/' },
        { icon: 'webpack', color: '#8DD6F9', title: 'Webpack', desc: 'Module bundlers', url: 'https://webpack.js.org/' },
        { icon: 'grunt', color: '#FAA918', title: 'Grunt', desc: 'JavaScript Task Runner', url: 'https://gruntjs.com/' },
        { icon: 'gulp', color: '#CF4647', title: 'gulp', desc: 'JavaScript build pipelines', url: 'https://gulpjs.com/' },

        { break: true },
        { icon: 'webcomponentsdotorg', color: '#29ABE2', title: 'webcomponents.org', desc: 'Web standards components', url: 'https://www.webcomponents.org/' },
        { icon: 'pwa', color: '#5A0FC8', title: 'PWA', desc: 'Progressive Web App', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps' },
        { icon: 'lighthouse', color: '#F44B21', title: 'Lighthouse', desc: 'Webpage audit tool', url: 'https://developer.chrome.com/docs/lighthouse/overview' },

        { icon: 'flutter', color: '#02569B', title: 'Flutter', desc: 'Multi-platform framework', url: 'https://flutter.dev/', wishlist: true },
    ]},
    { icon: '/images/backend.png', color: '#25a1e8', title: 'Back-end', items: [
        { icon: 'dotnet', color: '#512BD4', title: '.NET', desc: 'Cross-platform framework', url: 'https://dotnet.microsoft.com/en-us/' },
        { icon: 'mysql', color: '#4479A1', title: 'MySQL', desc: 'Open source database', url: 'https://www.mysql.com/' },
        { icon: 'redis', color: '#FF4438', title: 'Redis', desc: 'Data caching', url: 'https://redis.io/' },
        { icon: 'rabbitmq', color: '#FF6600', title: 'RabbitMQ', desc: 'Message broker', url: 'https://www.rabbitmq.com/' },
        { icon: 'elasticsearch', color: '#005571', title: 'Elasticsearch', desc: 'Search engine', url: 'https://www.elastic.co/elasticsearch' },
        { icon: 'nginx', color: '#009639', title: 'NGINX', desc: 'Web server', url: 'https://nginx.org/' },
        { icon: 'jsonwebtokens', title: 'JSON Web Tokens', desc: 'Authentication standard', url: 'https://jwt.io/' },
        { icon: 'graphql', color: '#E10098', title: 'GraphQL', desc: 'Query language for APIs', url: 'https://graphql.org/' },

        { break: true },
        { icon: 'php', color: '#777BB4', title: 'PHP', desc: 'Scripting language', url: 'https://www.php.net/' },
        { icon: 'yii', color: '#40B3D8', title: 'Yii', desc: 'PHP framework', url: 'https://www.yiiframework.com/' },
        { icon: 'humhub', color: '#1B8291', title: 'HumHub', desc: 'Organization community', url: 'https://www.humhub.com/en/' },
        { icon: 'composer', color: '#885630', title: 'Composer', desc: 'PHP Dependency Manager', url: 'https://getcomposer.org/' },
    ]},
    {icon: '/images/devops.png', color: '#7819f3', title: 'DevOps', items: [
        { icon: 'docker', color: '#2496ED', title: 'Docker', desc: 'Containerized app', url: 'https://www.docker.com/' },
        { icon: 'linux', color: '#FCC624', title: 'Linux', desc: 'OS kernel', url: 'https://kernel.org/' },
        { icon: 'python', color: '#3776AB', title: 'Python', desc: 'Programming language', url: 'https://www.python.org/' },
        { icon: 'grafana', color: '#F46800', title: 'Grafana', desc: 'Infrastructure monitoring', url: 'https://grafana.com/' },
    ]}
]
</script>

<Accordion :data="skillset" />

## 🏅 Chứng nhận {#certifications}

<Cert />
