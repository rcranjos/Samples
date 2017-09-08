Vue.component('collection', {
    template: '#collection',
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
});
