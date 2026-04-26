---
title: Chuyên môn
layout: doc
---

# Chuyên môn {#resume}

<script setup>
const imgWrapperStyles = 'style="display:inline-flex;width:50px;height:50px;background-color:#fff;align-items:center;border-radius:5px;padding:2px;margin-right:10px;box-shadow:var(--vp-shadow-3)"';
const imgStyles = 'style="width:48px;"';
const aAttr = 'target="_blank"';

const experiences = [
    { badge: 'Sắp có', title: '???' },
    {
        badge: '01 / 2026 → Hiện tại',
        title: 'Tư vấn và triển khai CNTT cấp cao',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_4.png" ${imgStyles}></div><a href="https://www.hitachids.com/vn-english/" ${aAttr}>Hitachi Digital Services Vietnam</a>`,
        content: `<p>Thực hiện triển khai kỹ thuật toàn diện và tư vấn kinh doanh cho các dự án chuyển đổi số doanh nghiệp. Đã làm việc với các khách hàng: Hitachi Solutions, FUJIFILM Business Innovation. Có kinh nghiệm thực tế với: Vue.js 3, Vite, Vitest, ReactJS, Node.js, Express, AWS, jQuery.</p>`
    },
    {
        badge: '04 / 2023 → 12 / 2025',
        title: 'Kỹ sư phần mềm cao cấp',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp.</a>`,
        content: `<p>Đã đóng góp vào các sản phẩm ứng dụng web như FollowUp, tập trung vào việc hiện đại hóa công nghệ và hạ tầng hệ thống. Công việc bao gồm tích hợp các framework mới như Vue.js, .NET Core 6 và Pinia; quản lý mã hạ tầng trên Azure để triển khai dịch vụ; phát triển các bản thử nghiệm (POC) như xác thực sinh trắc học dựa trên FIDO; và nâng cấp thư viện front-end lên Bootstrap 5.</p>`
    },
    {
        badge: '09 / 2022 → 03 / 2023',
        title: 'Kỹ sư DevOps',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp.</a>`,
        content: `<p>Đã chuyển đổi hạ tầng của Conexus từ máy chủ nội bộ BaseFarm sang nền tảng đám mây Azure, tập trung vào bảo mật mạng, triển khai tự động, và hạ tầng dưới dạng mã (Infrastructure-as-Code). Quản lý các dịch vụ ứng dụng container hóa và giám sát hiệu năng hệ thống thông qua Azure Application Insights.</p>`
    },
    {
        badge: '05 / 2022 → 08 / 2022',
        title: 'Lập trình viên Frontend cấp cao',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp.</a>`,
        content: `<p>Tập trung phát triển front-end cho các sản phẩm Engage và FollowUp, bao gồm triển khai các tính năng cốt lõi, tinh chỉnh UI/UX với biểu tượng tùy chỉnh dựa trên SVG, và duy trì mã nguồn sạch, hiệu quả. Chủ động tham gia quy trình Scrum, đóng góp vào việc cung cấp trải nghiệm web nhất quán và chất lượng cao.</p>`
    },
    {
        badge: '09 / 2020 → 04 / 2022',
        title: 'Kỹ sư phần mềm trưởng',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp.</a>`,
        content: `<p>Hợp tác với Bộ Giáo dục Singapore (Ministry of Education) trong dự án nền tảng e-learning OPAL, tập trung vào phân hệ CSL (Collaborative and Social Learning). Dẫn dắt một nhóm Scrum nhỏ, đóng vai trò lập trình viên full-stack, và nâng cao độ ổn định của hệ thống thông qua việc xử lý có hệ thống các sự cố SSAT và SPT.</p>`
    },
    {
        badge: '10 / 2019 → 09 / 2020',
        title: 'Kỹ sư phần mềm trưởng',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_3.png" ${imgStyles}></div><a href="https://www.conexus.net/" ${aAttr}>Conexus AS</a>`,
        content: `<p>Làm việc cùng Conexus và Bộ Giáo dục Singapore (Ministry of Education) trong dự án nền tảng học trực tuyến OPAL, đóng góp vào phân hệ CSL (Collaborative and Social Learning) hỗ trợ học tập dựa trên cộng đồng. Dẫn dắt một nhóm Scrum nhỏ, phát triển các tính năng full-stack, và nâng cao độ ổn định của sản phẩm thông qua việc xử lý có mục tiêu các sự cố SSAT và SPT.</p>`
    },
    {
        badge: '01 / 2018 → 10 / 2019',
        title: 'Nhà phát triển Frontend',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_3.png" ${imgStyles}></div><a href="https://www.conexus.net/" ${aAttr}>Conexus AS</a>`,
        content: `<p>Hợp tác với Conexus và Conexus Singapore trong phát triển front-end cho các sản phẩm như Conexus Companion và Coursepad. Tập trung vào nâng cấp thư viện, xây dựng các thành phần web có thể tái sử dụng, cải thiện quy trình làm việc phía client, và duy trì chất lượng mã nguồn cao trong quy trình phát triển Scrum.</p>`
    },
    {
        badge: '11 / 2014 → 12 / 2017',
        title: 'Nhà phát triển Frontend',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp.</a>`,
        content: `<p>Thiết kế và triển khai các ứng dụng web đáp ứng (responsive) sử dụng ASP.NET MVC (Razor), jQuery và LESS. Tập trung vào tương thích đa thiết bị và đa trình duyệt, tối ưu hóa quá trình bundling với Microsoft Optimization, thiết kế JavaScript theo hướng mô-đun, và cải thiện trải nghiệm người dùng (UX) thông qua đồ họa và biểu tượng tùy chỉnh.</p>`
    },
    {
        badge: '10 / 2013 → 09 / 2014',
        title: 'Nhà phát triển Fullstack',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_1.png" ${imgStyles}></div><a href="https://f2tech.asia/" ${aAttr}>F2Tech (từng là VNYI)</a>`,
        content: `Đóng góp vào phát triển đa nền tảng, bao gồm ứng dụng POS trên máy tính (C# WinForms, DevExpress), ứng dụng web (ExtJS) và ứng dụng di động (Cordova, Telerik, Kendo UI). Quản lý logic cơ sở dữ liệu trên SQL Server thông qua các stored procedure được thiết kế có cấu trúc, đảm bảo độ tin cậy và hiệu năng của dữ liệu.`
    },
]

const certifications = [
    { badge: 'Sắp có', title: '???' },
    {
        badge: '03 / 2026',
        title: `<a href="https://certificates.dev/javascript/certificates/a14392fa-86d6-4a2e-9154-32ccedf0f9af" ${aAttr}>Lập trình viên JavaScript cao cấp được chứng nhận</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/javascript" ${imgStyles}></div><a href="https://certificates.dev/javascript/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Thể hiện trình độ thành thạo trong lập trình bất đồng bộ nâng cao, kiểm thử và giảm thiểu lỗ hổng bảo mật với tư cách là một lập trình viên Javascript cấp cao.</p>`
    },
    {
        badge: '11 / 2025',
        title: `<a href="https://certificates.dev/javascript/certificates/a0444290-62ca-4f5c-bb46-90ed9228b6ef" ${aAttr}>Nhà phát triển JavaScript cấp trung được chứng nhận</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/javascript" ${imgStyles}></div><a href="https://certificates.dev/javascript/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Đã chứng minh được năng lực thành thạo trong thao tác DOM nâng cao và các chức năng như một nhà phát triển Javascript trung cấp.</p>`
    },
    {
        badge: '10 / 2025',
        title: `<a href="https://certificates.dev/vuejs/certificates/a035486e-e918-44ac-98fd-d6ef9a74bbc4" ${aAttr}>Nhà phát triển Vue.js cao cấp được chứng nhận</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/vuedotjs" ${imgStyles}></div><a href="https://certificates.dev/vuejs/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Đã chứng minh được sự phù hợp, các khái niệm nâng cao và các yếu tố cần thiết đối với một Nhà phát triển Vue.js cao cấp.</p>`
    },
    {
        badge: '08 / 2025',
        title: `<a href="https://certificates.dev/c/9f981598-89ce-4208-b545-8766a6e20fae" ${aAttr}>Nhà phát triển JavaScript cấp cơ sở được chứng nhận</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/javascript" ${imgStyles}></div><a href="https://certificates.dev/javascript/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Đã chứng minh được các kỹ năng cơ bản, cam kết học tập với tư cách là nhà phát triển Javascript cơ bản.</p>`
    },
    {
        badge: '09 / 2024',
        title: `<a href="https://certificates.dev/vuejs/certificates/9cf3a5b7-fd94-4a17-ab22-6d17596e6c56" ${aAttr}>Nhà phát triển Vue.js cấp trung được chứng nhận</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/vuedotjs" ${imgStyles}></div><a href="https://certificates.dev/vuejs/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Đã chứng minh được năng lực cần thiết để sử dụng framework ở mức tối đa và khả năng mang lại kết quả tốt nhất có thể trong vai trò là Nhà phát triển Vue.js.</p>`
    },
    {
        badge: '03 / 2023',
        title: `<a href="https://www.credly.com/badges/605169cb-6c39-4172-8376-1b67031cf0d3/public_url" ${aAttr}>Chứng nhận Microsoft: Azure Fundamentals</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" ${imgStyles}></div><a href="https://learn.microsoft.com/vi-vn/credentials/" ${aAttr}>Microsoft Credentials</a>`,
        content: `<p>Thể hiện kiến thức cơ bản về dịch vụ đám mây và cách cung cấp các dịch vụ đó với Microsoft Azure.</p>`
    },
    {
        badge: '04 / 2022 → 04 / 2025',
        title: `<a href="https://www.credly.com/badges/b50d2d25-4689-4489-bc3b-440e985a5128/public_url" ${aAttr}>Chuyên gia đám mây được chứng nhận AWS</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" ${imgStyles}></div><a href="https://aws.amazon.com/vi/training/" ${aAttr}>AWS Training and Certification</a>`,
        content: `<p>Đã chứng minh được sự thành thạo về đám mây và kiến thức nền tảng về AWS. Người sở hữu huy hiệu có thể xác định các dịch vụ AWS thiết yếu cần thiết để thiết lập các dự án tập trung vào AWS.</p>`
    },
    {
        badge: '02 / 2022',
        title: `<a href="https://cert.efset.org/vi/Yr64ri" ${aAttr}>Chứng nhận EF SET 79/100 (THÀNH THẠO C2)</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://upload.wikimedia.org/wikipedia/en/f/f1/EF_SET_logo.svg" ${imgStyles}></div><a href="https://www.efset.org/vi/english-certificate/" ${aAttr}>EF SET (Education First - Standard English Test)</a>`,
        content: `<p>Đã được chứng minh là có thể hiểu:</p>
        <ul>
            <li>Hầu như mọi thứ nghe hoặc đọc đều dễ dàng</li>
            <li>Tất cả ngôn ngữ nói với tốc độ nhanh, bản ngữ</li>
            <li>Văn bản trừu tượng, phức tạp về cấu trúc và các tác phẩm văn học</li>
        </ul>`
    },
    {
        badge: '03 / 2014 → 03 / 2016',
        title: `TOEIC (955/990)`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://elearning.iigvietnam.com/Favicon.png" ${imgStyles}></div><a href="https://iigvietnam.com/bai-thi-toeic/" ${aAttr}>IIG Vietnam</a>`,
        content: '<p>Bài thi TOEIC đã được sử dụng làm chuẩn đánh giá các kỹ năng Nghe hiểu và Đọc hiểu tiếng Anh – hai kỹ năng thiết yếu trong môi trường làm việc quốc tế.</p>'
    },
    {
        badge: '11 / 2009 → 11 / 2011',
        title: `TOEFL ITP (573/677)`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://elearning.iigvietnam.com/Favicon.png" ${imgStyles}></div><a href="https://iigvietnam.com/bai-thi-toefl-itp/" ${aAttr}>IIG Vietnam</a>`,
        content: '<p>Bài thi TOEFL ITP là bài thi đánh giá trình độ sử dụng tiếng Anh dành cho những người sử dụng Tiếng Anh như một ngoại ngữ. Đây là bài thi học thuật, dùng để đánh giá trình độ Anh Ngữ của các học viên từ bậc trung cấp đến cao cấp.</p>'
    },
    {
        badge: '09 / 2009 → 03 / 2014',
        title: `Cử nhân - Kỹ thuật phần mềm, Khoa Công nghệ thông tin</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/DH-Hoa-Sen-Main-Icon.png" ${imgStyles}></div><a href="https://www.hoasen.edu.vn/dao-tao/dai-hoc/" ${aAttr}>Đại học Hoa Sen</a>`,
        content: `<p>Thực hiện trong nhóm 4 thành viên, dự án tốt nghiệp này xây dựng một hệ thống đặt món và quản lý dành cho quán cà phê hoàn chỉnh. Giải pháp bao gồm ứng dụng di động trên nền tảng Windows Phone phục vụ cho việc ghi nhận đơn hàng, cùng ứng dụng desktop C# WPF dành cho quản lý và kế toán. Đồng bộ dữ liệu được xử lý qua SQL Server, với cập nhật theo thời gian thực sử dụng SignalR.</p>`
    },
]

const gridDescStyles = 'style="display:flex;align-items:center;gap:0.2rem;margin:0.2rem 0;"';

const products = [
    {
        img: '/images/Products_9.png',
        title: 'FUJIFILM IWpro (Capture/Automation)',
        url: 'https://www.fujifilm.com/fbvn/vi/products/software/document-management/fujifilm-iwpro',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>FUJIFILM Business Innovation <small style="font-size:0.8rem">(Vietnam)</small></b></div>FUJIFILM IWpro là giải pháp nền tảng bảo mật toàn diện cho việc số hóa doanh nghiệp, cung cấp không gian làm việc cộng tác, tối ưu hóa quy trình làm việc, quản lý tài liệu hiệu quả bao gồm siêu dữ liệu và tài liệu, cùng khả năng in ấn linh hoạt trên nền tảng đám mây.`
    },
    {
        img: '/images/Products_8.png',
        title: 'EcoAssist-Enterprise-Light (Global Web Client)',
        url: 'https://www.hitachi-solutions-create.co.jp/solution/ecoassist_enterprise_light/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>Hitachi Solutions</b></div>EcoAssist-Enterprise-Light đơn giản hóa việc nhập, tổng hợp và sử dụng dữ liệu môi trường, cho phép quản lý tập trung hiệu quả dữ liệu hiệu suất môi trường của công ty trên nhiều địa điểm.`
    },
    {
        img: '/images/Products_4.png',
        title: 'Elevate',
        url: 'https://www.conexus.net/produkter/elevate/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Elevate được thiết kế nhằm đáp ứng các yêu cầu ghi nhận và quản lý tài liệu trong môi trường giáo dục, giúp các thành viên trong nhóm xung quanh học sinh có thể phối hợp chặt chẽ để cùng giải quyết các thách thức trong quá trình học tập.`
    },
    {
        img: '/images/Products_5.png',
        title: 'Engage',
        url: 'https://www.conexus.net/produkter/engage/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Engage giúp hiển thị rõ những lĩnh vực mà từng học sinh hoặc cả lớp đang đạt kết quả tốt, cũng như những nơi cần được hỗ trợ thêm. Công cụ này hỗ trợ giáo viên xác định nhu cầu theo dõi và điều chỉnh phương pháp giảng dạy, đồng thời tạo nền tảng hữu ích cho việc trao đổi với phụ huynh.`
    },
    {
        img: '/images/Products_7.png',
        title: 'Insight',
        url: 'https://www.conexus.net/produkter/insight/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Insight là kho dữ liệu giá trị dành cho các nhà quản lý trường học và chủ sở hữu hệ thống giáo dục. Người dùng có thể xem tổng quan về kết quả học tập, tải xuống các mẫu báo cáo dựng sẵn, và truy cập dữ liệu từ Conexus Elevate, Conexus Engage hoặc các nguồn dữ liệu khác.`
    },
    {
        img: '/images/Products_6.png',
        title: 'Stafettloggen',
        url: 'https://www.conexus.net/produkter/stafettloggen/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Stafettloggen là nhật ký số hỗ trợ hợp tác liên ngành xoay quanh việc chăm sóc và phát triển của trẻ, được xây dựng dựa trên mô hình BTI (Better Interdisciplinary Efforts). Công cụ này cung cấp cái nhìn tổng quan về các chuyên viên tham gia, vai trò và biện pháp họ thực hiện, đồng thời đơn giản hóa việc phối hợp giữa phụ huynh, nhà trẻ, trường học, dịch vụ y tế và các cơ quan liên quan khác.`
    },
    {
        img: '/images/Products_3.png',
        title: 'OPAL 2.0',
        url: 'https://academyofsingaporeteachers.moe.edu.sg/professional-learning/opal/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Ministry of Education</b></div>OPAL 2.0 là nền tảng học tập số của Bộ Giáo dục Singapore (MOE) dành cho đội ngũ giáo viên và nhân viên giáo dục, được phát triển dựa trên triết lý “Sở hữu và Lãnh đạo trong Phát triển Nghề nghiệp” (PD Ownership and Leadership). Hệ thống được thiết kế hướng tới học tập cá nhân hóa và hợp tác, nhằm bồi dưỡng năng lực người học trong kỷ nguyên số thế kỷ 21.`
    },
    {
        img: '/images/Products_2.png',
        title: 'Coursepad',
        url: 'https://www.linkedin.com/company/coursepad/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Civil Service College</b></div>Coursepad là môi trường học tập thông minh và cá nhân hóa, cung cấp nội dung học tập hữu ích, phù hợp và phổ biến nhất nhằm tăng tốc quá trình học tập trong môi trường làm việc. Công cụ gợi ý (recommendation engine) của hệ thống tạo ra các đề xuất học tập có mức độ liên quan cao, dựa trên công việc, hồ sơ xã hội và hồ sơ học tập của người dùng, giúp các tổ chức lớn nâng cao kỹ năng đội ngũ nhân sự trên quy mô rộng.`
    },
    {
        img: '/images/Products_1.png',
        title: 'Quick Decision',
        url: 'https://f2tech.asia/solution/giai-phap',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>F2Tech <small style="font-size:0.8rem">(từng là VNYI)</small></b></div>Giải pháp hệ thống ERP dành cho doanh nghiệp trong lĩnh vực F&B (nhà hàng – thực phẩm & đồ uống). Sản phẩm đã được tái cấu trúc và phát triển thành nhiều giải pháp chuyên biệt phục vụ các nhu cầu khác nhau của ngành.`
    },
]
const clients = [
    {
        img: '/images/Clients_5.png',
        title: 'FUJIFILM Business Innovation Vietnam',
        url: 'https://www.fujifilm.com/fbvn/vi',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>FUJIFILM Business Innovation <small style="font-size:0.8rem">(Vietnam)</small></b></div>Với hơn 60 năm kinh nghiệm trong việc nâng cao năng suất và khả năng giao tiếp thông qua các thiết bị đa chức năng tiên tiến và giải pháp kỹ thuật số, chúng tôi cam kết cung cấp các giải pháp toàn diện và sáng tạo.`
    },
    {
        img: '/images/Clients_4.png',
        title: 'Hitachi Solutions',
        url: 'https://www.hitachi-solutions.com/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>Hitachi Solutions</b></div>Chúng tôi cung cấp các sản phẩm và dịch vụ có giá trị vượt trội cho khách hàng trên toàn thế giới thông qua các công ty con chủ chốt tại châu Á, Hoa Kỳ và châu Âu.`
    },
    {
        img: '/images/Clients_1.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Chúng tôi cung cấp cho các trường học một nền tảng giúp họ tổng hợp và khai thác mọi thông tin cần thiết, đồng thời lên kế hoạch và đánh giá hiệu quả của các hoạt động theo dõi và cải tiến.`
    },
    {
        img: '/images/Clients_3.png',
        title: 'Ministry of Education (Singapore)',
        url: 'https://www.moe.gov.sg/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Ministry of Education</b></div>Bộ Giáo dục Singapore (MOE) chịu trách nhiệm xây dựng và triển khai các chính sách giáo dục liên quan đến cơ cấu hệ thống, chương trình giảng dạy, phương pháp sư phạm và đánh giá học tập.`
    },
    {
        img: '/images/Clients_2.png',
        title: 'Civil Service College (Singapore)',
        url: 'https://www.csc.gov.sg/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Civil Service College</b></div>Trung tâm đào tạo và phát triển năng lực cốt lõi của khu vực công Singapore.`
    },
]
const employers = [
    {
        img: '/images/Employer_4.png',
        title: 'Hitachi Digital Services Vietnam',
        url: 'https://www.hitachids.com/vn-english/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/jp.svg" class="flag" width="18" alt="Japan"><b>Hitachi Digital Services <small style="font-size:0.8rem">(Vietnam)</small></b></div>Chúng tôi đang xây dựng một thế giới nơi chúng tôi hướng dẫn các doanh nghiệp, ngành công nghiệp và xã hội trên hành trình xác định và thúc đẩy các cơ hội mới thông qua sức mạnh của sự tăng tốc.`
    },
    {
        img: '/images/Employer_3.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Chúng tôi cung cấp cho các trường học một nền tảng giúp họ tổng hợp và khai thác mọi thông tin cần thiết, đồng thời lên kế hoạch và đánh giá hiệu quả các hoạt động theo dõi, hỗ trợ và cải tiến chất lượng giảng dạy.`
    },
    {
        img: '/images/Employer_2.png',
        title: 'Orient Software Development Corp. Vietnam',
        url: 'https://www.orientsoftware.com/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>Orient Software</b></div>Chúng tôi cung cấp dịch vụ phần mềm toàn diện từ đầu đến cuối, xây dựng các giải pháp đẳng cấp quốc tế và tăng cường sức mạnh cho dự án của bạn bằng đội ngũ kỹ sư công nghệ được tuyển chọn kỹ lưỡng.`
    },
    {
        img: '/images/Employer_1.png',
        title: 'F2Tech (từng là VNYI)',
        url: 'https://f2tech.asia/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>F2Tech <small style="font-size:0.8rem">(formerly VNYI)</small></b></div>Công ty Cổ phần Công nghệ F2 Asia (F2Tech) là đơn vị tư vấn chuyên nghiệp, cung cấp giải pháp phần mềm quản lý bán hàng và thiết bị POS dành cho ngành F&B và bán lẻ.`
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

<Timeline :data="experiences" />

## Chứng nhận <Badge type="tip" text="tôi đã học gì" /> {#certifications}

<Timeline :data="certifications" />