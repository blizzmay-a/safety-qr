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
        if (value && value.trim() !== "") {
            document.getElementById(field.valId).innerText = value;
            document.getElementById(field.boxId).style.display = "block";
        }
    });

    // 2. 전화 걸기 버튼 활성화
    const phone = params.get('p');
    const callBtn = document.getElementById('call-link');
    if (phone && callBtn) {
        // 숫자만 추출하여 전화 연결
        callBtn.href = "tel:" + phone.replace(/[^0-9+]/g, "");
    } else if (callBtn) {
        callBtn.style.display = "none"; // 번호 없으면 버튼 숨김
    }

    // 3. 메일 보내기 버튼 활성화
    const email = params.get('e');
    const mailBtn = document.getElementById('mail-link');
    if (email && mailBtn) {
        mailBtn.href = "mailto:" + email;
    } else if (mailBtn) {
        mailBtn.style.display = "none"; // 메일 없으면 버튼 숨김
    }
};
