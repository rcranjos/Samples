import * as Vue from 'vue';

import template from './Organization.html'

import Collection from './Collection'

interface Organization extends Vue.default {
    readOnly: boolean;
    collection: string[];
    selectedItem: string;

    SelectItem(item: string): void;
    Add(item: string): void;
    Remove(item: string): void;
}

const component: Vue.ComponentOptions<Organization> = {
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

export default component;