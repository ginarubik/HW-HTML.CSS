# CSS Responsive practice

## Video link:

https://youtu.be/7OSUocuJkRw

10-responsive-demo

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* banner header */

.banner-holder {
  width: 100%;
}

#banner {
  width: 100%;
}
```

```css
/* blog section */
.blog-container {
  display: flex;
  flex-direction: column;
}
```

```css
.blog-section {
  padding: 0 1rem;
}
.blog-title {
  color: #b96d40;
}

.blog-title h1 {
  font-size: 3rem;
  padding: 10px 0px 0px 40px;
  font-family: 'Courier New', Courier, monospace;
}

.blog-title h2 {
  font-size: 2rem;
}

.blog-text p {
  text-align: justify;
  line-height: 22px;
  font-family: Arial, Helvetica, sans-serif;
}

/* aside*/

.aside-img {
  width: 100%;
}

/* footer */

.footer {
  margin-top: 1rem;
  text-align: center;
  background: #b96d40;
  padding: 2rem;
  color: #ffcf9c;
}
```

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_mq_breakpoints

```css
/* media query */
/* only print */
/* min-width mobile -> tablet -> desktop */
/* max-width desktop -> table -> mobile */
/* for table */
```

https://experienceleague.adobe.com/docs/target/using/experiences/vec/mobile-viewports.html

https://getbootstrap.com/docs/5.3/layout/breakpoints/

```css
/* for table */
@media only screen and (min-width: 768px) {
  .banner-holder {
    display: block;
  }
  main {
    width: 85%;
    margin: 0 auto;
  }
}
```

```css
/* for desktop */
@media only screen and (min-width: 992px) {
  main {
    width: 980px;
  }
  .blog-container {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
  .blog-section {
    width: 50%;
  }
  aside {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
```


## Source code

10-responsive-demo/style.css

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

/* banner header */

.banner-holder {
  width: 100%;
  display: none;
}

#banner {
  width: 100%;
}

/* blog section */

.blog-container {
  display: flex;
  flex-direction: column;
}

.blog-section {
  padding: 0 1rem;
}

.blog-title {
  color: #b96d40;
}

.blog-title h1 {
  font-size: 3rem;
  padding: 10px 0px 0px 40px;
  font-family: 'Courier New', Courier, monospace;
}

.blog-title h2 {
  font-size: 2rem;
}

.blog-text p {
  text-align: justify;
  line-height: 22px;
  font-family: Arial, Helvetica, sans-serif;
}

/* aside*/
.aside-img {
  width: 100%;
}

.footer {
  margin-top: 1rem;
  text-align: center;
  background: #b96d40;
  padding: 2rem;
  color: #ffcf9c;
}

/* media query */
/* only print */
/* min-width mobile -> tablet -> desktop */
/* max-width desktop -> table -> mobile */
/* for table */
@media only screen and (min-width: 768px) {
  .banner-holder {
    display: block;
  }
  main {
    width: 85%;
    margin: 0 auto;
  }
}

/* for desktop */
@media only screen and (min-width: 992px) {
  main {
    width: 980px;
  }
  .blog-container {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
  .blog-section {
    width: 50%;
  }
  aside {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
```
