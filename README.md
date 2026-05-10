﻿# HTML and CSS

## Objectives

- HTML
- CSS

## Main Content

### Training: HTML
- Videos about the HTML basics
  - [HTML Tutorial for Beginners 01 - HTML Introduction](https://www.youtube.com/watch?v=Y1BlT4_c_SU)  2:30 
  - [HTML Tutorial for Beginners 02 - What is HTML?](https://www.youtube.com/watch?v=cZCq8lQ-vZ0)  6:07 
  - [HTML Tutorial for Beginners 03 - HTML Syntax & Structure](https://www.youtube.com/watch?v=IJWcX2EDAKg)  13:09 
  - [HTML Tutorial for Beginners 04 - Your First Web Page](https://www.youtube.com/watch?v=MnaKa7igX7k)  9:35 
  - [HTML Tutorial for Beginners 05 - Head and Body Tag](https://www.youtube.com/watch?v=mNRzWMH5xK0)  7:22 

### Hands-on: Creating an HTML and a CSS file in IDEA
1. Create an HTML file and a CSS file in IDEA in the practice folder: 
    - File -> New -> HTML file : index.html
    - File -> New -> Stylesheet file : main.css

2. Add the following line between head tags:

    &lt;link rel="stylesheet" href="main.css"&gt;
    
3. Add some paragraphs with &lt;p&gt; tags between body tag.
    &lt;p&gt;
        Lorem ipsum dolores...
    &lt;/p&gt;
    
4. Change the color of the paragraph text
5. Now lets use semantic elements! Folder: ```htmldemo/html_semantic_practice``` 


### Exercise: HTML basics
- [w3schools HTML Tutorial](https://www.w3schools.com/html/) - until HTML Classes section, add examples of each tag to your index.html
- [w3schools Semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp) Semantic HTML
- optional: HTML Id - HTML Responsive section

### Exercise: HTML Forms
- [w3schools HTML Tutorial - HTML Forms](https://www.w3schools.com/html/html_forms.asp)


### Optional reading: SEO
- [seo-ról magyarul](seo.md)

<br><br>
1&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;&#9602;2
<br><br>  

### Exercise: CSS basics
- [w3schools CSS Introduction](https://www.w3schools.com/css/css_intro.asp)  
    1 - intro, syntax, how to  
    2 - colors  
    3 - backgrounds, borders, margins, padding, height/width, box model  
    4 - text, tables, display, position, align

#### The CSS precedence order  


![css predecence](https://www.peachpit.com/content/images/chap4_9780321888938/elementLinks/0435a.jpg)

- [CSS predecence order chapter](https://www.peachpit.com/articles/article.aspx?p=1997937&seqNum=9)

#### Learn the box model
- Use margin, padding, border and follow the changes of an html element
- You can use this code: [Code snippet](https://jsfiddle.net/fekete_tibor/1zfptmh7/4/)
- Play with it! You can change CSS properties and see the changes
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)

#### Display properties of an HTML element
- Use display
- Try this code: [Code snippet](https://jsfiddle.net/fekete_tibor/1zfptmh7/15/)
- Change display settings and let's see what happens!
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

#### Relative units in CSS
- Use rem and em
- By inheritance: [Code snippet](https://jsfiddle.net/fekete_tibor/1gpzq3cv/25/)
- By inheritance and overwriting root unit: [Code snippet](https://jsfiddle.net/fekete_tibor/5q1cj8Ld/27/)
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)

#### Smart CSS selectors
- Use Descendant-,Child-,Adjacent sibling-, Dependent class-, Attributum selectors
- By Smart selectors: [Code snippet](https://jsfiddle.net/BZoli/pL9y3dkb/36/)
- Play with the code! Comment out lines and let's see how the texts' colors are changing
- [Medium article amout smart selectors](https://medium.com/@davidagash/css-smart-selectors-part-1-of-2-300597beba86)


#### Use CSS positions to place text in the middle of an image
- Use "relative" and "absolute" positions
- You can try this: [Code snippet](https://jsfiddle.net/fekete_tibor/s8d0a2cz/17/)
- Play with the code! Comment out lines and let's see how the text position changing
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

#### CSS pseudo elements
- Use pseudo classes, and elements
- By pseudo classes: [Code snippet](https://jsfiddle.net/BZoli/pL9y3dkb/326/)
- Play with the code! Comment out lines and let's see how the elements are changing
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)


### Restyling a website with developer tools.
- Do one together, then do your own!
    - **Optional**: Mobile first approach.
    - Example: ```solution/mobile_first_solution```
- Contest: make screenshots and show us what you've done!
  
### Build your own website - use what we've learned (html and css).  
- Minimum requirements:  
        - use these tags: h1, h4, div, form, input (type="text"), textarea, select, radiobutton, checkbox, button, ul, img, table  
        - external css file   
- Optional:  
        1 - include JavaScript event handlers to make elements move on your page  
            (Use [this link](https://www.w3schools.com/js/default.asp) for reference)  
        2 - put a bootstrap theme on your site.  
  
### Optional  
- Flexbox:  
    - Video: [TraversyMedia - Flexbox in 20 minutes](https://www.youtube.com/watch?v=JJSoEo8JSnc)
    - Article: [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- CSS grid:  
    - Video: [TraversyMedia - CSS Grid Layout Crash Course](https://www.youtube.com/watch?v=jV8B24rSN5o)
    - Article: [Learn CSS Grid in 5 Minutes](https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228)
    

## Material Review
   
- HTML
  - Chrome Developer Tools (view source, inspect, modify element and css)
  - a markdown language: semantics of tags
  - HTML4 vs HTML5
  - XML and XSD
  - XHTML vs HTML and valid HTML
  - DOCTYPE, XDS
  - Use HTML tags: `<html>`, `<head>`, `<link>`, `<script>`, `<body>`, `<meta>`, `<title>`, `<h1>` - `<h6>`, `<p>`, `<a>`, `<img>`, `<article>`, `<aside>`, `<strong>`, `<em>`, `<span>`, `<div>`, `<header>`, `<main>`, `<aside>`,`<footer>`, `<section>`, `<ul>`, `<ol>`, `<li>`, `<dd>`, `<dt>`, `<pre>`, `<blockquote>`, `<hgroup>`, `<nav>`, `<q>`
  
- CSS
  - the box model: Paddings, Borders and Margins
  - sizes, background images
  - font styling and coloring: name and color codes
  - class and id
  - default browser styles
  - smarter selectors: Descendant, Multiple elements, Combined, Universal, Attribute, Child, Adjacent, Pseudo, first-child, last-child, nth-child, nth-type
  - inheritance
  - definition order + !important
  - Google web fonts
  - mention of bootstrap
  

## See also

- [MDN - HTTP](https://developer.mozilla.org/hu/docs/Web/HTTP)
- [MDN - HTML](https://developer.mozilla.org/hu/docs/Web/HTML)
- [MDN - CSS](https://developer.mozilla.org/hu/docs/Web/CSS)
   

## License 

Copyright © Progmasters (QTC Kft.), 2016-2019.
All rights reserved. No part or the whole of this Teaching Material (TM) may be reproduced, copied, distributed, publicly performed, disseminated to the public, adapted or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of QTC Kft. This TM may only be used for the purposes of teaching exclusively by QTC Kft. and studying exclusively by QTC Kft.’s students and for no other purposes by any parties other than QTC Kft.
This TM shall be kept confidential and shall not be made public or made available or disclosed to any unauthorized person.
Any dispute or claim arising out of the breach of these provisions shall be governed by and construed in accordance with the laws of Hungary. 


