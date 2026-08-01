const storageKey = 'bao-khang-language';

const translations = {
  vi: {
    meta: {
      title: 'Nguyễn Bảo Khang | Software, Data & Applied AI',
      description: 'Portfolio của Nguyễn Bảo Khang về phát triển phần mềm, phân tích nghiệp vụ, phân tích dữ liệu và Applied AI/LLM.',
      ogDescription: 'Portfolio về phát triển phần mềm, phân tích nghiệp vụ, phân tích dữ liệu và Applied AI/LLM.'
    },
    accessibility: { skip: 'Bỏ qua điều hướng' },
    navigation: {
      label: 'Điều hướng chính', home: 'Nguyễn Bảo Khang - Trang đầu', open: 'Mở menu', close: 'Đóng menu', about: 'Giới thiệu', skills: 'Kỹ năng', projects: 'Dự án', education: 'Học vấn', contact: 'Liên hệ'
    },
    language: { label: 'Chọn ngôn ngữ' },
    theme: { toDark: 'Chuyển sang giao diện tối', toLight: 'Chuyển sang giao diện sáng' },
    hero: {
      availability: 'Sẵn sàng trao đổi về cơ hội phù hợp',
      eyebrow: 'SOFTWARE · BUSINESS · DATA · APPLIED AI',
      title: 'Xây dựng giải pháp rõ ràng, giải quyết đúng bài toán.',
      intro: 'Tôi là Nguyễn Bảo Khang. Tôi kết hợp phát triển phần mềm, phân tích nghiệp vụ, tư duy dữ liệu và Applied AI/LLM để chuyển yêu cầu thành giải pháp có thể triển khai.',
      baCv: 'Business Analyst CV', dotnetCv: '.NET Developer CV', processLabel: 'Quy trình từ phân tích đến đo lường',
      process: { analyze: 'Phân tích', design: 'Thiết kế', build: 'Xây dựng', measure: 'Đo lường' }
    },
    about: {
      index: '01 · GIỚI THIỆU', title: 'Tôi chuyển yêu cầu vận hành thành giải pháp phần mềm thực tế.',
      lead: 'Tôi kết hợp tư duy phân tích hệ thống với hiểu biết dữ liệu để làm rõ vấn đề trước khi chọn giải pháp. Mục tiêu là tạo ra sản phẩm dễ hiểu, có thể triển khai và đo lường.',
      system: { title: 'Phân tích hệ thống', text: 'Làm rõ quy trình, tác nhân, dữ liệu và yêu cầu trước khi triển khai.' },
      data: { title: 'Tư duy dữ liệu', text: 'Nhìn nhận phần mềm cùng dữ liệu mà hệ thống tạo ra và sử dụng.' },
      delivery: { title: 'Triển khai thực tế', text: 'Ưu tiên giải pháp phù hợp với luồng vận hành và khả năng bảo trì.' }
    },
    skills: {
      index: '02 · NĂNG LỰC', title: 'Nền tảng phù hợp để phát triển sản phẩm số hiện đại.',
      lead: 'Từ phát triển web và phân tích dữ liệu đến LLM ứng dụng, tôi chọn công cụ dựa trên bài toán và luồng dữ liệu cần xử lý.',
      languages: 'Ngôn ngữ & nền tảng', frameworks: 'Framework & thư viện', storage: 'Dữ liệu & lưu trữ', tools: 'Công cụ & phương pháp', analysis: 'Phân tích dữ liệu', ai: 'LLM & Applied AI'
    },
    projects: {
      index: '03 · DỰ ÁN NỔI BẬT', title: 'Giải quyết bài toán quản lý vận hành cho trang trại và cửa hàng thức ăn chăn nuôi.',
      lead: 'Tập trung vào cấu trúc nghiệp vụ, quản lý dữ liệu và trải nghiệm thao tác rõ ràng.', type: 'ERP SYSTEM · ASP.NET CORE',
      description: 'Hệ thống ERP quản lý cửa hàng thức ăn chăn nuôi và trang trại, được tổ chức theo nghiệp vụ và quy trình phát triển Agile.',
      details: 'Xem chi tiết dự án', demoPending: 'Demo đang cập nhật', repoPending: 'Repository đang cập nhật',
      imageAlt: 'Minh họa giao diện dashboard của stockfarm-erp'
    },
    education: {
      index: '04 · HỌC VẤN', title: 'Cử nhân Công nghệ thông tin, chuyên ngành Khoa học dữ liệu.',
      degree: 'Cử nhân Công nghệ thông tin · Chuyên ngành Khoa học dữ liệu', school: 'Đại Học Ngoại ngữ Tin học TP HCM', periodLabel: 'Thời gian',
      gpaLabel: 'GPA / Xếp loại'
    },
    contact: {
      index: '05 · KẾT NỐI', title: 'Cùng trao đổi về một cơ hội phù hợp.',
      lead: 'Tôi sẵn sàng trao đổi về phát triển phần mềm, phân tích nghiệp vụ, dữ liệu hoặc một bài toán Applied AI cần được triển khai rõ ràng.',
      directLabel: 'Kênh liên hệ trực tiếp', channelsLabel: 'Các kênh liên hệ',
      emailMe: 'Gửi email cho tôi', copyHint: 'Nhấn để sao chép', githubHint: 'Mở hồ sơ',
      locationLabel: 'Địa điểm', locationHint: 'Địa điểm hiện tại'
    },
    footer: { tech: 'Portfolio tĩnh · HTML5, SCSS & Vanilla JavaScript', backToTop: 'Về đầu trang' },
    modal: {
      close: 'Đóng chi tiết dự án', intro: 'Hệ thống hỗ trợ quản lý dữ liệu và quy trình vận hành cho cửa hàng thức ăn chăn nuôi và trang trại.',
      problemTitle: 'Bài toán', problemText: 'Tập trung thông tin vận hành, giảm thao tác rời rạc và giúp các luồng quản lý hàng hóa, trang trại và dữ liệu liên quan rõ ràng hơn.',
      contributionTitle: 'Đóng góp', contributionText: 'Phân tích nghiệp vụ, tổ chức luồng xử lý, thiết kế dữ liệu và xây dựng các chức năng web trong phạm vi dự án.',
      approachTitle: 'Cách tiếp cận', approachText: 'Chia nhỏ yêu cầu theo luồng nghiệp vụ, xây dựng từng phần theo quy trình Agile và ưu tiên khả năng sử dụng, bảo trì.',
      technologyTitle: 'Công nghệ'
    },
    feedback: {
      copySuccess: 'Đã sao chép email vào bộ nhớ tạm.', copyFailure: 'Không thể sao chép tự động. Email: BaoKhang18123@gmail.com'
    }
  },
  en: {
    meta: {
      title: 'Nguyen Bao Khang | Software, Data & Applied AI',
      description: 'Nguyen Bao Khang\'s portfolio covering software development, business analysis, data analysis and Applied AI/LLM.',
      ogDescription: 'Portfolio covering software development, business analysis, data analysis and Applied AI/LLM.'
    },
    accessibility: { skip: 'Skip to main content' },
    navigation: {
      label: 'Primary navigation', home: 'Nguyen Bao Khang - Home', open: 'Open menu', close: 'Close menu', about: 'About', skills: 'Skills', projects: 'Projects', education: 'Education', contact: 'Contact'
    },
    language: { label: 'Choose language' },
    theme: { toDark: 'Switch to dark theme', toLight: 'Switch to light theme' },
    hero: {
      availability: 'Open to discussing suitable opportunities',
      eyebrow: 'SOFTWARE · BUSINESS · DATA · APPLIED AI',
      title: 'Build clear solutions for the right problems.',
      intro: 'I am Nguyen Bao Khang. I combine software development, business analysis, data thinking and Applied AI/LLM to turn requirements into implementable solutions.',
      baCv: 'Business Analyst CV', dotnetCv: '.NET Developer CV', processLabel: 'Process from analysis to measurement',
      process: { analyze: 'Analyze', design: 'Design', build: 'Build', measure: 'Measure' }
    },
    about: {
      index: '01 · ABOUT', title: 'I turn operational requirements into practical software solutions.',
      lead: 'I combine systems analysis with data awareness to clarify the problem before choosing a solution. The goal is to create products that are understandable, implementable and measurable.',
      system: { title: 'Systems analysis', text: 'Clarify processes, actors, data and requirements before implementation.' },
      data: { title: 'Data thinking', text: 'Consider software together with the data the system creates and uses.' },
      delivery: { title: 'Practical delivery', text: 'Prioritize solutions that fit operational flows and remain maintainable.' }
    },
    skills: {
      index: '02 · CAPABILITIES', title: 'A practical foundation for modern digital products.',
      lead: 'From web development and data analysis to applied LLMs, I select tools based on the problem and the data flow involved.',
      languages: 'Languages & platforms', frameworks: 'Frameworks & libraries', storage: 'Data & storage', tools: 'Tools & practices', analysis: 'Data analysis', ai: 'LLM & Applied AI'
    },
    projects: {
      index: '03 · FEATURED PROJECT', title: 'Solving operational management for a farm and animal feed store.',
      lead: 'Focused on business structure, data management and a clear operating experience.', type: 'ERP SYSTEM · ASP.NET CORE',
      description: 'An ERP system for an animal feed store and livestock farm, structured around business workflows and an Agile development process.',
      details: 'View project details', demoPending: 'Demo being updated', repoPending: 'Repository being updated',
      imageAlt: 'Illustration of the stockfarm-erp dashboard interface'
    },
    education: {
      index: '04 · EDUCATION', title: 'Bachelor of Information Technology, majoring in Data Science.',
      degree: 'Bachelor of Information Technology · Data Science major', school: 'Ho Chi Minh City University of Foreign Languages and Information Technology', periodLabel: 'Period',
      gpaLabel: 'GPA / Classification'
    },
    contact: {
      index: '05 · CONTACT', title: 'Let\'s discuss a suitable opportunity.',
      lead: 'I am open to discussing software development, business analysis, data or an Applied AI problem that needs a clear implementation path.',
      directLabel: 'Direct contact channels', channelsLabel: 'Contact channels',
      emailMe: 'Send me an email', copyHint: 'Click to copy', githubHint: 'Open profile',
      locationLabel: 'Location', locationHint: 'Current location'
    },
    footer: { tech: 'Static portfolio · HTML5, SCSS & Vanilla JavaScript', backToTop: 'Back to top' },
    modal: {
      close: 'Close project details', intro: 'A system supporting data and operational workflow management for an animal feed store and livestock farm.',
      problemTitle: 'Problem', problemText: 'Centralize operational information, reduce fragmented tasks and make inventory, farm and related data workflows clearer.',
      contributionTitle: 'Contribution', contributionText: 'Business analysis, workflow organization, data design and web feature development within the project scope.',
      approachTitle: 'Approach', approachText: 'Break requirements into business workflows, deliver incrementally with Agile practices and prioritize usability and maintainability.',
      technologyTitle: 'Technology'
    },
    feedback: {
      copySuccess: 'Email copied to the clipboard.', copyFailure: 'Automatic copy failed. Email: BaoKhang18123@gmail.com'
    }
  }
};

let currentLanguage = 'vi';

function lookup(language, key) {
  return key.split('.').reduce((value, segment) => value?.[segment], translations[language]);
}

function updateMetadata(language) {
  document.title = translations[language].meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', translations[language].meta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', translations[language].meta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', translations[language].meta.ogDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'vi' ? 'vi_VN' : 'en_US');
}

export function t(key) {
  return lookup(currentLanguage, key) ?? key;
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function translatePage(language) {
  currentLanguage = language === 'en' ? 'en' : 'vi';
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = lookup(currentLanguage, element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
  });

  ['aria-label', 'title', 'alt'].forEach((attribute) => {
    const datasetKey = `i18n${attribute.split('-').map((part) => part[0].toUpperCase() + part.slice(1)).join('')}`;
    document.querySelectorAll(`[data-i18n-${attribute}]`).forEach((element) => {
      const value = lookup(currentLanguage, element.dataset[datasetKey]);
      if (typeof value === 'string') element.setAttribute(attribute, value);
    });
  });

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
  });

  updateMetadata(currentLanguage);
}

export function initLanguage() {
  const savedLanguage = localStorage.getItem(storageKey);
  translatePage(savedLanguage === 'en' ? 'en' : 'vi');

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.language === 'en' ? 'en' : 'vi';
      localStorage.setItem(storageKey, language);
      translatePage(language);
      window.dispatchEvent(new CustomEvent('languagechange', { detail: { language } }));
    });
  });
}
