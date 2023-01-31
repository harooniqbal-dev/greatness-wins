# Feature name

## Description
Describe the coded functionality / block

## Ticket
Insert a link to the task from Clickup or Teamwork

## Problem
If you fixed the bug, describe the error you solved

## Solution
If you fixed the bug, describe the solution you found to solve it

## New package.json dependencies / devDependencies
If you installed new npm packages, please list them below

:warning: Pay special attention if ESLint doesn't return an error related to the wrong package installation location! 

## Output screenshots
If the UI layer has changed, paste the following screenshots of the effect of the coded block or feature and paste a screenshot of the design from the graphic designer. If you do not have mobile graphics remove the mobile column

### Breakpoints

| XS <575px|MD (768px - 991px)|XL > 1200px|
|----------|------------------|-----------|
| URL      | URL              | URL       |

### Design

|Desktop design|Mobile design|
|--------------|-------------|
| URL          | URL         |

### Backend

|Backend fields|
|--------------|
| URL          |

Additionally, if you have added a WYSIWYG editor to the box, paste the following HTML code into the editor box and take a screenshot of the block on the front end of the page. Do the same by removing all content from the editor and paste screenshot into table.

|WYSWIG with HTML|Empty WYSWIG|
|----------------|------------|
| URL            | URL        |

```html
Pellentesque vel <strong>libero in odio auctor vehicula</strong> a at <em>lectus. Donec eros lacus, tempor a eros ac</em>, <a href="http://www.google.com">viverra egestas</a> nibh.
<h1>Nunc aliquam</h1>
<p>Vestibulum at suscipit lorem. Duis accumsan leo eu tellus fringilla,</p>
<h2>faucibus nibh</h2>
<p>Vestibulum at suscipit lorem. Duis accumsan leo eu tellus fringilla,</p>
<h3>a lacinia. Nunc</h3>
<p>Vestibulum at suscipit lorem. Duis accumsan leo eu tellus fringilla,</p>
<h4>ullamcorper scelerisque</h4>
<p>Vestibulum at suscipit lorem. Duis accumsan leo eu tellus fringilla,</p>
<h5>tellus, ac mattis orci lobortis nec.</h5>
<p>Vestibulum at suscipit lorem. Duis accumsan leo eu tellus fringilla,</p>
<h6>Maecenas ornare felis id enim pharetra,</h6>
<p>Vestibulum at suscipit lorem. Duis accumsan leo eu tellus fringilla,</p>
<pre> non pellentesque lorem pretium.</pre>
<hr>
<ul>
 	<li>Duis facilisis posuere lacus,</li>
 	<li>sed dignissim orci feugiat quis.</li>
 	<li>uspendisse eget mauris interdum,</li>
</ul>
<ol>
 	<li>malesuada ex et, imperdiet mauris.</li>
 	<li>Vestibulum vel tincidunt magna.</li>
 	<li>Donec euismod venenatis sem</li>
</ol>
<hr>
<blockquote>vitae facilisis. Sed justo augue, ullamcorper vel est malesuada, iaculis eleifend lorem. Praesent ut lobortis ex. Donec consectetur diam ac laoreet scelerisque. Aenean lobortis volutpat justo sed condimentum.</blockquote>
<p style="text-align: center;">Vestibulum at suscipit lorem. Duis accumsan leo eu tellus fringilla,</p>
<p style="text-align: right;">et fermentum lectus dapibus. Pellentesque arcu diam, dignissim ac</p>
```


## Did you test this feature on all browsers?

Test your functionality on each of the following browsers and check the checkbox when testing 

:warning: Remember that when you upload another commit you should test the functionality again

- [ ] Chrome
- [ ] Chrome -- Android
- [ ] Firefox
- [ ] Safari
- [ ] Safari -- iOS


## Short checklist

- [ ] There isn't [hardcoded content (i18n)](uhttps://acclaim.center/procedury/template-strings)
- [ ] There are no errors in [W3C markup validation service](https://validator.w3.org/#validate_by_input)
- [ ] Code is semantic and consistent with [good SEO practices](https://acclaim.center/zasoby/dobre-praktyki-seo-podczas-tworzenia-nowego-projektu)
- [ ] Where it's needed, you've included a code comments for JS and Liquid templates
- [ ] Font sizes match the values defined in the Tailwind CSS config or the default ones if there aren't any custom font sizes
- [ ] I tested the functionality/section based on [this article](https://acclaim.center/zasoby/dobre-praktyki-w-dbaniu-o-wysoka-jakosc-projektu-czyli-qa-po-stronie-dewelopera)
- [ ] There are no [errors and warnings](https://acclaim.center/procedury/weryfikacja-konsoli) in the development console
- [ ] All of the images and graphics are [lazyloaded](https://acclaim.center/procedury/lazy-load)
- [ ] The code has been built based on the [Tailwind CSS classes](https://tailwindcss.com/docs/utility-first)
- [ ] All custom classes have coverage in JS, Liquid
- [ ] The block / section is perfectly matched with the design provided by the customer keeping the [Tailwind CSS default spacing scale](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale) - so it means we can round some values +- 5% to find the best TailwindCSS value
- [ ] Clickable elements (links, buttons) have hover, focus and active styles
- [ ] If you added inline an SVG file, make sure that it has *unique* ID and it's cleaned with [SVGOMG tool](https://jakearchibald.github.io/svgomg/)
