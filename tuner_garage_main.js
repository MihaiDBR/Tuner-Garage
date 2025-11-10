// Car Database
const carDatabase = {
    bmw_m3: {
        name: "BMW M3 Competition",
        image: "https://wallpapercave.com/wp/wp12041394.jpg",
        basePrice: 75000,
        baseHP: 510,
        baseWeight: 1730,
        time0to100: 3.9,
        stages: {
            stock: {
                name: "Stock",
                hp: 510,
                weight: 1730,
                cost: 0,
                time0to100: 3.9,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 560,
                weight: 1720,
                cost: 3000,
                time0to100: 3.6,
                mods: ["ECU Remap", "Cold Air Intake", "Performance Filter", "Upgraded Intercooler"]
            },
            stage2: {
                name: "Stage 2",
                hp: 630,
                weight: 1700,
                cost: 8000,
                time0to100: 3.3,
                mods: ["Turbo Upgrade", "Downpipe", "Cat-Back Exhaust", "FMIC", "Fuel Pump"]
            },
            stage3: {
                name: "Stage 3",
                hp: 720,
                weight: 1680,
                cost: 15000,
                time0to100: 2.9,
                mods: ["Hybrid Turbo", "Forged Internals", "Methanol Injection", "Custom ECU", "Clutch Upgrade", "LSD"]
            }
        }
    },
    golf_gti: {
        name: "VW Golf GTI Mk7.5",
        image: "https://uploads.vw-mms.de/system/production/images/vwn/027/143/images/8dec5a8722e672c1304e18a0b25d47d51e09c264/DB2019AU00072_web_1600.jpg?1649154399",
        basePrice: 35000,
        baseHP: 245,
        baseWeight: 1470,
        time0to100: 6.2,
        stages: {
            stock: {
                name: "Stock",
                hp: 245,
                weight: 1470,
                cost: 0,
                time0to100: 6.2,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 290,
                weight: 1460,
                cost: 2500,
                time0to100: 5.6,
                mods: ["ECU Tune", "Cold Air Intake", "Performance Filter", "Boost Controller"]
            },
            stage2: {
                name: "Stage 2",
                hp: 350,
                weight: 1450,
                cost: 6500,
                time0to100: 4.9,
                mods: ["IS20 Turbo", "Downpipe", "Cat-Back Exhaust", "FMIC", "Uprated Fuel Pump"]
            },
            stage3: {
                name: "Stage 3",
                hp: 420,
                weight: 1440,
                cost: 12000,
                time0to100: 4.2,
                mods: ["IS38 Turbo", "Forged Pistons", "Rods", "Clutch", "LSD", "Coilovers"]
            }
        }
    },
    civic_type_r: {
        name: "Honda Civic Type R",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
        basePrice: 45000,
        baseHP: 320,
        baseWeight: 1380,
        time0to100: 5.7,
        stages: {
            stock: {
                name: "Stock",
                hp: 320,
                weight: 1380,
                cost: 0,
                time0to100: 5.7,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 360,
                weight: 1370,
                cost: 2800,
                time0to100: 5.2,
                mods: ["Ktuner Flash", "Cold Air Intake", "Catback Exhaust", "Boost Controller"]
            },
            stage2: {
                name: "Stage 2",
                hp: 410,
                weight: 1360,
                cost: 7000,
                time0to100: 4.6,
                mods: ["Bigger Turbo", "Downpipe", "FMIC", "Fuel System", "Clutch"]
            },
            stage3: {
                name: "Stage 3",
                hp: 500,
                weight: 1350,
                cost: 13500,
                time0to100: 3.8,
                mods: ["Garrett Turbo", "Forged Engine", "Injectors", "Standalone ECU", "Sequential Gearbox"]
            }
        }
    },
    audi_rs3: {
        name: "Audi RS3",
        image: "https://images.unsplash.com/photo-1672400853441-5e00e8ce3a7b?w=800&q=80",
        basePrice: 65000,
        baseHP: 400,
        baseWeight: 1520,
        time0to100: 3.8,
        stages: {
            stock: {
                name: "Stock",
                hp: 400,
                weight: 1520,
                cost: 0,
                time0to100: 3.8,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 480,
                weight: 1510,
                cost: 3200,
                time0to100: 3.4,
                mods: ["ECU Tune", "Cold Air Intake", "Downpipe", "Performance Filter"]
            },
            stage2: {
                name: "Stage 2",
                hp: 550,
                weight: 1500,
                cost: 8500,
                time0to100: 3.0,
                mods: ["Hybrid Turbo", "FMIC", "Catback Exhaust", "Fuel Pump", "DSG Tune"]
            },
            stage3: {
                name: "Stage 3",
                hp: 650,
                weight: 1490,
                cost: 16000,
                time0to100: 2.6,
                mods: ["Pure Turbo 700", "Forged Block", "Meth Injection", "Custom Map", "Launch Control"]
            }
        }
    },
    subaru_wrx: {
        name: "Subaru WRX STI",
        image: "https://images.unsplash.com/photo-1718906083950-0b28722c3f20?w=800&q=80",
        basePrice: 40000,
        baseHP: 310,
        baseWeight: 1520,
        time0to100: 5.2,
        stages: {
            stock: {
                name: "Stock",
                hp: 310,
                weight: 1520,
                cost: 0,
                time0to100: 5.2,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 350,
                weight: 1510,
                cost: 2600,
                time0to100: 4.8,
                mods: ["Cobb Accessport", "Intake", "Catback", "Boost Controller"]
            },
            stage2: {
                name: "Stage 2",
                hp: 400,
                weight: 1500,
                cost: 7500,
                time0to100: 4.3,
                mods: ["VF52 Turbo", "Downpipe", "TMIC", "Fuel Pump", "Injectors"]
            },
            stage3: {
                name: "Stage 3",
                hp: 500,
                weight: 1480,
                cost: 14000,
                time0to100: 3.5,
                mods: ["Rotated Turbo Kit", "Forged Pistons", "Rods", "FMIC", "E85 Conversion", "6-Speed Upgrade"]
            }
        }
    },
    porsche_911: {
        name: "Porsche 911 Turbo S",
        image: "https://images.unsplash.com/photo-1601278840447-9af5ac4ed157?w=800&q=80",
        basePrice: 210000,
        baseHP: 650,
        baseWeight: 1640,
        time0to100: 2.7,
        stages: {
            stock: {
                name: "Stock",
                hp: 650,
                weight: 1640,
                cost: 0,
                time0to100: 2.7,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 720,
                weight: 1630,
                cost: 5000,
                time0to100: 2.5,
                mods: ["ECU Flash", "Sport Exhaust", "Performance Filter", "Overboost"]
            },
            stage2: {
                name: "Stage 2",
                hp: 800,
                weight: 1620,
                cost: 12000,
                time0to100: 2.3,
                mods: ["Turbo Upgrade", "Downpipes", "FMIC", "Fuel System", "PDK Tune"]
            },
            stage3: {
                name: "Stage 3",
                hp: 950,
                weight: 1600,
                cost: 25000,
                time0to100: 2.0,
                mods: ["GT3 Turbos", "Forged Engine", "Methanol", "Carbon Ceramics", "Aero Package", "Titanium Exhaust"]
            }
        }
    },
    mercedes_amg: {
        name: "Mercedes-AMG C63 S",
        image: "https://images.unsplash.com/photo-1616875491585-8e2464195d5f?w=800&q=80",
        basePrice: 85000,
        baseHP: 510,
        baseWeight: 1765,
        time0to100: 3.9,
        stages: {
            stock: {
                name: "Stock",
                hp: 510,
                weight: 1765,
                cost: 0,
                time0to100: 3.9,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 580,
                weight: 1755,
                cost: 3500,
                time0to100: 3.6,
                mods: ["ECU Tune", "Performance Air Filter", "Downpipes", "Cold Air Intake"]
            },
            stage2: {
                name: "Stage 2",
                hp: 650,
                weight: 1740,
                cost: 9000,
                time0to100: 3.2,
                mods: ["Turbo Upgrade", "FMIC", "Fuel System", "Exhaust System", "TCU Tune"]
            },
            stage3: {
                name: "Stage 3",
                hp: 750,
                weight: 1720,
                cost: 18000,
                time0to100: 2.8,
                mods: ["Hybrid Turbos", "Forged Internals", "Meth Kit", "Custom ECU", "Carbon Fiber Parts", "LSD"]
            }
        }
    },
    nissan_gtr: {
        name: "Nissan GT-R R35",
        image: "https://images.unsplash.com/photo-1638997611276-b842eb529b20?w=800&q=80",
        basePrice: 115000,
        baseHP: 565,
        baseWeight: 1740,
        time0to100: 2.9,
        stages: {
            stock: {
                name: "Stock",
                hp: 565,
                weight: 1740,
                cost: 0,
                time0to100: 2.9,
                mods: ["Factory Setup", "Original ECU", "Stock Exhaust", "OEM Components"]
            },
            stage1: {
                name: "Stage 1",
                hp: 650,
                weight: 1730,
                cost: 4000,
                time0to100: 2.6,
                mods: ["Cobb Accessport", "Intake", "Downpipes", "Boost Controller"]
            },
            stage2: {
                name: "Stage 2",
                hp: 750,
                weight: 1720,
                cost: 10000,
                time0to100: 2.3,
                mods: ["Upgraded Turbos", "FMIC", "Fuel System", "Exhaust", "Trans Tune"]
            },
            stage3: {
                name: "Stage 3",
                hp: 1000,
                weight: 1700,
                cost: 25000,
                time0to100: 2.0,
                mods: ["GT800 Turbos", "Forged Block", "E85 Setup", "Sequential Trans", "Aero Kit", "Brakes Upgrade"]
            }
        }
    }
};

let selectedCar = null;
let selectedStage = null;
let currentSlot = 'A';

let slotA = JSON.parse(localStorage.getItem('tunerGarage_slotA')) || null;
let slotB = JSON.parse(localStorage.getItem('tunerGarage_slotB')) || null;

function init() {
    renderDropdownOptions();
    setupDropdownListeners();
    updateGarageSlots();
    checkRaceAvailability();
}

function renderDropdownOptions() {
    const container = document.getElementById('dropdownOptions');
    container.innerHTML = '';

    Object.keys(carDatabase).forEach(carId => {
        const car = carDatabase[carId];
        const option = document.createElement('div');
        option.className = 'dropdown-option';
        option.dataset.carid = carId;
        
        option.innerHTML = `
            <img src="${car.image}" alt="${car.name}" class="dropdown-option-image">
            <div class="dropdown-option-info">
                <div class="dropdown-option-name">${car.name}</div>
                <div class="dropdown-option-specs">${car.baseHP} HP • ${car.baseWeight} kg • ${car.time0to100}s 0-100</div>
            </div>
        `;
        
        option.addEventListener('click', () => selectCarFromDropdown(carId));
        container.appendChild(option);
    });
}

function setupDropdownListeners() {
    const selected = document.getElementById('dropdownSelected');
    const options = document.getElementById('dropdownOptions');
    const arrow = selected.querySelector('.dropdown-arrow');

    selected.addEventListener('click', (e) => {
        e.stopPropagation();
        options.classList.toggle('show');
        arrow.classList.toggle('rotated');
        selected.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!selected.contains(e.target) && !options.contains(e.target)) {
            options.classList.remove('show');
            arrow.classList.remove('rotated');
            selected.classList.remove('active');
        }
    });
}

function selectCarFromDropdown(carId) {
    selectedCar = carId;
    selectedStage = 'stock';
    
    const car = carDatabase[carId];
    
    const selectedText = document.querySelector('.dropdown-text');
    selectedText.textContent = car.name;
    
    const options = document.getElementById('dropdownOptions');
    const arrow = document.querySelector('.dropdown-arrow');
    const selected = document.getElementById('dropdownSelected');
    options.classList.remove('show');
    arrow.classList.remove('rotated');
    selected.classList.remove('active');
    
    const display = document.getElementById('selectedCarDisplay');
    display.classList.add('active');
    
    const heroCarImage = document.getElementById('heroCarImage');
    heroCarImage.src = car.image;
    heroCarImage.alt = car.name;
    heroCarImage.style.display = 'block';
    
    renderStageOptions();
    
    document.getElementById('modifyBtn').disabled = false;
}

function renderStageOptions() {
    const container = document.getElementById('stageSelector');
    const car = carDatabase[selectedCar];
    container.innerHTML = '';

    Object.keys(car.stages).forEach(stageId => {
        const stage = car.stages[stageId];
        const option = document.createElement('div');
        option.className = `stage-option ${stageId === selectedStage ? 'selected' : ''}`;
        
        const totalPrice = car.basePrice + stage.cost;
        
        option.innerHTML = `
            <div class="stage-header">
                <div class="stage-name">${stage.name}</div>
                <div class="stage-cost">${stage.cost === 0 ? car.basePrice.toLocaleString() : '+' + stage.cost.toLocaleString()}€</div>
            </div>
            <div class="stage-stats">
                <div class="spec-item">
                    <div class="spec-label">HP</div>
                    <div class="spec-value">${stage.hp}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">0-100</div>
                    <div class="spec-value">${stage.time0to100}s</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Weight</div>
                    <div class="spec-value">${stage.weight}kg</div>
                </div>
            </div>
            <div class="stage-mods">
                <ul>
                    ${stage.mods.map(mod => `<li>${mod}</li>`).join('')}
                </ul>
            </div>
        `;
        
        option.addEventListener('click', () => selectStage(stageId, option));
        container.appendChild(option);
    });
}

function selectStage(stageId, element) {
    selectedStage = stageId;
    document.querySelectorAll('.stage-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    
    // Update selection info badge
    const car = carDatabase[selectedCar];
    const stage = car.stages[stageId];
    
    document.getElementById('selectionValue').textContent = stage.name;
    document.getElementById('selectionHP').textContent = stage.hp;
    document.getElementById('selectionWeight').textContent = stage.weight;
    document.getElementById('selection0to100').textContent = stage.time0to100 + 's';
    
    const selectionInfo = document.getElementById('selectionInfo');
    selectionInfo.classList.add('show');
    
    // Auto-hide după 5 secunde
    setTimeout(() => {
        selectionInfo.classList.remove('show');
    }, 5000);
}

function updateGarageSlots() {
    const slotAContent = document.getElementById('slotAContent');
    const slotBContent = document.getElementById('slotBContent');
    
    if (slotA) {
        slotAContent.innerHTML = `
            <div class="slot-car-name">${slotA.carName}</div>
            <div class="slot-stage">${slotA.stageName}</div>
            <div class="slot-specs">
                <div class="spec-item">
                    <div class="spec-label">HP</div>
                    <div class="spec-value">${slotA.totalHP}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Weight</div>
                    <div class="spec-value">${slotA.totalWeight}kg</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">P/W</div>
                    <div class="spec-value">${Math.round(slotA.totalHP / (slotA.totalWeight / 1000))}</div>
                </div>
            </div>
        `;
        slotAContent.classList.remove('empty');
    } else {
        slotAContent.innerHTML = 'Empty slot';
        slotAContent.classList.add('empty');
    }
    
    if (slotB) {
        slotBContent.innerHTML = `
            <div class="slot-car-name">${slotB.carName}</div>
            <div class="slot-stage">${slotB.stageName}</div>
            <div class="slot-specs">
                <div class="spec-item">
                    <div class="spec-label">HP</div>
                    <div class="spec-value">${slotB.totalHP}</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">Weight</div>
                    <div class="spec-value">${slotB.totalWeight}kg</div>
                </div>
                <div class="spec-item">
                    <div class="spec-label">P/W</div>
                    <div class="spec-value">${Math.round(slotB.totalHP / (slotB.totalWeight / 1000))}</div>
                </div>
            </div>
        `;
        slotBContent.classList.remove('empty');
    } else {
        slotBContent.innerHTML = 'Empty slot';
        slotBContent.classList.add('empty');
    }
}

function checkRaceAvailability() {
    const raceBtn = document.getElementById('raceBtn');
    if (slotA && slotB) {
        raceBtn.disabled = false;
    } else {
        raceBtn.disabled = true;
    }
}

document.getElementById('modifyBtn').addEventListener('click', () => {
    if (!selectedCar || !selectedStage) return;
    
    if (!slotA) {
        currentSlot = 'A';
    } else if (!slotB) {
        currentSlot = 'B';
    } else {
        currentSlot = 'A';
    }
    
    const car = carDatabase[selectedCar];
    const stage = car.stages[selectedStage];
    
    const tempConfig = {
        carId: selectedCar,
        carName: car.name,
        carImage: car.image,
        stage: selectedStage,
        stageName: stage.name,
        baseHP: stage.hp,
        baseWeight: stage.weight,
        targetSlot: currentSlot
    };
    
    sessionStorage.setItem('tunerGarage_tempConfig', JSON.stringify(tempConfig));
    window.location.href = 'tuner_garage_customizer.html';
});

document.getElementById('raceBtn').addEventListener('click', () => {
    if (slotA && slotB) {
        window.location.href = 'tuner_garage_race.html';
    }
});

init();
