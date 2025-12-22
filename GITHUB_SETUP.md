# 🚀 خطوات رفع المشروع على GitHub

## الخطوة 1: إنشاء Repository على GitHub

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على **"+"** في الأعلى → **"New repository"**
3. أدخل اسم المشروع (مثلاً: `portfolio` أو `mohamed-ezzat-portfolio`)
4. اختر **Public** أو **Private**
5. **لا** تضع علامة على "Initialize this repository with a README"
6. اضغط **"Create repository"**

## الخطوة 2: ربط المشروع المحلي بـ GitHub

بعد إنشاء Repository، GitHub سيعطيك أوامر. استخدم هذه الأوامر:

```bash
# إضافة remote repository (استبدل YOUR_USERNAME و REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# تغيير اسم الفرع إلى main (إذا كان master)
git branch -M main

# رفع المشروع
git push -u origin main
```

## مثال:

إذا كان اسم المستخدم `MohamedElbaloty` واسم المشروع `portfolio`:

```bash
git remote add origin https://github.com/MohamedElbaloty/portfolio.git
git branch -M main
git push -u origin main
```

## الخطوة 3: ربط المشروع بـ Railway

بعد رفع المشروع على GitHub:

1. اذهب إلى [Railway](https://railway.app)
2. اضغط **"New Project"**
3. اختر **"Deploy from GitHub repo"**
4. اختر Repository الذي أنشأته
5. Railway سيكتشف المشروع تلقائياً
6. تأكد من تفعيل **"Auto Deploy"** في Settings

## ملاحظات مهمة:

- ✅ تأكد من أن المشروع مربوط بـ GitHub قبل ربطه بـ Railway
- ✅ Auto Deploy يجب أن يكون مفعل في Railway
- ✅ أي تغييرات ترفعها على GitHub ستُحدث تلقائياً على Railway

## الأوامر السريعة:

```bash
# بعد أي تعديلات
git add .
git commit -m "وصف التعديلات"
git push origin main
```

---

**جاهز للاستخدام!** 🎉


