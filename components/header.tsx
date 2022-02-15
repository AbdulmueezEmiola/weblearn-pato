import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faSchool
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image"
import { useEffect } from "react";
export default function Header() {
    return (
        <header className="pt-1 position-relative">
            <Image
                alt="Header Background"
                src="/background.png"
                layout="fill"
                objectFit="cover"
            />
            <nav className="navbar navbar-expand-lg position-relative">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <FontAwesomeIcon
                            icon={faSchool}
                            className="text-dark me-3"
                        />
                        Weblearn
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon
                            icon={faBars}
                            className="text-dark"
                        />
                    </button>
                    <div className="collapse navbar-collapse py-3  justify-content-end" id="navbarSupportedContent">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}