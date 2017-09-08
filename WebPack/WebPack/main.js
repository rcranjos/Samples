﻿import 'bootstrap';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import Organization from  './Web/components/Organization';

var rootInstace = new Vue({
    el: '#app',
    components: {
        'organization': Organization
    },
    template: '<organization/>'
});