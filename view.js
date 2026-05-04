window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    
    const fields = [
        { key: 'n', valId: 'v-n', boxId: 'box-n' },
        { key: 's', valId: 'v-s', boxId: 'box-s' },
        { key: 'i', valId: 'v-i', boxId: 'box-i' },
        { key: 'e', valId: 'v-e', boxId: 'box-e' },
        { key: 'p', valId: 'v-p', boxId: 'box-p' }
    ];

    // 1. 정보를 화면에 표시
    fields.forEach(field => {
        const value = params.get(field.key);
        const valElement = document.getElementById(field.valId);
        const boxElement = document.getElementById(field.boxId);

        if (value && value.trim() !== "" && valElement && boxElement) {
            valElement.innerText = value;
            boxElement.style.display = "block";
        }
    });

    // 2. 전화 연결 기능
    const phone = params.get('p');
    const callBtn = document.getElementById('call-link');
    if (phone && phone.trim() !== "" && callBtn) {
        const cleanPhone = phone.replace(/[^0-9+]/g, "");
        callBtn.href = "tel:" + cleanPhone;
        callBtn.style.display = "block"; // 전화번호가 있을 때만 버튼 표시
    }

    // 3. 메일 연결 기능 (정민님의 상냥한 메시지 탑재)
    const email = params.get('e');
    const mailBtn = document.getElementById('mail-link');
    if (email && email.trim() !== "" && mailBtn) {
        const subject = encodeURIComponent("Found your Passport Wallet!");
        const body = encodeURIComponent("Hello,\n\nI found your Minimal Square passport wallet.\nPlease let me know where I can return it to you or leave your contact number here.\n\nHave a wonderful day!");
        
        mailBtn.href = `mailto:${email}?subject=${subject}&body=${body}`;
        mailBtn.style.display = "block"; // 메일 주소가 있을 때만 버튼 표시
    }
};
