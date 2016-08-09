# CSS-Only-Burger-Navigation-Menu

A small CSS "library" providing a simple off site burger navigation menu in pure CSS. This is highly inspired by [Pure CSS Off-screen Navigation Menu](https://www.sitepoint.com/pure-css-off-screen-navigation-menu/) by Austin Wulf @ sitepoint.

Using this as is might not be suitable in a lot of projects, but it should provide a great starting point.

## Examples

_Comming soon_

## Usage

Embed `css-only-burger-navigation-menu.css` and use the following HTML in your body tag, placing your content in `.content`.

```html
<input class="nav-checkbox" type="checkbox" id="nav-checkbox" />
<label class="nav-label" for="nav-checkbox"><span class="burgericon"></span></label>

<ul class="nav">
  <li class="nav-item"><a href="#">nav1</a></li>
  <li class="nav-item"><a href="#">nav2</a></li>
  <li class="nav-item"><a href="#">nav3</a></li>
</ul>

<div class="content">
  /* Content goes here */
</div>
```

## License

The project is released under the [MIT license](https://opensource.org/licenses/MIT).

The burger icon are from [jonsuh/hamburgers](/jonsuh/hamburgers), also released under the [MIT license](https://opensource.org/licenses/MIT).