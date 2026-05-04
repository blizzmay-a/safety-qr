function generateQR() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value;
    const email = document.getElementById('email').value;

    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone;
    document.getElementById('p-sns-type').innerText = snsType;
    document.getElementById('p-sns-id').innerText = snsId;
    
    // [핵심] 실제 GitHub Pages 배포 주소 반영
    const baseUrl = "https://minimalsquare.github.io/safety-qr/view.html"; 
    const queryParams = `?n=${encodeURIComponent(name)}&p=${encodeURIComponent(phone)}&s=${encodeURIComponent(snsType)}&i=${encodeURIComponent(snsId)}&e=${encodeURIComponent(email)}`;
    const finalUrl = baseUrl + queryParams;

    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; 
    
    new QRCode(qrContainer, {
        text: finalUrl, 
        width: 75, 
        height: 75,
        colorDark: "#000000", 
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L // 인식률 최적화
    });

    document.getElementById('result-area').style.display = 'block';
}

document.getElementById('download-btn').addEventListener('click', function() {
    const qrCanvas = document.querySelector('#qrcode canvas');
    if (qrCanvas) {
        const link = document.createElement('a');
        link.download = 'minimal_square_qr.png';
        link.href = qrCanvas.toDataURL();
        link.click();
    }
});
