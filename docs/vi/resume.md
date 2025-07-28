---
title: Chuyên môn
layout: doc
---

# Chuyên môn {#resume}

## Dịch vụ <Badge type="tip" text="tôi làm gì" /> {#services}

### 🎯 Trưởng nhóm & Người tổ chức

::: tip Với sức mạnh lớn đi kèm trách nhiệm lớn
- Có kinh nghiệm tổ chức và thực hành SCRUM, framework AGILE
- Có kinh nghiệm lãnh đạo nhóm phát triển bao gồm lập trình viên, kiểm thử viên, BA.
- Có kinh nghiệm làm rõ yêu cầu, ước tính kỹ thuật cấp cao.
:::

### 💡 Tạo ra giải pháp kỹ thuật

::: tip Kế hoạch cẩn thận sẽ giúp đi một chặng đường dài
- Có kinh nghiệm nghiên cứu và quyết định giải pháp kỹ thuật đáp ứng yêu cầu kinh doanh cũng như vượt qua các hạn chế kỹ thuật.
- Có kinh nghiệm về một số kiến trúc web như BFF (backend cho frontend), SPA (ứng dụng trang đơn), MVC (model-view-controller).
- Có kinh nghiệm về Điện toán đám mây bằng cách sử dụng các dịch vụ AWS và Azure để xây dựng giải pháp.
:::

### 🖥️ Phát triển web

::: tip Có rất nhiều công cụ để lựa chọn, cách bạn sử dụng chúng là tùy thuộc vào bạn
Có kinh nghiệm làm việc với tư cách là nhà phát triển web đầy đủ với các công nghệ như:

- Hệ sinh thái Front-end: VueJS (VueJS, Pinia, Vuetify, ViteJs, Vitest, vue-i18n)
- Thư viện Front-end: CkEditor, Highcharts, jQuery
- Giao diện Front-end: Bootstrap, LESS, SASS
- Biên dịch mã: GruntJS, gulpjs, NPM, Composer, Webpack
- Quản lý source: Github, Bitbucket
- Back-end: PHP, Yii Framework, Humhub, C#, .NET Core
- Đóng gói: Docker
- Cơ sở dữ liệu: MySQL, ElasticSearch, Redis
- Đám mây: Azure, AWS
- Đồ họa: Adobe Illustrator, Paint.net
- Khác: Rabbitmq
:::

### 📱 Thiết kế Di động

::: tip Web xứng đáng có trải nghiệm ứng dụng di động riêng
Có kinh nghiệm thiết kế cho thiết bị di động:

- Tối ưu hóa ứng dụng web cho chuẩn Progressive Web App
- Sử dụng Responsive Design (CSS media query)
- Thiết kế UI Đa trình duyệt, Đa thiết bị
- Javascript Đa trình duyệt, Đa thiết bị
:::

<script setup>
const imgWrapperStyles = 'style="display:inline-flex;width:50px;height:50px;background-color:#fff;align-items:center;border-radius:5px;padding:2px;margin-right:10px;box-shadow:var(--vp-shadow-3)"';
const imgStyles = 'style="width:48px;"';
const aAttr = 'target="_blank"';

const experiences = [
    {
        badge: '04 / 2022 → Nay',
        title: 'Nhà phát triển web Fullstack',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp. Vietnam</a>`,
        content: `<p>Làm việc với Conexus và chịu trách nhiệm về các sản phẩm ứng dụng web, bao gồm cả Followup. Nhiệm vụ chính bao gồm:</p>
        <ul>
            <li>Nghiên cứu và tích hợp các công nghệ mới (VueJS, .NET Core 6, Pinia...) vào các ứng dụng web mới.</li>
            <li>Cập nhật mã Azure Infrastructure cho các dịch vụ ứng dụng web mới (quy tắc chính sách tường lửa, pipeline,...).</li>
            <li>Tạo POC cho các tính năng mới (xác thực sinh trắc học với FIDO).</li>
            <li>Di chuyển các thư viện front-end hiện tại sang phiên bản mới (Bootstrap 5).</li>
        </ul>`
    },
    {
        badge: '09 / 2022 → 03 / 2023',
        title: 'Azure DevOps',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp. Vietnam</a>`,
        content: `<p>Làm việc với Conexus để di chuyển toàn bộ cơ sở hạ tầng của họ từ máy chủ BaseFarm tại chỗ sang Azure Cloud. Các nhiệm vụ chính bao gồm:</p>
        <ul>
            <li>Quản lý luồng bảo mật giữa các dịch vụ ứng dụng bằng chính sách Tường lửa, quy tắc nhóm bảo mật Mạng.</li>
            <li>Quản lý việc triển khai dịch vụ ứng dụng bằng Pipelines.</li>
            <li>Quản lý mẫu định nghĩa triển khai dịch vụ ứng dụng bằng ARM và Bicep.</li>
            <li>Quản lý các dịch vụ ứng dụng được đóng gói bằng Azure App Service và Azure Container Instance.</li>
            <li>Quản lý số liệu và thông tin chi tiết về dịch vụ ứng dụng bằng Application Insights.</li>
        </ul>`
    },
    {
        badge: '05 / 2022 → 08 / 2022',
        title: 'Nhà phát triển web frontend',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp. Vietnam</a>`,
        content: `<p>Làm việc với Conexus và chịu trách nhiệm về giao diện người dùng cho các sản phẩm website của họ, chủ yếu là Engage & Followup. Nhiệm vụ chính bao gồm:</p>
        <ul>
            <li>Triển khai chức năng front-end cho ứng dụng web.</li>
            <li>Triển khai UI/UX cho ứng dụng web, bao gồm tạo biểu tượng phông chữ từ thiết kế SVG.</li>
            <li>Tái cấu trúc mã, sửa lỗi, thực hiện thay đổi mã khi cần thiết.</li>
            <li>Tuân thủ khuôn khổ SCRUM.</li>
        </ul>`
    },
    {
        badge: '09 / 2020 → 04 / 2022',
        title: 'Trưởng nhóm phát triển web',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp. Vietnam</a>`,
        content: `<p>Hợp tác với Conexus và Bộ Giáo dục Singapore (MOE), phụ trách một trong các module của sản phẩm chính phủ E-Learning OPAL (One Portal All Learners), được gọi là CSL (Học tập Cộng tác và Xã hội). Đây là một ứng dụng web cung cấp cộng đồng cho người học. Các nhiệm vụ chính bao gồm:</p>
        <ul>
            <li>Quản lý một nhóm phát triển web nhỏ để đảm bảo họ tuân thủ khuôn khổ SCRUM.</li>
            <li>Trở thành lập trình viên fullstack, triển khai các tính năng cho ứng dụng web.</li>
            <li>Cải thiện ứng dụng web bằng cách giải quyết các vấn đề SSAT và SPT.</li>
        </ul>`
    },
    {
        badge: '10 / 2019 → 09 / 2020',
        title: 'Trưởng nhóm phát triển web',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_3.png" ${imgStyles}></div><a href="https://www.conexus.net/" ${aAttr}>Conexus AS</a>`,
        content: `<p>Hợp tác với Conexus và Bộ Giáo dục Singapore (MOE), phụ trách một trong các module của sản phẩm chính phủ E-Learning OPAL (One Portal All Learners), được gọi là CSL (Học tập Cộng tác và Xã hội). Đây là một ứng dụng web cung cấp cộng đồng cho người học. Các nhiệm vụ chính bao gồm:</p>
        <ul>
            <li>Quản lý một nhóm phát triển web nhỏ để đảm bảo họ tuân thủ khuôn khổ SCRUM.</li>
            <li>Trở thành lập trình viên fullstack, triển khai các tính năng cho ứng dụng web.</li>
            <li>Cải thiện ứng dụng web bằng cách giải quyết các vấn đề SSAT và SPT.</li>
        </ul>`
    },
    {
        badge: '01 / 2018 → 10 / 2019',
        title: 'Nhà phát triển web Fullstack',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_3.png" ${imgStyles}></div><a href="https://www.conexus.net/" ${aAttr}>Conexus AS</a>`,
        content: `<p>Làm việc với Conexus và Conexus SG, chịu trách nhiệm về giao diện người dùng cho các sản phẩm website của họ, bao gồm Conexus Companion và Coursepad. Các nhiệm vụ chính bao gồm:</p>
        <ul>
            <li>Nâng cấp & di chuyển phiên bản hoặc thư viện web front-end.</li>
            <li>Tạo & cập nhật các thành phần web.</li>
            <li>Cải thiện quy trình làm việc và cơ sở hạ tầng phía máy khách.</li>
            <li>Tái cấu trúc mã, sửa lỗi, thực hiện thay đổi mã khi cần thiết.</li>
            <li>Tuân thủ khuôn khổ SCRUM.</li>
        </ul>`
    },
    {
        badge: '11 / 2014 → 12 / 2017',
        title: 'Nhà phát triển Front-end',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_2.png" ${imgStyles}></div><a href="https://www.orientsoftware.net/" ${aAttr}>Orient Software Development Corp. Vietnam</a>`,
        content: `<p>Tạo và duy trì các tính năng cho ứng dụng web đáp ứng và hoạt động trên càng nhiều thiết bị và trình duyệt càng tốt để tạo ra trải nghiệm liền mạch. Bao gồm:/p>
        <ul>
            <li>Tạo trang web trong ASP.Net MVC bằng cú pháp Razor.</li>
            <li>Tạo các tập lệnh front-end bằng jQuery.</li>
            <li>Tạo kiểu giao diện người dùng với LESS và font-icons.</li>
            <li>Đóng gói mã với Microsoft Optimization.</li>
            <li>Sử dụng kỹ thuật Javascript Module để sắp xếp các tính năng.</li>
            <li>Thiết kế UX mới cho ứng dụng web.</li>
            <li>Tạo và chỉnh sửa đồ họa như biểu tượng phông chữ, hình ảnh trong suốt.</li>
        </ul>`
    },
    {
        badge: '10 / 2013 → 09 / 2014',
        title: 'Nhà phát triển Fullstack',
        subtitle: `<div ${imgWrapperStyles}><img src="/images/Employer_1.png" ${imgStyles}></div><a href="https://f2tech.asia/" ${aAttr}>F2Tech (từng là VNYI)</a>`,
        content: `
        <ul>
          <li>Phát triển và duy trì các tính năng cho ứng dụng POS bằng C# Winforms, DevExpress.</li>
          <li>Phát triển và duy trì các tính năng cho ứng dụng web bằng ExtJS.</li>
          <li>Phát triển ứng dụng di động đa nền tảng mới bằng Cordova, Telerik, Kendo UI.</li>
          <li>Viết và duy trì cơ sở dữ liệu bằng SQL Server thông qua việc viết thủ tục lưu trữ.</li>
        </ul>
        `
    },
]

const certifications = [
    { badge: 'Sắp có', title: '???' },
    {
        badge: '09 / 2024',
        title: `<a href="https://certificates.dev/vuejs/certificates/9cf3a5b7-fd94-4a17-ab22-6d17596e6c56" ${aAttr}>Nhà phát triển Vue.js cấp trung được chứng nhận</a>`,
        subtitle: `<div ${imgWrapperStyles}><img src="https://cdn.simpleicons.org/vuedotjs" ${imgStyles}></div><a href="https://certificates.dev/vuejs/" ${aAttr}>Certificates.Dev</a>`,
        content: `<p>Thể hiện các kỹ năng và kiến thức cần thiết để phát triển các ứng dụng web một trang bằng Vue.js.</p>`
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
        content: `<p>Đồ án tốt nghiệp được xây dựng bởi một nhóm 4 người. Đây là một giải pháp đặt món cho quán cà phê. Nó bao gồm một ứng dụng di động dùng để nhân viên phục vụ gọi món, được xây dựng bằng Windows Phone SDK; và một ứng dụng máy tính để bàn dùng để quản lý và kế toán, được xây dựng bằng C# WPF. Ứng dụng di động gửi dữ liệu đến cơ sở dữ liệu, sử dụng SQL Server, và ứng dụng máy tính để bàn hiển thị các thay đổi theo thời gian thực, sử dụng SignalR.</p>`
    },
]

const gridDescStyles = 'style="display:flex;align-items:center;gap:0.2rem;margin:0.2rem 0;"';

const products = [
    {
        img: '/images/Products_4.png',
        title: 'Elevate',
        url: 'https://www.conexus.net/produkter/elevate/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Elevate được thiết kế để đáp ứng các yêu cầu về tài liệu cho các thách thức về môi trường trường học và được xây dựng để nhóm xung quanh học sinh có thể hợp tác chặt chẽ để giải quyết thách thức.`
    },
    {
        img: '/images/Products_5.png',
        title: 'Engage',
        url: 'https://www.conexus.net/produkter/engage/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Engage cho thấy thành tích của từng học sinh và lớp học, cũng như những điểm cần bổ sung. Công cụ này giúp giáo viên xác định nhu cầu theo dõi và điều chỉnh, đồng thời cung cấp nền tảng hữu ích cho việc đối thoại với gia đình học sinh.`
    },
    {
        img: '/images/Products_7.png',
        title: 'Insight',
        url: 'https://www.conexus.net/produkter/insight/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Insight là kho tàng dành cho chủ sở hữu và lãnh đạo nhà trường. Bạn có thể xem tổng quan về kết quả học tập, tải xuống các mẫu báo cáo có sẵn và xem dữ liệu từ Conexus Elevate, Conexus Engage hoặc các nguồn dữ liệu khác.`
    },
    {
        img: '/images/Products_6.png',
        title: 'Stafettloggen',
        url: 'https://www.conexus.net/produkter/stafettloggen/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Conexus Stafettloggen là một sổ ghi chép kỹ thuật số cho hoạt động hợp tác liên ngành xung quanh trẻ em, dựa trên mô hình BTI (nỗ lực liên ngành tốt hơn). Công cụ này cung cấp tổng quan về các chuyên gia liên quan, trách nhiệm của họ và các biện pháp đã được triển khai, đồng thời đơn giản hóa tương tác giữa người giám hộ, trường mẫu giáo, trường học, dịch vụ y tế và các cơ quan khác.`
    },
    {
        img: '/images/Products_3.png',
        title: 'OPAL 2.0',
        url: 'https://academyofsingaporeteachers.moe.edu.sg/professional-learning/opal/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Ministry of Education</b></div>OPAL2.0 là nền tảng học tập kỹ thuật số của Bộ Giáo dục (MOE) dành cho cán bộ, nhân viên, nhằm thúc đẩy triết lý Sở hữu và Lãnh đạo Phát triển Chuyên môn (PD). Nền tảng này được thiết kế chủ yếu cho việc học tập cá nhân hóa và hợp tác, nhằm nuôi dưỡng người học kỹ thuật số của thế kỷ 21.`
    },
    {
        img: '/images/Products_2.png',
        title: 'Coursepad',
        url: 'https://www.linkedin.com/company/coursepad/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Civil Service College</b></div>Coursepad là một môi trường học tập thông minh, được cá nhân hóa, cung cấp nội dung học tập hữu ích, phù hợp và phổ biến nhất để thúc đẩy việc học tập tại nơi làm việc. Công cụ đề xuất của chúng tôi tạo ra các đề xuất học tập có tính liên quan cao dựa trên hồ sơ công việc, xã hội và học tập của người học, giúp các tổ chức lớn nâng cao kỹ năng cho lực lượng lao động của mình trên quy mô lớn.`
    },
    {
        img: '/images/Products_1.png',
        title: 'Quick Decision',
        url: 'https://f2tech.asia/solution/giai-phap',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>F2Tech <small style="font-size:0.8rem">(từng là VNYI)</small></b></div>Giải pháp hệ thống ERP cho doanh nghiệp F&B. Đã được cải tiến thành nhiều giải pháp chuyên biệt.`
    },
]
const clients = [
    {
        img: '/images/Clients_1.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Chúng tôi cung cấp cho các trường một nền tảng nơi họ có thể tìm thấy mọi thông tin chi tiết cần thiết, đồng thời cho phép họ lập kế hoạch và đánh giá công việc tiếp theo.`
    },
    {
        img: '/images/Clients_3.png',
        title: 'Ministry of Education (Singapore)',
        url: 'https://www.moe.gov.sg/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Ministry of Education</b></div>Bộ Giáo dục (MOE) xây dựng và thực hiện các chính sách giáo dục về cơ cấu giáo dục, chương trình giảng dạy, phương pháp sư phạm và đánh giá.`
    },
    {
        img: '/images/Clients_2.png',
        title: 'Civil Service College (Singapore)',
        url: 'https://www.csc.gov.sg/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/sg.svg" class="flag" width="18" alt="Singapore"><b>Civil Service College</b></div>Trung tâm của sự phát triển và xuất sắc trong học tập dành cho Dịch vụ công Singapore.`
    },
]
const employers = [
    {
        img: '/images/Employer_3.png',
        title: 'Conexus AS',
        url: 'https://www.conexus.net/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/no.svg" class="flag" width="18" alt="Norway"><b>Conexus AS</b></div>Chúng tôi cung cấp cho các trường một nền tảng nơi họ có thể tìm thấy mọi thông tin chi tiết cần thiết, đồng thời cho phép họ lập kế hoạch và đánh giá công việc tiếp theo.`
    },
    {
        img: '/images/Employer_2.png',
        title: 'Orient Software Development Corp. Vietnam',
        url: 'https://www.orientsoftware.com/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>Orient Software</b></div>Chúng tôi cung cấp dịch vụ phần mềm trọn gói—xây dựng các giải pháp đẳng cấp thế giới và hỗ trợ các dự án của bạn với đội ngũ công nghệ được kiểm duyệt.`
    },
    {
        img: '/images/Employer_1.png',
        title: 'F2Tech (từng là VNYI)',
        url: 'https://f2tech.asia/',
        desc: `<div ${gridDescStyles}><img src="https://flagcdn.com/vn.svg" class="flag" width="18" alt="Vietnam"><b>F2Tech <small style="font-size:0.8rem">(formerly VNYI)</small></b></div>Công ty Cổ phần Công nghệ F2 Châu Á (F2Tech) là công ty tư vấn chuyên nghiệp, cung cấp giải pháp phần mềm quản lý bán hàng và thiết bị POS cho ngành F&B và bán lẻ. Chúng tôi tự hào sở hữu nền tảng công nghệ cao cùng đội ngũ nhân sự tài năng, giàu nhiệt huyết và đam mê sáng tạo.`
    },
]
</script>

## Kinh nghiệm <Badge type="tip" text="tôi đã làm gì" /> {#experiences}

<Timeline :data="experiences" />

## Chứng nhận <Badge type="tip" text="tôi đã học gì" /> {#certifications}

<Timeline :data="certifications" />

## Thành tựu <Badge type="tip" text="tôi đã làm việc thế nào" /> {#portfolio}

### 📦 Sản phẩm <Badge type="tip" text="Tôi đã góp phần tạo ra..." />

<Grid :data="products" />

### 🕴️ Khách hàng <Badge type="tip" text="Tôi được thuê bởi..." />

<Grid :data="clients" />

### 🏢 Nhà tuyển dụng <Badge type="tip" text="Tôi được tuyển dụng bởi..." />

<Grid :data="employers" />