function generateQR() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const snsType = document.getElementById('sns-type').value;
    const snsId = document.getElementById('sns-id').value;
    const email = document.getElementById('email').value;

    // 카드에 텍스트 업데이트
    document.getElementById('p-name').innerText = name;
    document.getElementById('p-phone').innerText = phone;
    document.getElementById('p-sns-type').innerText = snsType;
    document.getElementById('p-sns-id').innerText = snsId;
    
    // 메일 클릭 시 자동으로 채워질 내용 (상냥한 버전)
    const mailSubject = encodeURIComponent("Found your Passport Wallet!");
    const mailBody = encodeURIComponent(
        `Hello,\n\nI found your Minimal Square passport wallet. \nPlease let me know where I can return it to you or leave your contact number here.\n\nHave a wonderful day!`
    );
    
    // 메일 주소에 링크와 본문 삽입
    const emailElement = document.getElementById('p-email');
    emailElement.innerHTML = `<a href="mailto:${email}?subject=${mailSubject}&body=${mailBody}" style="text-decoration:none; color:inherit;">${email}</a>`;

    // QR 코드 생성 (기존 로직 유지)
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = "";
    
    const qrData = `Name: ${name}\nPhone: ${phone}\nSocial: ${snsType}\nID: ${snsId}\nMail: ${email}`;
    
    new QRCode(qrContainer, {
        text: qrData,
        width: 75,
        height: 75,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById('result-area').style.display = 'block';
}
