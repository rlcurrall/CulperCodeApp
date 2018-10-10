Vue.use(VueMaterial.default)

new Vue({
    el: '#app',
    name: 'Overlap',
    data: {
        message: '',
        output: '',
        menuVisible: false,
        codec: {}
    },
    methods: {
        encryptMessage: function (event) {
            if (event.target) {
                var msg = event.target.value.split(" ");
                var res = '';
                msg.forEach(val => {
                    var en = Object.keys(this.codec).find(key => {
                        if (this.codec[key])
                            return this.codec[key].toLowerCase() === val.toLowerCase();

                        return false;
                    });

                    if (en)
                        res = res + en + ' ';
                    else
                        res = res + val + ' ';
                    
                    this.output = res.trim();
                });
            }
            
        },
        decryptMessage: function (event) {
            if (event.target) {
                var msg = event.target.value.split(" ");
                var res = '';
                msg.forEach(val => {
                    var de = this.codec[val];
                    if (de)
                        res = res + de + ' ';
                    else
                        res = res + val + ' ';
                    this.message = res.trim();
                });
            }
        }
    },
    mounted: function () {
        $.getJSON('./data.json', json => {
            this.codec = json;
        });
    }
})