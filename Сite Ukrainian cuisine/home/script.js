// Функция для переключения фона с видео на изображение через 10 секунд
setTimeout(function() {
    const video = document.getElementById('background-video');
    const image = document.getElementById('background-image');
    
    // Скрыть видео и показать изображение
    video.style.display = 'none';
    image.style.display = 'block';
}, 10000);  // Видео будет показываться 10 секунд