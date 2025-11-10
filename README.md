# 🏎️ **Tuner Garage**

> *Build. Customise. Race. Dominate.* 💨  
> Aplicație web interactivă pentru pasionații de mașini și tuning — selectează, modifică și concurează în curse drag 1/4 mile!

---

## 📋 **Prezentare Generală**

**Tuner Garage** este o aplicație web interactivă care permite utilizatorilor să:

- Selecteze și personalizeze mașini de performanță  
- Configureze diferite stage-uri de tuning  
- Customiseze aspectul și componentele  
- Concurze în curse drag între două mașini  

---

## 🧱 **Structura Proiectului**

Aplicația este alcătuită din **4 pagini principale**, fiecare împărțită în fișiere HTML, CSS și JS:

### 1️⃣ **Landing Page** — Pagina de Intrare


**Caracteristici:**
- Animații de fundal 3D grid  
- Efecte glow cu orbs plutitoare  
- Carduri interactive cu efecte hover  
- Statistici animate  
- Buton CTA cu efecte speciale  

---

### 2️⃣ **Main Garage** — Selecția Mașinilor


**Caracteristici:**
- Dropdown personalizat cu imagini  
- Bază de date cu specificații detaliate  
- 4 stage-uri de tuning: *Stock, Stage 1, Stage 2, Stage 3*  
- 2 sloturi de garaj (Slot A & Slot B)  
- Preview live pentru fiecare configurație  
- Validare pentru startul cursei  

**Mașini Disponibile:**  
BMW M3 Competition • VW Golf GTI Mk7.5 • Honda Civic Type R • Audi RS3 • Subaru WRX STI • Porsche 911 Turbo S • Mercedes-AMG C63 S • Nissan GT-R R35 • Toyota Supra A90

---

### 3️⃣ **Customizer** — Personalizarea Mașinii


**Opțiuni de Customizare:**

| Categorie | Opțiuni | Impact |
|------------|----------|--------|
| **Body Kit** | Stock, Sport, Aggressive, Wide Body | Weight (+0 → +15 kg) |
| **Spoiler** | Stock, Lip, Ducktail, GT Wing | Weight (+0 → +12 kg) |
| **Wheels** | Stock, 18", 19", 20" Forged | Weight (-20 → +15 kg) |
| **Suspension** | Stock, Lowered, Coilovers, Air | Weight (+0 → +30 kg) |
| **Exhaust** | Stock, Cat-Back, Turbo-Back, Race | +HP (+0 → +25), Weight (-15 → +0 kg) |

**Sistem de Calcul:**
- Calcule HP și greutate dinamice  
- Performance rating (0–100)  
- Preview live  
- Salvare automată în `localStorage`  

---

### 4️⃣ **Race** — Cursa Drag


**Caracteristici:**
- Simulare realistă de cursă drag 1/4 mile  
- Animații fluide pentru ambele mașini  
- Calcul bazat pe: HP, Weight, 0–100 km/h  
- Ecran câștigător cu confetti 🎉  
- Tabel comparativ & opțiune *Rematch*  

**Formula de Cursă:**

```js
PerformanceScore = (HP / Weight) × (1 / time0to100)
Speed = PerformanceScore × random(0.98–1.02)
graph TD;
A[Landing Page] --> B[Main Garage];
B --> C[Customizer];
C --> B;
B --> D[Race];
D --> B;

'tunerGarage_slotA' // Config mașină Slot A
'tunerGarage_slotB' // Config mașină Slot B

'tunerGarage_tempConfig' // Config temporară pentru customizer

--bg-primary: #0f0f0f;
--accent: #3b82f6;
--success: #10b981;


