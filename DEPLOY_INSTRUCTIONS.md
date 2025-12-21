# 🚀 تعليمات رفع المشروع على GitHub

## الخطوة 1: إنشاء Repository على GitHub

1. اذهب إلى [GitHub](https://github.com/MohamedElbaloty)
2. اضغط على **"+"** في الأعلى → **"New repository"**
3. اسم المشروع: `portfolio` (أو أي اسم تفضله)
4. اختر **Public** أو **Private**
5. **⚠️ مهم:** لا تضع علامة على "Initialize this repository with a README"
6. اضغط **"Create repository"**

## الخطوة 2: ربط المشروع المحلي

بعد إنشاء Repository، استخدم هذه الأوامر:

```bash
# إذا كان اسم المشروع "portfolio"
git remote set-url origin https://github.com/MohamedElbaloty/portfolio.git

# أو إذا كان اسم مختلف، استبدل "portfolio" بالاسم الذي اخترته
git remote set-url origin https://github.com/MohamedElbaloty/YOUR_REPO_NAME.git

# رفع المشروع
git push -u origin main
```

## الخطوة 3: ربط Railway

1. اذهب إلى [Railway Dashboard](https://railway.app)
2. اضغط **"New Project"**
3. اختر **"Deploy from GitHub repo"**
4. اختر Repository: `MohamedElbaloty/portfolio` (أو الاسم الذي اخترته)
5. اختر Branch: `main`
6. **فعّل "Auto Deploy"** في Settings → Deploy

## إعدادات Railway للمشروع:

### Build Settings:
- **Root Directory:** اتركه فارغ
- **Build Command:** `npm install && npm run build`
- **Output Directory:** `dist`

### Deploy Settings:
- **Start Command:** `npx vite preview --host 0.0.0.0 --port $PORT`
- **أو استخدم:** Railway Static Hosting (أسهل)

### أو استخدام Static Hosting:
1. **Settings → Build**
   - **Builder:** `Nixpacks`
   - **Build Command:** `npm install && npm run build`
2. **Settings → Deploy**
   - **Start Command:** اتركه فارغ
   - Railway سيخدم الملفات من `dist` تلقائياً

## التحقق من الرفع:

```bash
# تحقق من حالة Git
git status

# تحقق من remote
git remote -v

# رفع أي تحديثات مستقبلية
git add .
git commit -m "وصف التحديثات"
git push origin main
```

---

**بعد الرفع، Railway سيبدأ Deploy تلقائياً!** 🎉

