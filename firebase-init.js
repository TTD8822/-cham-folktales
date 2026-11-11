/* =========================================================
   FIREBASE DÙNG CHUNG – Cham Folktales AI
   ---------------------------------------------------------
   Trước file này phải nhúng SDK compat của Firebase:
     <script src="https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js"></script>
     <script src="https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore-compat.js"></script>
   (trang quản trị nhúng thêm firebase-auth-compat.js)

   Lưu ý bảo mật: apiKey của Firebase được phép công khai.
   Dữ liệu được bảo vệ bằng FIRESTORE RULES (xem file firestore.rules).
   ========================================================= */
(function () {
    'use strict';

    const firebaseConfig = {
        apiKey: "AIzaSyCb4DjQhZfWxTF5yWqSasserm4b4A7r4wc",
        authDomain: "cham-folktales-3ec38.firebaseapp.com",
        projectId: "cham-folktales-3ec38",
        storageBucket: "cham-folktales-3ec38.firebasestorage.app",
        messagingSenderId: "370479685553",
        appId: "1:370479685553:web:335ad3764cb5865b0ae790"
    };

    const CF = (window.CF = window.CF || {});

    if (typeof firebase === 'undefined') {
        console.warn('[firebase-init] Chưa nhúng Firebase SDK – bỏ qua.');
        CF.db = null;
        CF.trackView = function () {};
        return;
    }

    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

    CF.db = firebase.firestore ? firebase.firestore() : null;
    CF.auth = firebase.auth ? firebase.auth() : null;

    /* Đếm lượt xem: mỗi trình duyệt chỉ tính 1 lần / trang / phiên
       để tránh F5 liên tục làm phồng số liệu. */
    CF.trackView = function (page) {
        if (!CF.db || !page) return;
        const key = 'cf_viewed_' + page;
        try {
            if (sessionStorage.getItem(key)) return;
            sessionStorage.setItem(key, '1');
        } catch (e) { /* chế độ ẩn danh – vẫn đếm */ }
        CF.db.collection('counters').doc(page)
            .set({ views: firebase.firestore.FieldValue.increment(1) }, { merge: true })
            .catch(function () {});
    };
})();
