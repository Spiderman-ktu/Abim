// ====================================
// YAZI ANİMASYONU (Aynı Mantık)
// ====================================
const isimMetni = "ŞAHAN & SELİN";
const tarihMetni = "08.10.2025";
const isimElementi = document.getElementById('isimler');
const tarihElementi = document.getElementById('tarih');

isimElementi.textContent = isimMetni;
tarihElementi.textContent = tarihMetni;
// Yazı stilleri CSS'te tanımlandığı için buraya class eklemeye gerek yok
isimElementi.classList.add('animating-text');
tarihElementi.classList.add('animating-text');

function baslatYaziAnimasyonu() {
    setTimeout(() => {
        isimElementi.style.height = '70px'; 
        isimElementi.style.opacity = '1';
        isimElementi.style.visibility = 'visible';
    }, 2500); 

    setTimeout(() => {
        tarihElementi.style.height = '45px'; 
        tarihElementi.style.opacity = '1';
        tarihElementi.style.visibility = 'visible';
    }, 4000); 
}

// ====================================
// YAPRAK ANİMASYONU (SAF JS/CSS)
// ====================================

function createLeaf() {
    const container = document.getElementById('leaf-container');
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    
    // Rastgele boyut ve hız ayarları
    const size = Math.random() * 20 + 10; // 10px - 30px
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.left = `${Math.random() * 100}vw`; // Rastgele başlangıç pozisyonu

    // Rastgele düşme süresi ve rüzgar efekti
    const duration = Math.random() * 15 + 10; // 10s - 25s düşüş süresi
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.animationDelay = `-${Math.random() * 10}s`; // Negatif gecikme ile hemen başla

    // Rastgele yatay hareket (rüzgar hissi)
    leaf.style.setProperty('--x-start', `${Math.random() * 100}vw`);
    leaf.style.setProperty('--x-end', `${Math.random() * 100}vw`);
    
    container.appendChild(leaf);

    // Yaprak ekranı terk edince kaldır
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Belirli aralıklarla sürekli yaprak oluştur
let leafInterval;
function startLeafAnimation() {
    // 300ms'de bir yeni yaprak oluştur
    leafInterval = setInterval(createLeaf, 300); 
}


// ====================================
// BAŞLANGIÇ
// ====================================
window.onload = () => {
    startLeafAnimation(); 
    baslatYaziAnimasyonu();    
};