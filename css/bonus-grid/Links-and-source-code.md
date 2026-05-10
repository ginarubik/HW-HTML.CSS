# CSS - Grid

## Video link:

https://youtu.be/nh8iwvIOVoc

```css
.box:nth-child(odd) {
  background-color: #2af;
}

.box:nth-child(even) {
  background-color: #a3e;
}
```

### Grid generator:

https://cssgrid-generator.netlify.app/

```css
.grid-container {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 100px 150px;
  grid-auto-rows: minmax(100px, 200px);
  row-gap: 0.1em;
  column-gap: 0.5em;

  justify-content: center;
  align-content: center;
}
```

## Simple site layout

```css
.navbar {
  background-color: #a7ffeb;
}

.main {
  background-color: #84ffff;
}

.sidebar {
  background-color: #18ffff;
}

.content-1 {
  background-color: #6fffd2;
}

.content-2 {
  background-color: #64ffda;
}

.content-3 {
  background-color: #73ffba;
}

.footer {
  background-color: #1de9b6;
}
```

```css
.grid-container {
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10% 35% 30% 25%;
  grid-template-areas:
    'navbar navbar navbar navbar'
    'sidebar main main main'
    'sidebar content-1 content-2 content-3'
    'sidebar footer footer footer';
  gap: 0.5em;
  margin: 1em;
}
```

```css
.navbar {
  grid-area: navbar;
}

.main {
  background-color: #84ffff;
  grid-area: main;
}

.sidebar {
  background-color: #18ffff;
  grid-area: sidebar;
}

.content-1 {
  background-color: #6fffd2;
  grid-area: content-1;
}

.content-2 {
  background-color: #64ffda;
  grid-area: content-2;
}

.content-3 {
  background-color: #73ffba;
  grid-area: content-3;
}

.footer {
  background-color: #1de9b6;
  grid-area: footer;
}
```

max-width: asztali nézetből mobil nézetre - legfeljebb
min-width: mobil nézetből asztali nézet - legalább

### Mobiltelefonoknál számolt kijelző méret:

https://experienceleague.adobe.com/docs/target/using/experiences/vec/mobile-viewports.html

### Breakpoints

https://getbootstrap.com/docs/5.3/layout/breakpoints/

```css
@media screen and (max-width: 576px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 6fr repeat(3, 3fr) 2fr;
    grid-template-areas:
      'navbar'
      'sidebar'
      'main'
      'content-1'
      'content-2'
      'content-3'
      'footer';
  }
}
```

## Akadálymentesség

https://getbootstrap.com/docs/5.3/components/navbar/

### W3 school accessibility

https://www.w3schools.com/accessibility/

### Google

https://developer.chrome.com/docs/devtools/accessibility/reference/
https://web.dev/learn/accessibility/

https://getbootstrap.com/docs/5.3/getting-started/introduction/

## Source code

Grid lesson:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* vw */
.grid-container {
  height: 100vh;
  display: grid;
  /* grid-template-columns: 1fr 2fr 1fr; */
  /* grid-template-columns: 100px 200px 300px; */
  /* grid-template-columns: 1fr 200px 2fr; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-columns: 20% 1fr 100px repeat(2, 4em); */
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 100px 150px;
  /* grid-auto-rows: 200px; */
  grid-auto-rows: minmax(100px, 200px);
  gap: 0.5em;
  row-gap: 0.1em;
  column-gap: 0.5em;
  /* justify-content: center; / start / end
  align-content: center; */
  /* justify-items: start; / end / center / default: strech */
  /* align-items: start; / end / center / default: strech */
}

.box:nth-child(odd) {
  background-color: #2af;
}
.box:nth-child(even) {
  background-color: #a3e;
}

.one {
  grid-column-start: 1;
  /* grid-column-end: 4; */
  grid-column-end: -1;
  /* 1 / 4 */
  grid-column: 1 / -1;
  /* justify-self: start; */
}

.two {
  grid-row: 2 / 4;
  grid-column: 1 / 3;
  grid-area: 2 / 1 / 4 / 3;
  /* Shorthand for
  'grid-row-start',
  'grid-column-start',
 'grid-row-end',
 'grid-column-end'.
 */
}
```

Simple site layout:

```css
/* colors
navbar #a7ffeb
main #84ffff
sidebar #18ffff
content1 #6fffd2
content2 #64ffda
content3 #73ffba
footer #1de9b6   */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.grid-container {
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10% 35% 30% 25%;
  grid-template-areas:
    'navbar navbar navbar navbar'
    'sidebar main main main'
    'sidebar content-1 content-2 content-3'
    'sidebar footer footer footer';
  gap: 0.5em;
  margin: 1em;
}

.grid-container > * {
  border-radius: 0.5em;
  text-align: center;
  text-transform: uppercase;
  padding: 1em;
}

.navbar {
  background-color: #a7ffeb;
  /* grid-area: 1 / 1 / 2 / 5; */
  grid-area: navbar;
}

.main {
  background-color: #84ffff;
  grid-area: main;
}

.flex-container {
  display: flex;
}

.sidebar {
  background-color: #18ffff;
  grid-area: sidebar;
}

.content-1 {
  background-color: #6fffd2;
  grid-area: content-1;
}

.content-2 {
  background-color: #64ffda;
  grid-area: content-2;
}

.content-3 {
  background-color: #73ffba;
  grid-area: content-3;
}

.footer {
  background-color: #1de9b6;
  grid-area: footer;
}

/* max-width asztali nézetből mobil nézetre */
/* min-width mobil nézetből asztali nézet */

@media screen and (max-width: 576px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 6fr repeat(3, 3fr) 2fr;
    grid-template-areas:
      'navbar'
      'sidebar'
      'main'
      'content-1'
      'content-2'
      'content-3'
      'footer';
  }
}
```
