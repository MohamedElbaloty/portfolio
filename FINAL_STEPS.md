# ✅ الخطوات النهائية - رفع المشروع

## ✅ ما تم إنجازه:

1. ✅ تم إنشاء المشروع بالكامل
2. ✅ تم إضافة قسم السيرة الذاتية
3. ✅ تم تهيئة Git
4. ✅ تم ربط المشروع بـ GitHub: `https://github.com/MohamedElbaloty/portfolio.git`
5. ✅ تم عمل 4 commits

## 🚀 الخطوة الأخيرة - رفع على GitHub:

### إذا كان Repository موجود بالفعل:

```bash
git push -u origin main
```

### إذا لم يكن موجود، أنشئه أولاً:

1. **اذهب إلى:** https://github.com/new
2. **Repository name:** `portfolio`
3. **اختر:** Public أو Private
4. **⚠️ مهم:** لا تضع علامة على "Add a README file"
5. **اضغط:** "Create repository"

ثم:

```bash
git push -u origin main
```

## 🔗 ربط Railway:

بعد الرفع على GitHub:

1. **اذهب إلى:** https://railway.app
2. **New Project** → **Deploy from GitHub repo**
3. **اختر:** `MohamedElbaloty/portfolio`
4. **Branch:** `main`
5. **Settings → Deploy** → فعّل **Auto Deploy**

### إعدادات Build:

- **Build Command:** `npm install && npm run build`
- **Output Directory:** `dist`
- **Start Command:** `npx vite preview --host 0.0.0.0 --port $PORT`

أو استخدم **Static Hosting** (أسهل):
- **Builder:** Nixpacks
- **Build Command:** `npm install && npm run build`
- **Start Command:** اتركه فارغ

---

**المشروع جاهز 100%!** 🎉

