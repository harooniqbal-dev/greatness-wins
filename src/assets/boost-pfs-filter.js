/** VERSION: 1.0.0 Please do not delete this line. Thank you! **/
if(typeof lazySizes !== 'function' && typeof lazySizes !== 'object'){
  /*! lazysizes - v4.1.8 */
  !function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
  /*! ls.rias.min.ks - v4.1.8 */
  !function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
}

// Fix the confict suggestion search in Debut theme
if (typeof theme !== 'undefined' && theme.hasOwnProperty('settings')) theme.settings.predictiveSearchEnabled = false;
// Override Settings
var boostPFSFilterConfig = {
general: {
  limit: boostPFSThemeConfig.custom.products_per_page,
  /* Optional */
  loadProductFirst: true,
  // Placeholder  
  showPlaceholderProductList: true,
  placeholderProductPerRow: 3,
  placeholderProductGridItemClass: 'boost-pfs-filter-product-item boost-pfs-filter-product-item-grid boost-pfs-filter-grid-width-3 boost-pfs-filter-grid-width-mb-2',
  enableOTP: true,
  aspect_ratio: boostPFSThemeConfig.custom.aspect_ratio,
  cropImagePossitionEqualHeight: boostPFSThemeConfig.custom.product_img_crop,
  defaultDisplay: boostPFSThemeConfig.custom.product_item_type,
  selectOptionContainer: '.boost-pfs-filter-product-item-image',  // CSS selector to append the product option, if left empty it will append to the product item
},
selector: {
  otpButtons: '.boost-pfs-filter-product-item-image',
}
};

(function() {
var onSale = false,
  soldOut = false,
  priceVaries = false,
  images = [],
  firstVariant = {},
  boostPFSImgDefaultSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
  boostPFSRangeWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048];

BoostPFS.inject(this);
boostPFSFilterConfig.general.separateRefineByFromFilter = (jQ('.boost-pfs-filter-tree-h').length && !Utils.isMobile() > 0 && boostPFSThemeConfig.custom.filter_tree_horizontal_style != 'style-expand') ? true : false;
Selector.stickyElementDesktop = jQ('.boost-pfs-filter-tree-v').length > 0 && !Utils.isMobile() ?  '.boost-pfs-filter-left-col' : '.boost-pfs-filter-tree';

/************************** CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
function prepareShopifyData(data) {
  // Displaying price base on the policy of Shopify, have to multiple by 100
  soldOut = !data.available; // Check a product is out of stock
  onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Convert images to array
  images = data.images_info;
  // Get First Variant (selected_or_first_available_variant)
  firstVariant = data['variants'][0];
  if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == Utils.getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  return data;
}

/************************** END CUSTOMIZE DATA BEFORE BUILDING PRODUCT ITEM **************************/
/************************** BUILD PRODUCT LIST **************************/
// Build Product Grid Item
ProductGridItem.prototype.compileTemplate = function(data) {
  if (!data) data = this.data;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);

  // Get Template
  var itemHtml = boostPFSTemplate.productGridItemHtml;
  // Add Custom class
  var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
  var saleClass = onSale ? boostPFSTemplate.saleClass : '';

  var description = data.description ? data.description.substring(0, data.description.indexOf(".") + 1) : ""

  itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  // Add Grid Width class
  itemHtml = itemHtml.replace(/{{gridWidthClass}}/g, buildGridWidthClass(data));
  // Add Label
  itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
  // Add TAG Label
  itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
  // Add Images
  itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));
  // Add Price
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, Utils.formatMoney(data.price_min));

  // Add Review
  if (typeof Integration === 'undefined' ||
    (typeof Integration != 'undefined' &&
      typeof Integration.hascompileTemplate == 'function' &&
      !Integration.hascompileTemplate('reviews'))) {
    itemHtml = itemHtml.replace(/{{itemReviews}}/g, buildReview(data));
  }

  var optionsExcerpt = function (data) {
    if (data.options_with_values) {
      return data.options_with_values.map(function (elem) {
        return elem.values.length + " " + elem.label + (elem.values.length > 1 ? "s" : "")
      }).join(", ")
    }

    return ""
  }

  // Add Vendor
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));

  // itemActiveSwapClass
  itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, buildActiveSwapClass(data));

  // Add Color Swatches
  itemHtml = itemHtml.replace(/{{itemSwatches}}/g, buildProductOptionSwatches(data));

  // Add main attribute (Always put at the end of this function)
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
  itemHtml = itemHtml.replace(/{{itemDescription}}/g, description);
  itemHtml = itemHtml.replace(/{{itemImage}}/g, buildImage(data));
  itemHtml = itemHtml.replace(/{{itemImage1}}/g, buildImage(data, true));
  itemHtml = itemHtml.replace(/{{itemOptionsExcerpt}}/g, optionsExcerpt(data));
  itemHtml = itemHtml.replace(/{{itemLabel}}/g, data.tags ? '<div class="absolute left-6 right-6 top-4 border border-black text-center text-xxs uppercase font-semibold p-2">' + data.tags[0] + '</div>' : "");

  return itemHtml;
};
// Build Product List Item
ProductListItem.prototype.compileTemplate = function(data) {
  if (!data) data = this.data;
  // Customize API data to get the Shopify data
  data = prepareShopifyData(data);

  // For List View
  // Get Template
  var itemHtml = boostPFSTemplate.productListItemHtml;

  // Add Custom class
  var soldOutClass = soldOut ? boostPFSTemplate.soldOutClass : '';
  var saleClass = onSale ? boostPFSTemplate.saleClass : '';

  itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  // Add Label
  itemHtml = itemHtml.replace(/{{itemLabels}}/g, buildLabels(data));
  // Add TAG Label
  itemHtml = itemHtml.replace(/{{itemTagLabels}}/g, buildTagLabels(data, false));
  // Add Images
  itemHtml = itemHtml.replace(/{{itemImages}}/g, buildImages(data));

  // Add Review
  if (typeof Integration === 'undefined' ||
    (typeof Integration != 'undefined' &&
      typeof Integration.hascompileTemplate == 'function' &&
      !Integration.hascompileTemplate('reviews'))) {
    itemHtml = itemHtml.replace(/{{itemReviews}}/g, buildReview(data));
  }

  // Add Vendor
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, buildVendor(data));

  // Add Price
  var itemPriceHtml = buildPrice(data, onSale, priceVaries);
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

  // Description
  var itemDescription = "";
  if (data.body_html != null){
    var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
    itemDescription = (itemDescription.split(" ")).length > 35 ? itemDescription.split(" ").splice(0, 35).join(" ") + '...' : itemDescription.split(" ").splice(0, 35).join(" ");
  }
  itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);

  // itemActiveSwapClass
  itemHtml = itemHtml.replace(/{{itemActiveSwapClass}}/g, buildActiveSwapClass(data));

  // Add Color Swatches
  itemHtml = itemHtml.replace(/{{itemSwatches}}/g, buildProductOptionSwatches(data));

  // Add main attribute
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data));
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);

  return itemHtml;
  // End For List View
};

/************************** END BUILD PRODUCT LIST **************************/
/************************** BUILD PRODUCT ITEM ELEMENTS **************************/
function buildGridWidthClass() {
  var gridWidthClass = '';
  // On PC
  switch (boostPFSThemeConfig.custom.products_per_row) {
    case 2:
      gridWidthClass = 'boost-pfs-filter-grid-width-2';
      break;
    case 3:
      gridWidthClass = 'boost-pfs-filter-grid-width-3';
      break;
    case 5:
      gridWidthClass = 'boost-pfs-filter-grid-width-5';
      break;
    case 6:
      gridWidthClass = 'boost-pfs-filter-grid-width-6';
      break;
    default:
      gridWidthClass = 'boost-pfs-filter-grid-width-4';
      break;
  }
  // On Mobile
  switch (boostPFSThemeConfig.custom.products_per_row_m) {
    case 1:
      gridWidthClass += ' boost-pfs-filter-grid-width-mb-1';
      break;
    case 3:
      gridWidthClass += ' boost-pfs-filter-grid-width-mb-3';
      break;
    default:
      gridWidthClass += ' boost-pfs-filter-grid-width-mb-2';
      break;
  }
  return gridWidthClass;
}

function buildImage(data, scnd) {
  var html = '',
    rangeWidths = boostPFSRangeWidths

  var dataSrcSet = '',
    dataWidths = '',
    dataSizes = 'auto',
    imgAlt = data.title,
    flipImageSrcSet = '',
    noImage = '';

  var activeSwapImage = !Utils.isMobile() && images.length > 1 &&
    boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
    boostPFSThemeConfig.custom.active_image_swap == true;

  for (var i = 0; i < rangeWidths.length; i++) {
    dataSrcSet += Utils.getFeaturedImage(images, rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
    dataWidths += rangeWidths[i];

    if (activeSwapImage) {
      flipImageSrcSet += Utils.optimizeImage(images[1]['src'], rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
    }

    if (i < rangeWidths.length - 1) {
      dataSrcSet += ', ';
      dataWidths += ', ';

      if (activeSwapImage) {
        flipImageSrcSet += ', ';
      }
    }
  }

  html += '<img class="' + (scnd || !images[1] ? '' : 'product-tile__img absolute ') + 'aspect-[3/4] object-cover w-full bg-gray-50 block lazyload Image--lazyLoad"' +
    'data-src="' + ((scnd && images[1]) ? images[1].src : Utils.getFeaturedImage(images, rangeWidths[2] + 'x')) + '" ' +
    'data-widths="[' + dataWidths + ']" ' +
    'data-sizes="' + dataSizes + '" ' +
    'src="' + boostPFSImgDefaultSrc + '" ' +
    'alt="' + imgAlt + '"  ';
  html += '/>';

  noImage += '<svg class="aspect-[3/4] object-cover w-full block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525.5 525.5">' + 
    '<path d="M370.4 183.2c-21 0-38 17-38 38s17 38 38 38 38-17 38-38-17.1-38-38-38zm0 75c-20.4 0-37-16.6-37-37s16.6-37 37-37 37 16.6 37 37-16.6 37-37 37z"/>' +
    '<path d="M370.4 191.4c.6 0 1-.4 1-1v-4.1c0-.6-.4-1-1-1s-1 .4-1 1v4.1c0 .6.4 1 1 1zm0 59.5c-.6 0-1 .4-1 1v4.1c0 .6.4 1 1 1s1-.4 1-1v-4.1c0-.5-.5-1-1-1zm29.7-29.7c0 .6.4 1 1 1h4.1c.6 0 1-.4 1-1s-.4-1-1-1h-4.1c-.5 0-1 .4-1 1zm-59.5 0c0-.6-.4-1-1-1h-4.1c-.6 0-1 .4-1 1s.4 1 1 1h4.1c.6 0 1-.5 1-1zm55.9-15.1c.1.2.3.2.4.2.1 0 .2 0 .2-.1l3.6-2.1c.2-.1.3-.4.2-.7-.1-.2-.4-.3-.7-.2l-3.6 2.1c-.1.2-.2.5-.1.8zm-52.9 30-3.6 2.1c-.2.1-.3.4-.2.7.1.2.3.2.4.2.1 0 .2 0 .2-.1l3.6-2.1c.2-.1.3-.4.2-.7-.1-.2-.4-.3-.6-.1zm42.5 11.3c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l2.1 3.7c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-2-3.6zM354.7 195c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-2.1-3.7c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l2.2 3.8zm30.7.2c.1 0 .2.1.2.1.2 0 .3-.1.4-.2l2.2-3.7c.1-.2.1-.5-.2-.7-.2-.1-.5-.1-.7.2l-2.2 3.7c-.1.2 0 .5.3.6zm-30 51.9c-.2-.1-.5-.1-.7.2l-2.2 3.7c-.1.2-.1.5.2.7.1 0 .2.1.2.1.2 0 .3-.1.4-.2l2.2-3.7c.2-.3.1-.6-.1-.8zm45.4-9-3.6-2.1c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l3.6 2.1c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.2-.3.1-.6-.1-.8zm-56.7-32.7-3.6-2.1c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l3.6 2.1c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.2-.3.1-.6-.1-.8zm47.8 12.6-2.7-.5c-1.4-.2-2.9-.3-4.3-.1l-13 1.6v-15.5c0-2.6-.3-5.2-1-7.8-.1-.2-.3-.4-.5-.4s-.4.2-.5.4c-.7 2.5-1 5.1-1 7.7v16.4c-.3.4-.5.9-.5 1.5 0 .4.2.7.4 1-.1 0-.1.1-.2.1l-19.5 23.8c-.2.2-.1.5.1.7.1.1.2.1.3.1.1 0 .3-.1.4-.2l19.5-23.8c.1-.1.1-.2.1-.3.2.1.5.2.8.2h.2l14.7-1.8c1.4-.2 2.8-.6 4.2-1.1l2.5-1.1c.2-.1.3-.3.3-.5.1-.2-.1-.4-.3-.4zm-22-14.5c0-1.8.2-3.5.5-5.3.3 1.7.5 3.5.5 5.3V219l-.9.2v-15.7zm19.2 15.6c-1.2.5-2.6.9-3.9 1.1l-14.7 1.8c-.5.1-.9-.3-1-.8-.1-.5.3-.9.8-1l14.7-1.8c.6-.1 1.2-.1 1.7-.1.8 0 1.5.1 2.3.2l1.1.2-1 .4z"/>' + 
    '<path d="M458 302V157c0-4-3.2-7.2-7.2-7.2H400c-.6 0-1 .4-1 1s.4 1 1 1h50.8c2.9 0 5.2 2.3 5.2 5.2v145h-3.5V159.7c0-2.3-1.9-4.2-4.2-4.2h-49.4v-15.6c0-.6-.4-1-1-1H343c-.6 0-1 .4-1 1v9.9h-34.6c-.1 0-.2 0-.3.1-3.4-3.8-8.3-6.2-13.8-6.2h-24v-1.1c0-2.4-2-4.4-4.4-4.4h-37.3c-2.4 0-4.4 2-4.4 4.4v1.3c-.2-.1-.3-.2-.5-.2H133c-.3-3.1-2.9-5.5-6.1-5.5h-15c-3.2 0-5.8 2.4-6.1 5.5H80.4c-10.3 0-18.6 8.4-18.6 18.6V252c0 10.3 8.4 18.6 18.6 18.6h25.4v28.2c0 3.4 2.7 6.1 6.1 6.1h15c3.4 0 6.1-2.7 6.1-6.1v-28.7c.2.3.5.4.8.4h36.5V360h-44.7c-6.4 0-12.5 3-16.4 8l-11.4 14.7c-.7.8-.8 2-.3 2.9s1.4 1.6 2.5 1.6h167.9c1.1 0 2-.6 2.5-1.6s.4-2.1-.3-2.9L258.7 368c-3.9-5-10-8-16.4-8h-44.5v-89.5h21.8c2.1 11.1 3 26.5 3.1 39.9 0 2.4 2 4.4 4.4 4.4h37.3c2.4 0 4.4-2 4.4-4.4.2-13.9 1.2-29.2 3.3-40 .1.1.3.1.5.1h9.9V302c-3.2.3-5.8 3-5.8 6.3V381c0 3.5 2.8 6.4 6.4 6.4h174.4c3.5 0 6.4-2.8 6.4-6.4v-72.6c-.1-3.4-2.7-6.1-5.9-6.4zm-9.7-144.5c1.2 0 2.2 1 2.2 2.2V302h-8.3V191.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5V302h-42.3v-32.7c0-.6-.4-1-1-1h-8.6c-.1 0-.2 0-.3.1l.4-1.4h4.9c3.3 0 6.2-2.2 7-5.4l3.8-14.6v-.4c3.7-5.1 6.4-11.1 7.5-17.6h3.1c2.4 0 4.4-2.2 4.4-4.9v-5.8c0-2.7-2-4.9-4.4-4.9h-3.1c-1.2-6.5-3.8-12.4-7.6-17.6v-.4l-3.8-14.6c-.8-3.2-3.7-5.4-7-5.4h-4.9l-.4-1.5c.1 0 .2.1.3.1h8.6c.6 0 1-.4 1-1v-5.7h35.8c3.6 0 6.5 2.9 6.5 6.5v8.7c0 .3.2.5.5.5s.5-.2.5-.5v-8.7c0-4.2-3.4-7.5-7.5-7.5h-35.8v-8.8h49.5zM298.7 271.7c-.3 0-.5.2-.5.5V302h-8.3v-31.4h3.2c10.3 0 18.6-8.4 18.6-18.6v-84.7h30.1v5.7c0 .6.4 1 1 1h8.6c.1 0 .2 0 .3-.1l-.4 1.5h-4.9c-3.3 0-6.2 2.2-7 5.4l-3.8 14.6v.4c-5.2 7.1-8.3 15.8-8.3 25.3s3.1 18.2 8.3 25.3v.4l3.8 14.6c.8 3.2 3.7 5.4 7 5.4h4.9l.4 1.4c-.1 0-.2-.1-.3-.1h-8.6c-.6 0-1 .4-1 1V302h-42.6v-29.8c0-.3-.2-.5-.5-.5zm114.6-47.9c0-.7.1-1.4.1-2.1h4.8v2.1h-4.9zm4.8-3.1h-4.8c0-.7 0-1.4-.1-2.1h4.8v2.1zm-4.9 4.1h4.8c-.3 1.2-1.2 2.1-2.3 2.1H413c.1-.7.1-1.4.2-2.1zm0-7.3-.3-2.1h2.8c1.1 0 2 .9 2.3 2.1h-4.8zm-1.8 3.7c0 22.6-18.4 41-41 41s-41-18.4-41-41 18.4-41 41-41 41 18.4 41 41zm-23.2 51.1v12.5h-35.7v-12.5h35.7zm2 24.9h6.6v4.2h-6.6v-4.2zm6.7-2h-6.6v-13.7h6.6v13.7zm-53 2h6.6v4.2h-6.6v-4.2zm0-2v-13.7h6.6v13.8h-6.6zm6.6-23.9v8.1h-6.6v-9.2h6.6v1.1zm2 15.5h35.7v3.7h-35.7v-3.7zm44.4-7.3h-6.6v-9.2h6.6v9.2zm-9.2-13.9-1.1 3.6c-.2.7-.8 1.1-1.5 1.1h-29.3c-.7 0-1.3-.5-1.5-1.1l-1.1-3.6c-.1-.4-.5-.7-1-.7h-5.6c-2.4 0-4.5-1.6-5.1-3.9l-2.8-10.9c7.9 8.6 19.2 14.1 31.8 14.1 12.6 0 23.9-5.4 31.8-14.1l-2.9 10.9c-.6 2.3-2.7 3.9-5.1 3.9h-5.6c-.5 0-.9.3-1 .7zm-17.3-87.4c-12.6 0-23.9 5.4-31.8 14.1l2.9-10.9c.6-2.3 2.7-3.9 5.1-3.9h5.6c.4 0 .8-.3 1-.7l1.1-3.6c.2-.7.8-1.1 1.5-1.1H385c.7 0 1.3.5 1.5 1.1l1.1 3.6c.1.4.5.7 1 .7h5.6c2.4 0 4.5 1.6 5.1 3.9l2.8 10.9c-7.8-8.7-19.1-14.1-31.7-14.1zm-26.5-15.3h6.6v9.1h-6.6v-9.1zm8.6 7.1v-12.5h35.7V170h-35.7zm35.7-14.5h-35.7v-3.7h35.7v3.7zm2 7.4h6.6v9.2h-6.6v-9.2zm6.7-2h-6.6v-13.8h6.6v13.8zm-8.7-11.1h-35.7v-8.9h35.7v8.9zm-37.7 11.1h-6.6v-13.7h6.6v13.7zm-8.6 5.4h-30.1v-4c0-1.7-.2-3.3-.7-4.8h30.7v8.8zm10.6 126.2h35.7v9.5h-35.7v-9.5zm44.4-147.3h-6.6V141h6.6v4.2zm-46.4-4.3v4.2h-6.6v-4.2h6.6zm-8.7 10.9c.1 0 .1 0 0 0v3.7h-31.4c-.5-1.3-1.2-2.5-2-3.7h33.4zm-116.9-9.2c0-1.3 1.1-2.4 2.4-2.4h37.3c1.3 0 2.4 1.1 2.4 2.4.1 9.4.7 37.3 5.9 49.9-1.8-.9-3.9-1.4-6-1.4h-42.1c-2.2 0-4.2.5-6 1.4 1.9-4.6 3.4-11.8 4.5-21.5 1.3-11.7 1.6-23.8 1.6-28.4zm55.7 71.8h3.2v2h-3.2v-2zm3.2-1h-3.2v-2h3.2v2zm-3.2 3.9h3.2v.5c0 1.6-1.3 2.9-2.9 2.9h-.3v-3.4zm3.2-6.9h-3.2V207h.3c1.6 0 2.9 1.3 2.9 2.9v.5zm-5.2-4.3v41.8c0 2.8-1 5.3-2.6 7.3-.3.3-.6.6-.9 1-2.1 2.1-5 3.4-8.2 3.4h-42.1c-3.2 0-6.1-1.3-8.2-3.4-.3-.4-.6-.7-.9-1-1.6-2-2.6-4.5-2.6-7.3v-43.1c0-2.8 1-5.3 2.6-7.3.3-.3.6-.6.9-1 2.1-2.1 5-3.4 8.2-3.4h42.1c3.2 0 6.1 1.3 8.2 3.4.3.4.6.7.9 1 1.6 2 2.6 4.5 2.6 7.3v1.3zM132 256.8h-4c4-.9 7.8-2.5 11.2-4.6-.2 2.6-2.3 4.6-4.9 4.6H132zm-26.2 0c-2.6 0-4.8-2.1-4.9-4.6 3.4 2.1 7.2 3.7 11.2 4.6h-6.3zm14.3-1.2c-18.8 0-34.1-15.3-34.1-34.1s15.3-34.1 34.1-34.1 34.1 15.3 34.1 34.1c-.1 18.9-15.4 34.1-34.1 34.1zm-14.3-69.2h6.4c-4.1.9-7.9 2.5-11.3 4.7.2-2.6 2.3-4.7 4.9-4.7zm22.1 0h6.3c2.6 0 4.8 2.1 4.9 4.7-3.3-2.2-7.1-3.8-11.2-4.7zm-20.1-42.1c0-2.3 1.8-4.1 4.1-4.1h15c2.3 0 4.1 1.8 4.1 4.1v40.1h-23.2v-40.1zM80.4 268.6c-9.2 0-16.6-7.5-16.6-16.6v-89.7c0-9.2 7.5-16.6 16.6-16.6h25.4v38.7c-3.8 0-6.9 3.1-6.9 7v.4c0 .2.1.4.2.5-9.1 6.6-15 17.2-15 29.3 0 12.1 6 22.9 15.3 29.4-.2.2-.4.5-.4.8 0 3.8 3.1 7 6.9 7v5.6H80.6c-7 0-12.7-5.7-12.7-12.7v-17.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v17.4c0 7.6 6.2 13.7 13.7 13.7h25.2v3.3H80.4zm50.6 30.3c0 2.3-1.8 4.1-4.1 4.1h-15c-2.3 0-4.1-1.8-4.1-4.1v-40.1H131v40.1zm41.4-28.3h6.9c2.3 13.6.5 26.7-1.2 39.5-2.1 15.9-4.3 32.3 1.2 50h-6.9v-89.5zm10.9 48.2c.1 2.1.2 4.8.2 8 .1 11.2.3 26.2 5.3 33.3h-8.5v-.2c-5.5-17.5-3.3-33.9-1.2-49.7 1.7-12.7 3.5-25.9 1.2-39.6h11c.1 7.8-1.9 15.4-4 22.6-2.2 8.2-4.5 16.5-4 25.6zm26.4 43.3c-4.1 6.4-11.5 6.7-18.7 7-2.8.1-5.4.2-7.8.6-6.9 1.3-9.7 3.7-12.5 6.4-1.9 1.7-3.8 3.5-7.1 5-3.7 1.7-6.4 2.2-8.3 1.5-2.2-.9-3.2-3.5-4.3-6.2-.7-1.9-1.5-3.8-2.7-5.5-.6-.9-2.3-1.8-4.3-2.9-3.1-1.7-7-3.8-6.6-5.9h14.1c1.3 3.9 4 10 8.3 11.4.6.2 1.3.3 1.9.3 1.5 0 3.1-.6 4.8-1.8 4.3-3.1 7.9-4.7 11.1-6.2 2.6-1.2 4.8-2.2 6.6-3.7h25.5zm-38.3 0h11.2c-1.5 1-3.3 1.9-5.4 2.8-3.1 1.4-7 3.2-11.3 6.3-2.1 1.5-4 1.9-5.8 1.3-3.8-1.3-6.3-6.7-7.5-10.4h18.8zm-35 0c-.3 2.7 3.8 4.9 7.2 6.8 1.8 1 3.5 1.9 4 2.6 1.1 1.6 1.9 3.4 2.6 5.2 1.2 3 2.2 5.7 4.9 6.8.7.3 1.5.4 2.3.4 1.8 0 4-.6 6.8-1.9 3.4-1.6 5.4-3.4 7.3-5.2 2.8-2.5 5.4-4.9 12-6.1 2.3-.4 4.9-.5 7.6-.6 7.3-.3 15.6-.6 19.8-8h19.8c-3.1 1.3-6.7 3.6-10.2 6-4 2.7-7.7 5.2-10.5 5.9-2 .5-5.2.5-8.8.6-7.9.1-17.7.3-22.1 5-1.4 1.5-2.2 3.5-2.2 5.8h-33.4c-.2-7.6-2.4-10.8-7.7-15.4-1.1-1-3.7-1.5-6.7-2.2-2.6-.6-5.2-1.2-7.2-2.1-1.9-.9-2.5-1.8-2.6-2.5 2-.7 4.1-1.1 6.3-1.1h10.8zm-25.6 7.3c2-2.6 4.6-4.6 7.6-5.8.3 1.2 1.3 2.2 3.2 3.1 2.1.9 4.8 1.5 7.4 2.1 2.7.6 5.3 1.2 6.2 2 5.3 4.6 7.2 7.5 7.4 14.6h-13.4c-1.4-4.6-5.3-5.8-9.1-6.9-4.4-1.3-8.6-2.6-9.4-8.8l.1-.3zm-11.5 15.5c-.1-.1-.2-.5.1-.8l10.4-13.4c1.2 6 5.8 7.5 10 8.7 3.6 1.1 7 2.1 8.3 5.9H100c-.4 0-.6-.3-.7-.4zm169.3 0c-.1.1-.3.4-.7.4h-18.3c.7-7.7 4.5-7.6 11.1-7.2 1 .1 2.1.1 3.3.1l4.5 5.8c.3.4.2.8.1.9zm-5.4-7.7c-.8 0-1.7-.1-2.4-.1-6.8-.3-11.4-.5-12.2 8.2h-28.3c1.7-1 3.8-1.5 5.9-2.1 2.4-.6 4.7-1.2 6.4-2.5 1.2-.9 2.3-2.2 3.2-3.4.8-1 1.5-1.9 2.2-2.4.6-.4 1.1-.8 1.6-1.1 5.7-4.1 8.3-5.9 17.6-4.4h.2l5.8 7.8zm-6.8-8.7c-9-1.4-11.9.7-17.5 4.7-.5.4-1 .7-1.6 1.1-.8.6-1.6 1.5-2.4 2.6-.9 1.2-1.9 2.4-3 3.2-1.6 1.2-3.8 1.7-6.1 2.3-2.4.6-4.9 1.2-6.9 2.6-.1.1-.2.2-.2.4h-40.9c0-2.1.7-3.8 1.9-5.1 4-4.4 13.6-4.5 21.3-4.7 3.7-.1 7-.1 9.1-.6 3-.7 6.8-3.3 10.9-6 5.4-3.6 10.9-7.3 14.5-6.7.1 0 .3 0 .4-.1h6.2c5.5-.1 10.7 2.3 14.3 6.3zm-60.6-18c-10-15.7-4.9-33.8-1.2-47.1.4-1.5.8-3 1.2-4.4v51.5zm0-55.8c-.5 2.5-1.3 5.3-2.2 8.4-3.8 13.8-9.1 32.6 2 49 0 .1.1.1.1.1v7.9H190c-5.3-6.5-5.4-21.9-5.5-33.3 0-3.1-.1-5.9-.2-8-.5-8.9 1.7-17.2 4-25.2 2-7.3 4.1-14.9 4-22.9h3.5v24zm-62-26.1c-.3 0-.6.2-.8.4v-3.9c.1.1.2.2.4.2h78.7c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-78.7c-.2 0-.3.1-.4.2v-5.8h1.2c3.8 0 7-3.1 7-7 0-.3-.2-.6-.4-.8 7.9-5.6 13.4-14.2 14.9-24.2 2.6-.3 4.7-2.5 4.7-5.2s-2.1-4.9-4.7-5.2c-1.4-9.9-6.9-18.5-14.7-24.1.1-.2.2-.3.2-.5v-.4c0-3.8-3.1-7-7-7H133v-38.7h89.3c.2 0 .4-.1.5-.2-.4 20.5-2.7 42.8-7.7 49.5-2.5 2.5-4.1 5.9-4.1 9.7v43.1c0 3.8 1.5 7.2 4 9.7 1.6 2.2 3 6.1 4 11.1h-85.2zm22.1-51.2c2 .3 3.6 2.1 3.6 4.2s-1.6 3.9-3.6 4.2c.2-1.4.3-2.8.3-4.2s-.2-2.8-.3-4.2zm110.9 93.1c0 1.3-1.1 2.4-2.4 2.4h-37.3c-1.3 0-2.4-1.1-2.4-2.4-.1-9.5-.7-37.7-5.9-50.4 1.8.9 3.9 1.4 6 1.4h42.1c2.2 0 4.2-.5 6-1.4-5.1 12.7-6 40.9-6.1 50.4zm5.7-41.8c.3-1.2.5-2.4.8-3.5.1.1.2.2.4.2h18.7c7.6 0 13.7-6.2 13.7-13.7v-78.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v78.6c0 7-5.7 12.7-12.7 12.7h-18.9c.9-3 1.9-5.3 3-6.9 2.5-2.5 4.1-5.9 4.1-9.7v-25.1h.3c2.7 0 4.9-2.2 4.9-4.9v-7.9c0-2.7-2.2-4.9-4.9-4.9h-.3v-.3c0-3.8-1.6-7.2-4-9.7-5-6.7-7.1-29.7-7.4-49.3h24c9.2 0 16.6 7.5 16.6 16.6V252c0 9.2-7.5 16.6-16.6 16.6l-20.7.1c0-.1 0 0 0 0zm15.4 1.9V302h-3.5v-31.4h3.5zM461.8 381c0 2.4-2 4.4-4.4 4.4H283c-2.4 0-4.4-2-4.4-4.4v-72.6c0-2.4 2-4.4 4.4-4.4h174.4c2.4 0 4.4 2 4.4 4.4V381z"/>' + 
    '<path d="m457.4 310-6.5 5.7c-1.3-1.5-3.2-2.5-5.3-2.5H294.8c-3.8 0-6.9 3.1-6.9 6.9v51.1c0 .5.1 1 .2 1.4l-5.4 4.7c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .2 0 .3-.1l5-4.4c1 2.6 3.5 4.4 6.4 4.4h150.8c3.8 0 6.9-3.1 6.9-6.9v-51.1c0-1.3-.4-2.5-1-3.5l6.6-5.8c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7-.1zm-6.9 10.1v51.1c0 2.7-2.2 4.9-4.9 4.9h-149l31.7-27.9c.2-.2.2-.5 0-.7s-.5-.2-.7 0L295 376.2h-.3c-2.3 0-4.3-1.6-4.8-3.8l12.8-11.3c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0L289.9 371v-50.9c0-2.7 2.2-4.9 4.9-4.9h145.6l-14.7 12.9c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .2 0 .3-.1l15.3-13.5c.1-.1.1-.1.1-.2h3.8c1.5 0 2.9.7 3.8 1.8l-28 24.6c-.2.2-.2.5 0 .7.1.1.2.2.4.2.1 0 .2 0 .3-.1l27.9-24.5c.3.7.5 1.4.5 2.2zM120.1 191.3c-16.7 0-30.3 13.6-30.3 30.3 0 16.7 13.6 30.3 30.3 30.3 16.7 0 30.3-13.6 30.3-30.3 0-16.7-13.6-30.3-30.3-30.3zm0 59.6c-16.2 0-29.3-13.1-29.3-29.3s13.1-29.3 29.3-29.3 29.3 13.1 29.3 29.3-13.2 29.3-29.3 29.3z"/>' + 
    '<path d="M120.1 197.6c.3 0 .5-.2.5-.5v-3.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.2c0 .3.2.5.5.5zm0 47.9c-.3 0-.5.2-.5.5v3.2c0 .3.2.5.5.5s.5-.2.5-.5V246c0-.3-.3-.5-.5-.5zm27.6-24.4h-3.2c-.3 0-.5.2-.5.5s.2.5.5.5h3.2c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-51.6.5c0-.3-.2-.5-.5-.5h-3.2c-.3 0-.5.2-.5.5s.2.5.5.5h3.2c.3 0 .5-.2.5-.5zm45.1-11.7c.1 0 .2 0 .2-.1l2.8-1.6c.2-.1.3-.4.2-.7-.1-.2-.4-.3-.7-.2l-2.8 1.6c-.2.1-.3.4-.2.7.1.2.3.3.5.3zm-42.5 23.4-2.8 1.6c-.2.1-.3.4-.2.7.1.2.3.2.4.2.1 0 .2 0 .2-.1l2.8-1.6c.2-.1.3-.4.2-.7-.1-.1-.4-.2-.6-.1zm33.9 9.1c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l1.7 2.9c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-1.6-2.8zm-25.1-41.6c.1.2.3.2.4.2.1 0 .2 0 .2-.1.2-.1.3-.4.2-.7l-1.7-2.9c-.1-.2-.4-.3-.7-.2-.2.1-.3.4-.2.7l1.8 3zm24.4.2c.1 0 .2.1.2.1.2 0 .3-.1.4-.2l1.7-3c.1-.2.1-.5-.2-.7-.2-.1-.5-.1-.7.2l-1.7 3c0 .2.1.5.3.6zm-23.7 41.1c-.2-.1-.5-.1-.7.2l-1.7 3c-.1.2-.1.5.2.7.1 0 .2.1.2.1.2 0 .3-.1.4-.2l1.7-3c.2-.3.1-.6-.1-.8zm36.1-7.1-2.9-1.7c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l2.9 1.7c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.2-.4.1-.7-.1-.8zm-45.1-26-2.9-1.7c-.2-.1-.5-.1-.7.2-.1.2-.1.5.2.7l2.9 1.7c.1 0 .2.1.2.1.2 0 .3-.1.4-.2.3-.4.2-.7-.1-.8zm38 9.9-2.2-.4c-1.1-.2-2.3-.2-3.5-.1l-10.2 1.3v-13.8c0-2.1-.3-4.2-.8-6.2-.1-.4-.9-.4-1 0-.5 2-.8 4.1-.8 6.2v14.6c-.3.3-.4.8-.3 1.2 0 .3.1.5.3.7l-.1.1-15.5 18.9c-.2.2-.1.5.1.7.1.1.2.1.3.1.1 0 .3-.1.4-.2l15.5-18.9s0-.1.1-.1c.2.1.4.1.6.1h.2l11.7-1.5c1.2-.1 2.3-.5 3.3-.9l2-.9c.2-.1.3-.3.3-.5 0-.1-.2-.3-.4-.4zm-17.4-13c0-1.2.1-2.4.3-3.6.2 1.2.3 2.4.3 3.6v13.9l-.5.1v-14zm15.1 14c-1 .4-2 .7-3.1.8l-11.7 1.5c-.3 0-.6-.2-.7-.5 0-.2 0-.3.1-.5.1-.1.2-.2.4-.2l11.7-1.5c.5-.1.9-.1 1.4-.1.6 0 1.2.1 1.8.2l.5.1-.4.2z"/>' + 
    '<path d="M103.9 214.8h11.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-11.3c-.3 0-.5.2-.5.5s.2.5.5.5zm2.3 2.3c-.3 0-.5.2-.5.5s.2.5.5.5h6.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6.8zm5.7 48.9c.3 0 .5-.2.5-.5v-2.1c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.1c0 .3.2.5.5.5zm0 24.8c.3 0 .5-.2.5-.5v-3.7c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.7c0 .3.2.5.5.5zm0 7.8c.3 0 .5-.2.5-.5V296c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .2.2.4.5.4zm4.1-24c.3 0 .5-.2.5-.5v-4.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.9c0 .3.2.5.5.5zm0 6.3c.3 0 .5-.2.5-.5v-2.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .3.2.5.5.5zm5.1 11.3c.3 0 .5-.2.5-.5v-4.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.9c0 .3.2.5.5.5zm0-8.7c.3 0 .5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm6 16.7c.3 0 .5-.2.5-.5v-3.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.8c0 .3.2.5.5.5zm0-6.6c.3 0 .5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm0-14c.3 0 .5-.2.5-.5v-1.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm0-6.6c.3 0 .5-.2.5-.5v-4.3c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.3c0 .3.2.5.5.5zm0-9c.3 0 .5-.2.5-.5v-2.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.6c0 .3.2.5.5.5zm0-114.4c.3 0 .5-.2.5-.5v-3.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.2c0 .3.2.5.5.5zm0 20.3c.3 0 .5-.2.5-.5V165c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.4c0 .3.2.5.5.5zm0 10.1c.3 0 .5-.2.5-.5v-2.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .3.2.5.5.5zm-4.2-6.9c.3 0 .5-.2.5-.5v-3.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.8c0 .3.3.5.5.5zm0 5.4c.3 0 .5-.2.5-.5v-2.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.2c0 .3.3.5.5.5zm-5.1-26.7c.3 0 .5-.2.5-.5v-2.9c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.9c0 .2.3.5.5.5zm0-5.7c.3 0 .5-.2.5-.5V143c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.6c0 .3.3.5.5.5zm0 18.8c.3 0 .5-.2.5-.5v-3.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v3.8c0 .3.3.5.5.5zm-5.9 7c.3 0 .5-.2.5-.5V170c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.4c0 .3.2.5.5.5zm0-6.4c.3 0 .5-.2.5-.5v-4.8c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.8c0 .3.2.5.5.5zm0-12.3c.3 0 .5-.2.5-.5v-2.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.5c0 .3.2.5.5.5zm139.7 101.9h-26c-2 0-3.9-.8-5.4-2l15-15.3c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-15 15.3c-1.3-1.5-2.1-3.4-2.1-5.5v-41.2c0-4.5 3.7-8.2 8.2-8.2h3.3c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.3c-5.1 0-9.2 4.1-9.2 9.2v41.2c0 5.1 4.1 9.2 9.2 9.2h26c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-15.5-57.6h6.4c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-6.4c-.3 0-.5.2-.5.5s.2.5.5.5zm30-1h-16.7c-.3 0-.5.2-.5.5s.2.5.5.5h16.7c2 0 3.9.8 5.4 2l-14.8 15.1c-.2.2-.2.5 0 .7.1.1.2.1.4.1.1 0 .3-.1.4-.1l14.8-15.1c1.3 1.5 2.1 3.4 2.1 5.5v41.2c0 4.5-3.7 8.2-8.2 8.2h-6.6c-.3 0-.5.2-.5.5s.2.5.5.5h6.6c5.1 0 9.2-4.1 9.2-9.2v-41.2c-.1-5.1-4.2-9.2-9.3-9.2zm-27.2 111.2h-7.3c-1.4 0-2.6-1.2-2.6-2.6 0-2.8-.1-17.1-.8-24.1 0-.3-.3-.5-.5-.5-.3 0-.5.3-.5.5.6 6.9.7 21.2.8 24 0 2 1.6 3.6 3.6 3.6h7.3c.3 0 .5-.2.5-.5s-.2-.4-.5-.4zm21.8-42.5h-32.5c-.8 0-1.6.4-2.1 1s-.7 1.5-.6 2.3c.4 1.8.7 3.7 1 5.8 0 .2.2.4.5.4h.1c.3 0 .5-.3.4-.6-.3-2.1-.6-4.1-1-5.8-.1-.5 0-1.1.4-1.5.3-.4.8-.6 1.3-.6h32.5c.3 0 .5-.2.5-.5s-.3-.5-.5-.5zm-8-120h7.3c1.4 0 2.6 1.2 2.6 2.6 0 3.7.7 17.1 1.3 23.8 0 .3.2.5.5.5s.5-.3.5-.5c-.6-6.7-1.3-20-1.3-23.7 0-2-1.6-3.6-3.6-3.6h-7.3c-.3 0-.5.2-.5.5s.2.4.5.4zm-21.2 42.2h32.2c.9 0 1.7-.4 2.3-1.1.6-.7.8-1.6.6-2.5-.3-1.7-.7-3.5-.9-5.5 0-.3-.3-.5-.6-.4-.3 0-.5.3-.4.6.3 2 .6 3.8.9 5.5.1.6 0 1.2-.4 1.7s-.9.7-1.5.7h-32.2c-.3 0-.5.2-.5.5s.2.5.5.5z"/>' + 
    '<path d="M257.5 218.9c-.3 0-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.2-.2-.5-.5-.5zm-1.3-1.2h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-6.8 7.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-.5 7.5c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm7.3.8h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm1.3-6.9c-.3 0-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5zm-1.3-1.2h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm13.3-.2c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-6.9-6.9h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.3.5.5.5zm-1.2 6.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-.5 7.5c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm1.7 1.8h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.3.5.5.5zm6.4-1.8c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm-6.4-6.3h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.3.5.5.5zm-32.4-1.2c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.3.5.5.5zm-1.2-7.9h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm-6.8 7.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm-.5 7.5c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6zm7.8 1.3c0-.3-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.3.5-.5zm.7-.8c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .3.3.5.5.5zm-1.2-7.8h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm13.7-6.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6zm-7.3-.7h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5zm-1.2 6.9c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .2.2.5.5.5zm0 8c.3 0 .5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5s-.5.2-.5.5v5.6c0 .3.2.5.5.5zm1.2 1.3h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5zm6.8-7.9c-.3 0-.5.2-.5.5v5.6c0 .3.2.5.5.5s.5-.2.5-.5v-5.6c0-.3-.2-.5-.5-.5zm-6.8-.2h5.6c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-5.6c-.3 0-.5.2-.5.5s.2.5.5.5zm-14.8 18.7c.1.1.2.1.4.1.1 0 .3-.1.4-.1l4.8-4.9c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-4.8 4.9c-.3.2-.3.5-.1.7zm30.2-30.1 12.3-12.6c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-12.3 12.6c-.2.2-.2.5 0 .7.1.1.2.1.4.1.1.1.2 0 .3-.1zm-5 9.1c1.3 0 1.3-2 0-2s-1.3 2 0 2zm0 5.6c1.3 0 1.3-2 0-2s-1.3 2 0 2z"/>' + 
    '</svg>'

  if (scnd && !images[1]) {
    return ""
  } else {
    return !!images[0] ? html : noImage
  }
}

function buildImages(data) {
  var html = '',
    aspectRatio = '',
    rangeWidths = boostPFSRangeWidths,
    paddingTop = 100;

  var dataSrcSet = '',
    dataWidths = '',
    dataSizes = 'auto',
    imgAlt = data.title,
    flipImageSrcSet = '';

  var activeSwapImage = !Utils.isMobile() && images.length > 1 &&
    boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
    boostPFSThemeConfig.custom.active_image_swap == true;

  for (var i = 0; i < rangeWidths.length; i++) {
    dataSrcSet += Utils.getFeaturedImage(images, rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
    dataWidths += rangeWidths[i];

    if (activeSwapImage) {
      flipImageSrcSet += Utils.optimizeImage(images[1]['src'], rangeWidths[i] + 'x') + ' ' + rangeWidths[i] + 'w';
    }

    if (i < rangeWidths.length - 1) {
      dataSrcSet += ', ';
      dataWidths += ', ';

      if (activeSwapImage) {
        flipImageSrcSet += ', ';
      }
    }
  }

  if (images.length > 0) {
    aspectRatio = images[0]['width'] / images[0]['height'];
    paddingTop = 1 / aspectRatio * 100;
  }

  html += '<a href="{{itemUrl}}" class="boost-pfs-filter-product-item-image-link" ';
  html += 'style="padding-top:' + paddingTop + '%;">';
  html += '<img class="boost-pfs-filter-product-item-main-image lazyload Image--lazyLoad"' +
    'data-srcset="' + dataSrcSet + '" ' +
    'data-src="' + Utils.getFeaturedImage(images, rangeWidths[2] + 'x') + '" ' +
    'data-widths="[' + dataWidths + ']" ' +
    'data-sizes="' + dataSizes + '" ' +
    'src="' + boostPFSImgDefaultSrc + '" ' +
    'alt="' + imgAlt + '"  ';

  if (activeSwapImage) {
    html += ' data-img-flip-src="' + Utils.optimizeImage(images[1]['src'], rangeWidths[2] + 'x') + '" ' +
      'data-img-flip-srcset="' + flipImageSrcSet + '" ';
  }
  html += '/></a>';

  return html;
}

function buildVendor(data) {
  var html = '';
  if (boostPFSThemeConfig.custom.hasOwnProperty('show_vendor') &&
    boostPFSThemeConfig.custom.show_vendor == true) {
    html = boostPFSTemplate.vendorHtml;
  }
  return html;
}

function buildPrice(data) {
  var html = '';
  if (boostPFSThemeConfig.custom.hasOwnProperty('show_price') &&
    boostPFSThemeConfig.custom.show_price) {
    html = '<p class="boost-pfs-filter-product-item-price">';
    if (onSale) {

      html += '<span class="boost-pfs-filter-product-item-sale-price">' + Utils.formatMoney(data.price_min) + '</span>';
      html += '<s>' + Utils.formatMoney(data.compare_at_price_min) + '</s> ';
    } else {
      if (priceVaries) {
        html += '<span class="boost-pfs-filter-product-item-price-from-text">' + (boostPFSThemeConfig.label_basic.from) + ' ' + '</span>';
      }
      html += '<span class="boost-pfs-filter-product-item-regular-price">' + Utils.formatMoney(data.price_min) + '</span>';
    }
    html += '</p>';
  }
  return html;
}

function buildLabels(data) {
  // Build Sold out label
  var soldOutLabel = '';
  if (boostPFSThemeConfig.custom.hasOwnProperty('sold_out_enable') &&
    boostPFSThemeConfig.custom.sold_out_enable && soldOut) {
    soldOutLabel = boostPFSTemplate.soldOutLabelHtml.replace(/{{style}}/g, '');
  }
  // Build Sale label
  var saleLabel = '';
  var salePercent = '';
  if (boostPFSThemeConfig.custom.sale_label_enable && onSale && !soldOut) {
    if (boostPFSThemeConfig.custom.sale_label_display == 'sale_percent'){
      salePercent = Math.round((data.compare_at_price_min - data.price_min) * 100 / data.compare_at_price_max);
    }
    saleLabel = boostPFSTemplate.saleLabelHtml.replace(/{{style}}/g, '');
    saleLabel = boostPFSTemplate.saleLabelHtml.replace(/percent/g, '-' + salePercent + '%');
  }
  // Build Labels
  return soldOutLabel + saleLabel;
}

// BUILD LABEL PRODUCT WITH TAGS
function buildTagLabels(data, showall) {
  if (boostPFSThemeConfig.custom.tag_label_enable) {
    if (showall) {
      var tagLabel = '';
      if (data.tags) {
        for (var i = 0; i < data.tags.length; i++) {
          var tag = data.tags[i];
          if (tag.indexOf("pfs:label") !== -1) {
            var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
            tagLabel += preTagLabel;
          }
        }
      }
    } else {
      var tagLabel = '';
      if (data.tags) {
        for (var i = data.tags.length - 1; i >= 0; i--) {
          tag = data.tags[i];
          if (tag.indexOf("pfs:label") !== -1) {
            var preTagLabel = boostPFSTemplate.tagLabelHtml.replace(/{{labelTag}}/g, tag.split('pfs:label-')[1]);
            tagLabel += preTagLabel;
            break;
          }
        }
      }
    }
    return tagLabel;
  } else {
    return "";
  }
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
// Build Color Swatches
function buildProductOptionSwatches(data) {
  var swatchesProductOptionHtml = '';
  if (boostPFSThemeConfig.custom.swatch_enable) {
    var swatchApplyFor = ['color', 'img', 'pro_img', 'text'];
    for(var i = 0; i < swatchApplyFor.length; i++){
      var optionNames = boostPFSThemeConfig.custom["swatch_by_" + swatchApplyFor[i] + "_apply"].split(',').filter(onlyUnique);
      var swatchShape = boostPFSThemeConfig.custom["swatch_by_" + swatchApplyFor[i] + "_shape"];
      var swatchType = swatchApplyFor[i];
      for(var j=0; j < optionNames.length; j++){
        var optionName = optionNames[j].trim();
        var filterSwatchTitle = optionName,
        swatchArr = [],
        countSwatch = 0,
        swatchValues = [],
        swatchLimit = 4;
    
        var dataImgSize = '360',
          bgSize = '50x',
          dataImgSrc = Utils.getFeaturedImage(data.images_info, dataImgSize + 'x'),
          swatchName = '#ffffff',
          bgImageSrc = '',
          viewMoreLabel = 'More ' + filterSwatchTitle;

        if (typeof data.options_with_values != 'undefined' && data.options_with_values.length > 0) {
          swatchArr = data.options_with_values.filter(function(option) {
            return option.name == optionName;
          });
          if (swatchArr.length > 0) {
            countSwatch = swatchArr[0].values.length;

            if (swatchLimit > countSwatch) {
              swatchLimit = countSwatch;
            }
            swatchValues = swatchArr[0].values;

            swatchesProductOptionHtml += '<ul class="boost-pfs-filter-item-swatch boost-pfs-filter-item-swatch-option' + optionName + ' boost-pfs-filter-item-swatch-shape-' + swatchShape + ' boost-pfs-filter-item-swatch-type-' + swatchType + '">';

            for (var sIndex = 0; sIndex < swatchLimit; sIndex++) {
              swatchName = swatchValues[sIndex].title;
              swatchVariant = data['variants'][sIndex];
              sImageIndex = swatchValues[sIndex].image || '';
              if (sImageIndex != '') {
                dataImgSrc = Utils.optimizeImage(data.images[sImageIndex], dataImgSize + 'x') + ' ' + dataImgSize + 'w';
              }
              
              if (swatchType) {
                switch (swatchType) {
                  case 'img':
                    bgImageSrc = boostPFSAppConfig.general.file_url.replace(/\?/, Utils.slugify(filterSwatchTitle).replace(/\-/g, '_') + '-' + Utils.slugify(swatchName) + '.png?v=');
                    break;
                  case 'pro_img':
                    bgImageSrc = Utils.getFeaturedImage(data.images_info, bgSize);
                    if (sImageIndex != '') {
                      bgImageSrc = Utils.optimizeImage(data.images[sImageIndex], bgSize);
                    }
                    break;
                  default:
                    bgImageSrc = '';
                }
              }
              swatchesProductOptionHtml += '<li>';
                if(swatchType == 'text'){
                  swatchesProductOptionHtml += '<a aria-label="' + optionName + ': ' + swatchName + '" title="' + swatchName + '" href="' + Utils.buildProductItemUrl(data) + '?variant=' + swatchVariant.id + '">' + swatchName + '</a>';
                } else {
                  if(boostPFSThemeConfig.custom.show_swatch_tooltip){
                    swatchesProductOptionHtml += '<div class="boost-pfs-product-item-tooltip">' + swatchName + '</div>';
                  }
                  swatchesProductOptionHtml += '<span tabindex="0" aria-label="' + optionName + ': ' + swatchName + '" ' + 'style="background-color: ' + optionName + '; ';
                  if (bgImageSrc != '') {
                      swatchesProductOptionHtml += 'background-image: url(' + bgImageSrc + ');" ';
                  } else {
                      swatchesProductOptionHtml += '" ';
                  }
                  if (dataImgSrc != '') {
                      swatchesProductOptionHtml += 'data-img="' + dataImgSrc + '" ';
                  }

                  swatchesProductOptionHtml += '></span>';
                }
              swatchesProductOptionHtml += '</li>';
            }

            if (countSwatch > swatchLimit) {
              swatchesProductOptionHtml += '<li class="boost-pfs-filter-item-swatch-more">';
              swatchesProductOptionHtml += '<a href="{{itemUrl}}" aria-label="' + viewMoreLabel + '" title="' + viewMoreLabel + '">+' + (countSwatch - swatchLimit) + '</a>';
              swatchesProductOptionHtml += '</li>';
            }

            swatchesProductOptionHtml += '</ul>';
          }
        }
      }
      
    }
  }
  return swatchesProductOptionHtml;
}

// Build Color Swatches
function eventColorSwatches(event) {
  jQ('.boost-pfs-filter-item-swatch li span').each(function() {
    var img = jQ(this).parents('.boost-pfs-filter-product-item-inner').find('.boost-pfs-filter-product-item-main-image');
    if (event == 'hover') {
      jQ(this).hover(function() {
        var newImage = jQ(this).data('img');
        img.attr('srcset', newImage);
      });
    }
    if (event == 'click') {
      jQ(this).click(function() {
        var newImage = jQ(this).data('img');
        img.attr('srcset', newImage);
      });
    }
    jQ(this).focus(function() {
      if (jQ('body').hasClass('boost-pfs-ada')) {
        var newImage = jQ(this).data('img');
        img.attr('srcset', newImage);
      }
    });
  });
}

function buildReview(data) {
  var html = '';
  if (boostPFSThemeConfig.custom.hasOwnProperty('show_product_review') &&
    boostPFSThemeConfig.custom.show_product_review == true) {
    html = '<span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span>';
  }
  return html;
}

function buildActiveSwapClass(data) {
  if (!Utils.isMobile() && images.length > 1 &&
    boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
    boostPFSThemeConfig.custom.active_image_swap == true) {
    return 'has-bc-swap-image';
  }
  return '';
}



/************************** END BUILD PRODUCT ITEM ELEMENTS **************************/
/************************** BUILD TOOLBAR **************************/
// Build Pagination
ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
  if (!totalProduct) totalProduct = this.totalProduct;
  // Get page info
  var currentPage = parseInt(Utils.stripHtml(Globals.queryParams.page));
  var totalPage = Math.ceil(totalProduct / Utils.stripHtml(Globals.queryParams.limit));
  if (!currentPage || isNaN(currentPage)) {
    currentPage = 1;
  }
  // If it has only one page, clear Pagination
  if (totalPage <= 1) {
    return '';
  }

  var paginationHtml = boostPFSTemplate.paginateHtml;
  // Build Previous
  var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousActiveHtml : boostPFSTemplate.previousDisabledHtml;
  previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
  paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
  // Build Next
  var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextActiveHtml : boostPFSTemplate.nextDisabledHtml;
  nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
  paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
  // Create page items array
  var beforeCurrentPageArr = [];
  for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
    beforeCurrentPageArr.unshift(iBefore);
  }
  if (currentPage - 4 > 0) {
    beforeCurrentPageArr.unshift('...');
  }
  if (currentPage - 4 >= 0) {
    beforeCurrentPageArr.unshift(1);
  }
  beforeCurrentPageArr.push(currentPage);
  var afterCurrentPageArr = [];
  for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
    afterCurrentPageArr.push(iAfter);
  }
  if (currentPage + 3 < totalPage) {
    afterCurrentPageArr.push('...');
  }
  if (currentPage + 3 <= totalPage) {
    afterCurrentPageArr.push(totalPage);
  }
  // Build page items
  var pageItemsHtml = '';
  var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
  for (var iPage = 0; iPage < pageArr.length; iPage++) {
    if (pageArr[iPage] == '...') {
      pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
    } else {
      pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
    }
    pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
    pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
  }
  paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
  return paginationHtml;
};

// Build Sorting
ProductSorting.prototype.compileTemplate = function() {
  var html = '';
  if (boostPFSThemeConfig.custom.show_sort_by && boostPFSTemplate.hasOwnProperty('sortingHtml')) {
    var sortingArr = Utils.getSortingList();
    if (sortingArr) {
      var paramSort = Utils.stripHtml(Globals.queryParams.sort) || '';
      // Build content
      var sortingItemsHtml = '';
      for (var k in sortingArr) {
        activeClass = '';
        if (paramSort == k) {
          activeClass = 'boost-pfs-filter-sort-item-active';
        }
        sortingItemsHtml += '<li aria-label="' + sortingArr[k] + '"><a href="#" data-sort="' + k + '" class="' + activeClass + '"  title="' + sortingArr[k] + '" aria-label="' + sortingArr[k] + '">' + sortingArr[k] + '</a></li>';
      }
      html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
    }
  }
  return html;
};

ProductSorting.prototype.render = function() {
  jQ(Selector.topSorting).html(this.compileTemplate());

  if (jQ('.boost-pfs-filter-custom-sorting').hasClass('boost-pfs-filter-sort-active')) {
    jQ('.boost-pfs-filter-custom-sorting').toggleClass('boost-pfs-filter-sort-active');
  }

  var labelSort = '';
  var paramSort = Utils.stripHtml(Globals.queryParams.sort) || '';
  var sortingList = Utils.getSortingList();
  if (paramSort.length > 0 && sortingList && sortingList[paramSort]) {
    labelSort = sortingList[paramSort];
  } else {
    labelSort = Labels.sorting_heading;
  }

  jQ('.boost-pfs-filter-custom-sorting button span span').text(labelSort);
}

// Build Sorting event
ProductSorting.prototype.bindEvents = function() {
  var _this = this;
  jQ('.boost-pfs-filter-filter-dropdown a').click(function(e) {
    e.preventDefault();
    FilterApi.setParam('sort', jQ(this).data('sort'));
    FilterApi.setParam('page', 1);
    FilterApi.applyFilter('sort');
  });

  jQ(".boost-pfs-filter-top-sorting > button").click(function() {
    jQ('.boost-pfs-filter-filter-dropdown').toggle().parent().toggleClass('boost-pfs-filter-sort-active');
  });

  jQ(Selector.filterTreeMobileButton).click(function() {
    jQ('.boost-pfs-filter-top-sorting-mobile .boost-pfs-filter-filter-dropdown').hide();
  });

  jQ(document).on('click', function (e) {
    if (jQ(e.target).parents('.boost-pfs-filter-top-sorting').find(".boost-pfs-filter-filter-dropdown").length === 0) {
      jQ('.boost-pfs-filter-filter-dropdown').hide().parent().removeClass('boost-pfs-filter-sort-active');
    }
  });
};
// For Toolbar - Build Display type
ProductDisplayType.prototype.compileTemplate = function() {
  
  var itemHtml = '<span>' + boostPFSThemeConfig.label.toolbar_viewas + '</span>';
  if (boostPFSThemeConfig.custom.product_item_type == 'grid') {
    if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 2) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-2" data-view="grid-2"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 3) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-3" data-view="grid-3"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 4) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-4" data-view="grid-4"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 5) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-5" data-view="grid-5"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 6) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-6" data-view="grid-6"><span class="icon-fallback-text"></span></a>';
    } else {
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"></span></a>';
        itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
    }
  } else {
    if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 2) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-2" data-view="grid-2"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 3) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-3" data-view="grid-3"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 4) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-4" data-view="grid-4"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 5) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-5" data-view="grid-5"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid', 6) + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid {{class.productDisplayType}}-grid-6" data-view="grid-6"><span class="icon-fallback-text"></span></a>';
    } else {
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'grid', 'list') + '" title="' + buildDisplayTitle('list') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-list" data-view="list"><span class="icon-fallback-text"></span></a>';
      itemHtml += '<a href="' + Utils.buildToolbarLink('display', 'list', 'grid') + '" title="' + buildDisplayTitle('grid') + '" class="{{class.productDisplayType}}-item {{class.productDisplayType}}-grid" data-view="grid"><span class="icon-fallback-text"></span></a>';
    }
  }

  itemHtml = itemHtml.replace(/{{class.productDisplayType}}/g, Class.productDisplayType);

  return itemHtml;
};

function buildDisplayTitle(type, count) {
  if(type === '') return type;
  // Build title for list view
  if(type === 'list') {
    return Labels.listView || 'List view';
  } 
  // Build title for grid view
  if(typeof count === 'undefined' || count === 0) return Labels.gridView || 'Grid view';
  return (Labels.gridViewColumns || 'Grid view {{ count }} Columns').replace(/{{ count }}/g, count);
}

var originalRenderProductDisplayType = ProductDisplayType.prototype.render;
ProductDisplayType.prototype.render = function() {
  // Call the original function in our app lib.
  // We don't have to copy a very big function out here to modify.
  // function.call(this, param1, param2) binds the "this" pointer and params to the original function.
  originalRenderProductDisplayType.call(this);

  // Do your custom code after the original function has run
  // Active current display type
  if (this.$element.length) {
    this.$element.find(this.selector.productDisplayTypeList).removeClass('active');
    this.$element.find(this.selector.productDisplayTypeGrid).removeClass('active');
    if (Utils.stripHtml(Globals.queryParams.display) == 'list') {
      this.$element.find(this.selector.productDisplayTypeList).addClass('active');
    } else if (Utils.stripHtml(Globals.queryParams.display) == 'grid') {
      if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
        var curentGridColumn = boostPFSThemeConfig.custom.products_per_row;
        this.$element.find(this.selector.productDisplayTypeGrid).each(function(){
        var $parent = jQ(this).parent();
        var $cssNames = jQ('.boost-pfs-filter-top-display-type').attr('class').split(' ');
        var $activeClass = $cssNames[$cssNames.length - 1];
        var indexCurrentColumn = $activeClass.split('-')[$activeClass.split('-').length - 1];
        
        if($parent.hasClass('boost-pfs-filter-view-as-click') && jQ(this).data('view') == $activeClass){
            jQ(this).addClass('active');

            // jQ('.boost-pfs-filter-product-item').removeClass(function(index, css) {
            // return (css.match (/(^|\s)boost-pfs-filter-grid-width-\S+/g) || []).join(' ');
            // }).addClass('boost-pfs-filter-grid-width-' + indexCurrentColumn);
            if(jQ('.boost-pfs-filter-product-item').length > 0) {
              var arrClass = jQ('.boost-pfs-filter-product-item').attr('class').split(' ');
              var prevClass = '';
              for (var i = 0; i < arrClass.length; i++) {     
                if(arrClass[i].match (/(^|\s)boost-pfs-filter-grid-width-\S+/g)) {
                  prevClass = arrClass[i];
                  break;
                }
              }
              jQ('.boost-pfs-filter-product-item').removeClass(prevClass);
              jQ('.boost-pfs-filter-product-item').addClass('boost-pfs-filter-grid-width-' + indexCurrentColumn);

              // jQ('.boost-pfs-filter-product-item').className = jQ('.boost-pfs-filter-product-item').className.replace(/(^|\s)boost-pfs-filter-grid-width-\S+/g , '');
              // jQ('.boost-pfs-filter-product-item').addClass('boost-pfs-filter-grid-width-' + indexCurrentColumn);
            }

        } else if(!$parent.hasClass('boost-pfs-filter-view-as-click') && jQ(this).data('view').split('-')[1] == curentGridColumn) {    
            jQ(this).addClass('active');
        }
      });

      } else {
        this.$element.find(this.selector.productDisplayTypeGrid).addClass('active');
      }
    }
  }
};

// Build Show Limit
ProductLimit.prototype.compileTemplate = function() {
  var html = '';
  if (boostPFSThemeConfig.custom.show_limit && boostPFSTemplate.hasOwnProperty('showLimitHtml')) {

    var numberList = Settings.getSettingValue('general.showLimitList');
    if (numberList != '') {
      // Build content
      var showLimitItemsHtml = '';
      var arr = numberList.split(',');
      for (var k in sortingArr) {
        showLimitItemsHtml += '<option value="' + arr[k].trim() + '">' + arr[k].trim() + '</option>';
      }
      html = boostPFSTemplate.showLimitHtml.replace(/{{showLimitItems}}/g, showLimitItemsHtml);
    }
  }
  return html;
};
// Build Breadcrumb
Breadcrumb.prototype.compileTemplate = function(colData) {
  if (!colData) colData = this.collectionData;
  var breadcrumbItemsHtml = '';
  if (boostPFSTemplate.hasOwnProperty('breadcrumbHtml')) {
    if (typeof colData !== 'undefined' && colData.hasOwnProperty('collection')) {
      var colInfo = colData.collection;
      if (typeof this.collectionTags !== 'undefined' && this.collectionTags !== null) {
        breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemLink.replace(/{{itemLink}}/g, '/collections/' + colInfo.handle).replace(/{{itemTitle}}/g, colInfo.title);
        breadcrumbItemsHtml += " {{breadcrumbDivider}} ";
        breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, this.collectionTags[0]);
      } else {
        breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, colInfo.title);
      }
    } else {
      breadcrumbItemsHtml += boostPFSTemplate.breadcrumbItemSelected.replace(/{{itemTitle}}/g, Settings.getSettingValue('label.defaultCollectionHeader'));
    }
  }
  return breadcrumbItemsHtml
};

/************************** END BUILD TOOLBAR **************************/

// Add additional feature for product list, used commonly in customizing product list
ProductList.prototype.afterRender = function(data) {
  if (!data) data = this.data;

  // Intergrate Review Shopify
  if (window.SPR &&
    typeof window.SPR.initDomEls == 'function' &&
    typeof window.SPR.loadBadges == 'function' &&
    boostPFSThemeConfig.custom.show_product_review) {
    window.SPR.initDomEls();
    window.SPR.loadBadges();
  }
};

// Build additional elements
Filter.prototype.afterRender = function(data) {
  if (!data) data = this.data;
  var totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_other + '</span>';
  if (data.total_product == 1) {
    totalProduct = data.total_product + '<span> ' + boostPFSThemeConfig.label.items_with_count_one + '</span>';
  }
  if (data.total_product == 0) {
    jQ(".boost-pfs-filter-default-toolbar-inner").addClass('boost-pfs-filter-toolbar-product-0');
  } else {
    jQ(".boost-pfs-filter-default-toolbar-inner").removeClass('boost-pfs-filter-toolbar-product-0');
  }
  jQ('.boost-pfs-filter-total-product').html(totalProduct);

  jQ('body').find('.boost-pfs-filter-skeleton-button').remove();

  // Prevent double tap on iOS
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isiOS) {
    Utils.isMobile() && jQ(".boost-pfs-filter-product-item").find("a").on("touchstart", function() {
      isScrolling = !1
    }).on("touchmove", function() {
      isScrolling = !0
    }).on("touchend", function() {
      isScrolling || (window.location = jQ(this).attr("href"))
    });
  }

  // Build Image Swap. Put this function here to impprove the pagespeed.
  swapImage(data);

  // Build Equal Height
  if (Utils.stripHtml(Globals.queryParams.display) !== 'list') {
    setTimeout(function(){
      equalHeight(data);
    }, 700);
  };

  jQ(window).resize(function() {
    if (Utils.stripHtml(Globals.queryParams.display) !== 'list') {
      setTimeout(function(){
        equalHeight(data);
      }, 700);
    }
  });

  // Build Event Color Swatch
  if (boostPFSThemeConfig.custom.swatch_change_img != 'none') {
    eventColorSwatches(boostPFSThemeConfig.custom.swatch_change_img);
  }

  if (typeof boostRemoveImageLoadingAnimation == 'function') {
    boostRemoveImageLoadingAnimation(jQ(Selector.products).find('[data-boost-image-loading-animation]'));
  }

	// Layout Fullwidth Page
  if (boostPFSThemeConfig.custom.hasOwnProperty('layout_type') && boostPFSThemeConfig.custom.layout_type == 'fullwidth' && !Utils.isMobile()) {
    jQ('body').addClass('boost-pfs-filter-fullwidth-page');
  }
  document.addEventListener('scroll', function() {
    if(jQ('.boost-pfs-filter-tree-h.boost-pfs-filter-stick').length > 0 && jQ(window).width() > 767){
      jQ('.boost-pfs-filter-custom-sorting .boost-pfs-filter-filter-dropdown').hide().parent().removeClass('boost-pfs-filter-sort-active');
    }
  });

  // Fix confict Sticky Mobile theme Streamline
  if(jQ('.site-nav__thumb-menu').length > 0 && Utils.isMobile()){
    var heightHeaderThemeStick = jQ('.site-nav__thumb-menu').height() + 40;
    jQ('.boost-pfs-filter-tree-mobile-button-stick-wrapper').css('bottom',heightHeaderThemeStick).addClass('boost-pfs-filter-sticky-bottom');
    jQ('.boost-pfs-filter-mobile-style1').addClass('boost-pfs-filter-mobile-style1-sticky-bottom');
  }
};

function removeClassByPrefix(node, prefix) {
  var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
  node.className = node.className.replace(regx, '');
  return node;
}

var original_onClickEventProductDisplayType = ProductDisplayType.prototype._onClickEvent;
ProductDisplayType.prototype._onClickEvent = function(event) {
  // Call the original function in our app lib.
  // We don't have to copy a very big function out here to modify.
  // function.call(this, param1, param2) binds the "this" pointer and params to the original function.
  original_onClickEventProductDisplayType.call(this, event);

  // Do your custom code after the original function has run
  /*  View As Type 2/3/4/5/6 */
  
  if (boostPFSThemeConfig.custom.view_as_type == 'view_as_type_list_grid_multi_col' && !Utils.isMobile()) {
      jQ('.boost-pfs-filter-top-display-type').addClass('boost-pfs-filter-view-as-click');
      var currentClass = jQ(event.target).data('view');
      jQ('.boost-pfs-filter-top-display-type')[0].className = jQ('.boost-pfs-filter-top-display-type')[0].className.replace(/(^|\s)grid-\S+/g , '');
      jQ('.boost-pfs-filter-top-display-type').addClass(currentClass);
  }
}

ProductListPlaceholder.prototype.render = function() {
  // Set limit number for product skeleton
  var placeholderLimit = this.settings.productsPerRow || this.settings.placeholderProductPerRow;
  // Build placeholder items
  var placeholderItem = this.compileTemplate();
  this.$element = [];
  for (var i = 0; i < placeholderLimit; i++) {
    this.$element.push(jQ(placeholderItem));
  }
  // Show placeholder before send filter request OR hide it after get filter data
  if (!this.isFetchedProductData) {
    this.setShow();
  } else {
    this.setHide();
  }
}

ProductListPlaceholder.prototype.compileTemplateExtra = function() {
  //Todo: Build placeholder for List mode
  var template = boostPFSTemplate.productListPlaceholderHtml;
  var imgRatioSetting = parseFloat(this.settings.placeholderImageRatio);
  var imgRatio = imgRatioSetting > 0 ? imgRatioSetting : 1.4; // It mean w1:h1.4
  /**
   * Set product class for product skeleton (to set column, style, etc.)
   * - If had defined product_grid_class in boostPFSThemeConfig => use this config ELSE use our setting
   */
  return template
    .replace(/{{class.filterProductSkeleton}}/g, Class.filterProductSkeleton)
    .replace(/{{class.filterSkeleton}}/g, Class.filterSkeleton)
    .replace(/{{class.filterSkeletonText}}/g, Class.filterSkeletonText)
    .replace(/{{paddingTop}}/g, imgRatio * 100)
}

/* Prevent conflict with theme vendor js */
Array.prototype.insert = function(a, b) {}

/* Math qual Height */
function equalHeight(data) {
  var equal_i = -1;
  var equal_els = [];
  var equal_element = null;

  // Equal Height Title
  jQ('.boost-pfs-filter-product-item').each(function(i, element) {

    var offsetTop = jQ(element).offset().top;
    if (!equal_element || equal_element.offset().top !== offsetTop) {
      equal_element = jQ(element);
      equal_i++;
    }

    if (!equal_els[equal_i]) {
      equal_els[equal_i] = [];
    }
    equal_els[equal_i].push(element);
  });

  for (var i = 0; i < equal_els.length; i++) {
    var max = 0;
    var maxRatio = 0;
    var iLength = equal_els[i].length;

    for (var j = 0; j < equal_els[i].length; j++) {
      var item = equal_els[i][j];
      var height = jQ(item).find('.boost-pfs-filter-product-bottom-inner').height();
      max = Math.max(max, height);
    }
    jQ(equal_els[i]).find('.boost-pfs-filter-product-bottom-inner').css({ 'min-height': max });
  }

  var aspect_ratio = boostPFSFilterConfig.general.aspect_ratio;

  if (aspect_ratio != 'false') {
    var cropImagePosition = boostPFSFilterConfig.general.cropImagePossitionEqualHeight;

    var widthImage = jQ('.boost-pfs-filter-product-item').width();
    var indexData = 0;

    // For Ratio
    if (aspect_ratio != 'false' && aspect_ratio != 'auto') {
      var heightImage = 0;
      var widthImage = jQ('.boost-pfs-filter-product-item').width();
      if (aspect_ratio != 'false' && aspect_ratio != 'auto' && aspect_ratio != 'other') {
        var ratioWidthHeight = boostPFSThemeConfig.custom.aspect_ratio;
      } else {
        var ratioWidthHeight = '';
      }

      var ratioWidthHeightOther = boostPFSThemeConfig.custom.aspect_ratio_other;
      if (ratioWidthHeightOther == '' && ratioWidthHeight == '') {
        return null;
      } else {
        if (aspect_ratio != 'other') {
          ratioWidthHeight = ratioWidthHeight.split(':');
          ratioWidthHeight = parseInt(ratioWidthHeight[1]) / parseInt(ratioWidthHeight[0]);
          heightImage = widthImage * ratioWidthHeight;
        } else if (ratioWidthHeightOther != '' && aspect_ratio == 'other') {
          ratioWidthHeightOther = ratioWidthHeightOther.split(':');
          ratioWidthHeightOther = parseInt(ratioWidthHeightOther[1]) / parseInt(ratioWidthHeightOther[0]);
          heightImage = widthImage * ratioWidthHeightOther;
        }
      }
      jQ('.boost-pfs-filter-product-item-image-link').css({ 'padding-top': heightImage + 'px' }).addClass('boost-pfs-filter-crop-image-position-' + cropImagePosition);

    }
  }
}

// Swap Image
function swapImage(data) {
  if (!Utils.isMobile()) {
    if (boostPFSThemeConfig.custom.hasOwnProperty('active_image_swap') &&
      boostPFSThemeConfig.custom.active_image_swap == true) {
      var dataSrcSetFlipImg = '',
        dataSrcFlipImg = '',
        flipImageAlt = '',
        dataSizes = 'auto',
        dataWidths = '',
        html = '';

      jQ(".boost-pfs-filter-product-item").each(function() {
        var productItemSelector = jQ(this);
        var imgSelector = productItemSelector.find('.boost-pfs-filter-product-item-main-image');

        if (typeof imgSelector.data('img-flip-src') != 'undefined' &&
          imgSelector.data('img-flip-src') != '') {
          dataSrcFlipImg = imgSelector.data('img-flip-src');
          dataSrcSetFlipImg = imgSelector.data('img-flip-srcset');
          flipImageAlt = imgSelector.attr('alt');
          dataWidths = imgSelector.data('widths');
          html = '<img class="boost-pfs-filter-product-item-flip-image lazyload Image--lazyLoad"' +
            'data-srcset="' + dataSrcSetFlipImg + '" ' +
            'data-src="' + dataSrcFlipImg + '" ' +
            'data-widths="[' + dataWidths + ']" ' +
            'data-sizes="' + dataSizes + '" ' +
            'src="' + boostPFSImgDefaultSrc + '" ' +
            'alt="' + flipImageAlt + '" />';

          productItemSelector.find('.boost-pfs-filter-product-item-image-link').append(html);
        }

      });
    }
  }
}

// Build Placeholder for the first load
function boostRemoveImageLoadingAnimation($selector) {
  if ($selector.length) {
    $selector.removeAttr('data-boost-image-loading-animation');
  }
}
/* Expand Filter */
jQ(document).ready(function() {
    jQ('.boost-pfs-filter-custom-filter-button').on('click', function(){
        jQ('body').toggleClass('boost-pfs-filter-custom-drawer-open');
    });
    jQ('.boost-pfs-filter-custom-drawer-close').click(function(){
        jQ('body').removeClass('boost-pfs-filter-custom-drawer-open');
    });
    jQ('.boost-pfs-filter-custom-drawer-overlay').click(function(){
        jQ('body').removeClass('boost-pfs-filter-custom-drawer-open');
    });

    // Bind changing options with enter/space key for ADA
    jQ('.boost-pfs-filter-custom-drawer-close, .boost-pfs-filter-custom-drawer-overlay').on('keydown', (event) => {
      if (event.target && (event.keyCode == 13 || event.keyCode == 32)) {
        jQ(event.target).click();
      }
    });

    // Fix issue header fix on the Parallax theme
    if(jQ('.mm-fixed-top').length > 0){
      var headerFixedHeight = jQ('.mm-fixed-top').height();
      jQ('.boost-pfs-filter-collection-header-wrapper').css('margin-top', headerFixedHeight);
    }

    jQ('body').addClass('boost-pfs-filter-tree-open-body');
});
})();