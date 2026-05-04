window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    
    // HTML의 ID들과 토씨 하나 안 틀리게 매칭했습니다.
    const fields = [
        { key: 'n', valId: 'v-n', boxId: 'box-n' },
        { key: 's', valId: 'v-s', boxId: 'box-s' },
        { key: 'i', valId: 'v-i', boxId: 'box-i' },
        { key: 'e', valId: 'v-e', boxId: 'box-e' }, // v-email 대신 v-e
        { key: 'p', valId: 'v-p', boxId: 'box-p' }  // v-phone 대신 v-p
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

    // 2. 전화 걸기 버튼 활성화 (p 파라미터가 있을 때만 출력)
    const phone = params.get('p');
    const callBtn = document.getElementById('call-link');
    if (phone && phone.trim() !== "") {
        callBtn.href = "tel:" + phone.replace(/[^0-9+]/g, "");
        callBtn.style.display = "block";
    } else {
        callBtn.style.display = "none";
    }

    // 3. 메일 보내기 버튼 활성화 (e 파라미터가 있을 때만 출력)
    const email = params.get('e');
    const mailBtn = document.getElementById('mail-link');
    if (email && email.trim() !== "") {
        mailBtn.href = "mailto:" + email;
        mailBtn.style.display = "block";
    } else {
        mailBtn.style.display = "none";
    }
};
