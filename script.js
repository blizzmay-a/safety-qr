function generateQR() {
    // 입력값 가져오기
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value;
    const email = document.getElementById('email').value;

    // 카드 미리보기 텍스트 업데이트
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone;
    document.getElementById('p-sns-type').innerText = snsType;
    document.getElementById('p-sns-id').innerText = snsId;
    document.getElementById('p-email').innerText = email;

    // 1. View 페이지 URL 생성 (배포 후 실제 도메인 주소로 수정 필수)
    const baseUrl = "https://minimal-square.com/view.html"; 
    const queryParams = `?n=${encodeURIComponent(name)}&p=${encodeURIComponent(phone)}&s=${encodeURIComponent(snsType)}&i=${encodeURIComponent(snsId)}&e=${encodeURIComponent(email)}`;
    const finalUrl = baseUrl + queryParams;

    // 2. QR 코드 생성 (웹페이지 URL을 담음)
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; 
    new QRCode(qrContainer, {
        text: finalUrl,
        width: 75, height: 75,
        colorDark: "#000000", colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L
    });

    document.getElementById('result-area').style.display = 'block';
}

// 이미지 저장 기능
document.getElementById('download-btn').addEventListener('click', function() {
    const qrCanvas = document.querySelector('#qrcode canvas');
    if (qrCanvas) {
        const link = document.createElement('a');
        link.download = 'minimal_square_qr.png';
        link.href = qrCanvas.toDataURL();
        link.click();
    }
});
