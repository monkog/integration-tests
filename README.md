# warsawjs-workshop-24-admin-panel

[![travis](https://img.shields.io/travis/piecioshka/warsawjs-workshop-24-admin-panel.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/warsawjs-workshop-24-admin-panel)
[![dependencies](https://david-dm.org/piecioshka/warsawjs-workshop-24-admin-panel.svg)](https://github.com/piecioshka/warsawjs-workshop-24-admin-panel)
[![Build Status](https://semaphoreci.com/api/v1/piecioshka/warsawjs-workshop-24-admin-panel/branches/master/badge.svg)](https://semaphoreci.com/piecioshka/warsawjs-workshop-24-admin-panel)

WarsawJS Workshop #24: Projekt panelu administracyjnego

## Wykorzystywane narzędzia

* <https://webpack.js.org/>
* <https://jestjs.io/>
* <https://babeljs.io>
* <https://eslint.org>
* <https://json-schema-faker.js.org/>
* <https://github.com/DavidAnson/markdownlint>
* <https://github.com/typicode/json-server>

## Krok po kroku

1. Instalacja `npm/json-server`
2. Wygenerowanie danych za pomocą schemy:
    + <https://gist.github.com/piecioshka/b071e2d53a1115527ab5a5b21765bed3>
3. Zbudowanie polecenia: `npm run start:back-end`,
4. Uruchomić serwer bazodanowy

### Napisać aplikację poprzez definiowanie wymagań w testach

1. Wygenerowanie konfiguracji dla `Jest`-a

    ```bash
    npx jest --init
    ```

2. Integracja z Babel.js

    ```bash
    npm i -D babel-jest regenerator-runtime @babel/preset-env @babel/core babel-core@^7.0.0-bridge.0
    ```

3. Stworzyć plik `.babelrc` o zawartości:

    ```json
    {
        "presets": [
            "env"
        ]
    }
    ```

4. Napisać test, który będzie weryfikować serwis do pobierania danych z serwera
5. Napisać test, który będzie sprawdzać komponent prezentować
6. Zamockować DOM za pomocą `npm/jsdom`
7. Stworzyć stronę DEMO, gdzie osadzić uprzednio stworzony komponent

## Problemy

* usunięcie parametryzacji funkcji utilsowych
* agregacja funkcji utilsowych to jednego pliku
* zabicie na sztywno
* skopiowanie funkcji utilsowych kilka razy w jednym pliku + zmienić ich nazwę


## License

[The MIT License](http://piecioshka.mit-license.org) @ 2018
