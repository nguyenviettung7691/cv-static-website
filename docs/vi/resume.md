---
title: Chuyên môn
layout: doc
---

# Chuyên môn {#resume}

<script setup>
const experiences = [
    {
        start: '2026-01',
        title: 'Tư vấn và triển khai CNTT cấp cao',
        org: 'Hitachi Digital',
        orgUrl: 'https://www.hitachidigital.com/',
        logo: '/images/Employer_4.png',
        roles: [
            { name: 'Trưởng nhóm Kỹ thuật (Tech Lead)', html: `<ul><li>Nền tảng Chế bản Điện tử: Khách hàng ký hợp đồng là FUJIFILM (Nhật Bản) - Đảm nhiệm vai trò Trưởng nhóm Kỹ thuật (Technical Lead) trong dự án hiện đại hóa ứng dụng desktop (MakeReady) – công cụ được sử dụng để tùy chỉnh tài liệu in ấn; chịu trách nhiệm định hướng kiến ​​trúc front-end, phát triển tính năng xử lý song song và tái cấu trúc nền tảng hệ thống bằng cách sử dụng ElectronJS, ReactJS, NestJS và fabric.js.</li></ul>` },
            { name: 'Kỹ sư Cao cấp (Senior Engineer)', html: `<ul><li>Hệ thống Tự động hóa Tài liệu Doanh nghiệp: Khách hàng ký hợp đồng là FUJIFILM (Nhật Bản) - Phát triển các tính năng quy trình xử lý (pipeline) đa bước có thể tùy chỉnh và tích hợp thông báo qua Microsoft Teams trong hệ sinh thái đám mây (IWPro) gồm hơn 50 microservice, sử dụng Node.js, AWS Lambda, SQS và DocumentDB.</li><li>Nền tảng ESG & Kiểm kê Carbon: Khách hàng ký hợp đồng là Hitachi Solutions (Nhật Bản) - Xây dựng ứng dụng web client (EcoAssist) bằng Vue 3/PrimeVue, bao gồm các quy trình chuyển đổi dữ liệu tiện ích thô sang đơn vị tCO2, lập báo cáo tuân thủ Scope 1 & 2, và theo dõi vòng đời tín chỉ carbon.</li></ul>` },
        ],
    },
    {
        start: '2020-09',
        end: '2025-12',
        title: 'Kỹ sư phần mềm cao cấp',
        org: 'Orient Software Development Corp.',
        orgUrl: 'https://www.orientsoftware.net/',
        logo: '/images/Employer_2.png',
        roles: [
            { name: 'Tech Lead (Bộ Giáo dục Singapore)', html: `<p>Dẫn dắt một nhóm Scrum phát triển nền tảng học trực tuyến OPAL (phân hệ CSL), giúp cải thiện đáng kể độ tin cậy và tính ổn định của hệ thống thông qua việc giải quyết triệt để các vấn đề SSAT và SPT.</p>` },
            { name: 'Senior Fullstack Developer (Conexus - Na Uy)', html: `<p>Hiện đại hóa các sản phẩm web (Elevate, Engage, FollowUp) bằng cách triển khai kiến ​​trúc BFF, xác thực JWT, Vue.js/Pinia, .NET Core và xây dựng các bản thử nghiệm (POC) cho xác thực sinh trắc học FIDO.</p>` },
            { name: 'DevOps Engineer (Conexus - Na Uy)', html: `<p>Thực hiện chuyển đổi hệ thống từ máy chủ tại chỗ (BaseFarm) sang Azure Cloud; thiết lập quy trình triển khai tự động, đóng gói ứng dụng (containerization) và triển khai hạ tầng dưới dạng mã nguồn (IaC).</p><ul><li>Dự án mã nguồn mở: Phát triển công cụ tối ưu hóa chính sách Azure Firewall (Azure Firewall Policy Optimizer) để phân tích tệp JSON của ARM template, giúp loại bỏ các quy tắc dư thừa và đơn giản hóa việc quản lý bảo mật trên đám mây. <a href="https://github.com/nguyenviettung7691/azure-firewall-policy-optimizer" target="_blank" rel="noopener noreferrer">Github</a></li></ul>` },
        ],
    },
    {
        start: '2018-01',
        end: '2020-09',
        title: 'Lập trình viên phần mềm cấp cao',
        org: 'Conexus AS',
        orgUrl: 'https://www.conexus.net/',
        logo: '/images/Employer_3.png',
        roles: [
            { name: 'Tech Lead (Bộ Giáo dục Singapore)', html: `<p>Dẫn dắt một nhóm Scrum phát triển các tính năng full-stack cho nền tảng học trực tuyến OPAL (phân hệ CSL), đồng thời nâng cao độ ổn định của sản phẩm thông qua việc giải quyết hiệu quả các vấn đề SSAT và SPT.</p>` },
            { name: 'Senior Frontend Developer (Conexus & Conexus SG - Na Uy)', html: `<p>Hiện đại hóa kiến ​​trúc web client bằng cách nâng cấp các thư viện cũ, xây dựng các thành phần web có thể tái sử dụng và tối ưu hóa quy trình làm việc phía client cho các sản phẩm như Conexus Companion và Coursepad.</p>` },
        ],
    },
    {
        start: '2014-10',
        end: '2018-01',
        title: 'Nhà phát triển Frontend',
        org: 'Orient Software Development Corp.',
        orgUrl: 'https://www.orientsoftware.net/',
        logo: '/images/Employer_2.png',
        roles: [
            { name: 'Khách hàng: Conexus (Na Uy).', html: `<ul><li>Phát triển Web Responsive: Xây dựng và duy trì các ứng dụng web có khả năng thích ứng linh hoạt (responsive) sử dụng ASP.NET MVC (Razor), jQuery và LESS.</li><li>Tối ưu hóa Hiệu năng & UX: Đảm bảo khả năng tương thích trên nhiều trình duyệt, tối ưu hóa việc gộp tài nguyên (asset bundling) bằng Microsoft Optimization, đồng thời thiết kế kiến ​​trúc JavaScript dạng mô-đun kết hợp với đồ họa UI/UX tùy chỉnh.</li></ul>` },
        ],
    },
    {
        start: '2013-10',
        end: '2014-09',
        title: 'Nhà phát triển Fullstack',
        org: 'F2Tech (từng là VNYI)',
        orgUrl: 'https://f2tech.asia/',
        logo: '/images/Employer_1.png',
        roles: [
            { name: 'Nhà tuyển dụng: F2Tech.Asia (trước đây là VNYI) - Việt Nam.', html: `<ul><li>Phát triển sản phẩm đa nền tảng: Xây dựng các sản phẩm cốt lõi trên nền tảng desktop (C# WinForms, DevExpress), web (ExtJS) và di động lai/hybrid (Cordova, Telerik, Kendo UI).</li><li>Tối ưu hóa cơ sở dữ liệu: Thiết kế và duy trì các stored procedure phức tạp trên SQL Server nhằm đảm bảo độ tin cậy cao của dữ liệu và hiệu suất truy vấn.</li></ul>` },
        ],
    },
]

const certifications = [
    {
        title: 'Nhà phát triển được chứng nhận Claude - Nền tảng',
        url: 'https://www.credly.com/badges/8ee7fc55-e289-4861-ab44-9ca6b2737c6d/public_url',
        issuer: 'Anthropic',
        issuerUrl: 'https://www.credly.com/org/anthropic',
        logo: 'https://devicons.io/devicons/icons/anthropic-icon.svg',
        issued: '2026-11',
        desc: `<p>Người đạt chứng nhận có khả năng xây dựng, tích hợp và triển khai các ứng dụng cũng như tác nhân (agent) thực tế trên nền tảng Claude, thông qua việc sử dụng Claude API, Claude Code, các công cụ tùy chỉnh và máy chủ MCP.</p>`,
    },
    {
        title: 'Chứng chỉ Microsoft: Chuyên viên Quản trị Azure',
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/C1C5BBCDD21770C3?sharingId=5F11ACC34CA524D',
        issuer: 'Microsoft Credentials',
        issuerUrl: 'https://learn.microsoft.com/en-us/credentials/',
        logo: 'https://devicons.io/devicons/icons/microsoft-azure.svg',
        issued: '2026-06',
        desc: `<p>Thể hiện các kỹ năng then chốt trong việc cấu hình, quản lý, bảo mật và vận hành các chức năng chuyên môn quan trọng trong Microsoft Azure.</p>`,
    },
    {
        title: 'Lập trình viên JavaScript cao cấp được chứng nhận',
        url: 'https://certificates.dev/javascript/certificates/a14392fa-86d6-4a2e-9154-32ccedf0f9af',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/javascript/',
        logo: 'https://cdn.simpleicons.org/javascript',
        issued: '2026-03',
        desc: `<p>Thể hiện trình độ thành thạo trong lập trình bất đồng bộ nâng cao, kiểm thử và giảm thiểu lỗ hổng bảo mật với tư cách là một lập trình viên Javascript cấp cao.</p>`,
    },
    {
        title: 'Nhà phát triển JavaScript cấp trung được chứng nhận',
        url: 'https://certificates.dev/javascript/certificates/a0444290-62ca-4f5c-bb46-90ed9228b6ef',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/javascript/',
        logo: 'https://cdn.simpleicons.org/javascript',
        issued: '2025-11',
        desc: `<p>Đã chứng minh được năng lực thành thạo trong thao tác DOM nâng cao và các chức năng như một nhà phát triển Javascript trung cấp.</p>`,
    },
    {
        title: 'Nhà phát triển Vue.js cao cấp được chứng nhận',
        url: 'https://certificates.dev/vuejs/certificates/a035486e-e918-44ac-98fd-d6ef9a74bbc4',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/vuejs/',
        logo: 'https://cdn.simpleicons.org/vuedotjs',
        issued: '2025-10',
        desc: `<p>Đã chứng minh được sự phù hợp, các khái niệm nâng cao và các yếu tố cần thiết đối với một Nhà phát triển Vue.js cao cấp.</p>`,
    },
    {
        title: 'Nhà phát triển JavaScript cấp cơ sở được chứng nhận',
        url: 'https://certificates.dev/c/9f981598-89ce-4208-b545-8766a6e20fae',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/javascript/',
        logo: 'https://cdn.simpleicons.org/javascript',
        issued: '2025-08',
        desc: `<p>Đã chứng minh được các kỹ năng cơ bản, cam kết học tập với tư cách là nhà phát triển Javascript cơ bản.</p>`,
    },
    {
        title: 'Nhà phát triển Vue.js cấp trung được chứng nhận',
        url: 'https://certificates.dev/vuejs/certificates/9cf3a5b7-fd94-4a17-ab22-6d17596e6c56',
        issuer: 'Certificates.Dev',
        issuerUrl: 'https://certificates.dev/vuejs/',
        logo: 'https://cdn.simpleicons.org/vuedotjs',
        issued: '2024-09',
        desc: `<p>Đã chứng minh được năng lực cần thiết để sử dụng framework ở mức tối đa và khả năng mang lại kết quả tốt nhất có thể trong vai trò là Nhà phát triển Vue.js.</p>`,
    },
    {
        title: 'Chứng nhận Microsoft: Azure Fundamentals',
        url: 'https://learn.microsoft.com/api/credentials/share/en-us/nvtung/6A08F9787FA7B1F4?sharingId=5F11ACC34CA524D',
        issuer: 'Microsoft Credentials',
        issuerUrl: 'https://learn.microsoft.com/vi-vn/credentials/',
        logo: 'https://devicons.io/devicons/icons/microsoft-azure.svg',
        issued: '2023-03',
        desc: `<p>Thể hiện kiến thức cơ bản về dịch vụ đám mây và cách cung cấp các dịch vụ đó với Microsoft Azure.</p>`,
    },
    {
        title: 'Chuyên gia đám mây được chứng nhận AWS',
        url: 'https://www.credly.com/badges/b50d2d25-4689-4489-bc3b-440e985a5128/public_url',
        issuer: 'AWS Training and Certification',
        issuerUrl: 'https://aws.amazon.com/vi/training/',
        logo: 'https://devicons.io/devicons/icons/aws.svg',
        issued: '2022-04',
        expires: '2025-04',
        desc: `<p>Đã chứng minh được sự thành thạo về đám mây và kiến thức nền tảng về AWS. Người sở hữu huy hiệu có thể xác định các dịch vụ AWS thiết yếu cần thiết để thiết lập các dự án tập trung vào AWS.</p>`,
    },
    {
        title: 'Chứng nhận EF SET 79/100 (THÀNH THẠO C2)',
        url: 'https://cert.efset.org/vi/Yr64ri',
        issuer: 'EF SET (Education First - Standard English Test)',
        issuerUrl: 'https://www.efset.org/vi/english-certificate/',
        logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/EF_SET_logo.svg',
        issued: '2022-02',
        desc: `<p>Đã được chứng minh là có thể hiểu:</p><ul><li>Hầu như mọi thứ nghe hoặc đọc đều dễ dàng</li><li>Tất cả ngôn ngữ nói với tốc độ nhanh, bản ngữ</li><li>Văn bản trừu tượng, phức tạp về cấu trúc và các tác phẩm văn học</li></ul>`,
    },
    {
        title: 'TOEIC (955/990)',
        issuer: 'IIG Vietnam',
        issuerUrl: 'https://iigvietnam.com/bai-thi-toeic/',
        logo: 'https://elearning.iigvietnam.com/Favicon.png',
        issued: '2014-03',
        expires: '2016-03',
        desc: `<p>Bài thi TOEIC đã được sử dụng làm chuẩn đánh giá các kỹ năng Nghe hiểu và Đọc hiểu tiếng Anh – hai kỹ năng thiết yếu trong môi trường làm việc quốc tế.</p>`,
    },
    {
        title: 'TOEFL ITP (573/677)',
        issuer: 'IIG Vietnam',
        issuerUrl: 'https://iigvietnam.com/bai-thi-toefl-itp/',
        logo: 'https://elearning.iigvietnam.com/Favicon.png',
        issued: '2009-11',
        expires: '2011-11',
        desc: `<p>Bài thi TOEFL ITP là bài thi đánh giá trình độ sử dụng tiếng Anh dành cho những người sử dụng Tiếng Anh như một ngoại ngữ. Đây là bài thi học thuật, dùng để đánh giá trình độ Anh Ngữ của các học viên từ bậc trung cấp đến cao cấp.</p>`,
    },
    {
        title: 'Cử nhân - Kỹ thuật phần mềm, Khoa Công nghệ thông tin',
        issuer: 'Đại học Hoa Sen',
        issuerUrl: 'https://www.hoasen.edu.vn/dao-tao/dai-hoc/',
        logo: 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/DH-Hoa-Sen-Main-Icon.png',
        start: '2009-09',
        issued: '2014-03',
        desc: `<p>Đồ án tốt nghiệp: Xây dựng hệ thống quản lý quán cà phê đa nền tảng, bao gồm ứng dụng desktop C# WPF, ứng dụng khách trên Windows Phone, hệ thống backend SQL Server và sử dụng SignalR để đồng bộ hóa dữ liệu theo thời gian thực.</p>`,
    },
]

const products = [
    {
        img: '/images/Products_9.png',
        title: 'FUJIFILM IWpro',
        url: 'https://www.fujifilm.com/fbvn/vi/products/software/document-management/fujifilm-iwpro',
        org: 'FUJIFILM Business Innovation',
        orgNote: 'Vietnam',
        country: 'jp',
        countryName: 'Nhật Bản',
        desc: `FUJIFILM IWpro là giải pháp nền tảng bảo mật toàn diện cho việc số hóa doanh nghiệp, cung cấp không gian làm việc cộng tác, tối ưu hóa quy trình làm việc, quản lý tài liệu hiệu quả bao gồm siêu dữ liệu và tài liệu, cùng khả năng in ấn linh hoạt trên nền tảng đám mây.`
    },
    {
        img: '/images/Products_8.png',
        title: 'EcoAssist-Enterprise-Light',
        url: 'https://www.hitachi-solutions-create.co.jp/solution/ecoassist_enterprise_light/',
        org: 'Hitachi Solutions',
        country: 'jp',
        countryName: 'Nhật Bản',
        desc: `EcoAssist-Enterprise-Light đơn giản hóa việc nhập, tổng hợp và sử dụng dữ liệu môi trường, cho phép quản lý tập trung hiệu quả dữ liệu hiệu suất môi trường của công ty trên nhiều địa điểm.`
    },
    {
        img: '/images/Products_4.png',
        title: 'Elevate',
        url: 'https://www.conexus.net/produkter/elevate/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Na Uy',
        desc: `Conexus Elevate được thiết kế nhằm đáp ứng các yêu cầu ghi nhận và quản lý tài liệu trong môi trường giáo dục, giúp các thành viên trong nhóm xung quanh học sinh có thể phối hợp chặt chẽ để cùng giải quyết các thách thức trong quá trình học tập.`
    },
    {
        img: '/images/Products_5.png',
        title: 'Engage',
        url: 'https://www.conexus.net/produkter/engage/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Na Uy',
        desc: `Conexus Engage giúp hiển thị rõ những lĩnh vực mà từng học sinh hoặc cả lớp đang đạt kết quả tốt, cũng như những nơi cần được hỗ trợ thêm. Công cụ này hỗ trợ giáo viên xác định nhu cầu theo dõi và điều chỉnh phương pháp giảng dạy, đồng thời tạo nền tảng hữu ích cho việc trao đổi với phụ huynh.`
    },
    {
        img: '/images/Products_7.png',
        title: 'Insight',
        url: 'https://www.conexus.net/produkter/insight/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Na Uy',
        desc: `Conexus Insight là kho dữ liệu giá trị dành cho các nhà quản lý trường học và chủ sở hữu hệ thống giáo dục. Người dùng có thể xem tổng quan về kết quả học tập, tải xuống các mẫu báo cáo dựng sẵn, và truy cập dữ liệu từ Conexus Elevate, Conexus Engage hoặc các nguồn dữ liệu khác.`
    },
    {
        img: '/images/Products_6.png',
        title: 'Stafettloggen',
        url: 'https://www.conexus.net/produkter/stafettloggen/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Na Uy',
        desc: `Conexus Stafettloggen là nhật ký số hỗ trợ hợp tác liên ngành xoay quanh việc chăm sóc và phát triển của trẻ, được xây dựng dựa trên mô hình BTI (Better Interdisciplinary Efforts). Công cụ này cung cấp cái nhìn tổng quan về các chuyên viên tham gia, vai trò và biện pháp họ thực hiện, đồng thời đơn giản hóa việc phối hợp giữa phụ huynh, nhà trẻ, trường học, dịch vụ y tế và các cơ quan liên quan khác.`
    },
    {
        img: '/images/Products_3.png',
        title: 'OPAL 2.0',
        url: 'https://academyofsingaporeteachers.moe.edu.sg/professional-learning/opal/',
        org: 'Ministry of Education',
        country: 'sg',
        countryName: 'Singapore',
        desc: `OPAL 2.0 là nền tảng học tập số của Bộ Giáo dục Singapore (MOE) dành cho đội ngũ giáo viên và nhân viên giáo dục, được phát triển dựa trên triết lý “Sở hữu và Lãnh đạo trong Phát triển Nghề nghiệp” (PD Ownership and Leadership). Hệ thống được thiết kế hướng tới học tập cá nhân hóa và hợp tác, nhằm bồi dưỡng năng lực người học trong kỷ nguyên số thế kỷ 21.`
    },
    {
        img: '/images/Products_2.png',
        title: 'Coursepad',
        url: 'https://www.linkedin.com/company/coursepad/',
        org: 'Civil Service College',
        country: 'sg',
        countryName: 'Singapore',
        desc: `Coursepad là môi trường học tập thông minh và cá nhân hóa, cung cấp nội dung học tập hữu ích, phù hợp và phổ biến nhất nhằm tăng tốc quá trình học tập trong môi trường làm việc. Công cụ gợi ý (recommendation engine) của hệ thống tạo ra các đề xuất học tập có mức độ liên quan cao, dựa trên công việc, hồ sơ xã hội và hồ sơ học tập của người dùng, giúp các tổ chức lớn nâng cao kỹ năng đội ngũ nhân sự trên quy mô rộng.`
    },
    {
        img: '/images/Products_1.png',
        title: 'Quick Decision',
        url: 'https://f2tech.asia/solution/giai-phap',
        org: 'F2Tech',
        orgNote: 'từng là VNYI',
        country: 'vn',
        countryName: 'Việt Nam',
        desc: `Giải pháp hệ thống ERP dành cho doanh nghiệp trong lĩnh vực F&B (nhà hàng – thực phẩm & đồ uống). Sản phẩm đã được tái cấu trúc và phát triển thành nhiều giải pháp chuyên biệt phục vụ các nhu cầu khác nhau của ngành.`
    },
]
const clients = [
    {
        img: '/images/Clients_5.png',
        title: 'FUJIFILM Business Innovation',
        url: 'https://www.fujifilm.com/fbvn/vi',
        org: 'FUJIFILM Business Innovation',
        orgNote: 'Vietnam',
        country: 'jp',
        countryName: 'Nhật Bản',
        desc: `Với hơn 60 năm kinh nghiệm trong việc nâng cao năng suất và khả năng giao tiếp thông qua các thiết bị đa chức năng tiên tiến và giải pháp kỹ thuật số, chúng tôi cam kết cung cấp các giải pháp toàn diện và sáng tạo.`
    },
    {
        img: '/images/Clients_4.png',
        title: 'Hitachi Solutions',
        url: 'https://www.hitachi-solutions.com/',
        org: 'Hitachi Solutions',
        country: 'jp',
        countryName: 'Nhật Bản',
        desc: `Chúng tôi cung cấp các sản phẩm và dịch vụ có giá trị vượt trội cho khách hàng trên toàn thế giới thông qua các công ty con chủ chốt tại châu Á, Hoa Kỳ và châu Âu.`
    },
    {
        img: '/images/Clients_1.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Na Uy',
        desc: `Chúng tôi cung cấp cho các trường học một nền tảng giúp họ tổng hợp và khai thác mọi thông tin cần thiết, đồng thời lên kế hoạch và đánh giá hiệu quả của các hoạt động theo dõi và cải tiến.`
    },
    {
        img: '/images/Clients_3.png',
        title: 'Ministry of Education',
        url: 'https://www.moe.gov.sg/',
        org: 'Ministry of Education',
        country: 'sg',
        countryName: 'Singapore',
        desc: `Bộ Giáo dục Singapore (MOE) chịu trách nhiệm xây dựng và triển khai các chính sách giáo dục liên quan đến cơ cấu hệ thống, chương trình giảng dạy, phương pháp sư phạm và đánh giá học tập.`
    },
    {
        img: '/images/Clients_2.png',
        title: 'Civil Service College',
        url: 'https://www.csc.gov.sg/',
        org: 'Civil Service College',
        country: 'sg',
        countryName: 'Singapore',
        desc: `Trung tâm đào tạo và phát triển năng lực cốt lõi của khu vực công Singapore.`
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
        countryName: 'Nhật Bản',
        desc: `Chúng tôi đang xây dựng một thế giới nơi chúng tôi hướng dẫn các doanh nghiệp, ngành công nghiệp và xã hội trên hành trình xác định và thúc đẩy các cơ hội mới thông qua sức mạnh của sự tăng tốc.`
    },
    {
        img: '/images/Employer_3.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        org: 'Conexus AS',
        country: 'no',
        countryName: 'Na Uy',
        desc: `Chúng tôi cung cấp cho các trường học một nền tảng giúp họ tổng hợp và khai thác mọi thông tin cần thiết, đồng thời lên kế hoạch và đánh giá hiệu quả các hoạt động theo dõi, hỗ trợ và cải tiến chất lượng giảng dạy.`
    },
    {
        img: '/images/Employer_2.png',
        title: 'Orient Software Development Corp.',
        url: 'https://www.orientsoftware.com/',
        org: 'Orient Software',
        country: 'vn',
        countryName: 'Việt Nam',
        desc: `Chúng tôi cung cấp dịch vụ phần mềm toàn diện từ đầu đến cuối, xây dựng các giải pháp đẳng cấp quốc tế và tăng cường sức mạnh cho dự án của bạn bằng đội ngũ kỹ sư công nghệ được tuyển chọn kỹ lưỡng.`
    },
    {
        img: '/images/Employer_1.png',
        title: 'F2Tech (từng là VNYI)',
        url: 'https://f2tech.asia/',
        org: 'F2Tech',
        orgNote: 'formerly VNYI',
        country: 'vn',
        countryName: 'Việt Nam',
        desc: `Công ty Cổ phần Công nghệ F2 Asia (F2Tech) là đơn vị tư vấn chuyên nghiệp, cung cấp giải pháp phần mềm quản lý bán hàng và thiết bị POS dành cho ngành F&B và bán lẻ.`
    },
]
</script>

## Thành tựu <Badge type="tip" text="tôi đã làm việc thế nào" /> {#portfolio}

### 📦 Sản phẩm <Badge type="tip" text="Tôi đã giúp xây dựng..." />

<Grid :data="products" />

### 🕴️ Khách hàng <Badge type="tip" text="Tôi được thuê bởi..." />

<Grid :data="clients" />

### 🏢 Nhà tuyển dụng <Badge type="tip" text="Tôi được tuyển dụng bởi..." />

<Grid :data="employers" />

## Kinh nghiệm <Badge type="tip" text="tôi đã làm gì" /> {#experiences}

<Timeline kind="experience" :data="experiences" />

## Chứng nhận <Badge type="tip" text="tôi đã học gì" /> {#certifications}

<Timeline kind="certification" :data="certifications" />