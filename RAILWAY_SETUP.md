# 🚂 إعداد Railway للمشروع

## الخطوات السريعة:

1. **اذهب إلى [Railway Dashboard](https://railway.app)**
2. **اضغط "New Project"**
3. **اختر "Deploy from GitHub repo"**
4. **اختر Repository:** `MohamedElbaloty/portfolio`
5. **اختر Branch:** `main`
6. **فعّل "Auto Deploy"** في Settings

## إعدادات Build:

- **Root Directory:** اتركه فارغ (الجذر)
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm run preview` (أو استخدم Vite static hosting)

## أو استخدام Vite Static:

Railway يمكنه تقديم الملفات الثابتة مباشرة:

1. **Settings → Build**
   - **Builder:** `Nixpacks`
   - **Build Command:** `npm install && npm run build`
   
2. **Settings → Deploy**
   - **Start Command:** اتركه فارغ (سيستخدم static files)

3. **أضف متغيرات البيئة (إن وجدت):**
   - لا حاجة لمتغيرات في هذا المشروع

## ملاحظات:

- ✅ المشروع React + Vite لا يحتاج Backend
- ✅ يمكن استخدام Railway Static Hosting
- ✅ أو استخدام Vercel/Netlify (أسهل للمشاريع الثابتة)

---

**جاهز للاستخدام!** 🎉



