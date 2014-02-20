WAF.define('JqxCombobox', ['waf-core/widget'], function(widget) {
    'use strict';
    // Restore the original version of jQuery
    var $ = jQuery.noConflict(true);

    var JqxCombobox = widget.create('JqxCombobox', {

        items: widget.property({
            type: 'datasource',
            attributes: [{
                name: 'value'
            }, {
                name: 'label'
            }]
        }),

        searchMode: widget.property({
            type: 'enum',
            'values': {
                none: 'none',
                startswithignorecase: 'starts with ignore case',
                startswith: 'starts with',
                endswithignorecase: 'ends with ignore case',
                endswith: 'endswith',
                containsignorecase: 'contains ignore case',
                contains: 'contains',
                equalsignorecase: 'equals ignore case',
                equals: 'equals'
            },
            bindable: false
        }),

        value: widget.property(),

        autoComplete: widget.property({
            type: 'boolean',
            bindable: false
        }),

        init: function() {
            var self = this;
            var $node = $(this.node);
            $node.jqxComboBox({
                source: [],
            });

            var subscriber = this.value.onChange(function(value) {
                $node.val(value);
            });

            $node.on('change', function() {
                subscriber.pause();
                self.value($node.val());
                subscriber.resume();
            });

            this.items.onCollectionChange(function(elements) {
                if (!elements.length) return;
                $node.jqxComboBox({
                    source: elements
                });

                $node.jqxComboBox({
                    searchMode: this.searchMode(),
                    autoComplete: this.autoComplete()
                });         
                    
            });
        },

        open: function() {
            $(this.node).jqxComboBox('open');
        },

        close: function() {
            $(this.node).jqxComboBox('close');
        }

    });

    return JqxCombobox;
});
