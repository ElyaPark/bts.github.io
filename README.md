<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> 
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
  <style>
     footer {
      background-color: rgb(0, 0, 0); /* Черный фон с полупрозрачностью */
      color: #fff; /* Белый цвет текста */
      padding: 20px 0; /* Внутренние отступы вверху и внизу футера */
      text-align: center; /* Выравнивание текста по центру */
    }
 
    body {
      font-family: 'LUCIDA SANS UNICODE', Times, serif, sans-serif;
      font-size: 10px;
    }
    .container-list a {
      font-size: 17px;
      opacity: 0.7; 
      margin-bottom: 10px; 
    }
    .container-menu a {
      font-size: 20px;
      opacity: 0.7; 
      margin-bottom: 10px; 
    }
  </style>
</head>
<body>

  <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
    <div class="bg-dark p-4 d-flex justify-content-between align-items-center" style="background-color: rgba(0, 0, 0, 0.5);">
      <div class="container-list">
        <a href="file:///C:/Users/Pobeda304/Desktop/start-clean/Main.html" class="b1 text-white">Главная</a>
        <a href="#" class="b2 text-white">История</a>
        <a href="file:///C:/Users/Pobeda304/Desktop/start-clean/Музыка.html" class="b3 text-white">Музыка</a>
        <a href="#" class="b4 text-white">Видео</a>
        <a href="#" class="b5 text-white">Фан-контент</a>
        <a href="#" class="b6 text-white">О нас</a>
      </div>
      <div class="container-menu d-flex justify-content-end">
        <a href="file:///C:/Users/Pobeda304/Desktop/start-clean/Регистрация.html" class="badge badge-pill badge-primary">Регистрация</a>
        <a href="file:///C:/Users/Pobeda304/Desktop/start-clean/Вход.html" class="badge badge-pill badge-secondary">Вход</a>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <img src="file:///C:/Users/Pobeda304/Desktop/сайт1/img/бтслого1.png" alt="Ваше изображение" style="max-height: 50px; margin: auto; display: block;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <main class="main">
  
    <form id="form" role="search"> 
      <input type="search" id="query" name="q" 
       placeholder="Search..." 
       aria-label="Search through site content"> 
      <button>Search</button> 
    </form>
    
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="file:///C:/Users/Pobeda304/Desktop/сайт1/img/чонгук%20карусель.png" class="d-block w-100" alt="Slide 1">
      </div>
      <div class="carousel-item">
        <img src="file:///C:/Users/Pobeda304/Desktop/сайт1/img/чимин%20карусель.png" class="d-block w-100" alt="Slide 2">
      </div>
      <div class="carousel-item">
        <img src="file:///C:/Users/Pobeda304/Desktop/сайт1/img/техен%20карусель.png" class="d-block w-100" alt="Slide 3">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <footer>
    <div class="container">
      <p>&copy; 2024 Ваше название компании. Все права защищены.</p>
    </div>
  </footer>
  <script src="js/main.js"></script>
  <script>
    document.getElementById('form').addEventListener('submit', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение формы
      const google = 'https://www.google.com/search?q='; // Адрес поиска Google
      const site = 'site:wikipedia.org'; // Пример: поиск на Википедии
      const q = document.getElementById('query').value.trim(); // Получаем значение из поля поиска и удаляем лишние пробелы
      
      if (q) { // Проверяем, что запрос не пустой
        const url = google + site + '+' + encodeURIComponent(q); // Формируем URL для поискового запроса
        window.open(url, '_blank'); // Открываем новую вкладку с результатами поиска
      } else {
        console.error('Пустой запрос!'); // Выводим ошибку в консоль, если запрос пустой
      }
    });
  </script>
</body>
</html>
