window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const fields = [
        { key: 'n', valId: 'v-n', boxId: 'box-n' },
        { key: 's', valId: 'v-s', boxId: 'box-s' },
        { key: 'i', valId: 'v-i', boxId: 'box-i' },
        { key: 'e', valId: 'v-e', boxId: 'box-e' },
        { key: 'p', valId: 'v-p', boxId: 'box-p' }
    ];

    fields.forEach(field => {
        const value = params.get(field.key);
        const valElement = document.getElementById(field.valId);
        const boxElement = document.getElementById(field.boxId);
        if (value && value.trim() !== "" && valElement && boxElement) {
            valElement.innerText = value;
            boxElement.style.display = "block";
        }
    });

    const phone = params.get('p');
    const callBtn = document.getElementById('call-link');
    if (phone && phone.trim() !== "" && callBtn) {
        callBtn.href = "tel:" + phone.replace(/[^0-9+]/g, "");
        callBtn.style.display = "block";
    }

    const email = params.get('e');
    const mailBtn = document.getElementById('mail-link');
    if (email && email.trim() !== "" && mailBtn) {
        // 정민님의 상냥한 영어 메시지
        const subject = encodeURIComponent("Found your Passport Wallet!");
        const body = encodeURIComponent("Hello,\n\nI found your Minimal Square passport wallet.\nPlease let me know where I can return it to you or leave your contact number here.\n\nHave a wonderful day!");
        mailBtn.href = `mailto:${email}?subject=${subject}&body=${body}`;
        mailBtn.style.display = "block";
    }
};
