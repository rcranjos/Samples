﻿import * as Vue from 'vue';

import template from './AddItem.html';

interface AddItem extends Vue.default {
    readonly placeholder: string;

    newItem: string;
}

const component: Vue.ComponentOptions<AddItem> = {
    template: template,
    data: function () {
        return {
            newItem: ""
        }
    },
    props: ['placeholder'],
    methods: {
        Add: function () {
            if (this.newItem == null || this.newItem.length == 0) {
                return;
            }
            this.$emit("add", this.newItem);
            this.newItem = "";
        }
    }
};

export default component;