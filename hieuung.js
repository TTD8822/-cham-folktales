/* =========================================================
   HIỆU ỨNG - EFFECTS (dùng chung cho mọi trang)
   Chỉ cần thêm 1 dòng <script src="hieu-ung.js"></script>
   trước thẻ </body> là chạy. Không cần sửa gì thêm.
   ========================================================= */
(function(){

    /* ============================================================
       1) HẠT VÀNG BAY - canvas nhẹ, không dùng thư viện ngoài
       ============================================================ */
    const canvas = document.getElementById('particles-canvas');
    if(canvas){
        const ctx = canvas.getContext('2d');
        let w, h, particles = [];

        function resize(){
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        const COUNT = window.innerWidth < 768 ? 22 : 48;
        for(let i = 0; i < COUNT; i++){
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.8 + 0.6,
                speedY: Math.random() * 0.35 + 0.12,
                drift: Math.random() * 0.6 - 0.3,
                alpha: Math.random() * 0.5 + 0.2,
                twinkle: Math.random() * 0.02 + 0.006
            });
        }

        function tick(){
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.y -= p.speedY;
                p.x += p.drift;
                p.alpha += (Math.random() > 0.5 ? p.twinkle : -p.twinkle);
                p.alpha = Math.max(0.1, Math.min(0.7, p.alpha));

                if(p.y < -10){ p.y = h + 10; p.x = Math.random() * w; }
                if(p.x < -10) p.x = w + 10;
                if(p.x > w + 10) p.x = -10;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(244,200,107,${p.alpha})`;
                ctx.shadowColor = 'rgba(244,200,107,0.8)';
                ctx.shadowBlur = 4;
                ctx.fill();
            });
            requestAnimationFrame(tick);
        }
        tick();
    }

    /* ============================================================
       2) SCROLL REVEAL - hiện dần khi cuộn tới các khu có class "reveal"
       ============================================================ */
    const revealEls = document.querySelectorAll('.reveal');
    if(revealEls.length){
        if('IntersectionObserver' in window){
            const io = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        entry.target.classList.add('reveal-visible');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            revealEls.forEach(el => io.observe(el));
        } else {
            revealEls.forEach(el => el.classList.add('reveal-visible'));
        }
    }

    /* ============================================================
       3) ĐẾM SỐ CHẠY cho các ô .stat-box h3 (50+, 30+, 1000+...)
       ============================================================ */
    const statEls = document.querySelectorAll('.stat-box h3');
    if(statEls.length && 'IntersectionObserver' in window){
        const countIO = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    animateCount(entry.target);
                    countIO.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        statEls.forEach(el => countIO.observe(el));
    }

    function animateCount(el){
        const raw = el.textContent.trim();
        const match = raw.match(/^(\d+)(.*)$/); // tách phần số ở đầu và ký hiệu còn lại (vd "+", "/7")
        if(!match) return;

        const target = parseInt(match[1], 10);
        const suffix = match[2];
        const duration = 1200;
        const start = performance.now();

        function step(now){
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out
            const current = Math.round(target * eased);
            el.textContent = current + suffix;
            if(progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    /* ============================================================
       4) GLOW VÀNG BÁM THEO CHUỘT trên menu-card / card / vhz-card
       ============================================================ */
    const glowTargets = document.querySelectorAll('.menu-card, .card, .vhz-card');
    glowTargets.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const mx = ((e.clientX - rect.left) / rect.width) * 100;
            const my = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', mx + '%');
            card.style.setProperty('--my', my + '%');
        });
    });

})();