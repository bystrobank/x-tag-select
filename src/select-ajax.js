(function() {

    xtag.register('select-ajax', {
        mixins: ["request"],
        lifecycle: {
            created: function() {
                var input = this.xtag.input = this.appendChild(document.createElement('select'));
                input.className = 'x-input';
                this.src = this.getAttribute("src");
                if (!this.required) {
                    input.appendChild(document.createElement('option'));
                }
                this.dataready = function(request) {
                    xtag.toArray(request.responseXML.querySelectorAll("option")).forEach(function(child) {
                        input.appendChild(child);
                    }, this);
                    if (this.getAttribute("value")) {
                        input.value = this.getAttribute("value");
                    } else {
                        input.selectedIndex = 0;
                    }
                };

            }
        },
        methods: {
            focus: function() {
                this.xtag.input.focus();
            },
            blur: function() {
                this.xtag.input.blur();
            }
        },
        events: {
            'focus:delegate(.x-input)': function(e) {
                this.parentNode.setAttribute('focus', '');
            },
            'blur:delegate(.x-input)': function(e) {
                this.parentNode.removeAttribute('focus');
            },
            'change:delegate(.x-input)': function(e) {
                this.parentNode.value = this.value;
            }
        },
        accessors: {
            accesskey: {
                attribute: {property: 'input'}
            },
            autofocus: {
                attribute: {
                    boolean: true,
                    property: 'input'
                },
                set: function() {
                    this.xtag.input.focus();
                }
            },
            disabled: {
                attribute: {property: 'input'}
            },
            form: {
                attribute: {property: 'input'}
            },
            multiple: {
                attribute: {property: 'input'}
            },
            name: {
                attribute: {property: 'input'}
            },
            required: {
                boolean: true,
                attribute: {property: 'input'}
            },
            size: {
                attribute: {property: 'input'}
            },
            tabindex: {
                attribute: {property: 'input'}
            },
            value: {
                attribute: {},
                get: function() {
                    return this.xtag.input.value;
                },
                set: function(value) {
                    this.xtag.input.value = value;
                }
            }
        }
    });

})();