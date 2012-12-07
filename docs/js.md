---
siteroot: ..
layout: master
menu-documentation: selected
title: Multigraph - Documentation
---

Using Multigraph with JavaScript
=================================

Multigraph's HTML5 interface lets you create a graph in an HTML page
by simply putting a <code>div</code> in the page which has
<code>class="multigraph"</code>, and a <code>data-src</code> attribute
that gives the location of the MUGL file to load.  Multigraph scans
through the entire page looking for all <code>div</code>s of class
<code>multigraph</code>, and runs some code on each one to insert the
relevant graph into it.  This is the easiest way to get a Multigraph
into a web page, and doesn't involve writing any JavaScript code.  If
you want more control over the details of what Multigraph does, though, you
can write your own custom JavaScript code that interacts with
Multigraph.

The <code>multigraph</code> JavaScript Namespace
------------------------------------------------

The first thing to be aware of if you want to interact with Multigraph
using JavaScript is that multigraph.js defines a single variable
at the global level named <code>multigraph</code>.  This variable
serves as a namespace for Multigraph --- all functions and objects
that Multigraph defines are inside this object.  This global
<code>multigraph</code> object is also available as
<code>window.multigraph</code>.

Multigraph and JQuery
---------------------

Multigraph uses [JQuery](http://jquery.com),
and multigraph.js includes a copy of JQuery inside it.  This
copy of JQuery is included in a way that does not define any global
variables --- in particular, it does affect the value of the global
variable <code>$</code>.   This is to avoid any conflicts between
multigraph.js and other libraries (such as prototype.js, or another
copy of JQuery) on the page that might use <code>$</code> for their
own purposes.  The jQuery object from this internal
copy of JQuery is available through the expression
<code>window.multigraph.jQuery</code>, though, and you're free to
reassign that value back to <code>$</code> if you want to use
JQuery on your page without having to load it separately:

{% highlight html %}
<script type="text/javascript" src="http://multigraph.github.com/download/multigraph-min.js"></script>
<script type="text/javascript">
  $ = window.multigraph.jQuery;
  /* ... from this point on you can use $ to refer to jQuery as usual ... */
  console.log('This copy of Multigraph uses JQuery version ' + $().jquery);
</script>
{% endhighlight %}

At the time of this writing, the version of JQuery included in
Multigraph is 1.8.2; you can always check the JQuery version number
exactly by examining <code>$().jquery</code> as in the above example.

The Multigraph JQuery Plugin
----------------------------

Multigraph is implemented as a JQuery plugin --- it defines a function
named <code>multigraph</code> that you can call on a JQuery
collection.  You can use this function to create and/or access
instances of Multigraph in <code>div</code>s in the page.  For example,
suppose your HTML page contains the following div:

{% highlight html %}
<div id='#mygraph' style="width:500px; height:300px"/>
{% endhighlight %}

You can insert a Multigraph into this <code>div</code> by calling

{% highlight javascript %}
  $('#mygraph').multigraph({ 'mugl' : URL_OF_MUGL_FILE });
{% endhighlight %}

This is in fact exactly what Multigraph itself does to implement the
normal HTML5 interface that automatically inserts a Multigraph
instance into all <code>div</code>s in the page having a class of
<code>multigraph</code>.

### Creating a Multigraph

The <code>multigraph</code> plugin function takes a single argument
which is a JavaScript object that specifies options that govern
how the Multigraph is created.  The possible values in this options
object are:

* <code>mugl</code>

  This should be the URL of a MUGL file to load.  This option is
  required.
  
* <code>width</code>

  The width of the graph, in pixels.  If this is not present, Multigraph
  will query the div itself to get its width; this means that you
  can use CSS to assign it.

* <code>height</code>

  The height of the graph, in pixels.  If this is not present, Multigraph
  will query the div itself to get its height; this means that you
  can use CSS to assign it.

* <code>driver</code>

  The graphics driver to use in the graph.  The possible values are
  
  * "canvas"
  
    Uses the HTML5 Canvas tag for graphics.  This works in all recent browsers
    except versions of IE prior to 9.
  
  * "raphael"
  
    Uses the [Raphael](http://raphaeljs.com) graphics library for graphics.  This
    library uses SVG in browsers that support SVG; it uses VML in versions of IE
    prior to 9.
  
  * "auto"
  
    This is the default; it causes Multigraph to use the canvas driver in
    all browsers that support it, and otherwise it uses the Raphael driver.

* <code>error</code>

  A custom error-handling function (see below)
  
* <code>warning</code>

  A custom warning-handling function (see below)
  
### Custom Error/Warning Handlers

Blah blah blah...

### Accessing a Multigraph

Blah blah blah...
