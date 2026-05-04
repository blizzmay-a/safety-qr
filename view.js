window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // 정민님의 script.js 파라미터 이름과 1:1 매칭
    const data = {
        n: urlParams.get('n'), // Name
        s: urlParams.get('s'), // SNS Type
        i: urlParams.get('i'), // SNS ID
        e: urlParams.get('e'), // Email
        p: urlParams.get('p')  // Phone
    };


    function showField(val, targetId, boxId) {
        const target = document.getElementById(targetId);
        const box = document.getElementById(boxId);
        if (val && val.trim() !== "" && target && box) {
            target.innerText = val;
            box.style.display = "block";
        }
    }

    // 화면 뿌려주기
    showField(data.n, 'v-n', 'box-n');
    showField(data.s, 'v-s', 'box-s');
    showField(data.i, 'v-i', 'box-i');
    showField(data.e, 'v-email', 'box-email');
    showField(data.p, 'v-phone', 'box-phone');

    // 버튼 로직
    const callBtn = document.getElementById('call-link');
    if (data.p) {
        callBtn.href = "tel:" + data.p.replace(/[^0-9+]/g, "");
    } else {
        callBtn.style.display = "none";
    }

    const mailBtn = document.getElementById('mail-link');
    if (data.e) {
        mailBtn.href = "mailto:" + data.e;
    } else {
        mailBtn.style.display = "none";
    }
};
