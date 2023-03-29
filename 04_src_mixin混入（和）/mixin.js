// eslint-disable-next-line no-unused-vars
// 分别暴露
export const hunhe = {
    methods: {
        showName() {
            alert(this.name)
        },
    },
    mounted() {
        console.log('hello');
    },
}

export const hunhe1 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}

