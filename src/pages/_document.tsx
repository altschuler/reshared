// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import fetch from 'node-fetch';
import { abortableFetch } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

global.fetch = abortableFetch(fetch).fetch;

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const registry = new SheetsRegistry();
        const generateId = createGenerateId();
        const originalRenderPage = ctx.renderPage;
        const cache = createCache();

        ctx.renderPage = () =>
            originalRenderPage({
                // eslint-disable-next-line react/display-name
                enhanceApp: (App) => (props) =>
                    (
                        <JssProvider registry={registry} generateId={generateId}>
                            <StyleProvider cache={cache}>
                                <App {...props} />
                            </StyleProvider>
                        </JssProvider>
                    ),
            });

        const initialProps = await Document.getInitialProps(ctx);
        const style = extractStyle(cache, true);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style id="server-side-styles">{registry.toString()}</style>
                    <style dangerouslySetInnerHTML={{ __html: style }} />
                </>
            ),
        };
    }
    render() {
        return (
            <Html>
                <Head>
                    <style>{` #__next { height: 100% } `}</style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
