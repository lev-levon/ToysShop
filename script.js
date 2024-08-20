function searchProduct() {
    var query = document.getElementById('searchInput').value.toLowerCase();
    if (query === 'розумне цуценя') {
        window.location.href = 'product 1.html';
    } else if (query === 'пальчиковий лабіринт') {
        window.location.href = 'product 2.html';
    } else if (query === 'пірамідка видувна') {
        window.location.href = 'product 3.html';
    } else if (query === 'пазл') {
        window.location.href = 'product 4.html';
    } else if (query === 'конструктор') {
        window.location.href = 'product 5.html';
    } else if (query === 'конструктор лего') {
        window.location.href = 'product 6.html';
    } else if (query === 'крокодил - дантист') {
        window.location.href = 'product 7.html';
    } else if (query === 'настільний футбол') {
        window.location.href = 'product 8.html';
    } else if (query === 'монополія') {
        window.location.href = 'product 9.html';
    } else if (query === 'лялька') {
        window.location.href = 'product 10.html';
    } else if (query === 'машинка на пульті керування') {
        window.location.href = 'product 11.html';
    } else if (query === 'іграшкова сабачка') {
        window.location.href = 'product 12.html';
    } else {
        alert('Товар не знайдено. Спробуйте іншу назву.');
    }
}