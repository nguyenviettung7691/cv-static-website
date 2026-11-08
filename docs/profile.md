---
title: Profile
layout: doc
---

# Profile {#profile}

<script setup lang="ts">
import ProfileContent, { type ProfileContentData } from './components/ProfileContent.vue'

const profile: ProfileContentData = {
    "intro": {
        "title": "🙋 Introduction",
        "caption": "First impression is important.",
        "paragraphs": [
            "Technical Lead & Full-Stack Architect with 10+ years of experience engineering web applications, leading cloud-native migrations, and modernizing enterprise architectures.",
            "I specialize in bridging front-end systems with cloud infrastructure—leveraging architectural patterns (BFF, microservices), security protocols (FIDO biometric auth, JWT, OIDC), and automated DevOps pipelines."
        ],
        "capabilitiesTitle": "Core Impact & Capabilities:",
        "capabilities": [
            {
                "icon": "🎯",
                "title": "Technical Leadership",
                "description": "Led cross-functional Scrum teams delivering platforms for global clients including FUJIFILM, Hitachi Solutions, and the Singapore Ministry of Education."
            },
            {
                "icon": "☁️",
                "title": "Cloud & Infrastructure",
                "description": "Microsoft Certified Azure Administrator experienced in IaC, containerized app deployments, application monitoring, and AWS serverless services."
            },
            {
                "icon": "🏗️",
                "title": "Frontend Architecture",
                "description": "Deep expertise in Vue 3 (Pinia, PrimeVue), as well as hands-on experience with React and .NET Core, with a proven history of modernizing legacy systems and reducing technical debt."
            },
            {
                "icon": "🤖",
                "title": "AI-Assisted Workflow",
                "description": "Integrating GitHub Copilot and AI tooling into delivery cycles to accelerate technical analysis, implementation, and automated testing."
            }
        ]
    },
    "services": {
        "title": "🖥️ Services",
        "cards": [
            {
                "id": "🎯-team-leader-organizer",
                "title": "🎯 Team Leader & Organizer",
                "caption": "With great power comes great responsibility",
                "description": "Experienced in applying Scrum and Agile methodologies, leading cross-functional teams of developers, testers, and business analysts, and managing requirement clarification and high-level technical estimation."
            },
            {
                "id": "💡-technical-solution-maker",
                "title": "💡 Technical Solution Maker",
                "caption": "Careful planning will go a long way",
                "description": "Skilled in researching and selecting technical solutions that balance business needs, technical limitations, and compliance requirements. Experienced with modern web architectures, including BFF, SPA, and MVC, and adept at building scalable solutions using AWS and Azure cloud services."
            },
            {
                "id": "🌐-web-development",
                "title": "🌐 Web Development",
                "caption": "So many tools to choose from, how you use them is up to you",
                "description": "Full-stack web developer skilled in both front-end and back-end technologies, including Vue.js, PHP, .NET Core, and containerized deployments with Docker. Experienced in cloud integration (AWS, Azure), modern build pipelines, and database solutions using MySQL, Elasticsearch, and Redis."
            },
            {
                "id": "📱-mobile-design",
                "title": "📱 Mobile Design",
                "caption": "Web deserves to have their own mobile app experience",
                "description": "Skilled in designing for mobile by optimizing web apps to PWA standards, implementing responsive design with CSS media queries, and ensuring consistent UI and JavaScript behavior across browsers and devices."
            }
        ]
    },
    "bio": {
        "title": "📋 Bio",
        "caption": "You shouldn't lose sight of who you are.",
        "facts": [
            {
                "icon": "🎂",
                "label": "Birth year",
                "value": "1991"
            },
            {
                "icon": "📍",
                "label": "Location",
                "value": "Saigon, Vietnam"
            },
            {
                "icon": "📧",
                "label": "Email",
                "value": "nvtung.harry@gmail.com",
                "href": "mailto:nvtung.harry@gmail.com"
            }
        ],
        "cv": "⬇️ DOWNLOAD CV"
    },
    "languages": {
        "title": "🗣 Languages",
        "caption": "Language is the pathway to knowledge.",
        "items": [
            {
                "country": "vn",
                "name": "Vietnamese",
                "proficiency": "native"
            },
            {
                "country": "us",
                "name": "English (US)",
                "proficiency": "fluent"
            },
            {
                "country": "jp",
                "name": "Japanese",
                "proficiency": "elementary"
            }
        ],
        "links": [
            {
                "label": "Duolingo profile",
                "href": "https://www.duolingo.com/profile/nvtun"
            },
            {
                "label": "Renshuu profile",
                "href": "https://www.renshuu.org/me/1487606&profile"
            }
        ]
    },
    "interests": {
        "title": "🥰 Interests",
        "caption": "Everyone is free to live & pursue their passions.",
        "groups": [
            {
                "title": "Investments",
                "items": [
                    "📈 Stocks trade",
                    "💻 Certificated"
                ]
            },
            {
                "title": "Sports",
                "items": [
                    "⚽ Football",
                    "🏃 Running",
                    "🏹 Archery"
                ]
            },
            {
                "title": "Recreations",
                "items": [
                    "🎮 Video game",
                    "📹 Media editing",
                    "🗾 Japan culture"
                ]
            }
        ]
    }
}
</script>

<ProfileContent :data="profile" />
