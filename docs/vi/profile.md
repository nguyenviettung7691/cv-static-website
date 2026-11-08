---
title: Hồ sơ
layout: doc
---

# Hồ sơ {#profile}

<script setup lang="ts">
import ProfileContent, { type ProfileContentData } from '../components/ProfileContent.vue'

const profile: ProfileContentData = {
    "intro": {
        "title": "🙋 Giới thiệu",
        "caption": "Ấn tượng ban đầu rất quan trọng.",
        "paragraphs": [
            "Trưởng nhóm Kỹ thuật & Kiến trúc sư Full-Stack với hơn 10 năm kinh nghiệm phát triển ứng dụng web, dẫn dắt quá trình chuyển đổi sang kiến ​​trúc cloud-native và hiện đại hóa kiến ​​trúc hệ thống doanh nghiệp.",
            "Tôi chuyên về việc kết nối hệ thống front-end với cơ sở hạ tầng đám mây, ứng dụng các mô hình kiến ​​trúc (BFF, microservices), các giao thức bảo mật (xác thực sinh trắc học FIDO, JWT, OIDC) và quy trình DevOps tự động hóa."
        ],
        "capabilitiesTitle": "Những đóng góp và năng lực cốt lõi:",
        "capabilities": [
            {
                "icon": "🎯",
                "title": "Lãnh đạo Kỹ thuật",
                "description": "Dẫn dắt các nhóm Scrum đa chức năng triển khai nền tảng cho các khách hàng toàn cầu như FUJIFILM, Hitachi Solutions và Bộ Giáo dục Singapore."
            },
            {
                "icon": "☁️",
                "title": "Cloud & Cơ sở hạ tầng",
                "description": "Chuyên gia được Microsoft chứng nhận (Azure Administrator) với kinh nghiệm về IaC, triển khai ứng dụng dạng container, giám sát ứng dụng và các dịch vụ serverless của AWS."
            },
            {
                "icon": "🏗️",
                "title": "Kiến trúc Frontend",
                "description": "Chuyên môn sâu về Vue 3 (Pinia, PrimeVue) cũng như kinh nghiệm thực tế với React và .NET Core; có bề dày thành tích trong việc hiện đại hóa các hệ thống cũ (legacy systems) và giảm thiểu nợ kỹ thuật."
            },
            {
                "icon": "🤖",
                "title": "Quy trình làm việc hỗ trợ bởi AI",
                "description": "Tích hợp GitHub Copilot và các công cụ AI vào chu trình triển khai nhằm đẩy nhanh quá trình phân tích kỹ thuật, phát triển và kiểm thử tự động."
            }
        ]
    },
    "services": {
        "title": "🖥️ Dịch vụ",
        "cards": [
            {
                "id": "🎯-truong-nhom-nguoi-to-chuc",
                "title": "🎯 Trưởng nhóm & Người tổ chức",
                "caption": "Với sức mạnh lớn đi kèm trách nhiệm lớn",
                "description": "Có kinh nghiệm áp dụng phương pháp Scrum và Agile, dẫn dắt các nhóm liên chức năng gồm lập trình viên, kiểm thử viên và chuyên viên phân tích nghiệp vụ, đồng thời quản lý việc làm rõ yêu cầu và ước lượng kỹ thuật ở cấp độ tổng thể."
            },
            {
                "id": "💡-tao-ra-giai-phap-ky-thuat",
                "title": "💡 Tạo ra giải pháp kỹ thuật",
                "caption": "Kế hoạch cẩn thận sẽ giúp đi một chặng đường dài",
                "description": "Thành thạo trong việc nghiên cứu và lựa chọn các giải pháp kỹ thuật phù hợp, cân bằng giữa nhu cầu kinh doanh, giới hạn kỹ thuật và yêu cầu tuân thủ. Có kinh nghiệm với kiến trúc web hiện đại như BFF (Backend for Frontend), SPA (Single Page Application) và MVC (Model–View–Controller), cùng khả năng xây dựng các giải pháp có khả năng mở rộng trên nền tảng điện toán đám mây AWS và Azure."
            },
            {
                "id": "🌐-phat-trien-web",
                "title": "🌐 Phát triển web",
                "caption": "Có rất nhiều công cụ để lựa chọn, cách bạn sử dụng chúng là tùy thuộc vào bạn",
                "description": "Lập trình viên Web full-stack, thành thạo cả front-end và back-end, với kinh nghiệm sử dụng Vue.js, PHP, .NET Core, cùng khả năng triển khai ứng dụng bằng Docker. Có kinh nghiệm trong tích hợp điện toán đám mây (AWS, Azure), quy trình build hiện đại, và giải pháp cơ sở dữ liệu sử dụng MySQL, Elasticsearch, và Redis."
            },
            {
                "id": "📱-thiet-ke-di-đong",
                "title": "📱 Thiết kế Di động",
                "caption": "Web xứng đáng có trải nghiệm ứng dụng di động riêng",
                "description": "Thành thạo trong việc thiết kế giao diện cho thiết bị di động bằng cách tối ưu ứng dụng web theo tiêu chuẩn PWA (Progressive Web App), triển khai thiết kế đáp ứng (responsive design) với CSS media queries, và đảm bảo giao diện người dùng cùng hành vi JavaScript nhất quán trên các trình duyệt và thiết bị khác nhau."
            }
        ]
    },
    "bio": {
        "title": "📋 Thông tin cá nhân",
        "caption": "Bạn không nên đánh mất bản sắc của mình.",
        "facts": [
            {
                "icon": "🎂",
                "label": "Năm sinh",
                "value": "1991"
            },
            {
                "icon": "📍",
                "label": "Địa điểm",
                "value": "Sài Gòn, Việt Nam"
            },
            {
                "icon": "📧",
                "label": "Email",
                "value": "nvtung.harry@gmail.com",
                "href": "mailto:nvtung.harry@gmail.com"
            }
        ],
        "cv": "⬇️ TẢI XUỐNG CV"
    },
    "languages": {
        "title": "🗣 Ngôn ngữ",
        "caption": "Ngôn ngữ là con đường đến tri thức.",
        "items": [
            {
                "country": "vn",
                "name": "Tiếng Việt",
                "proficiency": "bản xứ"
            },
            {
                "country": "us",
                "name": "Tiếng Anh (Mỹ)",
                "proficiency": "lưu loát"
            },
            {
                "country": "jp",
                "name": "Tiếng Nhật",
                "proficiency": "tập tành"
            }
        ],
        "links": [
            {
                "label": "Hồ sơ Duolingo",
                "href": "https://www.duolingo.com/profile/nvtun"
            },
            {
                "label": "Hồ sơ Renshuu",
                "href": "https://www.renshuu.org/me/1487606&profile"
            }
        ]
    },
    "interests": {
        "title": "🥰 Sở thích",
        "caption": "Ai cũng nên được sống & theo đuổi đam mê.",
        "groups": [
            {
                "title": "Đầu tư",
                "items": [
                    "📈 Chứng khoán",
                    "💻 Thi lấy bằng"
                ]
            },
            {
                "title": "Thể thao",
                "items": [
                    "⚽ Bóng đá",
                    "🏃 Chạy bộ",
                    "🏹 Bắn cung"
                ]
            },
            {
                "title": "Giải trí",
                "items": [
                    "🎮 Trò chơi điện tử",
                    "📹 Biên tập phim ảnh",
                    "🗾 Văn hóa Nhật Bản"
                ]
            }
        ]
    }
}
</script>

<ProfileContent :data="profile" />
