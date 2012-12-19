Why Use Multigraph?
===================


Multigraph is a tool for displaying data graphs in web pages, or in
web applications designed to run in a web page.  It's great at
creating an interactive plot for displaying data on the web.
Multigraph's focus is on *displaying* data; it's not intended to be a
general data analysis or computation tool.  You should think of
Multigraph as a presentation tool --- its purpose is to help make data
visible and accessible on the web, in much the same way that HTML
makes text appropriate for web display.  If you want to display the
results of some kind of numerical computation with your data, such as
trend lines, averages, or other statistics, you can do that with
Multigraph, but you'll need to use some other program to perform those
computations first --- Multigraph simply displays whatever numbers you
give it, without doing any computations with them.  It's designed,
though, to let you keep your data in a separate file that just
contains the data.  All of the information about how the graph is
draw, including plots styles, colors, etc, is in the graph's MUGL
file, and you can update the data if/when your computations are
updated, without having to change the MUGL file.


Rectilinear Axis Plots
----------------------

The type of graph that Multigraph draws is a rectilinear axis plot ---
a graph in which data values are plotted in a space defined by a
horizontal and a vertical axis.  Some graphs can have more than two axes,
but every graph has at least one horizontal and one vertical axis.
Much of the data that Multigraph was designed to diplay is time-series
data --- data in which the horizontal axis variable represents time
--- but it's capable of generating graphs in which either the
horizontal and/or vertical axis represents arbitrary numerical values.

Multigraph does not deal with graphs that aren't rectilinear in
nature, such as pie charts, polar graphs, or maps.  If you want to
display data in one of these forms, you'll need to use a different
tool.  Multigraph's focus is on rectilinear plots, typically involving
large amounts of data, where it's useful for the user to have the
ability to dynamically change the scale at which the data is
displayed.

Multigraph deals with numerical plots only --- it doesn't handle
plots where one of the variables represents a discrete set of values,
such as a set of geographic regions.  In some cases it's possible
to approximate such a plot with Multigraph by assigning numerical
values to each of the categories, but the labels that Multigraph displays
will be numerical, not textual.


