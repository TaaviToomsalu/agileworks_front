# Pöördumissüsteemi Esikülg

See on React-põhine esikülje rakendus kasutajatoele saadetud pöördumiste haldamiseks pöördumissüsteemis.

## Kirjeldus

Rakendus võimaldab kasutajatel sisestada kasutajatoe pöördumisi kirjelduse ja tähtajaga. See kuvab aktiivsed pöördumised tähtaja järgi sorteeritult, märkides tähtaja lähedal või möödunud pöördumised punasega. Kasutajad saavad samuti märkida pöördumised lahendatuks.

## Alustamine

Selleks, et saada koopia projekti tööle oma kohalikus masinas, järgige järgmisi samme:

### Eeldused

- Node.js ja npm on installitud teie masinas.

### Paigaldamine

1. Kloonige hoidla oma kohalikku masinasse:

    ```bash
   git clone <hoidla-url>

2. Liikuge projekti kausta:

    ```bash
    cd poordumissusteemi-esikylg

3. Paigaldage sõltuvused:

    ```bash
    npm install

### Kasutamine

1. Alustage arendusserverit:

    ```bash
    npm start

2. Avage oma veebibrauser ja minge aadressile http://localhost:3000, et vaadata rakendust.

### Sõltuvused

- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) v5.17.0
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) v13.4.0
- [@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event) v13.5.0
- [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app) v7.0.1
- [react-datepicker](https://www.npmjs.com/package/react-datepicker) v6.6.0
- [react-dom](https://www.npmjs.com/package/react-dom) v18.2.0
- [react-scripts](https://www.npmjs.com/package/react-scripts) v5.0.1
- [react](https://www.npmjs.com/package/react) v18.2.0
- [web-vitals](https://www.npmjs.com/package/web-vitals) v2.1.4