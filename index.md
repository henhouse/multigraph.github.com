---
siteroot: .
layout: master
menu-home: selected
title: Multigraph - Interactive Data Graphs for the Web
---

Introduction
============


Multigraph is a program for creating 2-dimensional scientific data
graphs in web pages. It can read data in a variety of formats, and
allows you to customize the appearance of the graph to your
liking.  Multigraph provides interactive "pan" and "zoom" capabilities,
giving the viewer the ability to change the horizontal and/or vertical
scales in the graph on the fly. Multigraph also has the ability to
read data from a web service, which allows it to be used to "surf"
through large datasets, downloading only those the parts of the data
that are needed for display.


Multigraph is written in pure JavaScript and will work in any reasonably
modern web browser, including on mobile devices.

Multigraph was inspired by interactive mapping sites such as Google Maps;
just as you can use Google Maps to pan and zoom around a geographic
area, in order to see some particular feature or relationship,
Multigraph lets you pan or zoom around in "data space" in order to better
understand and visualize the data.


Interacting with a Multigraph
============

Here's an example of a Multigraph:

<center>
<div class="multigraph" data-width="1000" data-height="200" data-src="lib/acis-static.xml"></div>
</center>


This graph shows daily temperature data from a weather
station near Asheville, NC.  The blue bars represent the daily high and low
temperatures -- the bottom of the bar is the low for the day, and the top
of the bar is the high.  The green band in the background shows the official
"normal" temperature range for this location.  By looking at the actual
daily data on top of the normal range, it's easy to see whether weather
during any given period was hotter or colder than normal.


Panning
-------


The initial time period displayed in the graph above is the year 2012.
If you want to see what happened before Jan 1 2012, just click and
drag with your mouse (or finger, if you're using a touch-screen device)
to drag the graph to the right.  You can also drag the graph
vertically to change the temperature scale.  (Whenever you start a new
drag motion, Multigraph notices which orientation -- horizontal or
vertical -- you first start dragging, and locks the motion to that
orientation until you release the mouse or your finger.)


Zooming
-------


You can also zoom in or out in the graph, by pointing the mouse cursor
at an axis and rolling the mouse scroll wheel.  (You don't have to point
exactly at the axis --- Multigraph will zoom whichever axis the cursor
is closest to.)  If you're using a touch-screen device, you can zoom
by doing a two-finger pinch gesture.

An alternate way of zooming is to point the mouse cursor near an axis,
hold down the shift key on the keyboard, and then (while continuing to
hold down the shift key), click and drag the mouse.


Creating a Multigraph
=====================


To create an interactive graph of your own and publish it to a web
site, you first write an XML file that describes the details of the
graph.  This XML file, in a format known as MUGL (for MUltiGraph xmL),
includes things like plot styles, colors, axis dimensions, as well as
the data to be plotted.  You then put a line like the following in the
<tt><span class="nt">&lt;head&gt;</span></tt> of your HTML document:

{% highlight html %}
<script type="text/javascript" src="http://multigraph.github.com/download/multigraph-min-latest.js"></script>
{% endhighlight %}

and a line like the following at the place in your document where you'd
like the graph to appear:

{% highlight html %}
<div class="multigraph" data-src="file.mugl" data-width="500" data-height="400"/></div>
{% endhighlight %}

Then put the HTML file containing the above line, and the MUGL file
that defines your graph, on a web server.  That's all there is to it.
If you want, you can specify the width and height of the graph using
CSS rules instead of using the <tt><span
class="na">data-width</span></tt> and <tt><span
class="na">data-height</span></tt> attributes, and it's also possible
to create and manipulate graphs using JavaScript code instead of the
above HTML markup; see the [documentation](documentation) for details.

You can see lots of examples of graphs, and the MUGL files that
generate them, in the [Examples](examples) section of this web site.
Yee ha!
