Vue.component('autocompleter', {
    template: `
        <div class="autocompleter">
            <input class="autocompleter-input" type="text" v-model="input">
            <table v-if="input.length > 0">
                <tbody>
                    <tr v-for="a in data">
                    <td>{{ a }}</td>
                    </tr>
            </tbody>
            </table>
            </div>
    `,
    props: {
        data: {
            type: Array,
            required: true
        },

    },
    computed: {
        data: function () {
            var self = this;
            var showAnimals = animals.filter(function (a) {
                return a.substring(0, self.input.length).toLowerCase() === self.input.toLowerCase();
            });
            return showAnimals.length > 5 ? showAnimals.slice(0, 5) : showAnimals;
        }
    },
    data() {
        return {
            input: ''
        }
    }
})

new Vue({
    el: ".search",

    data: {
        animals: window.animals
    }
})