bookApp = new Vue({
    el: '#bookApp',
    data: {
        title: "The Old Man and the Sea",
        author: "Ernest Hemingway",
        summary: "The Old Man and the Sea tells the story of a battle between an aging, experienced.."
    },
    methods: {
        sayHello: function(){
            alert("Hello! from " + this.title);
        }
    }
});