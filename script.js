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
    
    // 메일 제목과 본문 설정
    const mailSubject = "Found your Passport Wallet!";
    // %0D%0A는 이메일 앱에서 인식하는 확실한 줄바꿈 코드입니다.
    const mailBody = `Hello,%0D%0A%0D%0AI found your Minimal Square passport wallet.%0D%0APlease let me know where I can return it to you or leave your contact number here.%0D%0A%0D%0AHave a wonderful day!`;
    
    // 최종 mailto 링크 생성
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;

    const emailElement = document.getElementById('p-email');
    // 링크가 확실히 걸리도록 <a> 태그 속성을 강화했습니다.
    emailElement.innerHTML = `<a href="${mailtoLink}" target="_top" style="text-decoration:none; color:inherit; cursor:pointer;">${email}</a>`;

    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; 
    
    new QRCode(qrContainer, {
        text: mailtoLink,
        width: 75,
        height: 75,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
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
