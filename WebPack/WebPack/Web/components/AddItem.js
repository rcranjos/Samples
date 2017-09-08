
export default {
    template: '#add-item',
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