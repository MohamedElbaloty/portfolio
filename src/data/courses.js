// Courses data with detailed information

export const coursesData = {
  en: {
    title: 'Courses',
    categories: [
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
          }
        ]
      },
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
          }
        ]
      },
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

