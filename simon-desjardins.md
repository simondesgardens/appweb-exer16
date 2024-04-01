# Revue de code par Simon Desjardins

Revue de code pour le TP01 final de Ilann Brodl pour le cours d'application web.

## Commentaires générals

Les variables et les fonctions ne sont pas typées:

```js
let currentSongId = 0;
let song;
```

```js
function stopMusic() {
  audioElement.pause();
  audioElement.currentTime = 0;
  isPlaying.value = false;
}
```

La fonction pour formatter le temps:

```js
function formatDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
```

se retrouve à plusieurs endroits alors qu'elle est utile seulement dans **SongPlayerTime**.

## SongList


### Positif

La gestion des chansons se faient exclusivement dans ce composant.

### À améliorer

Dans les méthodes qui changent la chansons, on retourne chercher les chansons avec songService malgré qu'on les a déjà dans la variable **songs**.

## SongPlayer

- Le temps courant ne se met pas à jour.
- La durée de la chanson est celle de la chanson sélectionnée précédement.

## Comportement de l'application

::: info
### Positif
Les informations de la chanson se mettent à jour dès que la chanson est sélectionnée
:::

::: tip
### À améliorer

- La durée de la chanson est celle de la chanson sélectionnée précédement
- Ne commence avec aucune chanson sélectionnée
- La chanson doit jouer pour pouvoir appuyer sur le bouton **stop**
:::