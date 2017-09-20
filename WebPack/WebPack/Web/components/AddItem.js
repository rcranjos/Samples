import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import template from './AddItem.html'

export default {
    template: template,
    data: function () {
        return {
            newItem: ""
        }
    },
    props: ['placeholder'],
    methods: {
        Add: function(){
            if (this.newItem == null || this.newItem.length == 0) {
                return;
            }
            this.$emit("add", this.newItem);
            this.newItem = "";
        }
    }
};