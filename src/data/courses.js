// Courses data with detailed information

export const coursesData = {
  en: {
    title: 'Courses',
    categories: [
      {
        name: 'Web Development',
        courses: [
          {
            name: 'Professional Web Development',
            description: 'Comprehensive web development course covering frontend and backend technologies, modern frameworks, responsive design, and best practices.',
            topics: ['HTML5 & CSS3', 'JavaScript & ES6+', 'React & Vue.js', 'Node.js & Express', 'RESTful APIs', 'Database Integration', 'Deployment & DevOps']
          },
          {
            name: 'Full Stack Development',
            description: 'Complete full-stack development course covering both client-side and server-side technologies for building modern web applications.',
            topics: ['Frontend Frameworks', 'Backend Development', 'API Design', 'Authentication & Security', 'Database Management', 'Cloud Deployment']
          }
        ]
      },
      {
        name: 'Mobile Development',
        courses: [
          {
            name: 'Android Development',
            description: 'Complete Android app development course covering Java/Kotlin, Android SDK, UI/UX design, and publishing apps to Google Play Store.',
            topics: ['Android Studio', 'Java/Kotlin', 'Activities & Fragments', 'Material Design', 'SQLite Database', 'REST APIs', 'Google Play Publishing']
          },
          {
            name: 'iOS Development',
            description: 'Comprehensive iOS app development course covering Swift, Xcode, UIKit, SwiftUI, and publishing apps to Apple App Store.',
            topics: ['Swift Programming', 'Xcode IDE', 'UIKit & SwiftUI', 'Core Data', 'Networking', 'App Store Publishing']
          },
          {
            name: 'Cross-Platform Mobile Development',
            description: 'Learn to build mobile apps for both Android and iOS using React Native or Flutter frameworks.',
            topics: ['React Native', 'Flutter', 'Dart Programming', 'State Management', 'Native Modules', 'App Deployment']
          }
        ]
      },
      {
        name: 'IoT & Embedded Systems',
        courses: [
          {
            name: 'Arduino Programming',
            description: 'Complete Arduino course covering microcontroller programming, sensors, actuators, and building IoT projects.',
            topics: ['Arduino IDE', 'C/C++ Programming', 'Sensors & Actuators', 'Serial Communication', 'LCD Displays', 'Motor Control', 'IoT Projects']
          },
          {
            name: 'Raspberry Pi Projects',
            description: 'Comprehensive Raspberry Pi course covering Linux, Python programming, GPIO control, and building embedded systems.',
            topics: ['Raspberry Pi Setup', 'Linux Commands', 'Python Programming', 'GPIO Control', 'Camera Module', 'Home Automation', 'Robotics']
          },
          {
            name: 'Embedded Systems Design',
            description: 'Advanced embedded systems course covering microcontroller architecture, real-time systems, and hardware-software integration.',
            topics: ['Microcontroller Architecture', 'Real-Time Systems', 'Interrupts & Timers', 'Communication Protocols', 'PCB Design', 'Firmware Development']
          }
        ]
      },
      {
        name: 'Programming Languages',
        courses: [
          {
            name: 'Python Programming',
            description: 'Comprehensive Python programming course covering fundamentals, data structures, object-oriented programming, and advanced topics.',
            topics: ['Python Basics', 'Data Types', 'Control Structures', 'Functions', 'OOP', 'File Handling', 'Libraries']
          },
          {
            name: 'Java Programming',
            description: 'Complete Java programming course from basics to advanced concepts including GUI development and enterprise applications.',
            topics: ['Java Fundamentals', 'OOP Concepts', 'Collections', 'Exception Handling', 'Swing/AWT', 'JDBC', 'Multithreading']
          }
        ]
      },
      {
        name: 'Computer Science Fundamentals',
        courses: [
          {
            name: 'Data Structures',
            description: 'In-depth study of data structures including arrays, linked lists, stacks, queues, trees, graphs, and their implementations.',
            topics: ['Arrays & Lists', 'Stacks & Queues', 'Trees & Binary Trees', 'Graphs', 'Hash Tables', 'Sorting Algorithms', 'Search Algorithms']
          },
          {
            name: 'Object-Oriented Programming (OOP)',
            description: 'Comprehensive OOP course covering classes, objects, inheritance, polymorphism, encapsulation, and design patterns.',
            topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction', 'Design Patterns', 'UML']
          },
          {
            name: 'Algorithms',
            description: 'Algorithm design and analysis course covering complexity analysis, sorting, searching, dynamic programming, and graph algorithms.',
            topics: ['Algorithm Analysis', 'Sorting Algorithms', 'Search Algorithms', 'Dynamic Programming', 'Greedy Algorithms', 'Graph Algorithms', 'Complexity Theory']
          },
          {
            name: 'Computer Architecture',
            description: 'Computer organization and architecture course covering CPU design, memory systems, I/O systems, and parallel processing.',
            topics: ['CPU Design', 'Memory Systems', 'Cache Memory', 'I/O Systems', 'Assembly Language', 'Parallel Processing', 'Pipelining']
          }
        ]
      },
      {
        name: 'Databases',
        courses: [
          {
            name: 'SQL Databases',
            description: 'Relational database design and SQL programming covering normalization, queries, transactions, and database management.',
            topics: ['Database Design', 'Normalization', 'SQL Queries', 'Joins', 'Transactions', 'Indexing', 'Stored Procedures']
          },
          {
            name: 'NoSQL Databases',
            description: 'Introduction to NoSQL databases including MongoDB, document stores, key-value stores, and their use cases.',
            topics: ['MongoDB', 'Document Stores', 'Key-Value Stores', 'Graph Databases', 'CAP Theorem', 'Data Modeling']
          }
        ]
      },
      {
        name: 'Networking',
        courses: [
          {
            name: 'Computer Networks',
            description: 'Comprehensive networking course covering network protocols, TCP/IP, routing, switching, and network security.',
            topics: ['OSI Model', 'TCP/IP', 'Routing Protocols', 'Switching', 'Network Security', 'Wireless Networks', 'Network Administration']
          },
          {
            name: 'Cisco Networks',
            description: 'Complete Cisco networking course covering CCNA topics, router and switch configuration, network design, and troubleshooting.',
            topics: ['CCNA Fundamentals', 'Router Configuration', 'Switch Configuration', 'VLANs & Trunking', 'OSPF & EIGRP', 'Network Troubleshooting', 'Cisco Packet Tracer']
          },
          {
            name: 'Network Security',
            description: 'Advanced network security course covering firewalls, VPNs, intrusion detection, and network defense strategies.',
            topics: ['Firewall Configuration', 'VPN Technologies', 'Intrusion Detection', 'Network Monitoring', 'Security Policies', 'Penetration Testing']
          }
        ]
      },
      {
        name: 'Cloud Computing',
        courses: [
          {
            name: 'Cloud Solutions & Architecture',
            description: 'Comprehensive cloud computing course covering AWS, Azure, GCP, cloud architecture design, and deployment strategies.',
            topics: ['AWS Services', 'Azure Platform', 'Google Cloud', 'Cloud Architecture', 'Containerization', 'Serverless Computing', 'Cloud Security']
          },
          {
            name: 'DevOps & Cloud Deployment',
            description: 'Learn DevOps practices, CI/CD pipelines, container orchestration, and cloud deployment automation.',
            topics: ['Docker & Kubernetes', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Cloud Automation', 'Microservices']
          }
        ]
      },
      {
        name: 'Cyber Security',
        courses: [
          {
            name: 'Cyber Security Fundamentals',
            description: 'Comprehensive cybersecurity course covering threats, vulnerabilities, security controls, and defense strategies.',
            topics: ['Security Threats', 'Vulnerability Assessment', 'Encryption & Cryptography', 'Access Control', 'Security Policies', 'Incident Response']
          },
          {
            name: 'Ethical Hacking & Penetration Testing',
            description: 'Learn ethical hacking techniques, penetration testing methodologies, and security assessment tools.',
            topics: ['Kali Linux', 'Metasploit Framework', 'Network Scanning', 'Web Application Security', 'Social Engineering', 'Security Auditing']
          }
        ]
      },
      // UI/UX Design category removed by user request
      {
        name: 'Digital Design',
        courses: [
          {
            name: 'Digital Design',
            description: 'Digital logic design course covering combinational and sequential circuits, Boolean algebra, and digital system design.',
            topics: ['Boolean Algebra', 'Logic Gates', 'Combinational Circuits', 'Sequential Circuits', 'Flip-Flops', 'Counters', 'State Machines']
          },
          {
            name: 'ASIC Design',
            description: 'Application-Specific Integrated Circuit design course covering VHDL/Verilog, synthesis, and ASIC implementation.',
            topics: ['VHDL/Verilog', 'RTL Design', 'Synthesis', 'Place & Route', 'Timing Analysis', 'ASIC Flow', 'FPGA Implementation']
          }
        ]
      }
    ]
  },
  ar: {
    title: 'الكورسات',
    categories: [
      {
        name: 'تطوير الويب',
        courses: [
          {
            name: 'تطوير الويب الاحترافي',
            description: 'دورة شاملة في تطوير الويب تغطي تقنيات الواجهة الأمامية والخلفية، الأطر الحديثة، التصميم المتجاوب، وأفضل الممارسات.',
            topics: ['HTML5 & CSS3', 'JavaScript & ES6+', 'React & Vue.js', 'Node.js & Express', 'RESTful APIs', 'تكامل قواعد البيانات', 'النشر و DevOps']
          },
          {
            name: 'تطوير Full Stack',
            description: 'دورة كاملة في تطوير Full Stack تغطي تقنيات الواجهة الأمامية والخلفية لبناء تطبيقات الويب الحديثة.',
            topics: ['أطر الواجهة الأمامية', 'تطوير الخلفية', 'تصميم API', 'المصادقة والأمان', 'إدارة قواعد البيانات', 'النشر السحابي']
          }
        ]
      },
      {
        name: 'تطوير التطبيقات',
        courses: [
          {
            name: 'تطوير Android',
            description: 'دورة كاملة في تطوير تطبيقات Android تغطي Java/Kotlin، Android SDK، تصميم UI/UX، ونشر التطبيقات على Google Play Store.',
            topics: ['Android Studio', 'Java/Kotlin', 'Activities & Fragments', 'Material Design', 'قاعدة بيانات SQLite', 'REST APIs', 'نشر Google Play']
          },
          {
            name: 'تطوير iOS',
            description: 'دورة شاملة في تطوير تطبيقات iOS تغطي Swift، Xcode، UIKit، SwiftUI، ونشر التطبيقات على Apple App Store.',
            topics: ['برمجة Swift', 'Xcode IDE', 'UIKit & SwiftUI', 'Core Data', 'الشبكات', 'نشر App Store']
          },
          {
            name: 'تطوير التطبيقات متعددة المنصات',
            description: 'تعلم بناء تطبيقات موبايل لكل من Android و iOS باستخدام React Native أو Flutter.',
            topics: ['React Native', 'Flutter', 'برمجة Dart', 'إدارة الحالة', 'الوحدات الأصلية', 'نشر التطبيقات']
          }
        ]
      },
      {
        name: 'إنترنت الأشياء والأنظمة المدمجة',
        courses: [
          {
            name: 'برمجة Arduino',
            description: 'دورة كاملة في Arduino تغطي برمجة المتحكمات الدقيقة، المستشعرات، المشغلات، وبناء مشاريع IoT.',
            topics: ['Arduino IDE', 'برمجة C/C++', 'المستشعرات والمشغلات', 'الاتصال التسلسلي', 'شاشات LCD', 'التحكم بالمحركات', 'مشاريع IoT']
          },
          {
            name: 'مشاريع Raspberry Pi',
            description: 'دورة شاملة في Raspberry Pi تغطي Linux، برمجة Python، التحكم بـ GPIO، وبناء الأنظمة المدمجة.',
            topics: ['إعداد Raspberry Pi', 'أوامر Linux', 'برمجة Python', 'التحكم بـ GPIO', 'وحدة الكاميرا', 'الأتمتة المنزلية', 'الروبوتات']
          },
          {
            name: 'تصميم الأنظمة المدمجة',
            description: 'دورة متقدمة في الأنظمة المدمجة تغطي معمارية المتحكمات الدقيقة، الأنظمة في الوقت الفعلي، وتكامل الأجهزة والبرمجيات.',
            topics: ['معمارية المتحكمات الدقيقة', 'الأنظمة في الوقت الفعلي', 'المقاطعات والعدادات', 'بروتوكولات الاتصال', 'تصميم PCB', 'تطوير البرامج الثابتة']
          }
        ]
      },
      {
        name: 'لغات البرمجة',
        courses: [
          {
            name: 'برمجة Python',
            description: 'دورة شاملة في برمجة Python تغطي الأساسيات، هياكل البيانات، البرمجة الكائنية، والمواضيع المتقدمة.',
            topics: ['أساسيات Python', 'أنواع البيانات', 'هياكل التحكم', 'الدوال', 'OOP', 'معالجة الملفات', 'المكتبات']
          },
          {
            name: 'برمجة Java',
            description: 'دورة كاملة في برمجة Java من الأساسيات إلى المفاهيم المتقدمة بما في ذلك تطوير واجهات المستخدم والتطبيقات المؤسسية.',
            topics: ['أساسيات Java', 'مفاهيم OOP', 'Collections', 'معالجة الأخطاء', 'Swing/AWT', 'JDBC', 'Multithreading']
          }
        ]
      },
      {
        name: 'أساسيات علوم الحاسب',
        courses: [
          {
            name: 'هياكل البيانات',
            description: 'دراسة متعمقة لهياكل البيانات بما في ذلك المصفوفات، القوائم المرتبطة، المكدسات، الطوابير، الأشجار، الرسوم البيانية، وتنفيذها.',
            topics: ['المصفوفات والقوائم', 'المكدسات والطوابير', 'الأشجار', 'الرسوم البيانية', 'جداول التجزئة', 'خوارزميات الترتيب', 'خوارزميات البحث']
          },
          {
            name: 'البرمجة الكائنية (OOP)',
            description: 'دورة شاملة في البرمجة الكائنية تغطي الفئات، الكائنات، الوراثة، تعدد الأشكال، التغليف، وأنماط التصميم.',
            topics: ['الفئات والكائنات', 'الوراثة', 'تعدد الأشكال', 'التغليف', 'التجريد', 'أنماط التصميم', 'UML']
          },
          {
            name: 'الخوارزميات',
            description: 'دورة تصميم وتحليل الخوارزميات تغطي تحليل التعقيد، الترتيب، البحث، البرمجة الديناميكية، وخوارزميات الرسوم البيانية.',
            topics: ['تحليل الخوارزميات', 'خوارزميات الترتيب', 'خوارزميات البحث', 'البرمجة الديناميكية', 'الخوارزميات الجشعة', 'خوارزميات الرسوم البيانية', 'نظرية التعقيد']
          },
          {
            name: 'معمارية الحاسوب',
            description: 'دورة تنظيم ومعمارية الحاسوب تغطي تصميم المعالج، أنظمة الذاكرة، أنظمة الإدخال/الإخراج، والمعالجة المتوازية.',
            topics: ['تصميم المعالج', 'أنظمة الذاكرة', 'ذاكرة التخزين المؤقت', 'أنظمة I/O', 'لغة التجميع', 'المعالجة المتوازية', 'Pipeline']
          }
        ]
      },
      {
        name: 'قواعد البيانات',
        courses: [
          {
            name: 'قواعد البيانات SQL',
            description: 'تصميم قواعد البيانات العلائقية وبرمجة SQL تغطي التطبيع، الاستعلامات، المعاملات، وإدارة قواعد البيانات.',
            topics: ['تصميم قواعد البيانات', 'التطبيع', 'استعلامات SQL', 'Joins', 'المعاملات', 'الفهرسة', 'الإجراءات المخزنة']
          },
          {
            name: 'قواعد البيانات NoSQL',
            description: 'مقدمة لقواعد البيانات NoSQL بما في ذلك MongoDB، مستودعات المستندات، مستودعات المفتاح-القيمة، وحالات استخدامها.',
            topics: ['MongoDB', 'مستودعات المستندات', 'مستودعات المفتاح-القيمة', 'قواعد البيانات الرسومية', 'نظرية CAP', 'نمذجة البيانات']
          }
        ]
      },
      {
        name: 'الشبكات',
        courses: [
          {
            name: 'شبكات الحاسوب',
            description: 'دورة شاملة في الشبكات تغطي بروتوكولات الشبكة، TCP/IP، التوجيه، التبديل، وأمن الشبكات.',
            topics: ['نموذج OSI', 'TCP/IP', 'بروتوكولات التوجيه', 'التبديل', 'أمن الشبكات', 'الشبكات اللاسلكية', 'إدارة الشبكات']
          },
          {
            name: 'شبكات Cisco',
            description: 'دورة كاملة في شبكات Cisco تغطي مواضيع CCNA، تكوين الموجهات والمبدلات، تصميم الشبكات، واستكشاف الأخطاء.',
            topics: ['أساسيات CCNA', 'تكوين الموجهات', 'تكوين المبدلات', 'VLANs & Trunking', 'OSPF & EIGRP', 'استكشاف أخطاء الشبكة', 'Cisco Packet Tracer']
          },
          {
            name: 'أمن الشبكات',
            description: 'دورة متقدمة في أمن الشبكات تغطي الجدران النارية، VPNs، كشف التسلل، واستراتيجيات الدفاع عن الشبكة.',
            topics: ['تكوين الجدران النارية', 'تقنيات VPN', 'كشف التسلل', 'مراقبة الشبكة', 'سياسات الأمان', 'اختبار الاختراق']
          }
        ]
      },
      {
        name: 'الحوسبة السحابية',
        courses: [
          {
            name: 'الحلول والبنية السحابية',
            description: 'دورة شاملة في الحوسبة السحابية تغطي AWS، Azure، GCP، تصميم البنية السحابية، واستراتيجيات النشر.',
            topics: ['خدمات AWS', 'منصة Azure', 'Google Cloud', 'البنية السحابية', 'الحاويات', 'الحوسبة بدون خوادم', 'الأمان السحابي']
          },
          {
            name: 'DevOps والنشر السحابي',
            description: 'تعلم ممارسات DevOps، خطوط CI/CD، تنسيق الحاويات، وأتمتة النشر السحابي.',
            topics: ['Docker & Kubernetes', 'خطوط CI/CD', 'البنية التحتية كرمز', 'المراقبة والتسجيل', 'أتمتة السحابة', 'الخدمات الصغيرة']
          }
        ]
      },
      {
        name: 'الأمن السيبراني',
        courses: [
          {
            name: 'أساسيات الأمن السيبراني',
            description: 'دورة شاملة في الأمن السيبراني تغطي التهديدات، الثغرات، ضوابط الأمان، واستراتيجيات الدفاع.',
            topics: ['تهديدات الأمان', 'تقييم الثغرات', 'التشفير', 'التحكم في الوصول', 'سياسات الأمان', 'الاستجابة للحوادث']
          },
          {
            name: 'الاختراق الأخلاقي واختبار الاختراق',
            description: 'تعلم تقنيات الاختراق الأخلاقي، منهجيات اختبار الاختراق، وأدوات تقييم الأمان.',
            topics: ['Kali Linux', 'إطار Metasploit', 'فحص الشبكة', 'أمان تطبيقات الويب', 'الهندسة الاجتماعية', 'تدقيق الأمان']
          }
        ]
      },
      // قسم تصميم واجهة المستخدم تمت إزالته بطلب المستخدم
      {
        name: 'التصميم الرقمي',
        courses: [
          {
            name: 'التصميم الرقمي',
            description: 'دورة تصميم المنطق الرقمي تغطي الدوائر التوافقية والتسلسلية، الجبر البوليني، وتصميم الأنظمة الرقمية.',
            topics: ['الجبر البوليني', 'البوابات المنطقية', 'الدوائر التوافقية', 'الدوائر التسلسلية', 'Flip-Flops', 'العدادات', 'آلات الحالة']
          },
          {
            name: 'تصميم ASIC',
            description: 'دورة تصميم الدوائر المتكاملة الخاصة بالتطبيقات تغطي VHDL/Verilog، التركيب، وتنفيذ ASIC.',
            topics: ['VHDL/Verilog', 'تصميم RTL', 'التركيب', 'Place & Route', 'تحليل التوقيت', 'تدفق ASIC', 'تنفيذ FPGA']
          }
        ]
      }
    ]
  }
}

