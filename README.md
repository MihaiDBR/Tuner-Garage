# 🏎️ Tuner Garage - Documentație Completă

## 📋 Prezentare Generală

**Tuner Garage** este o aplicație web interactivă care permite utilizatorilor să:
- Selecteze și personalizeze mașini de performanță
- Să configureze diferite stage-uri de tuning
- Să customizeze aspectul și componentele
- Să concureze în curse drag între două mașini

---

## 📁 Structura Fișierelor

Aplicația este compusă din **4 pagini principale**, fiecare separată în 3 fișiere:

### 1️⃣ **Landing Page** - Pagina de Intrare
```
tuner_garage_landing.html    (2.6 KB)  - Structura paginii
tuner_garage_landing.css     (6.3 KB)  - Stiluri și animații
tuner_garage_landing.js      (364 B)   - Funcționalitate JavaScript
```

**Caracteristici:**
- Animații de fundal cu grid 3D
- Efecte de glow cu orbs plutitoare
- 3 carduri de features interactive
- Statistici animate
- Buton CTA cu efecte speciale

---

### 2️⃣ **Main Garage** - Selecția Mașinilor
```
tuner_garage_main.html       (3.3 KB)  - Structura paginii
tuner_garage_main.css        (28 KB)   - Stiluri complete
tuner_garage_main.js         (20 KB)   - Bază de date și logică
```

**Caracteristici:**
- Dropdown personalizat cu imagini pentru selecția mașinilor
- Bază de date cu specificații detaliate pentru fiecare mașină
- 4 stage-uri de tuning (Stock, Stage 1, Stage 2, Stage 3)
- Sistem de garage cu 2 sloturi (Slot A și Slot B)
- Preview live pentru fiecare configurație
- Validare pentru începerea cursei (necesită 2 mașini)

**Mașini Disponibile:**
1. BMW M3 Competition
2. VW Golf GTI Mk7.5
3. Honda Civic Type R
4. Audi RS3
5. Subaru WRX STI
6. Porsche 911 Turbo S
7. Mercedes-AMG C63 S
8. Nissan GT-R R35
9. Toyota Supra A90

---

### 3️⃣ **Customizer** - Personalizarea Mașinii
```
tuner_garage_customizer.html (9.7 KB)  - Structura paginii
tuner_garage_customizer.css  (18 KB)   - Stiluri și layout
tuner_garage_customizer.js   (13 KB)   - Calcule și logică
```

**Opțiuni de Customizare:**

| Categorie | Opțiuni | Impact |
|-----------|---------|--------|
| **Body Kit** | Stock, Sport Kit, Aggressive Kit, Wide Body | Weight (+0 to +15kg) |
| **Spoiler** | Stock, Lip, Ducktail, GT Wing | Weight (+0 to +12kg) |
| **Wheels** | Stock, 18", 19", 20" Forged | Weight (-20 to +15kg) |
| **Suspension** | Stock, Lowered, Coilovers, Air | Weight (+0 to +30kg) |
| **Exhaust** | Stock, Cat-Back, Turbo-Back, Race | HP (+0 to +25), Weight (-15 to +0kg) |

**Sistem de Calcul:**
- HP modificări în funcție de exhaust
- Weight total calculat dinamic
- Performance rating (0-100)
- Preview în timp real
- Salvare automată în localStorage

---

### 4️⃣ **Race** - Cursa Drag
```
tuner_garage_race.html       (8.6 KB)  - Structura paginii
tuner_garage_race.css        (15 KB)   - Animații și efecte
tuner_garage_race.js         (9.2 KB)  - Motor de cursă
```

**Caracteristici:**
- Simulare realistă de cursă drag 1/4 mile
- Animații smooth pentru ambele mașini
- Calcul bazat pe: HP, Weight, 0-100 time
- Display câștigător cu efecte de confetti
- Tabel comparativ detaliat
- Opțiune rematch
- Buton back to garage

**Formula de Cursă:**
```
Performance Score = (HP / Weight) × (1 / time0to100)
Speed = Performance Score × variație aleatorie (0.98-1.02)
```

---

## 🔗 Navigarea între Pagini

```
Landing Page (tuner_garage_landing.html)
    ↓ [ENTER GARAGE]
Main Garage (tuner_garage_main.html)
    ↓ [Continue to Customization]
Customizer (tuner_garage_customizer.html)
    ↓ [Save to Garage]
Main Garage (tuner_garage_main.html)
    ↓ [Start Drag Race] (necesită 2 mașini)
Race (tuner_garage_race.html)
    ↓ [Back to Garage]
Main Garage (tuner_garage_main.html)
```

---

## 💾 Sistem de Stocare

### localStorage:
```javascript
'tunerGarage_slotA'  // Configurația completă mașina Slot A
'tunerGarage_slotB'  // Configurația completă mașina Slot B
```

**Structura datelor salvate:**
```javascript
{
    carId: "bmw_m3",
    carName: "BMW M3 Competition",
    carImage: "url",
    stage: "stage2",
    stageName: "Stage 2",
    baseHP: 630,
    baseWeight: 1700,
    totalHP: 645,        // după customizare
    totalWeight: 1698,   // după customizare
    performanceRating: 87,
    customization: {
        bodykit: "sport",
        spoiler: "ducktail",
        wheels: "19inch",
        suspension: "coilovers",
        exhaust: "catback"
    }
}
```

### sessionStorage:
```javascript
'tunerGarage_tempConfig'  // Configurație temporară pentru customizer
```

---

## 🎨 Design System

### Culori Principale:
```css
--bg-primary: #0f0f0f        /* Fundal principal negru */
--bg-secondary: #1a1a1a      /* Fundal secundar */
--bg-tertiary: #252525       /* Fundal terțiar */
--text-primary: #ffffff      /* Text principal alb */
--text-secondary: #999999    /* Text secundar gri */
--accent: #3b82f6            /* Albastru accent */
--accent-hover: #2563eb      /* Albastru hover */
--accent-glow: rgba(59, 130, 246, 0.5)
--border: #2a2a2a            /* Culoare borduri */
--success: #10b981           /* Verde pentru success */
```

### Tipografie:
- **Font:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 900

### Efecte Vizuale:
- Backdrop blur effects
- Gradient animations
- Glow shadows
- Smooth transitions
- 3D transforms
- Particle effects

---

## 📱 Responsive Design

### Breakpoints:
- **Desktop:** 1920px+ (optimal)
- **Laptop:** 1366px - 1920px
- **Tablet:** 768px - 1366px
- **Mobile:** max 768px

### Adaptări Mobile:
- Grid layouts → Single column
- Font sizes reduse
- Touch-optimized buttons
- Simplified animations

---

## 🚀 Instalare și Utilizare

### Cerințe:
- ✅ Browser modern (Chrome, Firefox, Safari, Edge)
- ✅ JavaScript activat
- ✅ localStorage disponibil
- ✅ Conexiune internet (pentru Google Fonts și imagini)

### Pași de Instalare:

1. **Descarcă toate fișierele** în același director:
```
project/
├── tuner_garage_landing.html
├── tuner_garage_landing.css
├── tuner_garage_landing.js
├── tuner_garage_main.html
├── tuner_garage_main.css
├── tuner_garage_main.js
├── tuner_garage_customizer.html
├── tuner_garage_customizer.css
├── tuner_garage_customizer.js
├── tuner_garage_race.html
├── tuner_garage_race.css
└── tuner_garage_race.js
```

2. **Deschide** `tuner_garage_landing.html` în browser

3. **Enjoy!** 🏁

---

## ⚙️ Tehnologii Utilizate

- **HTML5** - Structură semantică
- **CSS3** - 
  - Flexbox & Grid Layout
  - Animations & Transitions
  - Custom Properties (CSS Variables)
  - Backdrop Filter
  - 3D Transforms
- **Vanilla JavaScript** - Fără framework-uri
  - ES6+ features
  - localStorage/sessionStorage API
  - DOM Manipulation
  - Event Handling
  - Object-Oriented Programming

---

## 🎯 Features Principale

### ✨ Landing Page:
- [x] Animație grid 3D background
- [x] Floating orbs cu blur
- [x] Feature cards interactive
- [x] Shimmer effect pe titlu
- [x] Pulse animation pe CTA button
- [x] Stats counter animat

### 🚗 Main Garage:
- [x] Dropdown personalizat cu imagini
- [x] 9 mașini cu specificații complete
- [x] 4 stage-uri de tuning
- [x] Preview în timp real
- [x] 2 sloturi de garage
- [x] Validare pentru race

### 🎨 Customizer:
- [x] 5 categorii de customizare
- [x] 20+ opțiuni totale
- [x] Calcul HP și Weight live
- [x] Performance rating
- [x] Sidebar interactiv
- [x] Salvare automată

### 🏁 Race:
- [x] Simulare realistă de cursă
- [x] Animații smooth
- [x] Calcul bazat pe specs reale
- [x] Confetti pentru câștigător
- [x] Tabel comparativ
- [x] Rematch option

---

## 📊 Statistici

- **Total Fișiere:** 12
- **Total Linii de Cod:** ~5,000+
- **Total Size:** ~140 KB
- **Mașini Disponibile:** 9
- **Stage-uri per Mașină:** 4
- **Opțiuni Customizare:** 20+
- **Combinații Posibile:** 15,000+

---

## 🔧 Suport și Compatibilitate

### Browser Support:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Device Support:
- ✅ Desktop Windows/Mac/Linux
- ✅ Laptop
- ✅ Tablet (iPad, Android)
- ✅ Mobile (iOS, Android)

---

## 📝 Note Importante

⚠️ **Atenție:**
1. Toate fișierele trebuie să fie în **același director**
2. Nu modifica numele fișierelor
3. Nu șterge link-urile din HTML
4. Asigură-te că browser-ul permite localStorage

💡 **Tips:**
- Folosește butoanele back to garage pentru a reveni
- Salvează configurațiile în ambele sloturi pentru race
- Experimentează cu diferite combinații
- Performance rating-ul influențează cursa

---

## 🎮 Flow Complet de Utilizare

1. **Start** → Landing Page
2. **Select Car** → Main Garage (alege mașină și stage)
3. **Customize** → Customizer (personalizează)
4. **Save** → Back to Main Garage (configurația în Slot A)
5. **Repeat** → Selectează a 2-a mașină (configurația în Slot B)
6. **Race** → Start Drag Race
7. **Rematch** sau **Back to Garage**

---

## 📞 Support

Pentru probleme sau întrebări:
- Verifică că toate fișierele sunt în același folder
- Verifică consola browser-ului pentru erori
- Asigură-te că JavaScript este activat
- Curăță cache-ul și reîncarcă pagina

---

**Tuner Garage v1.0**
*Build. Customize. Race. Dominate.* 🏎️💨

---

Creat cu ❤️ pentru pasionații de mașini și tuning
#
