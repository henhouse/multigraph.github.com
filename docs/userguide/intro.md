Introduction to MUGL
====================

MUGL, which stands for Multigraph XML, is the file format that
Multigraph uses for specifying a graph.  Every graph that Multigraph
draws comes from a MUGL file; you can think of the MUGL file as a set
of configuration commands that give Multigraph all the details it
needs to create a graph, including things like plot styles,
colors, axis definitions, label formats, title and legend
details, and so on.

The MUGL file also tells Multigraph where to get the data to be
plotted, but it is important to understand that the data and the MUGL
file are two separate concepts.  In some cases the data is included in
the MUGL file, but in other cases the data is in a separate file, or
is fetched dynamically from a web service, and in those cases the MUGL
file indicates where and how to load the data.

MUGL is XML
-----------

MUGL is a type of XML, which means that MUGL files adhere to all the
general syntax and format conventions that apply to any XML file.
Generally speaking, this means that a MUGL file consists of a
collection of nested "elements" with possible "attribute" values.
Each element starts with an "opening tag", which is a name delimited
by `<` and `>`, and ends with a "closing tag", which is the same name
delimited by `</` and `>`. Many elements include attribute settings,
which consist of a sequence of expressions of the form `name="value"`;
this sequence appears inside the opening tag, between the element name
itself and the `>` at the end of the tag.  For example, here's a
snippet of XML that gives a single element whose name is
`horizontalaxis` and which has a `min` attribute value of "0" and a
`max` attribute value of "10":

{% highlight xml %}
<horizontalaxis min="0" max="10">
</horizontalaxis>
{% endhighlight %}

In general, elements can be nested one inside another.  For example,
here's a `horizontalaxis` elment that contains a `title` element:

{% highlight xml %}
<horizontalaxis min="0" max="10">
  <title>Temperature</title>
</horizontalaxis>
{% endhighlight %}

In some cases, as with `title` above, there can be text
between the opening and closing tags of an element.  In many cases
an element ignores whatever text appears between its opening and closing
tags, including spaces and line breaks, so you can feel free to
indent your XML however you want to make it easier to read.

If an element contains no text or child elements, it's possible
to combine the opening and closing tags into a single "self-closing" tag
delimited by `>` and `/>`.  For example,

{% highlight xml %}
<horizontalaxis min="0" max="10"/>
{% endhighlight %}

which is equivalent to

{% highlight xml %}
<horizontalaxis min="0" max="10"></horizontalaxis>
{% endhighlight %}

There are many resources available that explain more of the details of XML syntax, for
example [XML Reference Goes Here](http://link.to.whatever.com).  For the purpose of writing
MUGL files, though, the above is most of what you need to know.  There are many examples
of working MUGL files that you can browse in the [Examples](../../examples) section
of this web site.
