import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGlobe, 
  FaMobileAlt, 
  FaMicrochip, 
  FaCode, 
  FaNetworkWired, 
  FaCloud, 
  FaShieldAlt, 
  FaPalette,
  FaExternalLinkAlt,
  FaPlay,
  FaTools,
  FaList,
  FaBriefcase,
  FaMapMarkerAlt,
  FaGraduationCap
} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { projectsData } from '../data/projects'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedCategory, setSelectedCategory] = useState('production')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('description') // description, tools, video
  const [showAllMobile, setShowAllMobile] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get projects based on language
  const webProjects = projectsData[language] || projectsData.en
  
  // Separate production and academic projects
  const productionProjects = webProjects.filter(p => p.category === 'web' || p.category === 'production')
  const academicProjects = [
    {
      id: 5,
      title: language === 'en' ? 'Smart Home IoT System' : 'نظام المنزل الذكي IoT',
      category: 'iot',
      description: language === 'en' 
        ? 'Complete smart home automation prototype with remote control, voice commands, and mobile app integration.'
        : 'نموذج أولي كامل لأتمتة المنزل الذكي مع التحكم عن بعد، الأوامر الصوتية، وتكامل تطبيق الموبايل.',
      fullDescription: language === 'en'
        ? 'A comprehensive smart home IoT prototype providing complete home automation control. Features include smart lighting control, automatic door opening/closing with servo motors, fire and theft detection alerts, smart parking system with automatic car gate control, and a mobile application for remote control via voice commands or buttons. The system integrates Arduino microcontrollers with sensors, actuators, and wireless communication modules to create a complete home automation solution.'
        : 'نموذج أولي شامل لنظام المنزل الذكي IoT يوفر تحكم كامل في أتمتة المنزل. يتضمن التحكم في الإضاءة الذكية، فتح وإغلاق الأبواب تلقائياً باستخدام محركات Servo، تنبيهات كشف الحريق والسرقة، نظام موقف سيارات ذكي مع فتح وإغلاق البوابة تلقائياً، وتطبيق موبايل للتحكم عن بعد عبر الأوامر الصوتية أو الأزرار. النظام يدمج متحكمات Arduino مع المستشعرات والمشغلات ووحدات الاتصال اللاسلكي لإنشاء حل أتمتة منزلية كامل.',
      tools: ['Arduino', 'IoT', 'Servo Motors', 'Sensors', 'Mobile App', 'Voice Control', 'Bluetooth/WiFi', 'C/C++'],
      image: '/academicprojects/smart house iot.jpeg',
      video: '/academicprojects/smart house IOT.mp4',
      tags: ['Arduino', 'IoT', 'Home Automation'],
      gradient: 'from-orange-500 to-red-500',
      schematic: '/academicprojects/smart iot home schematic.png',
      videoSteps: language === 'en'
        ? ['System Overview', 'Smart Lighting Control', 'Door Automation', 'Security Alerts', 'Smart Parking', 'Mobile App Control', 'Voice Commands']
        : ['نظرة عامة على النظام', 'التحكم في الإضاءة الذكية', 'أتمتة الأبواب', 'تنبيهات الأمان', 'الموقف الذكي', 'التحكم عبر التطبيق', 'الأوامر الصوتية']
    },
    {
      id: 6,
      title: language === 'en' ? 'Pharmacy Robot Assistant' : 'روبوت مساعد الصيدلية',
      category: 'iot',
      description: language === 'en'
        ? 'AI-powered pharmacy robot with face recognition, voice interaction, and medication guidance system.'
        : 'روبوت صيدلية مدعوم بالذكاء الاصطناعي مع التعرف على الوجوه، التفاعل الصوتي، ونظام إرشاد الأدوية.',
      fullDescription: language === 'en'
        ? 'An intelligent pharmacy robot assistant that recognizes faces and guides customers to their medications. The robot uses facial recognition to identify customers, retrieves their medication schedules and types, provides voice-guided directions, and interacts conversationally. Built with Raspberry Pi, OpenCV for computer vision, Python for AI processing, and voice synthesis/recognition modules. The robot can listen, respond, and provide personalized medication guidance to pharmacy visitors.'
        : 'روبوت مساعد ذكي للصيدلية يتعرف على الوجوه ويرشد العملاء لأدويتهم. يستخدم الروبوت التعرف على الوجوه لتحديد العملاء، يسترجع جداول الأدوية وأنواعها، يوفر إرشادات صوتية، ويتفاعل بشكل محادثة. مبني باستخدام Raspberry Pi، OpenCV للرؤية الحاسوبية، Python لمعالجة الذكاء الاصطناعي، ووحدات توليد/تعرف الصوت. الروبوت يمكنه الاستماع والرد وتقديم إرشادات أدوية مخصصة لزوار الصيدلية.',
      tools: ['Raspberry Pi', 'OpenCV', 'Python', 'Face Recognition', 'Voice Synthesis', 'Speech Recognition', 'AI/ML'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&h=600&q=80',
      video: '/academicprojects/pharmacy robot.mp4',
      tags: ['Raspberry Pi', 'OpenCV', 'AI'],
      gradient: 'from-blue-500 to-indigo-500',
      schematic: '/academicprojects/rasbperry pi schematic.ppm',
      videoSteps: language === 'en'
        ? ['Face Recognition', 'Customer Identification', 'Medication Retrieval', 'Voice Guidance', 'Interactive Response']
        : ['التعرف على الوجوه', 'تحديد العميل', 'استرجاع الأدوية', 'الإرشاد الصوتي', 'الرد التفاعلي']
    },
    {
      id: 7,
      title: language === 'en' ? 'Social Distance Monitoring Robot' : 'روبوت مراقبة التباعد الاجتماعي',
      category: 'iot',
      description: language === 'en'
        ? 'COVID-19 era robot that detects social distancing violations and alerts non-compliant individuals.'
        : 'روبوت من عصر COVID-19 يكتشف انتهاكات التباعد الاجتماعي وينذر الأفراد غير الملتزمين.',
      fullDescription: language === 'en'
        ? 'A social distance monitoring robot developed during the COVID-19 pandemic to help enforce social distancing guidelines. The robot uses computer vision and sensors to detect individuals who are not maintaining proper social distance, provides visual and audio alerts, and can follow line-following navigation. Built with Arduino microcontroller, ultrasonic/distance sensors, LED indicators, buzzer alerts, and line-following capabilities. The robot autonomously patrols areas and ensures compliance with social distancing protocols.'
        : 'روبوت مراقبة التباعد الاجتماعي تم تطويره خلال جائحة COVID-19 لمساعدة في فرض إرشادات التباعد الاجتماعي. يستخدم الروبوت الرؤية الحاسوبية والمستشعرات لاكتشاف الأفراد الذين لا يحافظون على التباعد الاجتماعي الصحيح، يوفر تنبيهات بصرية وسمعية، ويمكنه اتباع التنقل باتباع الخط. مبني باستخدام متحكم Arduino، مستشعرات المسافة فوق الصوتية، مؤشرات LED، تنبيهات صوتية، وإمكانيات اتباع الخط. الروبوت يقوم بدوريات مستقلة في المناطق ويضمن الامتثال لبروتوكولات التباعد الاجتماعي.',
      tools: ['Arduino', 'Ultrasonic Sensors', 'Line Following', 'Computer Vision', 'LED Indicators', 'Buzzer Alerts', 'C/C++'],
      image: '/academicprojects/social distance robot.jfif',
      video: null, // Video will be added later
      tags: ['Arduino', 'COVID-19', 'Robotics'],
      gradient: 'from-green-500 to-emerald-500',
      schematic: '/academicprojects/social distance schematic robot.jpg',
      videoSteps: language === 'en'
        ? ['Distance Detection', 'Violation Alert', 'Line Following', 'Autonomous Navigation', 'Visual & Audio Warnings']
        : ['كشف المسافة', 'تنبيه الانتهاك', 'اتباع الخط', 'التنقل المستقل', 'تحذيرات بصرية وسمعية']
    },
    {
      id: 8,
      title: language === 'en' ? 'Long-Range LoRa Emergency Communication System' : 'نظام اتصال طوارئ لاسلكي طويل المدى LoRa',
      category: 'iot',
      description: language === 'en'
        ? 'Secure long-range wireless communication system using LoRa technology for emergency desert applications, featuring lightweight cryptography and low power consumption.'
        : 'نظام اتصال لاسلكي آمن طويل المدى باستخدام تقنية LoRa لتطبيقات الطوارئ في الصحراء، يتميز بتشفير خفيف واستهلاك طاقة منخفض.',
      fullDescription: language === 'en'
        ? 'A comprehensive long-range wireless communication system designed for emergency applications in remote desert environments. The project implements secure data transmission between two nodes using LoRa (Long Range) technology, which utilizes Chirp Spread Spectrum (CSS) modulation for high interference resistance, multipath fading resistance, and jamming resistance. The system uses Arduino microcontrollers with LoRa shields (sender and receiver) to process functionality. Each node includes LCD display, microphone, and speaker for audio communication. The design focuses on achieving the lowest cost and power consumption while protecting messages through lightweight cryptography algorithms suitable for LoRa limited data rate. The system operates on the unlicensed ISM (Industrial, Scientific, and Medical) radio spectrum band, making it cost-effective. Error detection is implemented using Cyclic Redundancy Check (CRC) algorithm, which adds control bits to transmitted messages for verification on the receiver side. The low data rate is acceptable as the main intention is to cover long distances, making it ideal for emergency communication in remote areas.'
        : 'نظام اتصال لاسلكي شامل طويل المدى مصمم لتطبيقات الطوارئ في البيئات الصحراوية النائية. ينفذ المشروع إرسال بيانات آمن بين عقدتين باستخدام تقنية LoRa (Long Range)، التي تستخدم تعديل Chirp Spread Spectrum (CSS) لمقاومة عالية للتداخل، مقاومة التلاشي متعدد المسارات، ومقاومة التشويش. يستخدم النظام متحكمات Arduino مع LoRa shields (مرسل ومستقبل) لمعالجة الوظائف. تتضمن كل عقدة شاشة LCD، ميكروفون، وسماعة للاتصال الصوتي. يركز التصميم على تحقيق أقل تكلفة واستهلاك طاقة مع حماية الرسائل من خلال خوارزميات تشفير خفيفة مناسبة لمعدل البيانات المحدود لـ LoRa. يعمل النظام على نطاق ISM (Industrial, Scientific, and Medical) غير المرخص، مما يجعله فعالاً من حيث التكلفة. يتم تنفيذ كشف الأخطاء باستخدام خوارزمية Cyclic Redundancy Check (CRC)، التي تضيف بتات تحكم للرسائل المرسلة للتحقق على جانب المستقبل. معدل البيانات المنخفض مقبول لأن الهدف الرئيسي هو تغطية مسافات طويلة، مما يجعله مثالياً للاتصال في حالات الطوارئ في المناطق النائية.',
      tools: ['Arduino', 'LoRa Shield', 'LoRa (Long Range)', 'CSS Modulation', 'Wireless Communication', 'ISM Band', 'Lightweight Cryptography', 'CRC Algorithm', 'LCD Display', 'Microphone', 'Speaker', 'Emergency Systems', 'Low Power Design', 'Long-Range Communication'],
      image: '/academicprojects/rfresult.PNG',
      video: null,
      tags: ['LoRa', 'Arduino', 'Wireless Communication'],
      gradient: 'from-red-500 to-rose-500',
      schematic: '/academicprojects/rfschematic.png',
      videoSteps: language === 'en'
        ? ['System Design', 'LoRa Shield Integration', 'Arduino Programming', 'Sender Node Setup', 'Receiver Node Setup', 'LCD Interface', 'Audio System Integration', 'Cryptography Implementation', 'CRC Error Detection', 'Long-Range Testing', 'Power Consumption Optimization', 'Emergency Communication Protocol']
        : ['تصميم النظام', 'تكامل LoRa Shield', 'برمجة Arduino', 'إعداد عقدة المرسل', 'إعداد عقدة المستقبل', 'واجهة LCD', 'تكامل النظام الصوتي', 'تنفيذ التشفير', 'كشف الأخطاء CRC', 'اختبار المدى الطويل', 'تحسين استهلاك الطاقة', 'بروتوكول اتصال الطوارئ']
    },
    {
      id: 9,
      title: language === 'en' ? 'Complete Verilog HDL FPGA Design' : 'تصميم FPGA كامل بـ Verilog HDL',
      category: 'fpga',
      description: language === 'en'
        ? 'Multiple FPGA control systems including tank level control and temperature monitoring, designed from scratch using Verilog HDL on Altera Cyclone IV board.'
        : 'عدة أنظمة تحكم على FPGA تشمل نظام تحكم في مستوى الخزانات ونظام مراقبة درجات الحرارة، مصممة من الصفر باستخدام Verilog HDL على بورد Altera Cyclone IV.',
      fullDescription: language === 'en'
        ? 'A comprehensive FPGA design project implementing multiple control systems from scratch using Verilog HDL. The project includes a tank level control system for monitoring and managing liquid levels in storage tanks, and a temperature control system for precise temperature monitoring and regulation. Both systems feature modular architecture where each component is designed and tested independently. The designs include custom memory modules, counters, 7-segment displays for output visualization, sensor interfaces, and complete pin assignments for the Altera Cyclone IV board. All modules are thoroughly tested using Verilog testbenches written from scratch. The project demonstrates proficiency in hardware description languages, FPGA development workflows, digital circuit design, control systems, and hardware verification methodologies. Developed using Quartus Prime for synthesis and simulation.'
        : 'مشروع تصميم FPGA شامل ينفذ عدة أنظمة تحكم من الصفر باستخدام Verilog HDL. يتضمن المشروع نظام تحكم في مستوى الخزانات لمراقبة وإدارة مستويات السوائل في خزانات التخزين، ونظام تحكم في درجات الحرارة لمراقبة وتنظيم درجات الحرارة بدقة. يتميز كلا النظامين بتصميم وحداتي حيث يتم تصميم واختبار كل مكون بشكل مستقل. يتضمن التصميم وحدات ذاكرة مخصصة، عدادات، شاشات 7-segment لعرض النتائج، واجهات المستشعرات، وتعيينات Pin كاملة لبورد Altera Cyclone IV. جميع الوحدات تم اختبارها بدقة باستخدام Testbenches مكتوبة من الصفر. المشروع يظهر الكفاءة في لغات وصف الأجهزة، سير عمل تطوير FPGA، تصميم الدوائر الرقمية، أنظمة التحكم، ومنهجيات التحقق من الأجهزة. تم التطوير باستخدام Quartus Prime للتصنيع والمحاكاة.',
      tools: ['Verilog HDL', 'Quartus Prime', 'Altera Cyclone IV', 'FPGA', 'Digital Design', 'Control Systems', 'Tank Level Control', 'Temperature Control', 'Testbench', '7-Segment Display', 'Memory Design', 'Counters', 'Sensor Interfaces', 'Pin Assignment', 'Hardware Verification'],
      image: '/academicprojects/verilogcart.png',
      video: null,
      tags: ['Verilog HDL', 'FPGA', 'Digital Design'],
      gradient: 'from-violet-500 to-purple-500',
      schematic: '/academicprojects/alteracycloneive.png',
      videoSteps: language === 'en'
        ? ['Modular Design', 'Verilog Coding', 'Tank Level Control System', 'Temperature Control System', 'Sensor Interfaces', 'Memory Implementation', 'Counter Design', '7-Segment Integration', 'Pin Assignment', 'Testbench Writing', 'Simulation & Verification', 'FPGA Implementation']
        : ['التصميم الوحداتي', 'كتابة Verilog', 'نظام تحكم مستوى الخزانات', 'نظام تحكم درجات الحرارة', 'واجهات المستشعرات', 'تنفيذ الذاكرة', 'تصميم العدادات', 'تكامل 7-Segment', 'تعيين Pin', 'كتابة Testbench', 'المحاكاة والتحقق', 'التطبيق على FPGA']
    },
    {
      id: 10,
      title: language === 'en' ? 'Raspberry Pi Assistive Technology System' : 'نظام تقنيات مساعدة بـ Raspberry Pi للمكفوفين والصم والبكم',
      category: 'iot',
      description: language === 'en'
        ? 'Comprehensive assistive technology system using Raspberry Pi to help visually impaired, deaf, and mute individuals with daily tasks and communication.'
        : 'نظام تقنيات مساعدة شامل باستخدام Raspberry Pi لمساعدة المكفوفين والصم والبكم في المهام اليومية والتواصل.',
      fullDescription: language === 'en'
        ? 'An innovative assistive technology system built with Raspberry Pi to support individuals with visual, hearing, and speech impairments. The system integrates multiple modules including computer vision for object recognition and text-to-speech conversion for the visually impaired, speech recognition and visual alerts for the deaf, and text-to-speech and gesture recognition for mute individuals. The system uses cameras, microphones, speakers, LCD displays, and various sensors to create an inclusive communication and assistance platform. Features include real-time object detection, OCR for reading text aloud, sign language recognition, voice commands, and haptic feedback. The modular design allows customization based on individual needs, making it adaptable for different assistive scenarios. Developed using Python, OpenCV, TensorFlow, and various Raspberry Pi GPIO modules.'
        : 'نظام تقنيات مساعدة مبتكر مبني باستخدام Raspberry Pi لدعم الأفراد ذوي الإعاقات البصرية والسمعية والنطقية. يدمج النظام عدة وحدات تشمل الرؤية الحاسوبية للتعرف على الأشياء وتحويل النص إلى كلام للمكفوفين، التعرف على الكلام والتنبيهات البصرية للصم، وتحويل النص إلى كلام والتعرف على الإيماءات للأبكم. يستخدم النظام كاميرات، ميكروفونات، مكبرات صوت، شاشات LCD، ومستشعرات متنوعة لإنشاء منصة تواصل ومساعدة شاملة. المميزات تشمل كشف الأشياء في الوقت الفعلي، OCR لقراءة النص بصوت عالٍ، التعرف على لغة الإشارة، الأوامر الصوتية، والتغذية الراجعة اللمسية. التصميم الوحداتي يسمح بالتخصيص حسب احتياجات الفرد، مما يجعله قابلاً للتكيف مع سيناريوهات مساعدة مختلفة. تم التطوير باستخدام Python، OpenCV، TensorFlow، ووحدات GPIO متنوعة لـ Raspberry Pi.',
      tools: ['Raspberry Pi', 'Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Text-to-Speech', 'Speech Recognition', 'OCR', 'Sign Language Recognition', 'GPIO', 'Camera Module', 'Microphone', 'Speaker', 'LCD Display', 'Haptic Feedback', 'Assistive Technology'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      tags: ['Raspberry Pi', 'Assistive Technology', 'AI'],
      gradient: 'from-blue-500 to-indigo-500',
      schematic: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&h=800&q=80',
      videoSteps: language === 'en'
        ? ['System Architecture Design', 'Raspberry Pi Setup', 'Camera Integration', 'Computer Vision Module', 'Text-to-Speech Implementation', 'Speech Recognition Setup', 'Sign Language Recognition', 'LCD Display Integration', 'Haptic Feedback System', 'User Interface Development', 'Testing with Users', 'Performance Optimization']
        : ['تصميم بنية النظام', 'إعداد Raspberry Pi', 'تكامل الكاميرا', 'وحدة الرؤية الحاسوبية', 'تنفيذ تحويل النص إلى كلام', 'إعداد التعرف على الكلام', 'التعرف على لغة الإشارة', 'تكامل شاشة LCD', 'نظام التغذية الراجعة اللمسية', 'تطوير واجهة المستخدم', 'الاختبار مع المستخدمين', 'تحسين الأداء']
    },
    {
      id: 11,
      title: language === 'en' ? 'Intelligent Chatbot System' : 'نظام شات بوت ذكي',
      category: 'ai',
      description: language === 'en'
        ? 'Advanced conversational AI chatbot system with natural language processing, context awareness, and multi-language support for various applications.'
        : 'نظام شات بوت ذكي متقدم مع معالجة اللغة الطبيعية، الوعي السياقي، ودعم متعدد اللغات لتطبيقات متنوعة.',
      fullDescription: language === 'en'
        ? 'A sophisticated chatbot system designed to provide intelligent conversational experiences across multiple domains. The chatbot utilizes advanced natural language processing NLP techniques, machine learning models, and context-aware algorithms to understand user intent and generate appropriate responses. The system supports multiple languages, can handle complex queries, maintain conversation context, and learn from interactions. Features include intent recognition, entity extraction, sentiment analysis, multi-turn conversations, knowledge base integration, and API connectivity for real-time information retrieval. The chatbot can be deployed for customer service, educational assistance, healthcare support, e-commerce, and various other applications. Built using Python, NLP libraries like NLTK and spaCy, machine learning frameworks TensorFlow and PyTorch, and integrated with databases and APIs. The system includes a user-friendly web interface and can be extended with voice interaction capabilities.'
        : 'نظام شات بوت متطور مصمم لتوفير تجارب محادثة ذكية عبر مجالات متعددة. يستخدم الشات بوت تقنيات معالجة اللغة الطبيعية NLP المتقدمة، نماذج التعلم الآلي، وخوارزميات واعية سياقياً لفهم نية المستخدم وتوليد ردود مناسبة. يدعم النظام عدة لغات، يمكنه التعامل مع الاستفسارات المعقدة، الحفاظ على سياق المحادثة، والتعلم من التفاعلات. المميزات تشمل التعرف على النية، استخراج الكيانات، تحليل المشاعر، محادثات متعددة الجولات، تكامل قاعدة المعرفة، واتصال API لاسترجاع المعلومات في الوقت الفعلي. يمكن نشر الشات بوت لخدمة العملاء، المساعدة التعليمية، الدعم الصحي، التجارة الإلكترونية، وتطبيقات متنوعة أخرى. مبني باستخدام Python، مكتبات NLP مثل NLTK و spaCy، أطر عمل التعلم الآلي TensorFlow و PyTorch، ومتكامل مع قواعد البيانات وAPIs. يتضمن النظام واجهة ويب سهلة الاستخدام ويمكن توسيعه بقدرات التفاعل الصوتي.',
      tools: ['Python', 'Natural Language Processing (NLP)', 'Machine Learning', 'TensorFlow', 'PyTorch', 'NLTK', 'spaCy', 'Intent Recognition', 'Entity Extraction', 'Sentiment Analysis', 'Context Management', 'API Integration', 'Database Integration', 'Web Interface', 'RESTful API', 'Chatbot Framework'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      tags: ['Chatbot', 'AI', 'NLP'],
      gradient: 'from-purple-500 to-pink-500',
      schematic: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&h=800&q=80',
      videoSteps: language === 'en'
        ? ['Requirements Analysis', 'NLP Model Selection', 'Training Data Collection', 'Intent Classification Model', 'Entity Extraction Setup', 'Context Management System', 'Response Generation', 'Knowledge Base Integration', 'API Development', 'Web Interface Design', 'Testing & Validation', 'Deployment & Monitoring']
        : ['تحليل المتطلبات', 'اختيار نموذج NLP', 'جمع بيانات التدريب', 'نموذج تصنيف النية', 'إعداد استخراج الكيانات', 'نظام إدارة السياق', 'توليد الردود', 'تكامل قاعدة المعرفة', 'تطوير API', 'تصميم واجهة الويب', 'الاختبار والتحقق', 'النشر والمراقبة']
    },
    {
      id: 12,
      title: language === 'en' ? 'AI-Powered Plant Disease Detection System' : 'نظام كشف أمراض النباتات بالذكاء الاصطناعي',
      category: 'ai',
      description: language === 'en'
        ? 'Agricultural AI system that analyzes plant images to detect diseases and predict potential health issues, helping farmers improve crop management.'
        : 'نظام ذكاء اصطناعي زراعي يحلل صور النباتات للكشف عن الأمراض والتنبؤ بالمشاكل الصحية المحتملة، يساعد المزارعين على تحسين إدارة المحاصيل.',
      fullDescription: language === 'en'
        ? 'An intelligent agricultural technology system that leverages computer vision and deep learning to identify plant diseases and predict potential health issues from leaf and plant images. The system allows farmers and agricultural professionals to upload images of plants through a web interface, and the AI model analyzes the images to detect various diseases, nutrient deficiencies, pest damage, and other health issues. The system provides detailed diagnosis reports, treatment recommendations, and preventive measures. Built using convolutional neural networks CNN trained on extensive datasets of healthy and diseased plant images, the system can identify multiple crop diseases across different plant species. Features include real-time image processing, disease classification, severity assessment, treatment suggestions, and historical tracking of plant health. The web application provides an intuitive interface for image upload, results visualization, and access to agricultural knowledge base. Developed using Python, TensorFlow and Keras for deep learning, OpenCV for image processing, Flask and FastAPI for backend, and modern web technologies for the frontend. The system helps reduce crop losses, optimize pesticide usage, and improve overall agricultural productivity.'
        : 'نظام تقني زراعي ذكي يستفيد من الرؤية الحاسوبية والتعلم العميق لتحديد أمراض النباتات والتنبؤ بالمشاكل الصحية المحتملة من صور الأوراق والنباتات. يسمح النظام للمزارعين والمهنيين الزراعيين برفع صور النباتات عبر واجهة ويب، ويحلل نموذج الذكاء الاصطناعي الصور للكشف عن أمراض متنوعة، نقص العناصر الغذائية، أضرار الآفات، ومشاكل صحية أخرى. يوفر النظام تقارير تشخيص مفصلة، توصيات العلاج، وإجراءات وقائية. مبني باستخدام الشبكات العصبية التلافيفية CNN المدربة على مجموعات بيانات واسعة من صور النباتات الصحية والمريضة، يمكن للنظام تحديد أمراض محاصيل متعددة عبر أنواع نباتية مختلفة. المميزات تشمل معالجة الصور في الوقت الفعلي، تصنيف الأمراض، تقييم الشدة، اقتراحات العلاج، وتتبع تاريخي لصحة النبات. يوفر التطبيق الويب واجهة بديهية لرفع الصور، تصور النتائج، والوصول إلى قاعدة المعرفة الزراعية. تم التطوير باستخدام Python، TensorFlow و Keras للتعلم العميق، OpenCV لمعالجة الصور، Flask و FastAPI للواجهة الخلفية، وتقنيات ويب حديثة للواجهة الأمامية. يساعد النظام في تقليل خسائر المحاصيل، تحسين استخدام المبيدات، وتحسين الإنتاجية الزراعية بشكل عام.',
      tools: ['Python', 'Deep Learning', 'Convolutional Neural Networks (CNN)', 'TensorFlow', 'Keras', 'OpenCV', 'Image Processing', 'Flask', 'FastAPI', 'Computer Vision', 'Agricultural AI', 'Disease Classification', 'Web Development', 'Image Classification', 'Machine Learning', 'Data Science'],
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&h=600&q=80',
      video: null,
      tags: ['Agriculture', 'AI', 'Computer Vision'],
      gradient: 'from-green-500 to-emerald-500',
      schematic: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800&q=80',
      videoSteps: language === 'en'
        ? ['Dataset Collection', 'Image Preprocessing', 'CNN Architecture Design', 'Model Training', 'Disease Classification', 'Image Upload Interface', 'Real-time Processing', 'Results Visualization', 'Treatment Recommendations', 'Knowledge Base Integration', 'Performance Evaluation', 'Deployment']
        : ['جمع مجموعة البيانات', 'المعالجة المسبقة للصور', 'تصميم بنية CNN', 'تدريب النموذج', 'تصنيف الأمراض', 'واجهة رفع الصور', 'المعالجة في الوقت الفعلي', 'تصور النتائج', 'توصيات العلاج', 'تكامل قاعدة المعرفة', 'تقييم الأداء', 'النشر']
    }
  ]

  // For category filtering, keep all projects
  const allProjects = [...productionProjects, ...academicProjects]

  const categories = []

  const getFilteredProjects = () => {
    if (selectedCategory === 'production') {
      return productionProjects
    }
    if (selectedCategory === 'academic') {
      return academicProjects
    }
    if (selectedCategory === 'all') {
      return allProjects
    }
    return allProjects.filter(p => p.category === selectedCategory)
  }
  
  const filteredProjects = getFilteredProjects()

  // Mobile-only order tweak:
  // Make the last row (2 cols) show: [2D&3D Animation, AI Video Production]
  // and move Business Automation & Workflow to be the last card.
  const getMobileOrderedProjects = (projects) => {
    if (!isMobile) return projects

    const isTargetProduction = (p) =>
      p?.category === 'production' && (p?.id === 5 || p?.id === 6 || p?.id === 7)

    const aiVideoIdx = projects.findIndex((p) => p?.category === 'production' && p?.id === 5)
    if (aiVideoIdx === -1) return projects

    const animation = projects.find((p) => p?.category === 'production' && p?.id === 7)
    const aiVideo = projects.find((p) => p?.category === 'production' && p?.id === 5)
    const automation = projects.find((p) => p?.category === 'production' && p?.id === 6)
    if (!animation || !aiVideo || !automation) return projects

    const before = projects.slice(0, aiVideoIdx).filter((p) => !isTargetProduction(p))
    const after = projects.slice(aiVideoIdx).filter((p) => !isTargetProduction(p))
    return [...before, animation, aiVideo, automation, ...after]
  }

  const displayProjects = getMobileOrderedProjects(filteredProjects)

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">

        {/* Projects Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="relative group max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
            <div className="p-6 sm:p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 sm:mb-6 shadow-lg">
                <FaBriefcase className="text-3xl sm:text-4xl text-white" />
              </div>
              <p className="text-purple-400 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{t.projects.subtitle}</p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-4">
                {t.projects.cardDescription}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Production vs Academic Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <motion.button
            onClick={() => {
              setSelectedCategory('production')
              setShowAllMobile(false)
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 sm:gap-2 overflow-hidden ${
              selectedCategory === 'production' || selectedCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'glass backdrop-blur-xl border border-white/20 text-gray-300 hover:border-purple-500/50 hover:bg-white/5'
            }`}
          >
            {/* Animated background gradient for active state */}
            {selectedCategory === 'production' || selectedCategory === 'all' ? (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{ opacity: 0.3 }}
              />
            ) : null}
            
            <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
              <FaBriefcase className={`text-sm sm:text-base transition-transform duration-300 ${
                selectedCategory === 'production' || selectedCategory === 'all'
                  ? 'text-white'
                  : 'text-purple-400 group-hover:text-purple-300 group-hover:scale-110'
              }`} />
              <span className="relative z-10">{t.projects.productionProjects}</span>
            </div>
            
            {/* Glow effect for active state */}
            {selectedCategory === 'production' || selectedCategory === 'all' ? (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10"></div>
            ) : null}
          </motion.button>
          
          <motion.button
            onClick={() => {
              setSelectedCategory('academic')
              setShowAllMobile(false)
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-1.5 sm:gap-2 overflow-hidden ${
              selectedCategory === 'academic'
                ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/50'
                : 'glass backdrop-blur-xl border border-white/20 text-gray-300 hover:border-blue-500/50 hover:bg-white/5'
            }`}
          >
            {/* Animated background gradient for active state */}
            {selectedCategory === 'academic' ? (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                style={{ opacity: 0.3 }}
              />
            ) : null}
            
            <div className="relative z-10 flex items-center gap-1.5 sm:gap-2">
              <FaGraduationCap className={`text-sm sm:text-base transition-transform duration-300 ${
                selectedCategory === 'academic'
                  ? 'text-white'
                  : 'text-blue-400 group-hover:text-blue-300 group-hover:scale-110'
              }`} />
              <span className="relative z-10">{t.projects.academicProjects}</span>
            </div>
            
            {/* Glow effect for active state */}
            {selectedCategory === 'academic' ? (
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 blur-xl -z-10"></div>
            ) : null}
          </motion.button>
        </motion.div>

        {/* Enhanced Category Filter */}
        {categories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full transition-all overflow-hidden text-xs sm:text-sm ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' shadow-lg shadow-purple-500/50'
                  : 'glass backdrop-blur-xl border border-white/10 hover:border-white/30'
              }`}
            >
              <category.icon className={`text-sm sm:text-lg ${selectedCategory === category.id ? 'text-white' : 'text-purple-400'}`} />
              <span className={`font-medium ${selectedCategory === category.id ? 'text-white' : 'text-gray-300'}`}>
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
        )}

        {/* Enhanced Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 sm:gap-4 lg:gap-6"
        >
          <AnimatePresence>
            {displayProjects.map((project, index) => {
              // On mobile, show only first 4 projects unless showAllMobile is true
              if (isMobile && !showAllMobile && index >= 4) {
                return null
              }
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                  t={t}
                  isMobile={isMobile}
                  language={language}
                />
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* More Button - Mobile Only */}
        {filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6 sm:hidden"
          >
            <motion.button
              onClick={() => setShowAllMobile(!showAllMobile)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              {showAllMobile ? t.projects.showLess : t.projects.more}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setSelectedProject(null)
              setActiveTab('description')
            }}
            t={t}
            language={language}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const ProjectCard = ({ project, index, onSelect, t, isMobile, language }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const marketMeta = {
    sa: { emoji: '🇸🇦', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
    ma: { emoji: '🇲🇦', color: 'bg-red-500/15 text-red-300 border-red-500/30' },
    eg: { emoji: '🇪🇬', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
    kw: { emoji: '🇰🇼', color: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  }
  const market = project.marketKey ? marketMeta[project.marketKey] : null
  const corner = project.badgeCorner || 'tr'
  const cornerClass =
    corner === 'tl'
      ? 'top-3 left-3'
      : corner === 'bl'
        ? 'bottom-3 left-3'
        : corner === 'br'
          ? 'bottom-3 right-3'
          : 'top-3 right-3'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={isMobile ? undefined : { y: -15, scale: 1.02 }}
      className="group relative cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
      
      <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all h-[360px] sm:h-auto flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full ${project.id === 9 ? 'object-contain' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
            }}
          />
          {/* Market badge - pinned on the image (top-right) so title never wraps */}
          {project.market && market && (
            <div className={`absolute ${cornerClass} z-10 pointer-events-none`}>
              <span
                className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] sm:text-xs whitespace-nowrap backdrop-blur-md bg-black/35 ${market.color}`}
              >
                <span className="text-[11px] sm:text-sm leading-none">{market.emoji}</span>
                <FaMapMarkerAlt className="opacity-90" />
                <span className="font-semibold">{project.market}</span>
              </span>
            </div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 flex-wrap">
              {project.hasSubProjects && project.subProjects ? (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-purple-500/80 backdrop-blur-md rounded-full border border-white/20"
                >
                  <FaList className="text-white text-xs sm:text-sm" />
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {project.subProjects.length} {language === 'en' ? 'Categories' : 'أقسام'}
                  </span>
                </motion.div>
              ) : (
                <>
                  {project.video && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500/80 backdrop-blur-md rounded-full border border-white/20"
                    >
                      <FaPlay className="text-white text-xs sm:text-sm" />
                      <span className="text-white text-xs sm:text-sm font-medium">{t.projects.video}</span>
                    </motion.div>
                  )}
                  {project.link && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                    >
                      <FaExternalLinkAlt className="text-white text-xs sm:text-sm" />
                      <span className="text-white text-xs sm:text-sm font-medium">{t.projects.viewSite}</span>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          {(() => {
            const isMrRobot = isMobile && project.title === 'Mr Robot Academy'
            return (
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-400 transition-colors ${
                  isMrRobot ? 'text-base whitespace-nowrap' : ''
                }`}
              >
                {project.title}
              </h3>
            )
          })()}
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed project-desc-clamp">
            {project.description}
          </p>
          <div
            className={`flex gap-1.5 sm:gap-2 mt-auto ${
              isMobile && project.title === 'Emaar Group' ? 'flex-nowrap' : 'flex-wrap'
            }`}
          >
            {(project.tags || project.tools || []).slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className={`bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 border border-purple-500/30 whitespace-nowrap ${
                  isMobile && project.title === 'Emaar Group'
                    ? 'px-1.5 py-0.5 text-[10px] leading-none'
                    : 'px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs'
                }`}
              >
                {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

const ProjectModal = ({ project, onClose, t, language, activeTab, setActiveTab }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [selectedSubProject, setSelectedSubProject] = useState(null)
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)
  const marketMeta = {
    sa: { emoji: '🇸🇦', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
    ma: { emoji: '🇲🇦', color: 'bg-red-500/15 text-red-300 border-red-500/30' },
    eg: { emoji: '🇪🇬', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
    kw: { emoji: '🇰🇼', color: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  }
  const market = project?.marketKey ? marketMeta[project.marketKey] : null

  // If project has sub-projects, show them instead of regular modal
  if (project?.hasSubProjects && project?.subProjects) {
    return (
      <SubProjectsModal
        project={project}
        onClose={onClose}
        t={t}
        language={language}
        selectedSubProject={selectedSubProject}
        setSelectedSubProject={setSelectedSubProject}
        selectedVideoIndex={selectedVideoIndex}
        setSelectedVideoIndex={setSelectedVideoIndex}
      />
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="glass backdrop-blur-xl border border-white/20 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-8"
      >
        {/* Header with Image/Video */}
        <div className="relative">
          {showVideo && project.video ? (
            <div className="relative w-full h-0 pb-[56.25%] bg-black">
              {project.video.startsWith('http') || project.video.startsWith('//') ? (
                <iframe
                  src={project.video}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                ></iframe>
              ) : (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  className="absolute top-0 left-0 w-full h-full"
                  onError={(e) => {
                    console.error('Video error:', e)
                  }}
                >
                  {language === 'en' ? 'Your browser does not support the video tag.' : 'المتصفح لا يدعم تشغيل الفيديو.'}
                </video>
              )}
            </div>
          ) : (
            <div className={`h-48 sm:h-64 bg-gradient-to-br ${project.gradient} relative`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
                }}
              />
              {project.video && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowVideo(true)
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors group"
                >
                  <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </button>
              )}
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white text-lg sm:text-xl z-10"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">{project.title}</h2>
            {project.market && market && (
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs sm:text-sm ${market.color}`}>
                <span className="text-sm sm:text-base leading-none">{market.emoji}</span>
                <FaMapMarkerAlt className="opacity-90" />
                <span className="font-semibold">{project.market}</span>
              </span>
            )}
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 py-2 rounded-t-lg transition-all ${
                activeTab === 'description'
                  ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'en' ? 'Description' : 'الوصف'}
            </button>
            {project.tools && (
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-2 ${
                  activeTab === 'tools'
                    ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaTools className="text-sm" />
                {language === 'en' ? 'Tools & Technologies' : 'الأدوات والتقنيات'}
              </button>
            )}
            {project.schematic && (
              <button
                onClick={() => setActiveTab('schematic')}
                className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-2 ${
                  activeTab === 'schematic'
                    ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaMicrochip className="text-sm" />
                {project.category === 'fpga' 
                  ? (language === 'en' ? 'FPGA Board' : 'بورد FPGA')
                  : (language === 'en' ? 'Circuit Schematic' : 'المخطط الكهربائي')
                }
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="mb-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-300 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>
            )}

            {activeTab === 'tools' && project.tools && (
              <div>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-300 border border-purple-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'schematic' && project.schematic && (
              <div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {project.category === 'fpga'
                      ? (language === 'en' ? 'Altera Cyclone IV FPGA Board' : 'بورد Altera Cyclone IV FPGA')
                      : (language === 'en' ? 'Circuit Schematic Diagram' : 'مخطط الدائرة الكهربائية')
                    }
                  </h3>
                  <div className="bg-black/30 rounded-xl p-4 overflow-auto">
                    <img
                      src={project.schematic}
                      alt={`${project.title} Schematic`}
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'block'
                      }}
                    />
                    <div className="hidden text-center text-gray-400 py-8">
                      {language === 'en' ? 'Schematic diagram will be available soon' : 'مخطط الدائرة سيكون متاحاً قريباً'}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-purple-300 border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <FaExternalLinkAlt />
                {t.projects.viewSite}
              </motion.a>
            )}
            {project.video && !showVideo && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowVideo(true)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                <FaPlay />
                {t.projects.video}
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Video Thumbnail Component
const VideoThumbnail = ({ videoSrc, gradient, isSelected, onClick }) => {
  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(true)
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    const video = document.createElement('video')
    video.preload = 'metadata'
    video.muted = true
    video.playsInline = true
    video.src = videoSrc
    
    const handleLoadedMetadata = () => {
      try {
        // Try to get frame at 1 second or at 10% of duration
        const seekTime = Math.min(1, video.duration * 0.1)
        video.currentTime = seekTime
      } catch (e) {
        setLoading(false)
      }
    }
    
    const handleSeeked = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth || 320
        canvas.height = video.videoHeight || 180
        const ctx = canvas.getContext('2d')
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        setThumbnail(canvas.toDataURL('image/jpeg', 0.8))
        setLoading(false)
      } catch (e) {
        console.error('Error generating thumbnail:', e)
        setLoading(false)
      }
    }
    
    const handleError = () => {
      setLoading(false)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('seeked', handleSeeked)
    video.addEventListener('error', handleError)
    
    // Load video
    video.load()

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('seeked', handleSeeked)
      video.removeEventListener('error', handleError)
    }
  }, [videoSrc])

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
        isSelected
          ? 'border-purple-500 shadow-lg shadow-purple-500/50'
          : 'border-white/10 hover:border-white/30'
      }`}
    >
      {thumbnail ? (
        <>
          <img
            src={thumbnail}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
            onError={() => setThumbnail(null)}
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
              <FaPlay className="text-purple-600 text-lg ml-1" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            {loading ? (
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <FaPlay className="text-white text-xl sm:text-2xl" />
            )}
          </div>
        </>
      )}
    </motion.button>
  )
}

// Sub Project Card Thumbnail Component - extracts thumbnail from first video
const SubProjectThumbnail = ({ videos, gradient }) => {
  const [thumbnail, setThumbnail] = useState(null)
  const [loading, setLoading] = useState(true)

  React.useEffect(() => {
    if (!videos || videos.length === 0) {
      setLoading(false)
      return
    }

    const video = document.createElement('video')
    video.preload = 'metadata'
    video.muted = true
    video.playsInline = true
    video.crossOrigin = 'anonymous'
    video.src = videos[0]
    
    const handleLoadedMetadata = () => {
      try {
        // Get frame at 1 second or at 10% of duration
        const seekTime = Math.min(1, video.duration * 0.1)
        video.currentTime = seekTime
      } catch (e) {
        setLoading(false)
      }
    }
    
    const handleSeeked = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth || 640
        canvas.height = video.videoHeight || 360
        const ctx = canvas.getContext('2d')
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        setThumbnail(canvas.toDataURL('image/jpeg', 0.85))
        setLoading(false)
      } catch (e) {
        console.error('Error generating sub-project thumbnail:', e)
        setLoading(false)
      }
    }
    
    const handleError = () => {
      setLoading(false)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('seeked', handleSeeked)
    video.addEventListener('error', handleError)
    
    // Load video
    video.load()

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('seeked', handleSeeked)
      video.removeEventListener('error', handleError)
    }
  }, [videos])

  if (thumbnail) {
    return (
      <>
        <img
          src={thumbnail}
          alt="Project thumbnail"
          className="w-full h-full object-cover"
          onError={() => setThumbnail(null)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </>
    )
  }

  return (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}></div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </>
  )
}

// Sub Projects Modal Component
const SubProjectsModal = ({ project, onClose, t, language, selectedSubProject, setSelectedSubProject, selectedVideoIndex, setSelectedVideoIndex }) => {
  const [showVideo, setShowVideo] = useState(false)

  if (selectedSubProject) {
    const hasVideos = selectedSubProject.videos && selectedSubProject.videos.length > 0
    const currentVideo = hasVideos ? selectedSubProject.videos[selectedVideoIndex] : null
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="glass backdrop-blur-xl border border-white/20 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-8"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-black/50 backdrop-blur-md border-b border-white/10 p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedSubProject(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                ←
              </button>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">{selectedSubProject.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white text-lg sm:text-xl"
            >
              ✕
            </button>
          </div>

          {/* Workflow Image */}
          {selectedSubProject.image && (
            <div className="p-4 sm:p-6 pb-0">
              <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6">
                <img
                  src={selectedSubProject.image}
                  alt={selectedSubProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          )}

          {/* Video Player */}
          {hasVideos && (
          <div className="p-4 sm:p-6">
            <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-xl overflow-hidden mb-6">
              {showVideo && currentVideo ? (
                <video
                  src={currentVideo}
                  controls
                  autoPlay
                  className="absolute top-0 left-0 w-full h-full"
                  onError={(e) => {
                    console.error('Video error:', e)
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                  >
                    <FaPlay className="text-white text-2xl ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Video Thumbnails Grid */}
            {selectedSubProject.videos && selectedSubProject.videos.length > 1 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {language === 'en' ? 'All Videos' : 'جميع الفيديوهات'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {selectedSubProject.videos.map((video, index) => (
                    <VideoThumbnail
                      key={index}
                      videoSrc={video}
                      gradient={selectedSubProject.gradient}
                      isSelected={index === selectedVideoIndex}
                      onClick={() => {
                        setSelectedVideoIndex(index)
                        setShowVideo(true)
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          )}

          {/* Description */}
          <div className="p-4 sm:p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                {language === 'en' ? 'Description' : 'الوصف'}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {selectedSubProject.fullDescription || selectedSubProject.description}
              </p>
            </div>

            {/* Tools */}
            {selectedSubProject.tools && selectedSubProject.tools.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {language === 'en' ? 'Techniques' : 'التقنيات'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedSubProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-300 border border-purple-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {selectedSubProject.benefits && selectedSubProject.benefits.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  {language === 'en' ? 'Benefits for Your Company' : 'الفوائد لشركتك'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedSubProject.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-lg border border-green-500/20"
                    >
                      <span className="text-green-400 text-lg mt-0.5">✓</span>
                      <p className="text-gray-300 text-sm leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )
  }

  // Main sub-projects grid view
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="glass backdrop-blur-xl border border-white/20 rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-8"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-black/50 backdrop-blur-md border-b border-white/10 p-4 sm:p-6 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">{project.title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white text-lg sm:text-xl"
          >
            ✕
          </button>
        </div>

        {/* Sub Projects Grid */}
        <div className="p-4 sm:p-6">
          <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {project.subProjects.map((subProject, index) => (
              <motion.div
                key={subProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedSubProject(subProject)}
                className="group relative cursor-pointer"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${subProject.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
                  {/* Header with thumbnail from saved image or video or gradient */}
                  <div className={`h-32 bg-gradient-to-br ${subProject.gradient} relative overflow-hidden`}>
                    {/* Priority: 1. Saved thumbnail, 2. Image (if exists), 3. Video thumbnail (if videos exist), 4. Gradient */}
                    {subProject.thumbnail ? (
                      <>
                        <img
                          src={subProject.thumbnail}
                          alt={subProject.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to video thumbnail or gradient if saved thumbnail fails
                            e.target.style.display = 'none'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      </>
                    ) : subProject.image ? (
                      <>
                        <img
                          src={subProject.image}
                          alt={subProject.title}
                          className="w-full h-full object-cover opacity-80"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </>
                    ) : subProject.videos && subProject.videos.length > 0 ? (
                      <SubProjectThumbnail videos={subProject.videos} gradient={subProject.gradient} />
                    ) : null}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2">
                        {subProject.videos && subProject.videos.length > 0 && (
                          <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs sm:text-sm font-medium">
                            {subProject.videos.length} {language === 'en' ? 'Videos' : 'فيديو'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-400 transition-colors">
                      {subProject.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                      {subProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {subProject.tools?.slice(0, 3).map((tool, i) => (
                        <span
                          key={i}
                          className="bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 border border-purple-500/30 px-2 py-1 text-[10px] sm:text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                      {subProject.tools?.length > 3 && (
                        <span className="bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 border border-purple-500/30 px-2 py-1 text-[10px] sm:text-xs">
                          +{subProject.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
