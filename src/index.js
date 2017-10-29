import 'babel-polyfill'
import express from 'express'
import {matchRoutes} from 'react-router-config'
import proxy from 'express-http-proxy';
import renderer  from './helpers/renderer'
import Routes from './client/Routes'
import createStore from './helpers/createStore'
const app = express();


app.use(express.static('public'));
app.use('/api', proxy('react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.get('*', function (req, res) {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null
    }).map(promise => {
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve)
            })
        }
    });
    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);
        if(context.notFound){
            res.status(404)
        }
        if(context.url) {
            return res.redirect(301, context.url)
        }
        res.send(content);
    });
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
