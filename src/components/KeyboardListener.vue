
<!-- Waits for an event from Keyboard.vue
     and converts it to a Vue.js event -->

<script>

export default {
    name: 'KeyboardListener',
    render(h) { return h() },
    created: function () {
        this.$emit('register-kb-listener', {
        id: this._kid || (this._kid = ++KeyboardListener._idc),
            keydown: this.keydown,
            keyup: this.keyup,
            keypress: this.keypress
        })
    },
    beforeUnmount: function () {
        this.$emit('remove-kb-listener', {
        id: this._kid
        })
    },
    methods: {
        keydown (event) {
            this.$emit('keydown', event)
        },
        keyup (event) {
            this.$emit('keyup', event)
        },
        keypress (event) {
            this.$emit('keypress', event)
        },
    }
}

// Simple incremental id counter (Vue 3 removed _uid from public instance)
// Not reactive and only used for bookkeeping in parent.
KeyboardListener._idc = 0

</script>
