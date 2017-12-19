import * as React from 'react';
import * as Koa from 'koa';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { RouterChildContext } from 'react-router';
import { Provider } from 'react-redux';

class X extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
    }
    render() {
        return (
            <div>111</div>
        )
    }
}

const clientRoute = async (ctx:Koa.Context) => {
    await ctx.render('index', {
        root: renderToString(<X />)
    });
}

export default clientRoute;


