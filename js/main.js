
  const f = document.getElementById('form'); 
  const q = document.getElementById('query'); 
  const google = 'https://www.google.com/search?q='; // Изменен адрес поиска Google
  const site = 'pagedart.com'; 

  function submitted(event) { 
    event.preventDefault(); 
    const url = google + site + '+' + q.value; // Изменен форматирование URL для поискового запроса
    const win = window.open(url, '_blank'); 
    win.focus(); 
  } 

