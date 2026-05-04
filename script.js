function generateQR() {
    // ... 데이터 가져오는 부분 동일 ...
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value;
    const email = document.getElementById('email').value;

    // 1. View 페이지 URL 생성 (도메인이 있다면 도메인을, 테스트용이라면 파일명을 넣으세요)
    // 쿼리 파라미터를 정민님의 view.js 키값(n, s, i, e, p)에 맞췄습니다.
    const baseUrl = "https://본인의도메인.com/view.html"; // 실제 배포될 URL로 수정 필요
    const queryParams = `?n=${encodeURIComponent(name)}&p=${encodeURIComponent(phone)}&s=${encodeURIComponent(snsType)}&i=${encodeURIComponent(snsId)}&e=${encodeURIComponent(email)}`;
    const finalUrl = baseUrl + queryParams;

    // ... 카드 텍스트 업데이트 부분 동일 ...

    // 2. QR 코드 생성 (이제 mailto가 아니라 URL을 넣습니다!)
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
