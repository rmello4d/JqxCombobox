WAF.define('JqxCombobox', function() {
    "use strict";
    // Restore the original version of jQuery
    var $ = jQuery.noConflict( true );

    var widget = WAF.require('waf-core/widget');
    var JqxCombobox = widget.create('JqxCombobox');

    JqxCombobox.addProperty('items', {
        type: 'datasource',
        attributes: [{
            name: 'value'
        }, {
            name: 'label'
        }, {
            name: 'html'
        }]
    });

    JqxCombobox.addProperty('value');

    JqxCombobox.addProperty('searchMode', {
        type: "enum",
        "enum": {
            startswithignorecase: "starts with ignore case",
            startswith: "starts with",
            endswithignorecase: "ends with ignore case",
            endswith: "endswith",
            containsignorecase: "contains ignore case",
            contains: "contains",
            equalsignorecase: "equals ignore case",
            equals: "equals"
        },
        bindable: false
    });

    JqxCombobox.addProperty('autoComplete', { type: 'boolean', bindable: false });

    JqxCombobox.prototype.init = function() {
        var $node = $(this.node);
        $node.jqxComboBox({
            source: [],
            searchMode: this.searchMode(),
            autoComplete: this.autoComplete()
        });

        this.value.onChange(function(value) {
            $node.val(value);
        });

        $node.on('change', function (event) {
            this.value($node.val());
        }.bind(this));

        this.items.onCollectionChange(function(elements) {
            $node.jqxComboBox('clear');
            elements.forEach(function(element) {
                if(element.html === undefined) {
                    element.html = element.label;
                }
                $node.jqxComboBox('addItem', element);
            });
        });
    };

    JqxCombobox.prototype.open = function() {
        $(this.node).jqxComboBox('open');
    };

    JqxCombobox.prototype.close = function() {
        $(this.node).jqxComboBox('close');
    };

    return JqxCombobox;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
