import * as Vue from 'vue';

import template from './Collection.html'

import Item from './Item';
import AddItem from './AddItem'

interface Collection extends Vue.default {
    readonly collection: string[];
    readonly title: string;
    readonly placeholder: string;
    readonly readOnly: boolean;
    readonly checkable: boolean;
    readonly selectedItem: string

    SelectItem(item: string): void;
    Add(item: string): void;
    Remove(item: string): void;
}

const component: Vue.ComponentOptions<Collection> = {
    components: {
        'item': Item,
        'add-item': AddItem
    },
    template: template,
    props: ['collection', 'title', 'placeholder', 'readOnly', 'checkable', 'selectedItem'],
    methods: {
        SelectItem: function(item) {
            this.$emit('item-selected', item);           
        },

        Add: function(item) {
            this.$emit('add', item);
        },

        Remove:function (item){
            this.$emit('remove', item);
        }      
    }
};

export default component;
