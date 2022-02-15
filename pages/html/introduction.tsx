import Playground from "../../components/codeplayground";

export default function Introduction() {
    return <div className="p-3 text-black-50">
        <article>
            <h4>
                What is HTML (Hypertext Markup Language)?
            </h4>
            <p>
                <abbr title="Hypertext markup language">HTML</abbr> is the standard markup language for documents
                designed to be displayed in a web browser. It is often referred to as the most basic element of the web.
                An HTML file has the extension .html or .htm .
            </p>
            <ul>
                <li>
                    <b>HyperText: </b>
                    This refers to the links that connects different web pages
                </li>
                <li>
                    <b>Markup: </b>
                    These are several key components that make up an HTML page. These components are sometimes referred to as <em>elements</em>
                </li>
            </ul>
            <section className="mt-5">
                <h5>HTML Elements</h5>
                <p>An HTML element consists of a start tag, content(optional) and an end tag</p>
                <ul>
                    <li>
                        <b>Start Tag: </b>
                        The start tag has the format <em>{`<[tagname]>`}</em>
                    </li>
                    <li>
                        <b>Content: </b>
                        The content of an html tag refers to the content to be displayed in the website
                    </li>
                    <li>
                        <b>End Tag: </b>
                        The start tag has the format <em>{`</[tagname]>`}</em>
                    </li>
                </ul>
                <details className="text-center bg-dark text-white py-3 mb-2">
                    <summary>Sample Html Elements</summary>
                    <code>{`<h1>Content 1</h1>`}</code>
                    <br />
                    <code>{`<p>A Content</p>`}</code>
                    <br />
                    <code>{`<em>Content</em>`}</code>
                </details>
                <p>Some html elements do not have contents. They can be represented in two additional ways</p>
                <span className="text-center d-block mb-3">
                    {`<[tagname]>`}
                    or
                    {`<[tagname]/>`}
                </span>
                <details className="text-center bg-dark text-white py-3 mb-2">
                    <summary>Examples</summary>
                    <code>{`</br>`}</code>
                    <br />
                    <code>{`<img src="/image.jpg">`}</code>
                </details>
            </section>
        </article>        
        <Playground cssVisible={false} jsVisible={false} htmlContent={
            <a>Abdul</a>
        }/>
    </div>
}