export default {
    template: '#item',
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
