const sketchfabModels = {
    porsche_911:  "877b1bc1739f4a2bb65d62fd7ffd9f75",
    mercedes_amg: "1c41be4e17144202b085252e5776d054",
    nissan_gtr:   "9cfbe4727b7f4af0a11772687c4a1f59",
    subaru_wrx:   "36f4a47b619a49bda4c1870e7833b25b",
    audi_rs3:     "70acd9766306495ba6c45769b32b38d1",
    bmw_m3:       "a4ae8be4670a4ee48c4ba85fbabeb02d",
    civic_type_r: "720e9dac28214394b69874cc4641b6df",
    golf_gti:     "82a55610817646539ce699a6aaa5dda0"
};

const interiorModels = {
    porsche_911:  "photo-1758391439365-ee4abc04027a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736",
    mercedes_amg: "photo-1668959613482-31c74e9450fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    nissan_gtr:   "photo-1662657835702-7a687fd1ea54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    subaru_wrx:   "photo-1734299071795-076cf066d10a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    audi_rs3:     "photo-1674235435739-408156d4e290?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    bmw_m3:       "photo-1680102176140-6afab7b0ae1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    civic_type_r: "photo-1570303278462-d2574ec2d73b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    golf_gti:     "photo-1634317557455-4fa742931a7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473"
};

let config = JSON.parse(sessionStorage.getItem('tunerGarage_tempConfig'));

if (!config) {
    alert('No car selected! Redirecting to garage...');
    window.location.href = 'tuner_garage_main.html';
}

let customization = {
    carId: config.carId,
    carName: config.carName,
    carImage: config.carImage,
    stage: config.stage,
    stageName: config.stageName,
    baseHP: config.baseHP,
    baseWeight: config.baseWeight,
    totalHP: config.baseHP,
    totalWeight: config.baseWeight,
    targetSlot: config.targetSlot || 'A',
    bodykit: 'stock',
    spoiler: 'stock',
    wheels: 'stock',
    exhaust: 'stock',
    turbo: 'none',
    suspension: 'none',
    brakes: 'none',
    weightModifier: 0,
    hpModifier: 0
};

let view3DActive = false;
let viewInteriorActive = false;

function goBack() {
    window.location.href = 'tuner_garage_main.html';
}

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
    document.getElementById('carTitle').textContent = config.carName;
    document.getElementById('carStage').textContent = config.stageName;
    document.getElementById('carModel').src = config.carImage;
    
    selectSlot(customization.targetSlot);
    
    updateStats();
    setupEventListeners();
    wire3DButton();
    wireInteriorButton();

    showToast('🎨 Customizer loaded! Start modifying your car!');
}

function selectSlot(slot) {
    customization.targetSlot = slot;
    document.querySelectorAll('.slot-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.slot === slot) {
            btn.classList.add('selected');
        }
    });
    
    const existingCar = localStorage.getItem(`tunerGarage_slot${slot}`);
    if (existingCar) {
        showToast(`⚠️ Slot ${slot} already has a car. It will be overwritten!`);
    }
}

function setupEventListeners() {
    document.querySelectorAll('.slot-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            selectSlot(this.dataset.slot);
        });
    });

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const option = this.dataset.option;
            const value = this.dataset.value;
            const weight = parseFloat(this.dataset.weight) || 0;
            
            this.parentElement.querySelectorAll('.option-btn').forEach(b => {
                b.classList.remove('selected');
            });
            this.classList.add('selected');
            
            handleOptionChange(option, value, weight);
        });
    });
}

function handleOptionChange(option, value, weight) {
    const previousWeight = getWeightForOption(customization[option]);
    const previousHP = getHPForOption(customization[option]);
    
    customization.weightModifier -= previousWeight;
    customization.hpModifier -= previousHP;
    
    customization[option] = value;
    customization.weightModifier += weight;
    
    const btn = document.querySelector(`[data-option="${option}"][data-value="${value}"]`);
    const hp = btn ? parseFloat(btn.dataset.hp) || 0 : 0;
    customization.hpModifier += hp;
    
    updateStats();
    showToast(`✨ ${formatModName(option)} updated to ${formatModName(value)}!`);
}

function getWeightForOption(value) {
    const btn = document.querySelector(`[data-value="${value}"]`);
    return btn ? parseFloat(btn.dataset.weight) || 0 : 0;
}

function getHPForOption(value) {
    const btn = document.querySelector(`[data-value="${value}"]`);
    return btn ? parseFloat(btn.dataset.hp) || 0 : 0;
}

function updateStats() {
    customization.totalWeight = customization.baseWeight + customization.weightModifier;
    customization.totalHP = customization.baseHP + customization.hpModifier;
    
    const powerToWeight = Math.round((customization.totalHP / (customization.totalWeight / 1000)));
    const estimated0to100 = calculateAcceleration(customization.totalHP, customization.totalWeight);
    
    document.getElementById('statHP').textContent = customization.totalHP;
    document.getElementById('statWeight').textContent = customization.totalWeight + ' kg';
    document.getElementById('stat0to100').textContent = estimated0to100.toFixed(1) + 's';
    document.getElementById('powerToWeight').textContent = powerToWeight;
    
    document.getElementById('modBodykit').textContent = formatModName(customization.bodykit);
    document.getElementById('modSpoiler').textContent = formatModName(customization.spoiler);
    document.getElementById('modWheels').textContent = formatModName(customization.wheels);
    document.getElementById('modExhaust').textContent = formatModName(customization.exhaust);
}

function calculateAcceleration(hp, weight) {
    const powerToWeight = hp / (weight / 1000);
    const baseTime = 3.9;
    const basePTW = 295;
    return baseTime * (basePTW / powerToWeight);
}

function formatModName(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).replace(/([A-Z])/g, ' $1');
}

function wire3DButton() {
    const btn = document.getElementById('show3d-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
        const container = document.querySelector('.car-3d-container');
        const img = document.getElementById('carModel');
        const effects = document.getElementById('visualEffects');
        
        if (view3DActive) {
            const iframe = container.querySelector('iframe[data-sketchfab]');
            if (iframe) iframe.remove();
            
            if (img) img.style.display = 'block';
            if (effects) effects.style.display = 'block';
            
            btn.textContent = 'Vizualizare 3D';
            view3DActive = false;
            viewInteriorActive = false;
            document.getElementById('showInterior-btn').textContent = 'Vezi Interior';
            return;
        }

        const carId = customization.carId;
        const modelId = sketchfabModels[carId];

        if (!modelId) {
            showToast('⚠️ Modelul 3D nu este disponibil pentru această mașină.');
            return;
        }

        if (viewInteriorActive) {
            const oldIframe = container.querySelector('iframe[data-interior]');
            if (oldIframe) oldIframe.remove();
            viewInteriorActive = false;
            document.getElementById('showInterior-btn').textContent = 'Vezi Interior';
        }

        if (img) img.style.display = 'none';
        if (effects) effects.style.display = 'none';

        const iframe = document.createElement('iframe');
        iframe.setAttribute('data-sketchfab', 'true');
        iframe.title = 'Vizualizator 3D';
        iframe.src = `https://sketchfab.com/models/${modelId}/embed?autostart=1&ui_theme=dark`;
        iframe.setAttribute('allow', 'autoplay; fullscreen; xr-spatial-tracking');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute('mozallowfullscreen', 'true');
        iframe.setAttribute('webkitallowfullscreen', 'true');

        iframe.style.position = 'absolute';
        iframe.style.inset = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.style.borderRadius = '12px';
        iframe.style.transform = 'scale(1.05)';
        iframe.style.transformOrigin = 'center';
        iframe.style.objectFit = 'contain';

        container.appendChild(iframe);

        btn.textContent = 'Înapoi la Imagine';
        view3DActive = true;
    });
}

function wireInteriorButton() {
    const btn = document.getElementById('showInterior-btn');
    if (!btn) return;

    btn.addEventListener('click', function () {
        const container = document.querySelector('.car-3d-container');
        const img = document.getElementById('carModel');
        const effects = document.getElementById('visualEffects');
        
        if (viewInteriorActive) {
            const iframe = container.querySelector('iframe[data-interior]');
            if (iframe) iframe.remove();
            
            if (img) img.style.display = 'block';
            if (effects) effects.style.display = 'block';
            
            btn.textContent = 'Vezi Interior';
            viewInteriorActive = false;
            view3DActive = false;
            document.getElementById('show3d-btn').textContent = 'Vizualizare 3D';
            return;
        }


        const carId = customization.carId;
        const modelId = interiorModels[carId];

        if (!modelId) {
            showToast('⚠️ Interiorul nu este disponibil pentru această mașină.');
            return;
        }

        if (view3DActive) {
            const oldIframe = container.querySelector('iframe[data-sketchfab]');
            if (oldIframe) oldIframe.remove();
            view3DActive = false;
            document.getElementById('show3d-btn').textContent = 'Vizualizare 3D';
        }

        if (img) img.style.display = 'none';
        if (effects) effects.style.display = 'none';

        const iframe = document.createElement('iframe');
        iframe.setAttribute('data-interior', 'true');
        iframe.title = 'Interior View';
        iframe.src = `https://images.unsplash.com/${modelId}`;
        iframe.setAttribute('allow', 'autoplay; fullscreen; xr-spatial-tracking');
        iframe.setAttribute('allowfullscreen', '');

        iframe.style.position = 'absolute';
        iframe.style.inset = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        iframe.style.borderRadius = '12px';
        iframe.style.transform = 'scale(1.05)';
        iframe.style.transformOrigin = 'center';

        container.appendChild(iframe);

        btn.textContent = 'Înapoi la Imagine';
        viewInteriorActive = true;
    });
}

function saveConfiguration() {
    const slotKey = `tunerGarage_slot${customization.targetSlot}`;
    
    const existingCar = localStorage.getItem(slotKey);
    if (existingCar) {
        const parsed = JSON.parse(existingCar);
        console.log(`Overwriting ${parsed.carName} in Slot ${customization.targetSlot}`);
    }
    
    localStorage.setItem(slotKey, JSON.stringify(customization));
    showToast(`💾 Saved to Slot ${customization.targetSlot}! Redirecting...`);
    setTimeout(() => {
        window.location.href = 'tuner_garage_main.html';
    }, 1500);
}

init();
