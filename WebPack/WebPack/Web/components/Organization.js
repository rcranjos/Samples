import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import template from './Organization.html'

import Collection from './Collection'

export default {
    components: {
        'collection': Collection
    },
    template: template,
    data: function () {
        return {
            readOnly: false,
            collection: [],
            selectedItem: null,
        }
    },
    methods: {
        SelectItem: function(item) {
            this.selectedItem = item;
        },

        Add: function(item) {
            this.collection.push(item);
        },

        Remove: function(item) {
            for (var i = 0; i < this.collection.length; i++) {
                if (this.collection[i] === item) {
                    this.collection.splice(i, 1);
                }
            }
        }
    }
};