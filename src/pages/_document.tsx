import { isEditorPageByPathname } from "@/utils/editor";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
  type DocumentInitialProps,
} from "next/document";

interface DocumentProps extends DocumentInitialProps {
  isEditorPage: boolean;
}

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,

        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    const isEditorPage = isEditorPageByPathname(ctx.pathname);

    return {
      ...initialProps,
      isEditorPage,
    };
  }

  render() {
    // Note: Enable dark mode for editor pages
    const htmlClassName = this.props.isEditorPage ? "dark" : "";

    return (
      <Html lang="en" className={htmlClassName}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
