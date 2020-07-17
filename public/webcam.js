document.addEventListener("DOMContentLoaded", ()=> {
    const video = document.querySelector("video");
    const btn = document.querySelector("button");
    const canvas = document.querySelector("canvas");
    console.log(video);

    navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
            window.stream = stream;
            video.srcObject = stream;
        })

    btn.addEventListener("click", ()=> {
        console.log(`Width: ${video.videoWidth}`);
        console.log(`Height: ${video.videoHeight}`);

        canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    })
})