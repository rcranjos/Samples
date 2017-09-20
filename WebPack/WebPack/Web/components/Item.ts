import Vue from 'vue';

import template from './Item.html'

interface Item extends Vue {
    readonly item: string;
    readonly readOnly: boolean;
    readonly checkable: boolean;
    readonly selectedItem: string

    readonly selected: boolean;

    removeActive: boolean;

    Select(): void;
    ActiveRemove(): void;
    DisableRemove(): void;
    Remove(): void;
}

const component: Vue.ComponentOptions<Item> = {
    template: template,
    data: function () {
        return {
            removeActive: false
        }
    },
    props: ['item', 'checkable', 'readOnly', 'selectedItem'],
    computed: {
        selected: function() {
            return this.item === this.selectedItem;
        }
    },
    methods: {
        Select: function() {
            if (!this.checkable) {
                return;
            }
            if (this.selected == false) {
                this.$emit('item-selected', this.item);
            }
            else {
                this.$emit('item-selected', null);
            }
        },

        ActiveRemove: function() {
            this.removeActive = true;
        },

        DisableRemove: function() {
            this.removeActive = false;
        },

        Remove: function(){
            this.$emit('remove', this.item);
        }
    }
};

export default component;
