const helloVue = new Vue({
    el: '#helloVue',
    data: {
        title: "Hello World from Vue!!!",
        message: "This is a message"
    }
});

const example = new Vue({
    el: '#example',
    data: {
        title: "Hello",
        name: "Dollie",
        message: "This is a message",
        img: {
            src: "https://placeimg.com/200/200/animals",
            alt: "A pretty puppy"
        }
    }
});