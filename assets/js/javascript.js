function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('nav-links').style.display = 'block';
    document.getElementById('menu-icon').style.display = 'none';
    document.getElementById('close-icon').style.display = 'block';
});

document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('nav-links').style.display = 'none';
    document.getElementById('menu-icon').style.display = 'block';
    document.getElementById('close-icon').style.display = 'none';
});
