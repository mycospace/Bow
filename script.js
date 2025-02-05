const exercises = {
    home: `
        <h1>Willkommen beim MetaCognition Trainer</h1>
        <p>Erkenne und hinterfrage deine Denkmuster mit interaktiven Übungen.</p>
    `,
    
    innereDialoge: `
        <h2>📝 Innere Dialoge sichtbar machen</h2>
        <p>Schreibe für 5-10 Minuten deine Gedanken auf:</p>
        <textarea id="gedankenText"></textarea>
        <button onclick="saveText('gedankenText')">💾 Speichern</button>
        <p id="feedback"></p>
    `,
    
    perspektivwechsel: `
        <h2>🔄 Perspektivwechsel</h2>
        <p>Warum glaubst du das?</p>
        <textarea id="perspektive1"></textarea>
        <button onclick="saveText('perspektive1')">💾 Speichern</button>
    `,

    miniExperimente: `
        <h2>🧪 Mini-Experimente</h2>
        <p>Formuliere eine Hypothese:</p>
        <textarea id="hypothese"></textarea>
        <p>Teste es im Alltag und schreibe deine Erkenntnisse auf:</p>
        <textarea id="experiment"></textarea>
        <button onclick="saveText('hypothese'); saveText('experiment')">💾 Speichern</button>
    `,

    achtsamkeit: `
        <h2>🧘‍♂️ Achtsamkeitstraining</h2>
        <p>Schließe die Augen, beobachte deinen Atem und notiere Gedanken:</p>
        <textarea id="achtsamkeit"></textarea>
        <button onclick="saveText('achtsamkeit')">💾 Speichern</button>
    `,

    selbstreflexion: `
        <h2>🤔 Selbstreflexion</h2>
        <p>Was ist dein Glaubenssatz?</p>
        <textarea id="glaubenssatz"></textarea>
        <button onclick="saveText('glaubenssatz')">💾 Speichern</button>
    `,

    alltag: `
        <h2>🌍 Denken im Alltag</h2>
        <p>Welche Situation hat dich heute besonders beschäftigt?</p>
        <textarea id="alltag"></textarea>
        <button onclick="saveText('alltag')">💾 Speichern</button>
    `
};

// Lade die Übungen dynamisch
function loadExercise(exercise) {
    const container = document.getElementById("exercise-container");
    container.innerHTML = exercises[exercise] || "<p>Übung nicht gefunden.</p>";
}

// Speicherfunktion mit Feedback
function saveText(id) {
    const value = document.getElementById(id).value;
    if (value) {
        localStorage.setItem(id, value);
        const feedback = document.createElement("p");
        feedback.innerText = "✅ Gespeichert!";
        feedback.style.color = "green";
        document.getElementById("exercise-container").appendChild(feedback);

        setTimeout(() => {
            feedback.remove();
        }, 2000);
    }
}
