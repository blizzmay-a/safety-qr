function generateQR() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const snsType = document.getElementById('sns-type').value.trim(); // 직접 입력값
    const snsId = document.getElementById('sns-id').value.trim();
    const qrcodeContainer = document.getElementById('qrcode');
    const resultArea = document.getElementById('result-area');

    if (!name) { alert("Please enter your name."); return; }

    // 1. QR 생성 (기존 로직 보강)
    qrcodeContainer.innerHTML = "";
    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '') + "view.html";
    const params = new URLSearchParams({ n: name, p: phone, e: email, s: snsType, i: snsId });
    
    new QRCode(qrcodeContainer, {
        text: `${baseUrl}?${params.toString()}`,
        width: 85,
        height: 85,
        colorDark: "#000000",
        colorLight: "#ffffff"
    });

    // 2. 카드 미리보기 업데이트
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone;
    document.getElementById('p-email').innerText = email;
    document.getElementById('p-sns-type').innerText = snsType;
    document.getElementById('p-sns-id').innerText = snsId;

    // 3. ★ 결과 영역과 버튼 보이기
    resultArea.style.display = "block";

    // 4. 다운로드 버튼 연결
    setTimeout(() => {
        const img = qrcodeContainer.querySelector('img');
        if (img) {
            document.getElementById('download-btn').onclick = function() {
                const link = document.createElement('a');
                link.href = img.src;
                link.download = `QR_${name}.png`;
                link.click();
            };
        }
    }, 500);

    // 하단으로 스크롤
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
