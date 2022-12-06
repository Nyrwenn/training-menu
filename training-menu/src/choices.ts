export type Choice = {
    bigTitle:string;
    title: string[];
}

export const choices: Choice[] = [
    {
        bigTitle: "Entrées",
        title: [
            "Velouté de potiron", 
            "Salade de chèvre chaud", 
            "Oeuf mimosa", 
            "Tartines végétariennes"
        ]
    },

    {
        bigTitle: "Plats",
        title: [
            "Nouilles sautées aux légumes", 
            "Lasagnes", 
            "Entrecôte", 
            "Saumon en papillotes"
        ]
    },

    {
        bigTitle: "Desserts",
        title: [
            "Mousse au chocolat", 
            "Crème brûlée", 
            "Salade de fruits", 
            "Tarte tatin"
        ]
    }

]