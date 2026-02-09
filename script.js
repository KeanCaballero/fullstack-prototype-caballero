function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function login(isAdmin) {

    document.body.classList.remove('not-authenticated');
    document.body.classList.add('authenticated');

    if (isAdmin) {
        document.body.classList.add('is-admin');
    }

    showPage('home');
}

function logout() {

    document.body.className = "not-authenticated";
    showPage('home');
}
