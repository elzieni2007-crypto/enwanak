importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDqqzvkapHC3y3Q3gDi-URbPgUURS00Ahw",
  authDomain: "enwanak.firebaseapp.com",
  projectId: "enwanak",
  storageBucket: "enwanak.firebasestorage.app",
  messagingSenderId: "93416963772",
  appId: "1:93416963772:web:c8fe48167fafb192eb1ab9",
  measurementId: "G-C88CVCGDPK"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const title = payload?.notification?.title || "عنوانك | ENWANAK";
  const options = {
    body: payload?.notification?.body || "لديك تحديث جديد.",
    icon: payload?.notification?.icon || undefined,
    data: payload?.data || {}
  };
  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const target = event.notification?.data?.url || "./";
  event.waitUntil(clients.openWindow(target));
});
