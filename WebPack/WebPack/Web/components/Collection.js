import template from './Collection.html'

import Item from './Item';
import AddItem from './AddItem'

export default {
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
