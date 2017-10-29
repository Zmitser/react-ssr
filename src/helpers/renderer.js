import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import {Helmet} from 'react-helmet'
import Routes from '../client/Routes'
import serialize from 'serialize-javascript'

export default  (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>);

    const helmet = Helmet.renderStatic();

    return `<html>
                <head>
                    ${helmet.title.toString()}
                    ${helmet.meta.toString()}
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.INITIAL_STATE = ${serialize(store.getState())}
                    </script>
                    <script src="bundle.js"></script>
                </body>
             </html>`;
}
