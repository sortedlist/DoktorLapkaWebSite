function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
  }
function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
}
function closeNavbarAndGoTo(link) {
    closeNavbar();
    const domian = "http://doctorlapka.kiev.ua";
    const dom2 = "file:///D:/Projects/DoktorLapkaWebSite/index.html";
    window.location.replace(domian + link);
}
  