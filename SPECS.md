# Metroidvania Compendium design doc

The following document is the basis for the creation of a website called Metroidvania Compendium. The requirements may change as time goes on but this is what will be used to start the project.

## Introduction

**Metroidvania Compendium** is a website that lists metroidvania games along with a description, screenshots and information about powerups, abilities and other game mechanics that are catalogued and grouped.

The existing [Metroidvania Compendium](https://evidentlycube.github.io/metroidvania-compendium/) will be used as a baseline

The following features will be implemented:

1. Listing of all games in the compendium
2. Listing of all ability categories in the compendium
3. Listing of all abilities in the compendium
4. Editing any of the above
5. API backend to power it all

## Features

### Data structures

1. Consoles/Environments

    1. Name of the console/environment
    2. Wikipedia link

2. Game series

    3. Title
    4. Description

3. Games

    5. Title
    6. Description
    7. Screenshots
    8. Links to: Wikipedia, TV Tropes, Giant Bomb, Longplay
    9. Which Consoles/Environments it’s available on
    10. Links to buy
    11. Analysis (text)

4. Ability Categories

    12. Name
    13. Description

5. Ability Groups

    14. Name
    15. Description
    16. Category to which it belongs

6. Ability

    17. Name
    18. Description
    19. Array of string variants

7. Ability Example

    20. Link to ability
    21. Link to game
    22. Name of the ability in-game
    23. Description
    24. Screenshots

### Views

1. Front page which displays some introduction and links to list of all games and list of all abilities
2. Ability listing page that has all abilities listed
3. Ability view page that displays all details about an ability
4. Game listing page that has all games listed
5. Game view page that displays all details about a game
6. Configuration screen that allows to enable/disable spoilers and mark games that are safe to display
7. Login view - registration is not allowed, only hardcoded accounts
8. Figure out how to allow editing all information (preferably inline editor that replaces display components with editable components)

### Technology

1. Frontend

    1. React for rendering
    2. Redux as data store
    3. Written in TypeScript
    4. Build with Webpack
    5. styled-components for CSS
    
2. Backend

    6. Node.js
    7. GraphQL API (or start with REST API and add GraphQL in the future
    
3. Other

    8. ESlint for checking code quality
    9. Unit tests
    10. Git Hooks to auto run tests and eslint before commit
    
4. Bonus things to consider

    11. Try storybook to facilitate designing UI with clear separation from the logic
    12. Multiple languages support 
    13. Support both GraphQL and REST API and allow switching which to use on the fly
    14. Support "offline mode" which downloads all the non-binary data at once and does not make any API calls from then on

