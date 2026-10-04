export const translations = {
  vi: {
    meta: {
      title: "Nguyễn Bảo Khang | Software Engineer, Data & Applied AI",
      description: "Portfolio của Nguyễn Bảo Khang - Kỹ sư phần mềm, phân tích nghiệp vụ, phân tích dữ liệu và Applied AI/LLM tại TP. Hồ Chí Minh.",
      ogDescription: "Giải pháp phần mềm, phân tích nghiệp vụ, tư duy dữ liệu và ứng dụng AI thực tế."
    },
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      skills: "Năng lực",
      projects: "Dự án",
      education: "Học vấn",
      contact: "Liên hệ",
      openMenu: "Mở menu",
      closeMenu: "Đóng menu"
    },
    hero: {
      statusBadge: "Sẵn sàng trao đổi về cơ hội phù hợp",
      greeting: "Xin chào, tôi là",
      name: "Nguyễn Bảo Khang",
      roles: [
        "Software Engineer (.NET / Web)",
        "Business Analyst (IT/BA)",
        "Data & Analytics Specialist",
        "Applied AI & LLM Engineer"
      ],
      tagline: "SOFTWARE · BUSINESS · DATA · APPLIED AI",
      summary: "Tôi kết hợp tư duy phân tích nghiệp vụ hệ thống, nền tảng phát triển phần mềm vững chắc và ứng dụng AI/Data để chuyển giao các giải pháp số thực tế, tối ưu vận hành và dễ bảo trì.",
      downloadBA: "Business Analyst CV",
      downloadDotNet: ".NET Developer CV",
      exploreProjects: "Xem các dự án",
      processHeading: "Quy trình chuyển giao giải pháp",
      processSubtitle: "Bấm vào từng bước để khám phá phương pháp luận",
      process: [
        {
          step: "01",
          name: "Phân tích",
          enName: "Analyze",
          desc: "Làm rõ yêu cầu, vẽ luồng BPMN, xây dựng User Stories & phân rã nghiệp vụ chi tiết.",
          tools: ["BPMN 2.0", "User Stories", "Gap Analysis", "Agile/Scrum"]
        },
        {
          step: "02",
          name: "Thiết kế",
          enName: "Design",
          desc: "Thiết kế kiến trúc Clean Architecture, chuẩn hóa cơ sở dữ liệu ERD & đặc tả REST API.",
          tools: ["Database Modeling", "API Contracts", "System Architecture", "Figma"]
        },
        {
          step: "03",
          name: "Xây dựng",
          enName: "Build",
          desc: "Hiện thực hóa hệ thống bằng ASP.NET Core, C#, Blazor/React, tối ưu hóa LINQ và SQL.",
          tools: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Docker"]
        },
        {
          step: "04",
          name: "Đo lường",
          enName: "Measure",
          desc: "Theo dõi dữ liệu thực tế với Power BI, logging hệ thống và đánh giá hiệu năng giải pháp.",
          tools: ["Power BI", "Pandas", "Logging & APM", "RAG Evaluation"]
        }
      ]
    },
    about: {
      badge: "01 · GIỚI THIỆU & TRIẾT LÝ",
      title: "Chuyển bài toán vận hành phức tạp thành hệ thống phần mềm tinh gọn.",
      lead: "Mục tiêu trong từng dự án là tạo ra sản phẩm dễ sử dụng cho người vận hành, chặt chẽ về dữ liệu và bền vững về kiến trúc mã nguồn.",
      pillars: [
        {
          number: "01",
          title: "Phân tích hệ thống bài bản",
          text: "Hiểu sâu quy trình kinh doanh và tác nhân trước khi gõ dòng code đầu tiên. Tài liệu hóa yêu cầu rõ ràng, giảm thiểu chi phí sửa đổi về sau.",
          tags: ["Nghiệp vụ", "BPMN", "Quy trình"]
        },
        {
          number: "02",
          title: "Tư duy dữ liệu song hành",
          text: "Không chỉ viết logic ứng dụng mà còn quản trị dữ liệu sinh ra. Chuẩn hóa cơ sở dữ liệu, đảm bảo tính toàn vẹn và sẵn sàng cho phân tích/AI.",
          tags: ["Khoa học dữ liệu", "SQL Server", "Data Integrity"]
        },
        {
          number: "03",
          title: "Triển khai thực tế & Bảo trì",
          text: "Áp dụng Clean Architecture và mô hình phân tầng giúp mã nguồn dễ mở rộng, kiểm thử và bàn giao thuận lợi cho đội ngũ.",
          tags: ["Clean Architecture", "Maintainability", "Agile"]
        }
      ],
      stats: [
        { label: "Bằng cấp chính quy", value: "Cử nhân CNTT", sub: "Khoa học Dữ liệu (HUFLIT)" },
        { label: "Thành tích học tập", value: "3.2 / 4.0", sub: "Xếp loại Giỏi (Distinction)" },
        { label: "Lĩnh vực chuyên môn", value: "BA + .NET + AI", sub: "Cầu nối Kỹ thuật & Kinh doanh" },
        { label: "Địa bàn công tác", value: "TP. Hồ Chí Minh", sub: "On-site / Hybrid / Remote" }
      ]
    },
    skills: {
      badge: "02 · NĂNG LỰC CÔNG NGHỆ",
      title: "Bộ kỹ năng toàn diện từ Lập trình, Dữ liệu đến Trí tuệ nhân tạo.",
      lead: "Tôi lựa chọn công nghệ phù hợp nhất dựa trên tính chất bài toán và yêu cầu mở rộng của doanh nghiệp.",
      filterAll: "Tất cả năng lực",
      categories: [
        {
          id: "software",
          title: "Phần mềm & Nền tảng",
          icon: "code",
          items: ["C#", "ASP.NET Core", "ASP.NET MVC", "Blazor", "JavaScript", "HTML5/CSS3", "Entity Framework", "RESTful API", "Bootstrap"]
        },
        {
          id: "data",
          title: "Dữ liệu & Phân tích",
          icon: "database",
          items: ["SQL Server", "T-SQL", "LINQ", "Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Data Visualization", "Jupyter"]
        },
        {
          id: "ai",
          title: "Applied AI & LLM",
          icon: "sparkles",
          items: ["LangChain", "RAG Architecture", "Pinecone Vector DB", "Prompt Engineering", "NLP", "Semantic Search", "LLM Integration"]
        },
        {
          id: "tools",
          title: "Công cụ & Phương pháp",
          icon: "tool",
          items: ["Docker", "Git / GitHub", "Business Analysis", "Agile / Scrum", "BPMN Diagramming", "Microsoft Office", "Postman", "CI/CD Basics"]
        }
      ]
    },
    projects: {
      badge: "03 · DỰ ÁN TIÊU BIỂU",
      title: "Các giải pháp phần mềm và ứng dụng dữ liệu thực tế.",
      lead: "Mỗi dự án thể hiện sự gắn kết giữa phân tích yêu cầu nghiệp vụ, thiết kế kiến trúc chuẩn mực và giao diện trực quan.",
      viewDetails: "Xem chi tiết kiến trúc",
      liveStatusDemo: "Demo đang cập nhật",
      liveStatusRepo: "Repository đang hoàn thiện",
      modalClose: "Đóng cửa sổ",
      items: [
        {
          id: "stockfarm-erp",
          title: "stockfarm-erp",
          subtitle: "Hệ thống ERP Quản lý Cửa hàng & Trang trại Thức ăn Chăn nuôi",
          category: "ERP & Enterprise Software",
          featured: true,
          image: "assets/images/stockfarm-erp-preview.jpg",
          fallbackImage: "assets/images/stockfarm-erp.svg",
          summary: "Hệ sinh thái ERP giải quyết trọn vẹn luồng vận hành của trang trại chăn nuôi và chuỗi cung ứng thức ăn: từ quản lý tồn kho, công nợ đại lý, phối trộn khẩu phần đến báo cáo doanh thu.",
          tags: ["ASP.NET Core", "Blazor", "SQL Server", "Entity Framework Core", "Clean Architecture", "Agile"],
          problem: "Các trang trại và đại lý phân phối thức ăn chăn nuôi gặp tình trạng dữ liệu rời rạc, thất thoát vật tư, khó kiểm soát hạn sử dụng nguyên liệu và sai sót khi tính toán khẩu phần dinh dưỡng bằng sổ sách thủ công.",
          solution: "Xây dựng hệ thống ERP tập trung với cơ chế phân quyền RBAC, theo dõi tồn kho theo thời gian thực (Real-time stock ledger), tự động tính toán giá vốn và cảnh báo khi mức tồn kho chạm ngưỡng tối thiểu.",
          contribution: "Đảm nhận toàn bộ chu trình BA và phát triển backend: Phân tích nghiệp vụ, vẽ biểu đồ luồng BPMN, chuẩn hóa database 3NF trên SQL Server, viết API bằng ASP.NET Core và giao diện tương tác nhanh với Blazor.",
          metrics: [
            { label: "Module chức năng", value: "Kho, Bán hàng, Định mức, Báo cáo" },
            { label: "Kiến trúc mã", value: "Clean Architecture (Separation of Concerns)" },
            { label: "Quy trình phát triển", value: "Agile Scrum (Sprint 2 tuần)" }
          ]
        },
        {
          id: "knowledge-cube-ai",
          title: "Knowledge Cube AI",
          subtitle: "Trợ lý AI Tìm kiếm Ngữ nghĩa & Hỏi đáp Tài liệu Thông minh (RAG)",
          category: "Applied AI & LLM Systems",
          featured: true,
          image: "assets/images/rag-ai-assistant-preview.jpg",
          fallbackImage: "assets/images/stockfarm-erp.svg",
          summary: "Hệ thống hỏi đáp tài liệu ứng dụng kỹ thuật Retrieval-Augmented Generation (RAG). Cho phép nhân sự tra cứu sổ tay quy định, tài liệu kỹ thuật nhanh chóng với trích dẫn bằng chứng chính xác và chống ảo giác (hallucination).",
          tags: ["Python", "LangChain", "RAG Pipeline", "Pinecone", "Vector Embeddings", "FastAPI"],
          problem: "Tài liệu kỹ thuật và chính sách doanh nghiệp dày hàng trăm trang khiến việc tra cứu thủ công tốn nhiều giờ. Sử dụng AI thông thường thì thường bị bịa đặt thông tin và không có nguồn trích dẫn kiểm chứng.",
          solution: "Xây dựng pipeline RAG hiện đại: Phân đoạn ngữ nghĩa tài liệu (Semantic Chunking), lưu trữ vector trong Pinecone, kết hợp tìm kiếm kết hợp (Hybrid Search) và Prompt Engineering có kiểm soát nguồn nghiêm ngặt.",
          contribution: "Nghiên cứu và triển khai pipeline LangChain, tối ưu hóa chiến lược chunking và tham số embedding, xây dựng API truy vấn và kiểm thử độ chính xác (Precision & Recall).",
          metrics: [
            { label: "Cơ chế tìm kiếm", value: "Hybrid Vector + Keyword Search" },
            { label: "Độ chính xác câu trả lời", value: "Kèm trích dẫn số trang & văn bản gốc" },
            { label: "Vector Database", value: "Pinecone Managed Cloud" }
          ]
        },
        {
          id: "supply-chain-analytics",
          title: "Supply Chain & Retail Analytics",
          subtitle: "Nền tảng Phân tích Dữ liệu Vận hành & Trực quan hóa KPI",
          category: "Data Analytics & BI",
          featured: false,
          image: "assets/images/stockfarm-erp.svg",
          fallbackImage: "assets/images/stockfarm-erp.svg",
          summary: "Quy trình phân tích dữ liệu tự động hóa giúp lãnh đạo theo dõi chỉ số tồn kho, phân tích xu hướng mua sắm của khách hàng và dự báo nhu cầu nhập hàng theo mùa vụ.",
          tags: ["Python", "Pandas", "Power BI", "SQL Server", "ETL Pipeline", "Data Modeling"],
          problem: "Dữ liệu bán hàng và chuỗi cung ứng bị phân tán ở nhiều file Excel và cơ sở dữ liệu khác nhau, lãnh đạo thiếu cái nhìn trực quan và kịp thời để ra quyết định điều chuyển hàng.",
          solution: "Xây dựng pipeline ETL chuẩn hóa dữ liệu từ nguồn SQL Server bằng Python (Pandas), dựng Data Model hình sao (Star Schema) và trực quan hóa dashboard trên Microsoft Power BI với các chỉ số trực quan.",
          contribution: "Làm sạch và xử lý dữ liệu khuyết thiếu, viết các truy vấn T-SQL phức tạp, tạo thước đo DAX trong Power BI và thiết kế giao diện dashboard thân thiện với người dùng phi kỹ thuật.",
          metrics: [
            { label: "Công cụ trực quan", value: "Microsoft Power BI + Matplotlib" },
            { label: "Mô hình dữ liệu", value: "Star Schema (Fact & Dimension Tables)" },
            { label: "Nguồn dữ liệu", value: "SQL Server & CSV Flat Files" }
          ]
        }
      ]
    },
    education: {
      badge: "04 · HỌC VẤN & BẰNG CẤP",
      title: "Nền tảng đào tạo công nghệ thông tin chính quy.",
      school: "Đại học Ngoại ngữ - Tin học TP. Hồ Chí Minh (HUFLIT)",
      degree: "Cử nhân Công nghệ Thông tin",
      major: "Chuyên ngành Khoa học Dữ liệu (Data Science)",
      period: "2021 – 2025",
      gpa: "GPA 3.2 / 4.0",
      classification: "Xếp loại Giỏi (Distinction)",
      highlightsTitle: "Kiến thức trọng tâm tích lũy",
      highlights: [
        "Phân tích & Thiết kế Hệ thống Thông tin (SAD, UML, BPMN)",
        "Lập trình hướng đối tượng (OOP) & Công nghệ .NET (C#, ASP.NET)",
        "Hệ quản trị Cơ sở dữ liệu Nâng cao (SQL Server, T-SQL, Tối ưu Index)",
        "Khai phá Dữ liệu & Học máy (Data Mining, Machine Learning với Python)",
        "Xử lý Ngôn ngữ Tự nhiên (NLP) & Ứng dụng Trí tuệ Nhân tạo hiện đại"
      ]
    },
    contact: {
      badge: "05 · KẾT NỐI",
      title: "Cùng trao đổi về cơ hội hợp tác và phát triển giải pháp.",
      lead: "Tôi luôn sẵn lòng đón nhận các cơ hội việc làm toàn thời gian cho vị trí Business Analyst, .NET Developer hoặc kỹ sư Applied AI.",
      emailCardTitle: "Email liên hệ chính thức",
      emailAddress: "BaoKhang18123@gmail.com",
      copyEmail: "Sao chép email",
      copiedEmail: "Đã sao chép vào bộ nhớ tạm!",
      sendEmail: "Soạn thư gửi ngay",
      githubTitle: "GitHub cá nhân",
      githubUser: "baokhangnguyen18123",
      githubDesc: "Xem mã nguồn, repositories và các bài lab công nghệ.",
      locationTitle: "Địa điểm hiện tại",
      locationValue: "TP. Hồ Chí Minh, Việt Nam",
      locationDesc: "Sẵn sàng làm việc trực tiếp hoặc hybrid.",
      quickTemplateTitle: "Mẫu trao đổi nhanh",
      quickTemplates: [
        {
          label: "💼 Tuyển dụng .NET / Backend Developer",
          subject: "Trao đổi cơ hội việc làm .NET Developer - [Tên Công Ty]",
          body: "Chào Khang, chúng tôi rất ấn tượng với portfolio của bạn và muốn trao đổi về cơ hội vị trí .NET Developer..."
        },
        {
          label: "📊 Tuyển dụng Business Analyst (IT)",
          subject: "Trao đổi cơ hội việc làm Business Analyst - [Tên Công Ty]",
          body: "Chào Khang, công ty chúng tôi đang tìm kiếm nhân sự có tư duy phân tích hệ thống kết hợp kỹ thuật..."
        },
        {
          label: "🤖 Tư vấn / Triển khai giải pháp AI & Dữ liệu",
          subject: "Trao đổi về bài toán Dữ liệu / Applied AI",
          body: "Chào Khang, chúng tôi có bài toán cần ứng dụng RAG / Xử lý dữ liệu và muốn trao đổi cùng bạn..."
        }
      ]
    },
    footer: {
      copyright: "Nguyễn Bảo Khang. Mọi quyền được bảo lưu.",
      builtWith: "Xây dựng với React 18, Vite & Modern Glassmorphism Design System",
      backToTop: "Về đầu trang"
    },
    modal: {
      overview: "Tổng quan giải pháp",
      problem: "Bài toán thực tế",
      solution: "Giải pháp & Kiến trúc",
      contribution: "Đóng góp & Vai trò",
      techStack: "Công nghệ áp dụng",
      highlights: "Thông số nổi bật"
    }
  },
  en: {
    meta: {
      title: "Nguyen Bao Khang | Software Engineer, Data & Applied AI",
      description: "Portfolio of Nguyen Bao Khang - Software Engineer, Business Analyst, Data Specialist, and Applied AI/LLM Engineer based in Ho Chi Minh City.",
      ogDescription: "Practical software solutions, business systems analysis, data intelligence, and applied AI."
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Capabilities",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    hero: {
      statusBadge: "Available for suitable opportunities",
      greeting: "Hello, I am",
      name: "Nguyen Bao Khang",
      roles: [
        "Software Engineer (.NET / Web)",
        "Business Analyst (IT/BA)",
        "Data & Analytics Specialist",
        "Applied AI & LLM Engineer"
      ],
      tagline: "SOFTWARE · BUSINESS · DATA · APPLIED AI",
      summary: "I bridge systems analysis, robust software engineering (.NET / Modern Web), and applied AI/Data thinking to transform complex operational needs into clear, maintainable digital solutions.",
      downloadBA: "Business Analyst CV",
      downloadDotNet: ".NET Developer CV",
      exploreProjects: "Explore Projects",
      processHeading: "Delivery Methodology",
      processSubtitle: "Click on any stage to inspect the technical methodology",
      process: [
        {
          step: "01",
          name: "Analyze",
          enName: "Analyze",
          desc: "Clarify stakeholder needs, document BPMN process flows, write User Stories & functional specs.",
          tools: ["BPMN 2.0", "User Stories", "Gap Analysis", "Agile/Scrum"]
        },
        {
          step: "02",
          name: "Design",
          enName: "Design",
          desc: "Architect Clean Architecture solutions, normalize relational schemas (ERD) & spec REST APIs.",
          tools: ["Database Modeling", "API Contracts", "System Architecture", "Figma"]
        },
        {
          step: "03",
          name: "Build",
          enName: "Build",
          desc: "Implement backend & frontend using ASP.NET Core, C#, Blazor/React, and optimized LINQ/SQL.",
          tools: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "Docker"]
        },
        {
          step: "04",
          name: "Measure",
          enName: "Measure",
          desc: "Monitor operational data with Power BI, instrument application logging, and validate solution impact.",
          tools: ["Power BI", "Pandas", "Logging & APM", "RAG Evaluation"]
        }
      ]
    },
    about: {
      badge: "01 · ABOUT & PHILOSOPHY",
      title: "Transforming messy operational requirements into lean, reliable software.",
      lead: "My objective in every initiative is to deliver systems that are intuitive for end-users, mathematically sound in data integrity, and architecturally maintainable.",
      pillars: [
        {
          number: "01",
          title: "Rigorous Systems Analysis",
          text: "Grasp business domain mechanics and user journeys before writing code. Comprehensive requirements specifications minimize costly scope rework.",
          tags: ["Business Analysis", "BPMN", "Workflows"]
        },
        {
          number: "02",
          title: "Data-Driven Engineering",
          text: "Engineered software should treat data as a primary asset. Normalized database design ensures referential integrity, analytics readiness, and AI compatibility.",
          tags: ["Data Science", "SQL Server", "Data Integrity"]
        },
        {
          number: "03",
          title: "Maintainable Practical Delivery",
          text: "Adopting Clean Architecture and modular layering keeps codebases easy to test, extend, and onboard teammates efficiently.",
          tags: ["Clean Architecture", "Maintainability", "Agile"]
        }
      ],
      stats: [
        { label: "Formal Degree", value: "Bachelor of IT", sub: "Data Science Major (HUFLIT)" },
        { label: "Academic Standing", value: "3.2 / 4.0", sub: "Distinction Honors" },
        { label: "Core Competency", value: "BA + .NET + AI", sub: "Tech & Business Bridge" },
        { label: "Base Location", value: "Ho Chi Minh City", sub: "On-site / Hybrid / Remote" }
      ]
    },
    skills: {
      badge: "02 · CAPABILITIES & TECH STACK",
      title: "A multifaceted skill set spanning Software, Data, and Applied AI.",
      lead: "I choose tooling based on the domain problem and operational scalability constraints.",
      filterAll: "All Capabilities",
      categories: [
        {
          id: "software",
          title: "Software & Core Platforms",
          icon: "code",
          items: ["C#", "ASP.NET Core", "ASP.NET MVC", "Blazor", "JavaScript", "HTML5/CSS3", "Entity Framework", "RESTful API", "Bootstrap"]
        },
        {
          id: "data",
          title: "Data & Analytics",
          icon: "database",
          items: ["SQL Server", "T-SQL", "LINQ", "Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Data Visualization", "Jupyter"]
        },
        {
          id: "ai",
          title: "Applied AI & LLMs",
          icon: "sparkles",
          items: ["LangChain", "RAG Architecture", "Pinecone Vector DB", "Prompt Engineering", "NLP", "Semantic Search", "LLM Integration"]
        },
        {
          id: "tools",
          title: "Practices & DevOps",
          icon: "tool",
          items: ["Docker", "Git / GitHub", "Business Analysis", "Agile / Scrum", "BPMN Diagramming", "Microsoft Office", "Postman", "CI/CD Basics"]
        }
      ]
    },
    projects: {
      badge: "03 · FEATURED WORK",
      title: "Practical enterprise applications and data-driven systems.",
      lead: "Each project exemplifies clean requirement modeling, sound engineering architecture, and ergonomic interfaces.",
      viewDetails: "Inspect Deep Dive",
      liveStatusDemo: "Demo being updated",
      liveStatusRepo: "Repository being updated",
      modalClose: "Close details",
      items: [
        {
          id: "stockfarm-erp",
          title: "stockfarm-erp",
          subtitle: "ERP System for Animal Feed Stores and Livestock Farm Operations",
          category: "ERP & Enterprise Software",
          featured: true,
          image: "assets/images/stockfarm-erp-preview.jpg",
          fallbackImage: "assets/images/stockfarm-erp.svg",
          summary: "End-to-end ERP ecosystem resolving operations across livestock farming and feed supply chains: covering real-time inventory ledgers, dealer credit tracking, feed formulation, and automated reorder alerts.",
          tags: ["ASP.NET Core", "Blazor", "SQL Server", "Entity Framework Core", "Clean Architecture", "Agile"],
          problem: "Livestock feed distributors and farm operations faced fragmented spreadsheets, unmonitored raw material spoilage, manual calculation errors in animal feed formulations, and delayed supplier settlements.",
          solution: "Engineered a centralized ERP platform with role-based access control (RBAC), real-time stock ledger, automated COGS valuation, and smart reorder threshold notifications.",
          contribution: "Spearheaded full BA and backend delivery: eliciting stakeholder requirements, modeling BPMN diagrams, designing 3NF relational schemas on SQL Server, writing ASP.NET Core REST APIs, and reactive Blazor UI.",
          metrics: [
            { label: "Core Modules", value: "Inventory, Procurement, Sales, Formulation" },
            { label: "Code Architecture", value: "Clean Architecture (Separation of Concerns)" },
            { label: "Methodology", value: "Agile Scrum (2-week sprints)" }
          ]
        },
        {
          id: "knowledge-cube-ai",
          title: "Knowledge Cube AI",
          subtitle: "Enterprise Semantic Search & RAG Knowledge Assistant",
          category: "Applied AI & LLM Systems",
          featured: true,
          image: "assets/images/rag-ai-assistant-preview.jpg",
          fallbackImage: "assets/images/stockfarm-erp.svg",
          summary: "Retrieval-Augmented Generation (RAG) assistant enabling company personnel to query voluminous technical documentation and internal guidelines with verified source citations and anti-hallucination guardrails.",
          tags: ["Python", "LangChain", "RAG Pipeline", "Pinecone", "Vector Embeddings", "FastAPI"],
          problem: "Hundreds of pages of operational SOPs and technical manuals slowed personnel lookup times, while naive general LLMs hallucinated without verifiable corporate backing.",
          solution: "Engineered a modern RAG pipeline: semantic chunking, vector indexing in Pinecone, hybrid search re-ranking, and strict citation prompt constraints.",
          contribution: "Designed LangChain orchestration, optimized chunking overlap and embedding parameters, implemented FastAPI endpoints, and ran benchmark evaluation on retrieval precision.",
          metrics: [
            { label: "Retrieval Engine", value: "Hybrid Vector + Keyword Search" },
            { label: "Verification", value: "Exact page & snippet citation links" },
            { label: "Vector Database", value: "Pinecone Managed Cloud" }
          ]
        },
        {
          id: "supply-chain-analytics",
          title: "Supply Chain & Retail Analytics",
          subtitle: "Operational Intelligence & Executive KPI Dashboard",
          category: "Data Analytics & BI",
          featured: false,
          image: "assets/images/stockfarm-erp.svg",
          fallbackImage: "assets/images/stockfarm-erp.svg",
          summary: "Automated business intelligence workflow empowering management with inventory velocity tracking, supplier fulfillment performance, and seasonal demand pattern forecasts.",
          tags: ["Python", "Pandas", "Power BI", "SQL Server", "ETL Pipeline", "Data Modeling"],
          problem: "Supply chain data was scattered across disparate Excel sheets and transactional tables, depriving leaders of timely operational visibility to adjust stock replenishment.",
          solution: "Built automated Python/Pandas ETL pipelines extracting from SQL Server, structured a Star Schema data model, and crafted interactive Power BI dashboards with real-time KPI alerts.",
          contribution: "Implemented data cleansing and missing value handling, authored advanced T-SQL queries and DAX business logic measures, and designed intuitive user-centric dashboard layouts.",
          metrics: [
            { label: "Visualization", value: "Microsoft Power BI + Matplotlib" },
            { label: "Data Model", value: "Star Schema (Fact & Dimension Tables)" },
            { label: "Data Sources", value: "SQL Server & Flat CSV Files" }
          ]
        }
      ]
    },
    education: {
      badge: "04 · EDUCATION & CREDENTIALS",
      title: "Formal IT training with Data Science specialization.",
      school: "Ho Chi Minh City University of Foreign Languages - Information Technology (HUFLIT)",
      degree: "Bachelor of Information Technology",
      major: "Major in Data Science",
      period: "2021 – 2025",
      gpa: "GPA 3.2 / 4.0",
      classification: "Distinction Honors",
      highlightsTitle: "Key Academic Foundations",
      highlights: [
        "Data Structures & Algorithms, Object-Oriented Analysis & Design (OOAD)",
        "Enterprise .NET Technologies (C#, ASP.NET Core, MVC)",
        "Advanced Database Management Systems (SQL Server, T-SQL, Query Tuning)",
        "Data Mining, Predictive Modeling & Applied Machine Learning with Python",
        "Natural Language Processing (NLP) & Modern LLM Applications"
      ]
    },
    contact: {
      badge: "05 · CONTACT & COLLABORATION",
      title: "Let's connect and discuss potential opportunities.",
      lead: "I am actively open to discussing full-time roles in Business Analysis, .NET / Backend Development, or Applied AI engineering.",
      emailCardTitle: "Official Contact Email",
      emailAddress: "BaoKhang18123@gmail.com",
      copyEmail: "Copy email address",
      copiedEmail: "Copied to clipboard!",
      sendEmail: "Send email directly",
      githubTitle: "Personal GitHub",
      githubUser: "baokhangnguyen18123",
      githubDesc: "Explore source code, project repositories, and technical experiments.",
      locationTitle: "Base Location",
      locationValue: "Ho Chi Minh City, Vietnam",
      locationDesc: "Available for on-site, hybrid, or remote engagements.",
      quickTemplateTitle: "Quick Inquiry Templates",
      quickTemplates: [
        {
          label: "💼 Hiring .NET / Backend Developer",
          subject: "Job Opportunity: .NET Developer - [Company Name]",
          body: "Hi Khang, I was impressed by your portfolio and would love to discuss an open .NET Developer role..."
        },
        {
          label: "📊 Hiring Business Analyst (IT)",
          subject: "Job Opportunity: Business Analyst - [Company Name]",
          body: "Hi Khang, our team is looking for a systems-minded Business Analyst with your technical profile..."
        },
        {
          label: "🤖 Applied AI / Data Solution Inquiry",
          subject: "Discussion on Data / Applied AI Solutions",
          body: "Hi Khang, we have an interesting RAG / Data pipeline project and would like to connect..."
        }
      ]
    },
    footer: {
      copyright: "Nguyen Bao Khang. All rights reserved.",
      builtWith: "Built with React 18, Vite & Modern Glassmorphism Design System",
      backToTop: "Back to top"
    },
    modal: {
      overview: "Solution Overview",
      problem: "Problem Statement",
      solution: "Solution & Architecture",
      contribution: "Role & Key Contributions",
      techStack: "Tech Stack",
      highlights: "Project Highlights"
    }
  }
};
