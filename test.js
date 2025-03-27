import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '10s'
};

export default function() {
    let res = http.get('https://test-api.k6.io/public/crocodiles/');
    check(res, {
        'El estado es 200': (r) => r.status === 200,
        'El tiempo de respuesta es menor a 500ms': (r) => r.timings.duration < 500
    })
    sleep(1);
}