function generateQR() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value.trim();
    const qrcodeContainer = document.getElementById('qrcode');

    if (!name) {
        alert("Please enter your name.");
        return;
    }

    // 1. 이메일 형식 검증 (선택 입력이지만 입력 시 체크)
    if (email !== "") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    }

    // 2. QR 코드 생성
    qrcodeContainer.innerHTML = "";
    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '') + "view.html";
    const params = new URLSearchParams({ n: name, p: phone, e: email, s: snsType, i: snsId });
    
    new QRCode(qrcodeContainer, {
        text: `${baseUrl}?${params.toString()}`,
        width: 85,
        height: 85,
        colorDark : "#000000",
        colorLight : "#ffffff"
    });

    // 3. 카드 서식에 텍스트 채우기
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone;
    document.getElementById('p-email').innerText = email;
    document.getElementById('p-sns-type').innerText = snsType;
    document.getElementById('p-sns-id').innerText = snsId;

    // 4. 결과창 표시
    document.getElementById('result-area').style.display = "block";

    // 5. QR 다운로드 기능 연결
    setTimeout(() => {
        const img = qrcodeContainer.querySelector('img');
        if (img) {
            document.getElementById('download-btn').onclick = function() {
                const link = document.createElement('a');
                link.href = img.src;
                link.download = `MinimalSquare_QR_${name}.png`;
                link.click();
            };
        }
    }, 500);
}
