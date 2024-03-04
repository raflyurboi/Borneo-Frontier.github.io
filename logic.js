var lastScrollTop = 0;

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        document.getElementById('navbar').style.top = "-60px"; // Menggeser navbar ke atas saat digulir ke bawah
    } else {
        document.getElementById('navbar').style.top = "0"; // Munculkan kembali navbar saat digulir ke atas
    }

    lastScrollTop = currentScroll;
});