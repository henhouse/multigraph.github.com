(function ($) {
    var testerHTML = (''
                      +   '<ul class="nav nav-tabs">'
                      +     '<li id="tester-graph"><a href="#" data-toggle="tab">Graph</a></li>'
                      +     '<li id="tester-mugl"><a href="#" data-toggle="tab">MUGL</a></li>'
                      +   '</ul>'
                      +   '<div class="multigraph-tester-content">'
                      +     '<div id="js-multigraph-mugl-div">'
                      +       '<div class="js-multigraph-tester-options">'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Graphics Driver: '
                      +           '<select class="form-control">'
                      +             '<option value="auto" selected="true">Auto</option>'
                      +             '<option value="canvas">Canvas</option>'
                      +             '<option value="raphael">Raphael</option>'
                      +           '</select>'
                      +         '</div>'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Width: '
                      +           '<input type="text" name="width" placeholder="800"/>'
                      +         '</div>'
                      +         '<div class="js-multigraph-tester-option">'
                      +           'Height: '
                      +           '<input type="text" name="height" placeholder="500"/>'
                      +         '</div>'
                      +       '</div>'

                      +       '<textarea class="js-multigraph-tester-textarea"></textarea>'
                      +     '</div>'
                      +     '<div id="js-multigraph-graph-div">'
                      +       '<div id="js-multigraph-tester-errors"></div>'
                      +       '<div class="js-multigraph-tester-graph">'
                      +         '<div class="graph-message">'
                      +           'Type or paste a MUGL document in the text area on the <b>MUGL</b> tab,'
                      +           'then return to this <b>Graph</b> tab to see the graph here.'
                      +         '</div>'
                      +       '</div>'
                      +     '</div>'
                      +   '</div>'
                     );

    var methods = {
        init : function () {
            var that = this;
            $(this).data('jsMultigraphTester', {
                muglChanged: false
            });
            $(this).html(testerHTML);

            $('#tester-mugl a').click(function(e) {
              e.preventDefault();
              methods.showMuglDiv.call(that);
            });
            $(this).find("textarea").change(function() {
                $(that).data('jsMultigraphTester').muglChanged = true;
            });
            $('#tester-graph a').click(function(e) {
              e.preventDefault();
              methods.showGraphDiv.call(that);
              if ($(that).data('jsMultigraphTester').muglChanged) {
                  methods.refresh.call(that);
                  //$(that).methods.jsMultigraphTester('refresh');
              }
            });
            methods.showGraphDiv.call(that);
        },
        showMuglDiv : function () {
            $('#tester-graph').removeClass("active");
            $('#tester-mugl').addClass("active");
            $('#js-multigraph-graph-div').css('display', 'none');
            $('#js-multigraph-mugl-div').css('display', 'block');
        },
        showGraphDiv : function() {
            $('#tester-mugl').removeClass("active");
            $('#tester-graph').addClass("active");
            $('#js-multigraph-mugl-div').css('display', 'none');
            $('#js-multigraph-graph-div').css('display', 'block');
        },
        setMugl : function(mugl) {
            var that = this;
            $(this).find("textarea").val(mugl);
            methods.refresh.call(that);
            methods.showGraphDiv.call(that);
        },
        refresh : function () {
            var mugl = $(this).find("textarea").val();
            var div  = $(this).find(".js-multigraph-tester-graph")[0];
            var width = $(this).find("div.js-multigraph-tester-option input[name='width']").val();
            var height = $(this).find("div.js-multigraph-tester-option input[name='height']").val();
            var driver = $(this).find("div.js-multigraph-tester-option select option").filter(":selected").val();

            if (!height || isNaN(parseFloat(height)) || parseFloat(height) < 100) {
                height = 548;
            }

            var options = {
                "muglString" : mugl,
                "div" : div,
                error : function(e) {
                    $('#js-multigraph-tester-errors').append($('<div>Error: '+e.message+'</div>'));
                },
                warning : function (w) {
                    // w can be either a string, or a Warning instance
                    var message = "Warning: " + ((typeof(w) === "string") ? w : w.message);
                    $('#js-multigraph-tester-errors').append($('<div>Warning: '+message+'</div>'));
                }
            };

            if (driver !== "auto") {
                options.driver = driver;
            }
            
            try {
                $.parseXML(mugl);
            } catch (e) {
                $(div).empty().append($('<div class="graph-message">'
                                        + 'The MUGL is not valid XML; please try again.</div>'));
                return;
            }
            $('#js-multigraph-tester-errors').empty();
            $(div).css("width", parseFloat(width) + "px")
                .css("height", parseFloat(height) + "px")
                .css("borderWidth", "0px")
                .empty();
            window.multigraph.create(options);
            $(this).data('jsMultigraphTester').muglChanged = false;
        }
        
    };

    $.fn.jsMultigraphTester = function (method) {
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.jsMultigraphTester' );
            return null;
        }
    };

})(window.multigraph.jQuery);

