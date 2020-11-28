# Initiation à Node.js

## TP 7 : Asynchronisme : setTimeout et callbacks

### Ressources

- https://openclassrooms.com/fr/courses/5543061-ecrivez-du-javascript-pour-le-web/5577651-comprenez-comment-fonctionne-lasynchrone-en-js
- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
- https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
- https://developer.mozilla.org/fr/docs/Web/JavaScript/Concurrence_et_boucle_des_%C3%A9v%C3%A9nements
- https://www.w3schools.com/jsref/met_win_settimeout.asp

### Objectifs

A partir de l'exemple fourni et à l'aide des méthodes disponibles dans le fichier `./utils/asynchronous.js`, coder la recette des "Spaghetti al pomodoro" ci-dessous.

Pour gérer l'asynchronisme utiliser uniquement :

- setTimeout (cf. méthode "do_after"),
- les méthodes "callbacks",

L'objectif est d'afficher dans le terminal chaque étape de la recette dans l'ordre logique et avec le délai correspondant.

Pour l'exercice, 1mn correspondra à 10s (soit 10000ms), donc 9mn = 90000 ms.

- faire chauffer de l'eau dans une casserole dans pendant 9mn,
- faire chauffer de l'huile d'olive dans une poêle pendant 1mn
- pendant ce temps, couper de l'ail,
- mettre l'ail dans l'huile d'olive chaude dans la poêle pendant 1mn (en option, ajouter du piment avec l'ail),
- ajouter de la tomate dans la poêle et laisser cuire jusqu'à ce que les spaghetti soient cuits,
- ajouter du sel, du poivre et quelques feuilles de basilic,
- lorsque l'eau est bouillante, mettre du gros sel dans l'eau,
- mettre 500g de spaghetti à cuire pendant 10mn dans la casserole d'eau bouillante, remuer les spaghetti toutes les 2 mn,
- essorer les spaghetti et les verser dans la poêle avec la sauce tomate,
- laisser les spaghetti dans la poêle avec la sauce tomate pendant 1mn,
- servir et déguster ;)

---

Alexandre Leroux

alex@sherpa.one

Enseignant vacataire à l'Université de Lorraine

- IUT Nancy-Charlemagne (LP Ciasie)

- Institut des Sciences du Digital (Masters Sciences Cognitives)
