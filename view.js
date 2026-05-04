window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    
    // HTML의 ID들과 1:1로 정확하게 맞췄습니다.
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

    // 2. 전화 연결 기능 (핵심)
    const phone = params.get('p');
    const callBtn = document.getElementById('call-link');
    if (phone && phone.trim() !== "" && callBtn) {
        // 숫자와 '+'만 남겨서 전화 앱이 인식하기 가장 좋은 형태로 만듭니다.
        const cleanPhone = phone.replace(/[^0-9+]/g, "");
        callBtn.href = "tel:" + cleanPhone;
        callBtn.style.display = "block";
    } else if (callBtn) {
        callBtn.style.display = "none";
    }

    // 3. 메일 연결 기능 (상냥한 메시지 포함 버전)
    const email = params.get('e');
    const mailBtn = document.getElementById('mail-link');
    
    if (email && email.trim() !== "" && mailBtn) {
        // 정민님이 원하신 상냥한 메시지 세팅
        const subject = encodeURIComponent("Found your Passport Wallet!");
        const body = encodeURIComponent("Hello,\n\nI found your Minimal Square passport wallet.\nPlease let me know where I can return it to you or leave your contact number here.\n\nHave a wonderful day!");
        
        // 버튼 클릭 시 주소+제목+본문이 한꺼번에 뜨도록 설정
        mailBtn.href = `mailto:${email}?subject=${subject}&body=${body}`;
        mailBtn.style.display = "block";
    } else if (mailBtn) {
        mailBtn.style.display = "none";
    }
