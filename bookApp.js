bookApp = new Vue({
    el: '#bookApp',
    data: {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        summary: "The Old Man and the Sea tells the story of a battle between an aging, experienced..",
        showDetails: false,
        plusMinus: '+'
    },
    methods: {
        toggleShowDetails: function(){
            this.showDetails = !this.showDetails;
            this.plusMinus = this.togglePlusMinus();
        },
        togglePlusMinus: function(){
            return (this.showDetails? '-':'+');
        }
    }
});