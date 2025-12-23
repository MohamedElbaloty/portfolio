# Scripts لمعالجة الصور

## تعديل صورة Avatar

### الطريقة 1: استخدام Python Script (موصى به)

1. تثبيت المكتبة المطلوبة:
```bash
pip install Pillow
```

2. تشغيل السكريبت:
```bash
python scripts/fix_avatar.py
```

أو مع مسارات مخصصة:
```bash
python scripts/fix_avatar.py public/avatar.jfif public/avatar-fixed.jfif
```

### الطريقة 2: استخدام HTML Tool في المتصفح

1. افتح `scripts/fix-avatar-browser.html` في المتصفح
2. اختر الصورة
3. اضغط "معالجة الصورة"
4. اضغط "حفظ الصورة المعدلة"
5. استبدل الملف في `public/avatar.jfif`

## ملاحظات

- السكريبت يقوم بمرآة الأذن اليمنى ووضعها مكان اليسرى
- قد تحتاج لتعديل الإحداثيات حسب صورتك
- احتفظ بنسخة احتياطية من الصورة الأصلية



