// Tab functionality
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Slovin Calculator
function calculateSlovin() {
    let N = parseFloat(document.getElementById("pop").value);
    let e = parseFloat(document.getElementById("error").value);

    if (!N || !e) { alert("Please enter all values."); return; }

    // --- STEP 2: ADD THIS LINE HERE ---
    document.getElementById("slovinFormulaBox").style.display = "block";

    let n = N / (1 + (N * e * e));
    n = Math.round(n);

    document.getElementById("slovinResult").innerHTML = 
        `<strong>✅ Sample Size (n): ${n}</strong>`;

    document.getElementById("slovinSteps").innerHTML = 
        `<strong>Step-by-step:</strong><br>
        1️⃣ Square the margin of error: e² = ${(e*e).toFixed(4)}<br>
        2️⃣ Multiply by population: N × e² = ${(N*e*e).toFixed(2)}<br>
        3️⃣ Add 1: 1 + Ne² = ${(1+N*e*e).toFixed(2)}<br>
        4️⃣ Divide population by result: n = ${N} / ${(1+N*e*e).toFixed(2)} = ${n}`;
}

// Raosoft Calculator
function calculateRaosoft() {
    let N = parseFloat(document.getElementById("rPop").value);
    let e = parseFloat(document.getElementById("rError").value);
    let Z = parseFloat(document.getElementById("confidence").value);

    if (!N || !e) { alert("Please enter all values."); return; }

    let n0 = (Math.pow(Z,2) * 0.25) / Math.pow(e,2);
    let n = n0 / (1 + ((n0 - 1)/N));
    n = Math.round(n);

    document.getElementById("raosoftResult").innerHTML =
        `<strong>✅ Estimated Sample Size: ${n}</strong><br>
        This imitates Raosoft by considering confidence level and margin of error.`;
 }
}
function openTab(tabId) {
    // 1. Find all pages and all buttons
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    const footer = document.getElementById("footer");

    // 2. Hide every single page first
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // 3. Make all buttons look "normal" (not black/active)
    buttons.forEach(btn => btn.classList.remove('active'));

    // 4. Show ONLY the page we clicked
    document.getElementById(tabId).classList.add('active');
    
    // 5. Highlight the button we just clicked
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 6. Show the footer ONLY on the About or Dummies pages
    if (footer) {
        if (tabId === 'about' || tabId === 'dummies') {
            footer.classList.add("visible-footer");
        } else {
            footer.classList.remove("visible-footer");
        }
    }
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
    const footer = document.getElementById("footer");

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    
    // Logic to add active class to button
    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabId));
    if(activeBtn) activeBtn.classList.add('active');

    // Show footer on About page
    if (tabId === 'about' || tabId === 'dummies') {
        footer.classList.add("visible-footer");
    } else {
        footer.classList.remove("visible-footer");
    }
}

let currentSlide = 0;
function changeSlide(direction) {
    const slides = document.querySelectorAll('.member-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    document.getElementById('slide-number').innerText = `${currentSlide + 1} / ${slides.length}`;
}

// Arrow Key Navigation
document.addEventListener('keydown', (e) => {
    if (document.getElementById('about').classList.contains('active')) {
        if (e.key === "ArrowLeft") changeSlide(-1);
        if (e.key === "ArrowRight") changeSlide(1);
    }
});

