function generateQR() {
    // 1. 입력창에서 데이터 가져오기
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value;
    const email = document.getElementById('email').value;

    // 2. 카드 미리보기 텍스트 업데이트 (시각적 확인용)
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone;
    document.getElementById('p-sns-type').innerText = snsType;
    document.getElementById('p-sns-id').innerText = snsId;
    document.getElementById('p-email').innerText = email;
    
    // 3. [핵심] QR에 담을 뷰 페이지 URL 생성
    // 정민님의 실제 도메인 주소로 꼭 수정하세요! (예: https://minimalsquare.com/view.html)
    const baseUrl = "https://minimal-square.com/view.html"; 
    const queryParams = `?n=${encodeURIComponent(name)}&p=${encodeURIComponent(phone)}&s=${encodeURIComponent(snsType)}&i=${encodeURIComponent(snsId)}&e=${encodeURIComponent(email)}`;
    const finalUrl = baseUrl + queryParams;

    // 4. QR 코드 생성 (웹 주소를 담으므로 데이터가 짧아져 인식률이 매우 좋습니다)
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; 
    
    new QRCode(qrContainer, {
        text: finalUrl, 
        width: 75, 
        height: 75,
        colorDark: "#000000", 
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L // 점의 밀도를 낮춰 스캔 속도 최적화
    });

    // 결과 영역 표시
    document.getElementById('result-area').style.display = 'block';
}

// 5. 생성된 QR 이미지 저장 기능
document.getElementById('download-btn').addEventListener('click', function() {
    const qrCanvas = document.querySelector('#qrcode canvas');
    if (qrCanvas) {
        const link = document.createElement('a');
        link.download = 'minimal_square_qr.png';
        link.href = qrCanvas.toDataURL();
        link.click();
    }
});
