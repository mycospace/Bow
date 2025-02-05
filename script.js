document.addEventListener("DOMContentLoaded", function() {
    loadComponent("nav-placeholder", "components/nav.html");
    loadComponent("footer-placeholder", "components/footer.html");
});

function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data);
}

function loadExercise(exercise) {
    const container = document.getElementById("exercise-container");
    container.innerHTML = exercises[exercise] || "<p>Übung nicht gefunden.</p>";
}
