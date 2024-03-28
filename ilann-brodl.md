# Revue de code par Ilann Brodl

Revue de code pour le TP01 final de Simon Desjardins pour le cour d'application web.

### Code

Répétitions des **_variables_** pour les **_boutons_** de contrôle de la musique.

```js{4}
function playSong() {
    props.songAudio.src = "./src/assets/songs/" + props.song.fileName

    let btnPlay = document.getElementById("btnPlay") as HTMLButtonElement
    let btnPause = document.getElementById("btnPause") as HTMLButtonElement
    let btnStop = document.getElementById("btnStop") as HTMLButtonElement

    props.songAudio.currentTime = currentTime.value
    props.songAudio.play()

    btnPlay.classList.add("d-none")
    btnPause.classList.remove("d-none")
    btnStop.classList.remove("d-none")

    emit('playSong')
}

function pauseSong() {
    let btnPlay = document.getElementById("btnPlay") as HTMLButtonElement
    let btnPause = document.getElementById("btnPause") as HTMLButtonElement

    currentTime.value = props.songAudio.currentTime
    props.songAudio.pause()

    btnPlay.classList.remove("d-none")
    btnPause.classList.add("d-none")

    emit('pauseSong')
}
```

Utiliser les fonctions de **_composant Vue_** plutôt que **_setInterval_** pour actualiser le minuteur de la musique.

```js{4}
function startSongTimer() {
  songTimer.value = prepareTimeForDisplay(songCurrentTime.value)
  if (songCurrentTime.value == parseInt(songDuration.value)) {
    clearInterval(timer)
  }

  if (!props.isPaused) {
    songCurrentTime.value++
  }
}
```

### Autres

::: info Connexion a la base de données
Il manque l'affichage d'un message d'erreur lorsque le site n'arrive pas à se connecter a la base de données, 
ou lorsque la base de données est introuvable.
:::




## Lien vers le site

Voici le lien vers [le site du Tp01](http://localhost:5174/).