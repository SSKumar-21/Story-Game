document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.createElement('audio');
    audioElement.autoplay = true; 
    const mp3Source = document.createElement('source');
    mp3Source.src = 'happy.mp3';
    mp3Source.type = 'audio/mpeg';
    audioElement.appendChild(mp3Source);
    document.body.appendChild(audioElement);
});
