## Custom Widget for [Wakanda](http://wakanda.org)
The __JqxCombobox__ widget creates a combobox  based on the JQWidget library. 

### Properties
This widget has the following properties: 

* __items__: The datasource associated with the widget 
* __value__: The current widget value
* __searchMode__: the mask associated with my search
* __autoComplete__: boolean value that adds autoCompletion to the widget


### Goals
The __JqxCombobox__ adds a combobox to the wakanda page. The combobox can be binded to a database. You can define what dataclass properties will be used by adding them in the __items__ property. 

You can also customise your combobox by using the __items__ 'html' field to define your widget mask. 



### package.json

This widget uses 3rd party JS libraries that are listed in the package.json. 
The package.json was modified manually, so the widget had all the dependecies correctly addressed. 

```
    "loadDependencies": [
    	  {"id": "Widget_V2"},
        {"id": "JqxCombobox/jquery-1.10.2.min.js", "path": "WIDGETS_CUSTOM"},
        {"id": "JqxCombobox/jqwidgets/jqxcore.js", "path": "WIDGETS_CUSTOM"},
        {"id": "JqxCombobox/jqwidgets/jqxbuttons.js", "path": "WIDGETS_CUSTOM"},
        {"id": "JqxCombobox/jqwidgets/jqxscrollbar.js", "path": "WIDGETS_CUSTOM"},
        {"id": "JqxCombobox/jqwidgets/jqxlistbox.js", "path": "WIDGETS_CUSTOM"},
        {"id": "JqxCombobox/jqwidgets/jqxcombobox.js", "path": "WIDGETS_CUSTOM"},
        {"id": "JqxCombobox/jqwidgets/styles/jqx.base.css", "path": "WIDGETS_CUSTOM"},
```
### Wakanda Studio

1. Drag the widget to your Wakanda page. 
2. Drop a datasource to the widget and set to be the "Items source"
3. Define your Property items (in the Properties bar): add the dataclass attributes for value and label
4. Eventually, you can also define your html element from a dataclass attribute (probably a calculated attribute)
4. Run the page, the combobox should be available


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.

