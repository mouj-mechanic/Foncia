// Impoter une Lib pour les XPATH 
require('@cypress/xpath');

// cypress/integration/search.spec.ts
describe("Recherche de bien", () => {
    it("Effectue une recherche de bien", () => {
        cy.visit("https://fr.foncia.com/");

        // Accepter les cookies 
        cy.get("p-button p-button-secondary ng-star-inserted").click(); 
        // Fermer le pop up temporaire
        cy.get("pi pi-times p-button-icon ng-star-inserted").click();

        // cliquer sur Louer 
        cy.get("#projectToggle").click();
        cy.get("p-radiobutton:nth-child(2)").click();

        // Renseigner le prix , on peut variabiliser le montant et la ville
        cy.get("#price").type("1500");
       
        // Renseigner la Ville 
        cy.get("ng-tns-c57-17 p-autocomplete-input p-inputtext p-component ng-star-inserted").type("Paris"); 
        // Cliquer sur la permière prosition 
        cy.get("ng-tns-c57-17 ng-star-inserted").first().click();  
        // Cliquer sur Rechercher 
        cy.get("p-button p-button-help ng-star-inserted").first().click(); 

       // Filter par ordre décroissant 
       cy.get("w-100 p-button-secondary p-jc-center p-button p-component p-ripple").click(); 
       cy.get("p-radiobutton:nth-child(3)").last().click();  
       // Click actualiser 
       cy.get("p-button p-button-secondary ng-star-inserted").last().click();  
        // Vérifier les résultats de la recherche
        // Comparer le premier prix affiché avec 1500 
        
    });
});
