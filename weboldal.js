// ── A nevem animációja ──
(function () {
    const title = 'GINA RUBIK';
    const container = document.getElementById('heroName');

    if (!container) return;

    let idx = 0;

    title.split('').forEach((char) => {
        if (char === ' ') {
            const sp = document.createElement('span');
            sp.className = 'word-space';
            container.appendChild(sp);
        } else {
            const span = document.createElement('span');
            span.className = 'letter';
            span.textContent = char;

            const delay = 300 + idx * 180;
            span.style.animationDelay = delay + 'ms';

            setTimeout(() => {
                span.classList.add('shimmer');

// Az effekt után (1.8s) a nevem betűi ott maradnak
                setTimeout(() => {
                    span.classList.remove('shimmer');
                    span.classList.add('done');
                    // A nevem betűi ott maradnak, de már nem animálódnak tovább
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                    span.style.animation = 'none';
                    span.style.background = 'linear-gradient(135deg, #f5e6d3, #d4a843, #c4527a)';
                    span.style.webkitBackgroundClip = 'text';
                    span.style.webkitTextFillColor = 'transparent';
                }, 1900);


            }, delay + 700);



            container.appendChild(span);
            idx++;
        }
    });
})();

// ── Csillagok ──
(function () {
    const starsContainer = document.getElementById('stars');

    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top  = Math.random() * 100 + '%';
        star.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
        starsContainer.appendChild(star);
    }
})();

// ── Legörgetős animációk ──
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.appear').forEach((el) => {
        observer.observe(el);
    });
}

// ── Kapcsolati űrlap ──
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.submit-btn');
    btn.textContent = 'Elküldve ✓';
    setTimeout(() => {
        btn.textContent = 'Küldés →';
        e.target.reset();
    }, 2500);
}

// ── Oldal tetejére visszaugrás ──
document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Zene lejátszó ──
(function () {
    const audio     = document.getElementById('apAudio');
    const playBtn   = document.getElementById('apPlayBtn');
    const iconPlay  = document.getElementById('apIconPlay');
    const iconPause = document.getElementById('apIconPause');
    const fill      = document.getElementById('apFill');
    const thumb     = document.getElementById('apThumb');
    const bar       = document.getElementById('apBar');
    const curEl     = document.getElementById('apCur');
    const durEl     = document.getElementById('apDur');
    const volEl     = document.getElementById('apVol');

    function fmt(s) {
        const m   = Math.floor(s / 60);
        const sec = String(Math.floor(s % 60)).padStart(2, '0');
        return m + ':' + sec;
    }

    playBtn.addEventListener('click', () => {
        if (audio.paused) { audio.play(); } else { audio.pause(); }
    });

    audio.addEventListener('play', () => {
        iconPlay.style.display  = 'none';
        iconPause.style.display = '';
    });

    audio.addEventListener('pause', () => {
        iconPlay.style.display  = '';
        iconPause.style.display = 'none';
    });

    audio.addEventListener('loadedmetadata', () => {
        durEl.textContent = fmt(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) return;
        const pct = (audio.currentTime / audio.duration) * 100;
        fill.style.width  = pct + '%';
        thumb.style.left  = pct + '%';
        curEl.textContent = fmt(audio.currentTime);
    });

    bar.addEventListener('click', (e) => {
        const rect = bar.getBoundingClientRect();
        const pct  = (e.clientX - rect.left) / rect.width;
        audio.currentTime = pct * audio.duration;
    });

    audio.volume = parseFloat(volEl.value);
    volEl.addEventListener('input', () => {
        audio.volume = parseFloat(volEl.value);
    });
})();
