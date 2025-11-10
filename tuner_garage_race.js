function goBack() {
    window.location.href = 'tuner_garage_main.html';
}

let carA = JSON.parse(localStorage.getItem('tunerGarage_slotA'));
let carB = JSON.parse(localStorage.getItem('tunerGarage_slotB'));

if (!carA || !carB) {
    alert('Both slots must be filled! Redirecting to garage...');
    window.location.href = 'tuner_garage_main.html';
}

let raceActive = false;
let raceFinished = false;
let startTime = 0;
let animationFrameId = null;

let carAPosition = 20;
let carBPosition = 20;
let carAFinishTime = 0;
let carBFinishTime = 0;
let carAReaction = 0;
let carBReaction = 0;

let trackLength = 0;

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function init() {
    displayCarInfo();
    calculateTrackLength();
    showToast('🏁 Cars loaded! Ready to race!');
}

function displayCarInfo() {
    document.getElementById('carNameA').textContent = carA.carName;
    document.getElementById('carStageA').textContent = carA.stageName;
    document.getElementById('hpA').textContent = carA.totalHP;
    document.getElementById('weightA').textContent = carA.totalWeight + ' kg';
    
    const ptwA = Math.round(carA.totalHP / (carA.totalWeight / 1000));
    document.getElementById('ptwA').textContent = ptwA + ' HP/ton';
    
    const time0to100A = calculateAcceleration(carA.totalHP, carA.totalWeight);
    document.getElementById('time0to100A').textContent = time0to100A.toFixed(1) + 's';

    document.getElementById('carNameB').textContent = carB.carName;
    document.getElementById('carStageB').textContent = carB.stageName;
    document.getElementById('hpB').textContent = carB.totalHP;
    document.getElementById('weightB').textContent = carB.totalWeight + ' kg';
    
    const ptwB = Math.round(carB.totalHP / (carB.totalWeight / 1000));
    document.getElementById('ptwB').textContent = ptwB + ' HP/ton';
    
    const time0to100B = calculateAcceleration(carB.totalHP, carB.totalWeight);
    document.getElementById('time0to100B').textContent = time0to100B.toFixed(1) + 's';
}

function calculateAcceleration(hp, weight) {
    const powerToWeight = hp / (weight / 1000);
    const baseTime = 3.9;
    const basePTW = 295;
    return baseTime * (basePTW / powerToWeight);
}

function calculateTrackLength() {
    const lane = document.querySelector('.lane');
    trackLength = lane.offsetWidth - 100;
}

async function startRace() {
    if (raceActive) return;

    showToast('🚦 Starting countdown...');
    document.getElementById('btnStart').disabled = true;
    document.getElementById('cardA').classList.remove('winner');
    document.getElementById('cardB').classList.remove('winner');
    document.getElementById('progressContainer').style.display = 'block';

    carAPosition = 20;
    carBPosition = 20;
    document.getElementById('racerA').style.left = '20px';
    document.getElementById('racerB').style.left = '20px';
    document.getElementById('progressBarA').style.width = '0%';
    document.getElementById('progressBarB').style.width = '0%';

    await lightSequence();

    carAReaction = (Math.random() - 0.5) * 1;
    carBReaction = (Math.random() - 0.5) * 1;

    raceActive = true;
    startTime = performance.now();
    
    showToast('🏎️ GO GO GO!');
    document.getElementById('timerDisplay').textContent = 'Racing...';
    
    animationFrameId = requestAnimationFrame(updateRace);
}

async function lightSequence() {
    const lights = ['light1', 'light2', 'light3', 'light4', 'light5'];
    
    lights.forEach(id => {
        document.getElementById(id).classList.remove('active-red', 'active-green');
    });

    for (let i = 0; i < 4; i++) {
        document.getElementById(lights[i]).classList.add('active-red');
        await sleep(500);
    }

    document.getElementById(lights[4]).classList.add('active-green');
    await sleep(100);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateRace() {
    if (!raceActive) return;

    const currentTime = (performance.now() - startTime) / 1000;

    const etA = calculateQuarterMileTime(carA.totalHP, carA.totalWeight, carAReaction);
    const etB = calculateQuarterMileTime(carB.totalHP, carB.totalWeight, carBReaction);

    const progressA = Math.min((currentTime + carAReaction) / etA, 1);
    const progressB = Math.min((currentTime + carBReaction) / etB, 1);

    carAPosition = 20 + (trackLength * progressA);
    carBPosition = 20 + (trackLength * progressB);

    document.getElementById('racerA').style.left = carAPosition + 'px';
    document.getElementById('racerB').style.left = carBPosition + 'px';

    const percentA = Math.round(progressA * 100);
    const percentB = Math.round(progressB * 100);
    document.getElementById('progressBarA').style.width = percentA + '%';
    document.getElementById('progressBarB').style.width = percentB + '%';
    document.getElementById('progressPercentA').textContent = percentA + '%';
    document.getElementById('progressPercentB').textContent = percentB + '%';

    if (progressA >= 1 && progressB >= 1) {
        carAFinishTime = etA;
        carBFinishTime = etB;
        finishRace();
        return;
    }

    animationFrameId = requestAnimationFrame(updateRace);
}

function calculateQuarterMileTime(hp, weight, reaction) {
    const powerToWeight = hp / (weight / 1000);
    const baseET = 5.825 / Math.pow(powerToWeight / 100, 0.3);
    return baseET - reaction;
}

function finishRace() {
    raceActive = false;
    raceFinished = true;
    cancelAnimationFrame(animationFrameId);

    const winner = carAFinishTime < carBFinishTime ? 'A' : 'B';
    const winnerName = winner === 'A' ? carA.carName : carB.carName;
    
    document.getElementById(`card${winner}`).classList.add('winner');

    const speedA = calculateFinishSpeed(carA.totalHP, carA.totalWeight);
    const speedB = calculateFinishSpeed(carB.totalHP, carB.totalWeight);

    showToast(`🏆 ${winnerName} WINS!`);

    document.getElementById('winnerText').textContent = `🏆 ${winnerName} WINS! 🏆`;
    
    document.getElementById('resultNameA').textContent = carA.carName;
    document.getElementById('resultTimeA').textContent = carAFinishTime.toFixed(3) + 's';
    document.getElementById('resultReactionA').textContent = carAReaction.toFixed(3) + 's';
    document.getElementById('resultSpeedA').textContent = Math.round(speedA) + ' km/h';

    document.getElementById('resultNameB').textContent = carB.carName;
    document.getElementById('resultTimeB').textContent = carBFinishTime.toFixed(3) + 's';
    document.getElementById('resultReactionB').textContent = carBReaction.toFixed(3) + 's';
    document.getElementById('resultSpeedB').textContent = Math.round(speedB) + ' km/h';

    // Afișează modal-ul cu rezultate
    setTimeout(() => {
        document.getElementById('resultsOverlay').classList.add('show');
    }, 1000);

    document.getElementById('timerDisplay').textContent = 'Race finished!';
    document.getElementById('btnReset').style.display = 'inline-block';
}

function calculateFinishSpeed(hp, weight) {
    const powerToWeight = hp / (weight / 1000);
    return 140 + (powerToWeight - 200) * 0.3;
}

function closeResults(event) {
    // Închide doar dacă se dă click pe overlay, nu pe modal
    if (event && event.target !== event.currentTarget && !event.target.classList.contains('results-close')) {
        return;
    }
    document.getElementById('resultsOverlay').classList.remove('show');
}

function resetRace() {
    raceFinished = false;
    
    ['light1', 'light2', 'light3', 'light4', 'light5'].forEach(id => {
        document.getElementById(id).classList.remove('active-red', 'active-green');
    });

    carAPosition = 20;
    carBPosition = 20;
    document.getElementById('racerA').style.left = '20px';
    document.getElementById('racerB').style.left = '20px';
    document.getElementById('progressBarA').style.width = '0%';
    document.getElementById('progressBarB').style.width = '0%';
    document.getElementById('progressPercentA').textContent = '0%';
    document.getElementById('progressPercentB').textContent = '0%';

    document.getElementById('resultsOverlay').classList.remove('show');
    document.getElementById('cardA').classList.remove('winner');
    document.getElementById('cardB').classList.remove('winner');
    document.getElementById('btnStart').disabled = false;
    document.getElementById('btnReset').style.display = 'none';
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('timerDisplay').textContent = 'Ready to race';
    
    showToast('🔄 Race reset! Ready for another run!');
}

function clearGarage() {
    if (confirm('Are you sure you want to clear both garage slots? This will delete all saved configurations.')) {
        localStorage.removeItem('tunerGarage_slotA');
        localStorage.removeItem('tunerGarage_slotB');
        showToast('🗑️ Garage cleared successfully!');
        setTimeout(() => {
            window.location.href = 'tuner_garage_main.html';
        }, 1500);
    }
}

window.addEventListener('resize', calculateTrackLength);
init();
