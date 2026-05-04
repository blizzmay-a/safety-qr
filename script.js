function generateQR() {
    const name = document.getElementById('name').value.trim();
    const snsType = document.getElementById('sns-type').value.trim();
    const snsId = document.getElementById('sns-id').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const qrcodeContainer = document.getElementById('qrcode');

    // 1. 이름 필수 입력 확인
    if (!name) {
        alert("Please enter your Name.");
        return;
    }

    // 2. 이메일 형식 정밀 검증 (수정된 로직)
    if (email !== "") {
        // [문자]@ [문자]. [2글자 이상의 도메인] 형식을 검사합니다.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a complete Email Address (e.g., example@domain.com).");
            return;
        }
    }

    // 3. SNS 종류 입력 시 ID 필수 확인
    if (snsType && !snsId) {
        alert("Please enter your SNS ID.");
        return;
    }

    // 4. 최소 하나의 연락 수단 확인
    const hasSnsSet = snsType && snsId;
    const hasEmail = email !== "";
    const hasPhone = phone !== "";

    if (!hasSnsSet && !hasEmail && !hasPhone) {
        alert("Please provide at least one contact: SNS info, Email, or Phone number.");
        return;
    }

    // 5. QR 코드 생성 로직 (URL에만 데이터 저장)
    qrcodeContainer.innerHTML = "";
    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '') + "view.html";
    
    const params = new URLSearchParams({
        n: name,
        s: snsType,
        i: snsId,
        e: email,
        p: phone
    });

    new QRCode(qrcodeContainer, {
        text: `${baseUrl}?${params.toString()}`,
        width: 180,
        height: 180,
        colorDark : "#000000",
        colorLight : "#ffffff"
    });
}
