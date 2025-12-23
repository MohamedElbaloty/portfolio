// Projects data with detailed descriptions, tools, and video explanations

export const projectsData = {
  en: [
    {
      id: 1,
      title: 'Sahlat',
      category: 'web',
      marketKey: 'sa',
      market: 'Saudi Arabia',
      description: 'Housing & investment financing platform in K.S.A.',
      fullDescription: 'Sahlat.sa is a specialized platform for housing and investment financing services. It partners with leading Saudi banks to help individuals compare offers and secure the best financing options. The platform streamlines the process by guiding users through eligibility, required documents, and application steps, providing a clear and smooth experience from inquiry to final offer.',
      tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT Authentication', 'AWS S3', 'Redis'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      link: 'https://sahlat.sa',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Miral Models',
      category: 'web',
      marketKey: 'ma',
      market: 'Morocco',
      description: 'Model brokerage platform (real & AI models). Professional portfolios & booking.',
      fullDescription: 'Miral Models is a modern intermediary platform between companies and models. It helps brands find, compare, and book suitable talent—either real models or AI-generated models—based on style, campaign needs, and budget. The platform also supports building professional model portfolios, managing profiles, and streamlining the booking workflow for companies.',
      tools: ['Vue.js', 'Vuex', 'PHP', 'Laravel', 'MySQL', 'Cloudinary', 'Stripe', 'EmailJS'],
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      link: 'https://miralmodels.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Mr Robot Academy',
      category: 'web',
      marketKey: 'eg',
      market: 'Egypt',
      description: 'Robotics & programming learning platform with tracking and certificates.',
      fullDescription: 'Mr Robot Academy is a comprehensive online learning platform specializing in robotics and programming education. The platform offers structured courses with video lessons, interactive coding exercises, real-time progress tracking, student forums, assignment submissions, automated grading system, and digital certificates upon course completion. It includes both beginner and advanced level courses.',
      tools: ['React', 'Next.js', 'Express', 'PostgreSQL', 'Prisma', 'Stripe', 'AWS S3', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      video: null,
      link: 'https://mrrobotacademy.com',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 4,
      title: 'Emaar Group',
      category: 'web',
      marketKey: 'kw',
      market: 'Kuwait',
      description: 'Kuwait company: HVAC ducting + AC installation piping supplies (simple site).',
      fullDescription: 'Emaar Group Kuwait is a straightforward corporate website that presents the company\'s core services and projects. The company focuses on manufacturing HVAC ducting and supplying AC installation piping and accessories in Kuwait. The website keeps the design simple and clear, prioritizing essential information (services, projects, and contact details).',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'EmailJS'],
      image: '/emaarlogo.jpg',
      video: null,
      link: 'https://emaargroup.com.kw',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 5,
      title: 'AI Video Production',
      category: 'production',
      description: 'AI promotional videos for brands (no real filming needed).',
      fullDescription: 'I specialize in creating high-quality promotional and marketing videos for companies using advanced AI video generation technology. This service eliminates the need for expensive video production equipment, actors, and filming locations. Using AI tools, I can create professional videos with realistic avatars, voiceovers, animations, and visual effects. Services include product promotion videos, company introductions, social media content, and marketing campaigns.',
      tools: ['AI Video Generation', 'Synthesia', 'D-ID', 'Runway ML', 'Adobe After Effects', 'Premiere Pro', 'AI Voice Synthesis', 'Motion Graphics'],
      image: '/aivideoproduction.png',
      video: null,
      link: null,
      gradient: 'from-rose-500 to-pink-500',
      hasSubProjects: true,
      subProjects: [
        {
          id: 'ai-video-production',
          title: 'AI Video Production',
          description: 'High-quality promotional and marketing videos created using advanced AI video generation technology.',
          fullDescription: 'I specialize in creating high-quality promotional and marketing videos for companies using advanced AI video generation technology. This service eliminates the need for expensive video production equipment, actors, and filming locations. Using AI tools, I can create professional videos with realistic avatars, voiceovers, animations, and visual effects. Services include product promotion videos, company introductions, social media content, and marketing campaigns.',
          tools: ['AI Video Generation', 'Synthesia', 'D-ID', 'Runway ML', 'Adobe After Effects', 'Premiere Pro', 'AI Voice Synthesis', 'Motion Graphics'],
          videos: [
            '/aivideoproduction/1.mp4',
            '/aivideoproduction/2.mp4',
            '/aivideoproduction/3.mp4',
            '/aivideoproduction/4.mp4',
            '/aivideoproduction/5.mp4',
            '/aivideoproduction/6.mp4',
            '/aivideoproduction/7.mp4',
            '/aivideoproduction/8.mp4',
            '/aivideoproduction/9.mp4'
          ],
          gradient: 'from-rose-500 to-pink-500'
        }
      ],
      videoSteps: [
        'Client Consultation: Understanding video requirements and objectives',
        'Script Writing: Creating engaging scripts and storyboards',
        'AI Avatar Selection: Choosing appropriate AI presenters',
        'Video Generation: Creating videos using AI platforms',
        'Post-Production: Editing, effects, and final touches',
        'Delivery: Providing final video in multiple formats'
      ]
    },
    {
      id: 6,
      title: 'Business Automation & Workflow',
      category: 'production',
      description: 'Business automation workflows (n8n-style) to streamline operations.',
      fullDescription: 'I develop custom automation solutions for businesses to streamline their operations and workflows. Similar to n8n, I create automated systems that connect different services, APIs, and platforms to automate repetitive tasks, data processing, notifications, and business logic. Solutions include CRM automation, email marketing automation, data synchronization between systems, automated reporting, social media management, and custom workflow automation tailored to specific business needs.',
      tools: ['n8n', 'Zapier', 'Make (Integromat)', 'Python', 'Node.js', 'API Integration', 'Webhooks', 'Database Automation', 'Cloud Functions'],
      image: '/businessautomationlogo.PNG',
      video: null,
      link: null,
      gradient: 'from-cyan-500 to-blue-500',
      hasSubProjects: true,
      subProjects: [
        {
          id: 'crm-automation',
          title: 'CRM Automation Workflow',
          description: 'Automated CRM workflows for lead management, customer follow-ups, and data synchronization.',
          fullDescription: 'Custom CRM automation workflows that streamline lead management, automate customer follow-ups, sync data between CRM systems, and trigger actions based on customer behavior. These workflows help businesses maintain consistent communication, reduce manual data entry, and improve customer relationship management efficiency. Example workflows include: Lead capture from website forms → Auto-create CRM record → Assign to sales rep → Send welcome email → Schedule follow-up task → Update lead status based on engagement.',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['n8n', 'Zapier', 'API Integration', 'Webhooks', 'CRM APIs', 'Database Automation'],
          videos: [],
          gradient: 'from-blue-500 to-cyan-500',
          benefits: [
            'Reduce manual data entry by up to 80%',
            'Improve lead response time from hours to seconds',
            'Ensure consistent customer follow-ups automatically',
            'Sync data across multiple CRM systems in real-time',
            'Increase sales team productivity by 40%',
            'Reduce human errors in customer data management'
          ]
        },
        {
          id: 'email-marketing',
          title: 'Email Marketing Automation',
          description: 'Automated email campaigns, segmentation, and personalized marketing workflows.',
          fullDescription: 'Automated email marketing workflows that handle campaign management, customer segmentation, personalized content delivery, and automated follow-ups. These workflows integrate with email platforms, CRM systems, and analytics tools to create seamless marketing automation pipelines. Example workflows include: New subscriber → Add to segment → Send welcome series → Track opens/clicks → Move to engaged segment → Trigger personalized offers → Update CRM with behavior data.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['Make (Integromat)', 'Zapier', 'Email APIs', 'Marketing Automation', 'Data Segmentation', 'Analytics Integration'],
          videos: [],
          gradient: 'from-purple-500 to-pink-500',
          benefits: [
            'Send personalized emails to thousands of customers automatically',
            'Increase email open rates by 30-50% through segmentation',
            'Save 15+ hours per week on campaign management',
            'Automatically trigger follow-up emails based on customer behavior',
            'Track and analyze campaign performance in real-time',
            'Reduce email marketing costs by 60%'
          ]
        },
        {
          id: 'data-sync',
          title: 'Data Synchronization Workflows',
          description: 'Automated data synchronization between multiple systems and platforms.',
          fullDescription: 'Workflows that automatically synchronize data between different systems, databases, and platforms. These solutions ensure data consistency across systems, handle real-time updates, manage data transformations, and maintain data integrity across multiple platforms. Example workflows include: E-commerce order → Sync to inventory system → Update accounting software → Send to shipping provider → Update customer portal → Generate invoice → Sync payment status → Update all systems in real-time.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['n8n', 'Python', 'Node.js', 'Database Automation', 'API Integration', 'Data Transformation', 'ETL Processes'],
          videos: [],
          gradient: 'from-green-500 to-emerald-500',
          benefits: [
            'Eliminate duplicate data entry across systems',
            'Ensure data consistency across all platforms in real-time',
            'Reduce data errors by 90% through automated validation',
            'Save 20+ hours per week on manual data synchronization',
            'Improve decision-making with up-to-date data',
            'Reduce IT support tickets related to data issues by 70%'
          ]
        },
        {
          id: 'automated-reporting',
          title: 'Automated Reporting & Analytics',
          description: 'Automated report generation, data aggregation, and analytics workflows.',
          fullDescription: 'Automated reporting workflows that collect data from multiple sources, aggregate information, generate reports, and distribute them to stakeholders. These workflows handle scheduled reporting, real-time analytics, data visualization, and automated insights delivery. Example workflows include: Daily data collection → Aggregate from multiple sources → Calculate KPIs → Generate PDF report → Send to management team → Post to dashboard → Alert on anomalies → Archive reports automatically.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['Python', 'Node.js', 'Cloud Functions', 'Data Aggregation', 'Report Generation', 'Analytics APIs', 'Scheduled Tasks'],
          videos: [],
          gradient: 'from-orange-500 to-red-500',
          benefits: [
            'Generate reports automatically without manual work',
            'Deliver reports to stakeholders on schedule',
            'Save 10+ hours per week on report creation',
            'Access real-time analytics and insights instantly',
            'Make data-driven decisions faster',
            'Reduce reporting errors by 95%'
          ]
        },
        {
          id: 'social-media',
          title: 'Social Media Management Automation',
          description: 'Automated social media posting, content scheduling, and engagement workflows.',
          fullDescription: 'Automated social media management workflows that handle content scheduling, cross-platform posting, engagement tracking, and analytics. These workflows integrate with multiple social media platforms, content management systems, and analytics tools to streamline social media operations. Example workflows include: New blog post published → Auto-generate social posts → Schedule across platforms → Monitor mentions → Auto-respond to comments → Track engagement metrics → Generate weekly analytics report → Adjust posting schedule based on performance.',
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['Zapier', 'Make (Integromat)', 'Social Media APIs', 'Content Scheduling', 'Analytics Integration', 'Multi-platform Management'],
          videos: [],
          gradient: 'from-indigo-500 to-purple-500',
          benefits: [
            'Post to multiple platforms simultaneously',
            'Schedule content weeks in advance automatically',
            'Save 12+ hours per week on social media management',
            'Increase engagement through optimal posting times',
            'Track performance across all platforms in one place',
            'Respond to mentions and messages automatically'
          ]
        }
      ],
      videoSteps: [
        'Business Analysis: Understanding current processes and pain points',
        'Automation Design: Planning automated workflows and integrations',
        'System Integration: Connecting APIs, databases, and services',
        'Workflow Development: Building automated processes',
        'Testing & Optimization: Ensuring reliability and efficiency',
        'Deployment & Monitoring: Launching and maintaining automation systems'
      ]
    },
    {
      id: 7,
      title: '2D&3D Animation',
      category: 'production',
      description: '2D/3D animation & motion for brands, products, and campaigns.',
      fullDescription: 'I create high-quality 2D and 3D animations for companies to enhance branding and marketing. This includes logo animations, explainer videos, product showcases, motion graphics, and social media animations. The workflow covers concept and storyboard, design, animation, lighting/rendering (for 3D), sound/voiceover coordination, and final delivery in multiple formats.',
      tools: ['After Effects', 'Blender', 'Cinema 4D', 'Illustrator', 'Premiere Pro', 'Motion Graphics', '3D Lighting', 'Rendering'],
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      link: null,
      gradient: 'from-fuchsia-500 to-violet-500',
      hasSubProjects: true,
      subProjects: [
        {
          id: 'logo-animation',
          title: 'Logo Animation | 2D & 3D',
          description: 'Professional logo animation tailored for institutional and government entities, while maintaining full alignment with brand identity guidelines.',
          fullDescription: 'Professional logo animation tailored for institutional and government entities, while maintaining full alignment with brand identity guidelines. The work focuses on clean motion design, precise timing, and balanced transitions to deliver a formal and refined visual presence. Includes logo reveals, intro and outro animations executed in both 2D and 3D depending on the brand requirements.',
          tools: ['2D Motion Design', '3D Logo & Text Animation', 'Keyframe Animation', 'Smooth Easing & Timing', 'Brand-Oriented Motion'],
          videos: [
            '/logo animation/1.mp4',
            '/logo animation/2.mp4',
            '/logo animation/3.mp4',
            '/logo animation/4.mp4',
            '/logo animation/5.mp4',
            '/logo animation/6.mp4'
          ],
          thumbnail: '/animationthumbnails/logo-animation.jpg',
          gradient: 'from-blue-500 to-cyan-500'
        },
        {
          id: 'motion-graphics',
          title: '2.5D & 3D Motion Graphics (Government Focus)',
          description: 'Explainer and awareness videos designed specifically for governmental and institutional use, utilizing 2.5D and 3D animation.',
          fullDescription: 'Explainer and awareness videos designed specifically for governmental and institutional use, utilizing 2.5D and 3D animation to communicate complex ideas clearly and elegantly. The work often includes simplified character animation, institutional environments, and subtle camera movement to create depth without visual overload. A significant part of the production is created using Cinema 4D, seamlessly integrated with After Effects for a polished final output.',
          tools: ['2.5D Layered Animation', '3D Camera Animation', 'Character Animation', 'Cinema 4D Workflow', 'Institutional Visual Style'],
          videos: [
            '/2D3DAnimation/المنصة التطوعية.mp4',
            '/2D3DAnimation/سابل.mp4',
            '/2D3DAnimation/ملم.mp4',
            '/2D3DAnimation/ناجز.mp4',
            '/2D3DAnimation/هيئة كفاءة الانفاق.mp4',
            '/2D3DAnimation/وزارة البلديات والاسكان.mp4',
            '/2D3DAnimation/وزارة الطاقة.mp4',
            '/2D3DAnimation/وزارة النقل والخدمات اللوجيستيه.mp4'
          ],
          thumbnail: '/animationthumbnails/motion-graphics.jpg',
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          id: 'conference-motion',
          title: 'Conference & Event Screen Motion',
          description: 'Motion graphics designed for large-scale conference screens, exhibitions, and LED displays, with custom dimensions and formats.',
          fullDescription: 'Motion graphics designed for large-scale conference screens, exhibitions, and LED displays, with custom dimensions and formats. The animation style is elegant, minimal, and formal, tailored to government and high-level institutional events. Special attention is given to readability from a distance, smooth pacing, and seamless loop animations where required.',
          tools: ['Large Screen Motion Design', 'Custom Aspect Ratios', 'Elegant Transitions', 'Seamless Loop Animation', '3D Motion', 'Government Event Visuals'],
          videos: [
            '/conferenceeventscreenmotion/classeraeventvideo.mp4',
            '/conferenceeventscreenmotion/أبشر اعمال reel جناح وزارة الداخلية.mp4',
            '/conferenceeventscreenmotion/اعلان مسابقة منقية.mp4',
            '/conferenceeventscreenmotion/الشركة السعوديه للكهرباء.mp4',
            '/conferenceeventscreenmotion/ايفنت الامن البيئي.mp4'
          ],
          thumbnail: '/animationthumbnails/conference-motion.jpg',
          gradient: 'from-indigo-500 to-purple-500'
        },
        {
          id: 'paper-animation',
          title: 'Paper Style Animation | After Effects',
          description: 'A handcrafted animation style inspired by paper cutouts and layered paper visuals.',
          fullDescription: 'A handcrafted animation style inspired by paper cutouts and layered paper visuals. This approach relies on controlled frame-based animation, typically animated at 12 frames per second instead of 24, to achieve a softer, more organic motion feel. Produced entirely in After Effects, focusing on simplicity, rhythm, and visual clarity.',
          tools: ['Paper Cut Animation', 'Frame-Based Motion', '12fps Animation', 'Shape Layers', 'Handcrafted Visual Style'],
          videos: [
            '/paperstyleanimation/اعلان سوشال ميديا شاورما جليلة.mp4',
            '/paperstyleanimation/جمعية القران بالزلفى.mp4',
            '/paperstyleanimation/هيئة فنون الطهي.mp4'
          ],
          thumbnail: '/animationthumbnails/paper-animation.jpg',
          gradient: 'from-pink-500 to-rose-500'
        }
      ]
    }
  ],
  ar: [
    {
      id: 1,
      title: 'سهلات',
      category: 'web',
      marketKey: 'sa',
      market: 'السعودية',
      description: 'منصة تمويل سكني واستثماري بالسعودية بالتعاون مع أفضل البنوك.',
      fullDescription: 'Sahlat.sa منصة متخصصة في تقديم خدمات التمويل السكني والاستثماري بالشراكة مع أفضل البنوك السعودية، لمساعدة العملاء على مقارنة العروض والحصول على أفضل خيارات التمويل. تسهّل المنصة رحلة العميل عبر توضيح المتطلبات والأهلية والمستندات وخطوات التقديم، لتقديم تجربة واضحة وسلسة من الاستعلام حتى الحصول على العرض النهائي.',
      tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT Authentication', 'AWS S3', 'Redis'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      link: 'https://sahlat.sa',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Miral Models',
      category: 'web',
      marketKey: 'ma',
      market: 'المغرب',
      description: 'منصة وسيطة للمودلز (حقيقي + AI) مع بورتفوليو احترافي وحجز.',
      fullDescription: 'Miral Models هي منصة وسيطة حديثة بين الشركات والمودلز. تساعد الشركات على اختيار المودل المناسب للحملات (مودلز حقيقيين أو مودلز بالذكاء الاصطناعي) حسب أسلوب الحملة واحتياجاتها. كما توفر أدوات لبناء بورتفوليو احترافي للمودلز وإدارة الملفات الشخصية وتسهيل عملية الحجز والتواصل.',
      tools: ['Vue.js', 'Vuex', 'PHP', 'Laravel', 'MySQL', 'Cloudinary', 'Stripe', 'EmailJS'],
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      link: 'https://miralmodels.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Mr Robot Academy',
      category: 'web',
      marketKey: 'eg',
      market: 'مصر',
      description: 'منصة تعليم روبوتات وبرمجة مع تتبع وشهادات.',
      fullDescription: 'Mr Robot Academy هي منصة تعليمية شاملة متخصصة في تعليم الروبوتات والبرمجة. تقدم المنصة دورات منظمة مع دروس فيديو، تمارين برمجة تفاعلية، تتبع تقدم فوري، منتديات طلابية، تقديم الواجبات، نظام تصحيح تلقائي، وشهادات رقمية عند إتمام الدورة. تتضمن دورات للمبتدئين والمستوى المتقدم.',
      tools: ['React', 'Next.js', 'Express', 'PostgreSQL', 'Prisma', 'Stripe', 'AWS S3', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      video: null,
      link: 'https://mrrobotacademy.com',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 4,
      title: 'Emaar Group',
      category: 'web',
      marketKey: 'kw',
      market: 'الكويت',
      description: 'شركة بالكويت: دكتات ومستلزمات تمديدات/تركيبات التكييف (موقع بسيط).',
      fullDescription: 'إعمار جروب الكويت هو موقع شركة بسيط ومرتب لعرض خدمات ومشاريع الشركة بشكل واضح ومباشر. الشركة متخصصة في تصنيع الدكتات (Ducts) ومستلزمات تمديدات وتركيبات التكييف بالكويت. تصميم الموقع سهل التصفح ويركز على المعلومات الأساسية مثل الخدمات والمشاريع وطرق التواصل.',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB', 'EmailJS'],
      image: '/emaarlogo.jpg',
      video: null,
      link: 'https://emaargroup.com.kw',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 5,
      title: 'إنتاج فيديوهات دعائية بالذكاء الاصطناعي',
      category: 'production',
      description: 'فيديوهات دعائية بالذكاء الاصطناعي بدون تصوير حقيقي.',
      fullDescription: 'أتخصص في إنشاء فيديوهات دعائية وتسويقية عالية الجودة للشركات باستخدام تقنيات الذكاء الاصطناعي المتقدمة. هذه الخدمة تلغي الحاجة لمعدات إنتاج فيديو باهظة الثمن، ممثلين، ومواقع تصوير. باستخدام أدوات الذكاء الاصطناعي، يمكنني إنشاء فيديوهات احترافية مع شخصيات واقعية، تعليق صوتي، رسوم متحركة، وتأثيرات بصرية. الخدمات تشمل فيديوهات ترويج المنتجات، تعريف بالشركات، محتوى وسائل التواصل الاجتماعي، وحملات تسويقية.',
      tools: ['AI Video Generation', 'Synthesia', 'D-ID', 'Runway ML', 'Adobe After Effects', 'Premiere Pro', 'AI Voice Synthesis', 'Motion Graphics'],
      image: '/aivideoproduction.png',
      video: null,
      link: null,
      gradient: 'from-rose-500 to-pink-500',
      hasSubProjects: true,
      subProjects: [
        {
          id: 'ai-video-production',
          title: 'إنتاج فيديوهات دعائية بالذكاء الاصطناعي',
          description: 'فيديوهات دعائية وتسويقية عالية الجودة تم إنشاؤها باستخدام تقنيات الذكاء الاصطناعي المتقدمة.',
          fullDescription: 'أتخصص في إنشاء فيديوهات دعائية وتسويقية عالية الجودة للشركات باستخدام تقنيات الذكاء الاصطناعي المتقدمة. هذه الخدمة تلغي الحاجة لمعدات إنتاج فيديو باهظة الثمن، ممثلين، ومواقع تصوير. باستخدام أدوات الذكاء الاصطناعي، يمكنني إنشاء فيديوهات احترافية مع شخصيات واقعية، تعليق صوتي، رسوم متحركة، وتأثيرات بصرية. الخدمات تشمل فيديوهات ترويج المنتجات، تعريف بالشركات، محتوى وسائل التواصل الاجتماعي، وحملات تسويقية.',
          tools: ['AI Video Generation', 'Synthesia', 'D-ID', 'Runway ML', 'Adobe After Effects', 'Premiere Pro', 'AI Voice Synthesis', 'Motion Graphics'],
          videos: [
            '/aivideoproduction/1.mp4',
            '/aivideoproduction/2.mp4',
            '/aivideoproduction/3.mp4',
            '/aivideoproduction/4.mp4',
            '/aivideoproduction/5.mp4',
            '/aivideoproduction/6.mp4',
            '/aivideoproduction/7.mp4',
            '/aivideoproduction/8.mp4',
            '/aivideoproduction/9.mp4'
          ],
          gradient: 'from-rose-500 to-pink-500'
        }
      ],
      videoSteps: [
        'استشارة العميل: فهم متطلبات وأهداف الفيديو',
        'كتابة السيناريو: إنشاء سيناريوهات وقصص مصورة جذابة',
        'اختيار الشخصية: اختيار مقدمين بالذكاء الاصطناعي مناسبين',
        'إنشاء الفيديو: إنشاء الفيديوهات باستخدام منصات الذكاء الاصطناعي',
        'ما بعد الإنتاج: التحرير، التأثيرات، واللمسات النهائية',
        'التسليم: تقديم الفيديو النهائي بصيغ متعددة'
      ]
    },
    {
      id: 6,
      title: 'أتمتة الأعمال وسير العمل',
      category: 'production',
      description: 'أتمتة مسارات العمل (مثل n8n) لتبسيط عمليات الشركات.',
      fullDescription: 'أطور حلول أتمتة مخصصة للشركات لتبسيط عملياتها وسير العمل. مشابه لـ n8n، أنشئ أنظمة آلية تربط بين خدمات، APIs، ومنصات مختلفة لأتمتة المهام المتكررة، معالجة البيانات، الإشعارات، والمنطق التجاري. الحلول تشمل أتمتة CRM، أتمتة التسويق عبر البريد الإلكتروني، مزامنة البيانات بين الأنظمة، التقارير الآلية، إدارة وسائل التواصل الاجتماعي، وأتمتة سير العمل المخصصة حسب احتياجات العمل المحددة.',
      tools: ['n8n', 'Zapier', 'Make (Integromat)', 'Python', 'Node.js', 'API Integration', 'Webhooks', 'Database Automation', 'Cloud Functions'],
      image: '/businessautomationlogo.PNG',
      video: null,
      link: null,
      gradient: 'from-cyan-500 to-blue-500',
      hasSubProjects: true,
      subProjects: [
        {
          id: 'crm-automation',
          title: 'أتمتة سير عمل CRM',
          description: 'سير عمل أتمتة CRM لإدارة العملاء المحتملين، متابعة العملاء، ومزامنة البيانات.',
          fullDescription: 'سير عمل أتمتة CRM مخصصة لتبسيط إدارة العملاء المحتملين، أتمتة متابعة العملاء، مزامنة البيانات بين أنظمة CRM، وتفعيل الإجراءات بناءً على سلوك العميل. هذه السير تساعد الشركات في الحفاظ على التواصل المستمر، تقليل إدخال البيانات اليدوي، وتحسين كفاءة إدارة علاقات العملاء. أمثلة على السير: التقاط عميل محتمل من نماذج الموقع → إنشاء سجل CRM تلقائياً → تعيين لموظف مبيعات → إرسال بريد ترحيبي → جدولة مهمة متابعة → تحديث حالة العميل بناءً على التفاعل.',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['n8n', 'Zapier', 'API Integration', 'Webhooks', 'CRM APIs', 'Database Automation'],
          videos: [],
          gradient: 'from-blue-500 to-cyan-500',
          benefits: [
            'تقليل إدخال البيانات اليدوي بنسبة تصل إلى 80%',
            'تحسين وقت الاستجابة للعملاء المحتملين من ساعات إلى ثوانٍ',
            'ضمان متابعة العملاء تلقائياً وبشكل مستمر',
            'مزامنة البيانات بين أنظمة CRM متعددة في الوقت الفعلي',
            'زيادة إنتاجية فريق المبيعات بنسبة 40%',
            'تقليل الأخطاء البشرية في إدارة بيانات العملاء'
          ]
        },
        {
          id: 'email-marketing',
          title: 'أتمتة التسويق عبر البريد الإلكتروني',
          description: 'حملات بريد إلكتروني آلية، التقسيم، وسير عمل التسويق المخصص.',
          fullDescription: 'سير عمل أتمتة التسويق عبر البريد الإلكتروني التي تدير الحملات، تقسيم العملاء، توصيل المحتوى المخصص، والمتابعة الآلية. هذه السير تتكامل مع منصات البريد الإلكتروني، أنظمة CRM، وأدوات التحليلات لإنشاء خطوط تسويق آلي سلسة. أمثلة على السير: مشترك جديد → إضافة للقسم المناسب → إرسال سلسلة ترحيبية → تتبع الفتحات والنقرات → نقل للقسم النشط → تفعيل عروض مخصصة → تحديث CRM ببيانات السلوك.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['Make (Integromat)', 'Zapier', 'Email APIs', 'Marketing Automation', 'Data Segmentation', 'Analytics Integration'],
          videos: [],
          gradient: 'from-purple-500 to-pink-500',
          benefits: [
            'إرسال رسائل بريد إلكتروني مخصصة لآلاف العملاء تلقائياً',
            'زيادة معدل فتح الرسائل بنسبة 30-50% من خلال التقسيم',
            'توفير 15+ ساعة أسبوعياً في إدارة الحملات',
            'تفعيل رسائل المتابعة تلقائياً بناءً على سلوك العميل',
            'تتبع وتحليل أداء الحملات في الوقت الفعلي',
            'تقليل تكاليف التسويق عبر البريد الإلكتروني بنسبة 60%'
          ]
        },
        {
          id: 'data-sync',
          title: 'سير عمل مزامنة البيانات',
          description: 'مزامنة بيانات آلية بين أنظمة ومنصات متعددة.',
          fullDescription: 'سير عمل تقوم بمزامنة البيانات تلقائياً بين أنظمة، قواعد بيانات، ومنصات مختلفة. هذه الحلول تضمن اتساق البيانات عبر الأنظمة، تتعامل مع التحديثات الفورية، تدير تحويلات البيانات، وتحافظ على سلامة البيانات عبر منصات متعددة. أمثلة على السير: طلب تجارة إلكترونية → مزامنة لنظام المخزون → تحديث برنامج المحاسبة → إرسال لشركة الشحن → تحديث بوابة العميل → إنشاء فاتورة → مزامنة حالة الدفع → تحديث جميع الأنظمة في الوقت الفعلي.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['n8n', 'Python', 'Node.js', 'Database Automation', 'API Integration', 'Data Transformation', 'ETL Processes'],
          videos: [],
          gradient: 'from-green-500 to-emerald-500',
          benefits: [
            'إلغاء إدخال البيانات المكررة بين الأنظمة',
            'ضمان اتساق البيانات عبر جميع المنصات في الوقت الفعلي',
            'تقليل أخطاء البيانات بنسبة 90% من خلال التحقق الآلي',
            'توفير 20+ ساعة أسبوعياً في المزامنة اليدوية',
            'تحسين اتخاذ القرارات ببيانات محدثة',
            'تقليل تذاكر دعم IT المتعلقة بمشاكل البيانات بنسبة 70%'
          ]
        },
        {
          id: 'automated-reporting',
          title: 'التقارير الآلية والتحليلات',
          description: 'إنشاء تقارير آلية، تجميع البيانات، وسير عمل التحليلات.',
          fullDescription: 'سير عمل التقارير الآلية التي تجمع البيانات من مصادر متعددة، تجمع المعلومات، تولد التقارير، وتوزعها على أصحاب المصلحة. هذه السير تتعامل مع التقارير المجدولة، التحليلات الفورية، تصور البيانات، وتوصيل الرؤى الآلية. أمثلة على السير: جمع بيانات يومي → تجميع من مصادر متعددة → حساب مؤشرات الأداء → إنشاء تقرير PDF → إرسال لفريق الإدارة → نشر على لوحة المعلومات → تنبيه عند وجود شذوذ → أرشفة التقارير تلقائياً.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['Python', 'Node.js', 'Cloud Functions', 'Data Aggregation', 'Report Generation', 'Analytics APIs', 'Scheduled Tasks'],
          videos: [],
          gradient: 'from-orange-500 to-red-500',
          benefits: [
            'إنشاء التقارير تلقائياً بدون عمل يدوي',
            'توصيل التقارير لأصحاب المصلحة في المواعيد المحددة',
            'توفير 10+ ساعات أسبوعياً في إنشاء التقارير',
            'الوصول للتحليلات والرؤى في الوقت الفعلي',
            'اتخاذ قرارات قائمة على البيانات بشكل أسرع',
            'تقليل أخطاء التقارير بنسبة 95%'
          ]
        },
        {
          id: 'social-media',
          title: 'أتمتة إدارة وسائل التواصل الاجتماعي',
          description: 'نشر وسائل التواصل الاجتماعي الآلي، جدولة المحتوى، وسير عمل التفاعل.',
          fullDescription: 'سير عمل أتمتة إدارة وسائل التواصل الاجتماعي التي تدير جدولة المحتوى، النشر عبر المنصات، تتبع التفاعل، والتحليلات. هذه السير تتكامل مع منصات وسائل التواصل الاجتماعي المتعددة، أنظمة إدارة المحتوى، وأدوات التحليلات لتبسيط عمليات وسائل التواصل الاجتماعي. أمثلة على السير: نشر مقال جديد → إنشاء منشورات تلقائياً → جدولة عبر المنصات → مراقبة الإشارات → الرد التلقائي على التعليقات → تتبع مقاييس التفاعل → إنشاء تقرير تحليلات أسبوعي → تعديل جدول النشر بناءً على الأداء.',
          image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&h=800&q=80',
          tools: ['Zapier', 'Make (Integromat)', 'Social Media APIs', 'Content Scheduling', 'Analytics Integration', 'Multi-platform Management'],
          videos: [],
          gradient: 'from-indigo-500 to-purple-500',
          benefits: [
            'النشر على منصات متعددة في نفس الوقت',
            'جدولة المحتوى لأسابيع مقدماً تلقائياً',
            'توفير 12+ ساعة أسبوعياً في إدارة وسائل التواصل',
            'زيادة التفاعل من خلال أوقات النشر المثلى',
            'تتبع الأداء عبر جميع المنصات في مكان واحد',
            'الرد على الإشارات والرسائل تلقائياً'
          ]
        }
      ],
      videoSteps: [
        'تحليل الأعمال: فهم العمليات الحالية ونقاط الألم',
        'تصميم الأتمتة: تخطيط سير العمل الآلي والتكاملات',
        'تكامل الأنظمة: ربط APIs، قواعد البيانات، والخدمات',
        'تطوير سير العمل: بناء العمليات الآلية',
        'الاختبار والتحسين: ضمان الموثوقية والكفاءة',
        'النشر والمراقبة: إطلاق وصيانة أنظمة الأتمتة'
      ]
    },
    {
      id: 7,
      title: 'رسوم متحركة 2D & 3D',
      category: 'production',
      description: 'رسوم 2D/3D وموشن للعلامات التجارية والمنتجات والحملات.',
      fullDescription: 'أقدّم خدمات إنتاج رسوم متحركة 2D و3D للشركات لتعزيز الهوية البصرية والتسويق. تشمل: أنيميشن الشعار، فيديوهات شرح، عروض المنتجات، موشن جرافيك، ورسوم منصات التواصل. العمل يشمل الفكرة والستوري بورد، التصميم، التحريك، الإضاءة والرندر (للـ 3D)، وتجهيز النسخ النهائية بصيغ متعددة.',
      tools: ['After Effects', 'Blender', 'Cinema 4D', 'Illustrator', 'Premiere Pro', 'Motion Graphics', '3D Lighting', 'Rendering'],
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      link: null,
      gradient: 'from-fuchsia-500 to-violet-500',
      hasSubProjects: true,
      subProjects: [
        {
          id: 'logo-animation',
          title: 'أنيميشن الشعار | 2D & 3D',
          description: 'أنيميشن شعار احترافي مصمم خصيصاً للكيانات المؤسسية والحكومية، مع الحفاظ على التوافق الكامل مع إرشادات الهوية البصرية.',
          fullDescription: 'أنيميشن شعار احترافي مصمم خصيصاً للكيانات المؤسسية والحكومية، مع الحفاظ على التوافق الكامل مع إرشادات الهوية البصرية. يركز العمل على تصميم حركة نظيفة، توقيت دقيق، وانتقالات متوازنة لتقديم حضور بصري رسمي ومكرر. يتضمن كشف الشعار، أنيميشن المقدمة والخاتمة المنفذة في كل من 2D و 3D حسب متطلبات العلامة التجارية.',
          tools: ['تصميم الحركة 2D', 'أنيميشن الشعار والنص 3D', 'أنيميشن الإطارات الرئيسية', 'تسهيل وتوقيت سلس', 'حركة موجهة للعلامة التجارية'],
          videos: [
            '/logo animation/1.mp4',
            '/logo animation/2.mp4',
            '/logo animation/3.mp4',
            '/logo animation/4.mp4',
            '/logo animation/5.mp4',
            '/logo animation/6.mp4'
          ],
          thumbnail: '/animationthumbnails/logo-animation.jpg',
          gradient: 'from-blue-500 to-cyan-500'
        },
        {
          id: 'motion-graphics',
          title: 'موشن جرافيك 2.5D & 3D (تركيز حكومي)',
          description: 'فيديوهات توضيحية وتوعوية مصممة خصيصاً للاستخدام الحكومي والمؤسسي، باستخدام أنيميشن 2.5D و 3D.',
          fullDescription: 'فيديوهات توضيحية وتوعوية مصممة خصيصاً للاستخدام الحكومي والمؤسسي، باستخدام أنيميشن 2.5D و 3D لتوصيل الأفكار المعقدة بوضوح وأناقة. غالباً ما يتضمن العمل أنيميشن شخصيات مبسطة، بيئات مؤسسية، وحركة كاميرا خفيفة لخلق عمق بدون إرهاق بصري. جزء كبير من الإنتاج يتم إنشاؤه باستخدام Cinema 4D، متكامل بسلاسة مع After Effects لإنتاج نهائي مصقول.',
          tools: ['أنيميشن طبقات 2.5D', 'أنيميشن الكاميرا 3D', 'أنيميشن الشخصيات', 'سير عمل Cinema 4D', 'الأسلوب البصري المؤسسي'],
          videos: [
            '/2D3DAnimation/المنصة التطوعية.mp4',
            '/2D3DAnimation/سابل.mp4',
            '/2D3DAnimation/ملم.mp4',
            '/2D3DAnimation/ناجز.mp4',
            '/2D3DAnimation/هيئة كفاءة الانفاق.mp4',
            '/2D3DAnimation/وزارة البلديات والاسكان.mp4',
            '/2D3DAnimation/وزارة الطاقة.mp4',
            '/2D3DAnimation/وزارة النقل والخدمات اللوجيستيه.mp4'
          ],
          thumbnail: '/animationthumbnails/motion-graphics.jpg',
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          id: 'conference-motion',
          title: 'موشن جرافيك للمؤتمرات والشاشات',
          description: 'موشن جرافيك مصمم لشاشات المؤتمرات الكبيرة، المعارض، وشاشات LED، بأبعاد وصيغ مخصصة.',
          fullDescription: 'موشن جرافيك مصمم لشاشات المؤتمرات الكبيرة، المعارض، وشاشات LED، بأبعاد وصيغ مخصصة. أسلوب الأنيميشن أنيق، بسيط، ورسمي، مصمم خصيصاً للأحداث الحكومية والمؤسسية عالية المستوى. يتم إيلاء اهتمام خاص للقراءة من مسافة بعيدة، وتيرة سلسة، وأنيميشن حلقة سلسة عند الحاجة.',
          tools: ['تصميم الحركة للشاشات الكبيرة', 'نسب العرض المخصصة', 'انتقالات أنيقة', 'أنيميشن حلقة سلس', 'حركة 3D', 'المرئيات الحكومية للأحداث'],
          videos: [
            '/conferenceeventscreenmotion/classeraeventvideo.mp4',
            '/conferenceeventscreenmotion/أبشر اعمال reel جناح وزارة الداخلية.mp4',
            '/conferenceeventscreenmotion/اعلان مسابقة منقية.mp4',
            '/conferenceeventscreenmotion/الشركة السعوديه للكهرباء.mp4',
            '/conferenceeventscreenmotion/ايفنت الامن البيئي.mp4'
          ],
          thumbnail: '/animationthumbnails/conference-motion.jpg',
          gradient: 'from-indigo-500 to-purple-500'
        },
        {
          id: 'paper-animation',
          title: 'أنيميشن أسلوب الورق | After Effects',
          description: 'أسلوب أنيميشن يدوي مستوحى من قصاصات الورق والمرئيات الورقية الطبقات.',
          fullDescription: 'أسلوب أنيميشن يدوي مستوحى من قصاصات الورق والمرئيات الورقية الطبقات. يعتمد هذا النهج على أنيميشن قائم على الإطارات المتحكم بها، عادة ما يتم تحريكه بمعدل 12 إطار في الثانية بدلاً من 24، لتحقيق إحساس حركة أكثر نعومة وعضوية. يتم إنتاجه بالكامل في After Effects، مع التركيز على البساطة، الإيقاع، والوضوح البصري.',
          tools: ['أنيميشن قص الورق', 'حركة قائمة على الإطارات', 'أنيميشن 12 إطار/ثانية', 'طبقات الأشكال', 'الأسلوب البصري اليدوي'],
          videos: [
            '/paperstyleanimation/اعلان سوشال ميديا شاورما جليلة.mp4',
            '/paperstyleanimation/جمعية القران بالزلفى.mp4',
            '/paperstyleanimation/هيئة فنون الطهي.mp4'
          ],
          thumbnail: '/animationthumbnails/paper-animation.jpg',
          gradient: 'from-pink-500 to-rose-500'
        }
      ]
    }
  ]
}

