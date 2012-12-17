$('document').ready(function() {
  $('span.element span.expanded').hide();

  $('span.element').each(function() {
      var collapsed_span = $(this).find('>span.collapsed');
      var expanded_span = $(this).find('>span.expanded');
      collapsed_span.find('>span.target').click(function() {
          collapsed_span.hide();
          expanded_span.show();
      });
      expanded_span.find('>span.target').click(function() {
          expanded_span.hide();
          collapsed_span.show();
      });
  });
});
