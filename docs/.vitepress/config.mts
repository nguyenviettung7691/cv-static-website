import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Nguyễn Việt Tùng",
  description: "My CV portfolio showcase powered by VitePress",
  head: [
    // icon
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', href: '/android-chrome-192x192.png', type: "image/png", sizes:"192x192" }],
    ['link', { ref: 'manifest', href: '/manifest.json' }],
    // font
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap', rel: 'stylesheet' }],
    // meta
    ['meta', { name: 'theme-color', content: '#9BBC23' }],
    ['meta', { name: 'author', content: 'Nguyễn Việt Tùng' }],
    ['meta', { name: 'keywords', content: 'web developer, portfolio, resume, showcase' }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '🏡 Home', link: '/', activeMatch: '^/$' },
      { text: '👨‍🦱 Profile', link: '/profile' },
      { text: '📂 Resume', link: '/resume' },
      { text: '💼 Showcase', link: '/showcase' }
    ],

    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      // You can also add custom icons by passing SVG as string:
      // You can include a custom label for accessibility too (optional but recommended):
      { icon: 'github', link: 'https://github.com/nguyenviettung7691', ariaLabel: 'GitHub' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nguyen-viet-tung', ariaLabel: 'LinkedIn' },
      { icon: 'medium', link: 'https://medium.com/@nvtung', ariaLabel: 'Medium' },
      { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/1437108/harry', ariaLabel: 'StackOverflow' },
      { icon: 'gmail', link: 'mailto:nvtung.harry@gmail.com', ariaLabel: 'Email' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Home', link: '/' },
          { text: 'Profile', link: '/profile', items: [
            { text: 'Introduction', link: '/profile#intro' },
            { text: 'Bio', link: '/profile#bio' },
            { text: 'Languages', link: '/profile#languages' },
            { text: 'Interests', link: '/profile#interests' },
          ] },
          { text: 'Resume', link: '/resume', items: [
            { text: 'Services', link: '/resume#services' },
            { text: 'Experiences', link: '/resume#experiences' },
            { text: 'Certifications', link: '/resume#certifications' },
            { text: 'Portfolio', link: '/resume#portfolio' },
          ] },
          { text: 'Showcase', link: '/showcase', items: [
            { text: 'Skillsets', link: '/showcase#skillsets' },
            { text: 'Certifications', link: '/showcase#certifications' },
          ] }
        ]
      }
    ],

    outline: [2,3],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Nguyễn Việt Tùng',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          vi: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm'
              },
              modal: {
                displayDetails: 'Hiển thị chi tiết',
                resetButtonTitle: 'Đặt lại',
                backButtonTitle: 'Quay lại',
                noResultsText: 'Không có kết quả',
                footer: {
                  selectText: 'Chọn văn bản',
                  selectKeyAriaLabel: 'Chọn văn bản',
                  navigateText: 'Điều hướng',
                  navigateUpKeyAriaLabel: 'Đi lên',
                  navigateDownKeyAriaLabel: 'Đi xuống',
                  closeText: 'Đóng',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },

    externalLinkIcon: true
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi', 
      title: "Nguyễn Việt Tùng",
      description: "Trang CV cá nhân của tôi, xây dựng với VitePress",
      themeConfig: {
        nav: [
          { text: '🏡 Trang chủ', link: '/vi/' },
          { text: '👨‍🦱 Hồ sơ', link: '/vi/profile' },
          { text: '📂 Chuyên môn', link: '/vi/resume' },
          { text: '💼 Trưng bày', link: '/vi/showcase' }
        ],
        sidebar: [
          {
            items: [
              { text: 'Trang chủ', link: '/vi/' },
              { text: 'Hồ sơ', link: '/vi/profile', items: [
                { text: 'Giới thiệu', link: '/vi/profile#intro' },
                { text: 'Thông tin cá nhân', link: '/vi/profile#bio' },
                { text: 'Ngôn ngữ', link: '/vi/profile#languages' },
                { text: 'Sở thích', link: '/vi/profile#interests' },
              ] },
              { text: 'Chuyên môn', link: '/vi/resume', items: [
                { text: 'Dịch vụ', link: '/vi/resume#services' },
                { text: 'Kinh nghiệm', link: '/vi/resume#experiences' },
                { text: 'Chứng nhận', link: '/vi/resume#certifications' },
                { text: 'Thành tựu', link: '/vi/resume#portfolio' },
              ] },
              { text: 'Trưng bày', link: '/vi/showcase', items: [
                { text: 'Bộ kỹ năng', link: '/vi/showcase#skillsets' },
                { text: 'Chứng nhận', link: '/vi/showcase#certifications' },
              ] }
            ]
          }
        ],
        outline: {
          level: [2,3],
          label: 'Trên trang này'
        },
        footer: {
          message: 'Phát hành theo giấy phép MIT.',
          copyright: 'Bản quyền © 2025-nay của Nguyễn Việt Tùng',
        },
        lastUpdated: {
          text: 'Cập nhật lần cuối'
        },
        docFooter: {
          prev: 'Trang trước',
          next: 'Trang kế'
        },
        darkModeSwitchLabel: 'Giao diện',
        lightModeSwitchTitle: 'Chuyển sang chủ đề sáng',
        darkModeSwitchTitle: 'Chuyển sang chủ đề tối',
        returnToTopLabel: 'Trở lên đầu trang',
        langMenuLabel: 'Đổi ngôn ngữ',
        skipToContentLabel: 'Nhảy đến nội dung'
      }
    }
  }
})
