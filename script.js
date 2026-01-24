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