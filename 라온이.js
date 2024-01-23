document.addEventListener("DOMContentLoaded", function() {
    let about = document.querySelector(".about");
    let modal = document.getElementById("myModal");

    about.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "flex";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let support = document.querySelector(".support");
    let modal2 = document.getElementById("myModal2");

    support.addEventListener("click", function(event) {
        event.preventDefault();
        modal2.style.display = "flex";
    });
});
// footer
function openModal() {
    // 입력된 값을 가져옴
    let userInput = document.getElementById("userInput").value;

    if(userInput){
        // 모달 창을 보이도록 설정
        document.getElementById("myModal3").style.display = "flex";}
    else{
        document.getElementById("myModal4").style.display = "flex";
    }


}
// footer

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function refreshPage() {
    location.reload(true); // 페이지를 새로고침합니다.
}



// function openLightbox(imageSrc, downloadLink) {
//     // Lightbox 표시
//     let lightbox = document.getElementById('lightbox');
//     lightbox.style.display = 'flex';
//     let overlay = document.getElementById('overlay');
//     overlay.style.display = 'block';
//     // Lightbox 이미지 업데이트
//     let lightboxImage = document.getElementById('lightboxImage');
//     lightboxImage.src = imageSrc;
//
//     // Lightbox 다운로드 링크 업데이트
//     let downloadButton = document.getElementById('downloadLink');
//     downloadButton.href = downloadLink;
// }
//
//
//
// function closeLightbox() {
//     // Lightbox 닫기
//     let lightbox = document.getElementById('lightbox');
//     lightbox.style.display = 'none';
//     let overlay = document.getElementById('overlay');
//     overlay.style.display = 'none';
// }


function openLightbox(imageSrc, downloadLink, lightboxId) {
    // Lightbox 표시
    let lightbox = document.getElementById(lightboxId);
    lightbox.style.display = 'flex';

    let overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    // Lightbox 이미지 업데이트
    let lightboxImage = lightbox.querySelector('.lightboxImage');
    lightboxImage.src = imageSrc;

    // Lightbox 다운로드 링크 업데이트
    let downloadButton = lightbox.querySelector('.사진다운버튼링크');
    downloadButton.href = downloadLink;
}

function closeLightbox(lightboxId) {
    // Lightbox 닫기
    let lightbox = document.getElementById(lightboxId);
    lightbox.style.display = 'none';
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

function closeAllLightboxes() {
    // 모든 Lightbox 닫기
    let lightboxes = document.querySelectorAll('.lightbox');
    for (let i = 0; i < lightboxes.length; i++) {
        lightboxes[i].style.display = 'none';
    }

    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}


