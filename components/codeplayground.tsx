import React, { ReactNode, useEffect } from "react"
import { useState } from "react"
import styles from "./codeplayground.module.css"
import { useRef } from "react"

interface props {
  htmlVisible?: boolean,
  cssVisible?: boolean,
  jsVisible?: boolean,
  htmlContent?: ReactNode
}
export default function Playground({ htmlVisible = true, cssVisible = true, jsVisible = true, htmlContent }: props) {
  const [html, setHtml] = useState("")
  const [css, setCSS] = useState("")
  const [js, setJs] = useState("")

  const iframe = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const currentIframe = iframe.current
    if (currentIframe !== null) {
      let doc = currentIframe.contentDocument
      let text = `${html} <style>${css}</style> <script>${js}</script>`
      doc?.open()
      doc?.write(text)
      doc?.close()
    }
  }, [html, css, js])
  return <div className="container">
    <div className="row">
      <div className="col-12 col-md-6">
        <ul className={`nav nav-pills mb-1 ${styles.tabs}`} id="pills-tab" role="tablist">
          {
            htmlVisible && <li className="nav-item" role="presentation">
              <button className="nav-link active text-black-50" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">HTML</button>
            </li>
          }
          {
            cssVisible &&
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black-50" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">CSS</button>
            </li>
          }
          {
            jsVisible &&
            <li className="nav-item" role="presentation">
              <button className="nav-link text-black-50" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">JS</button>
            </li>
          }
        </ul>
        <div className="tab-content flex-fill" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div contentEditable={true} onKeyUp={(el: any) => {
              setHtml(el.target.textContent)
            }} className="border border-dark p-2 overflow-auto" style={{
              height: "360px"
            }}>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div contentEditable={true} onKeyUp={(el: any) => {
              console.log(el)
              setCSS(el.target.textContent)
            }} className="border border-dark p-2 overflow-auto" style={{
              height: "360px"
            }}>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div contentEditable={true} onKeyUp={(el: any) => {
              console.log(el)
              setJs(el.target.textContent)
            }} className="border border-dark p-2 overflow-auto" style={{
              height: "360px"
            }} >
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-5">
        <iframe ref={iframe} className="w-100 border-dark border" style={{
          height: "360px"
        }}>
        </iframe>
      </div>
    </div>
  </div>
}