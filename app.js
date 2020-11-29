'use strict';

const { print, do_during } = require("./utils/asynchronous");

(async () => {

    const start_date = Date.now();

    print("Début de la recette", start_date);

    do_during("Chauffer eau", "Eau bout", 10000, start_date).then(async (_) => {

        await do_during("Cuire Spaghetti", "Spaghetti cuîts", 9000, start_date);
        await do_during("Essorer spaghetti", "Spaghetti essorés", 500, start_date);
        await do_during("Verser spaghetti dans sauce tomate", "Spaghetti dans sauce tomate", 2000, start_date);
        await do_during("Finir cuisson spaghetti", "C'est prêt ! Bon appétit !", 500, start_date);
        print("Fin de la recette", start_date);

    });

    do_during("Couper ail", "Ail coupé", 1000, start_date);
    await do_during("Chauffer huile d'olive", "Huile d'olive chaude", 1000, start_date);
    await do_during("Cuire ail", "Ail cuît", 1000, start_date);
    do_during("Cuire tomate", "Tomate cuîte", 15000, start_date);
    await do_during("Assaisonement (sel, poivre et basilic)", "Sel, Assaisonement effectué (sel, poivre et basilic)", 0, start_date);

})();


/*
00000ms :       Début de la recette
00007ms :       Chauffer eau (pendant 10mn)
00008ms :       Couper ail (pendant 1mn)
00008ms :       Chauffer huile d'olive (pendant 1mn)
01011ms :       Ail coupé
01011ms :       Huile d'olive chaude
01013ms :       Cuire ail (pendant 1mn)
02015ms :       Ail cuît
02016ms :       Cuire tomate (pendant 15mn)
02016ms :       Assaisonement (sel, poivre et basilic)
02018ms :       Sel, Assaisonement effectué (sel, poivre et basilic)
10010ms :       Eau bout
10011ms :       Cuire Spaghetti (pendant 9mn)
17023ms :       Tomate cuîte
19015ms :       Spaghetti cuîts
19016ms :       Essorer spaghetti (pendant 0.5mn)
19518ms :       Spaghetti essorés
19518ms :       Verser spaghetti dans sauce tomate (pendant 2mn)
21519ms :       Spaghetti dans sauce tomate
21520ms :       Finir cuisson spaghetti (pendant 0.5mn)
22021ms :       C'est prêt ! Bon appétit !
22022ms :       Fin de la recette
*/