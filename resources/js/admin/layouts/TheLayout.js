import React from "react";

import Navbar from "../components/layouts/Navbar";
import Sidebar from "../components/layouts/Sidebar";

export default function TheLayout({ children }) {
    // const [] = useState();

    return (
        <div className="wrapper h-100">
            <Navbar />

            <Sidebar />

            <div className="content-wrapper">
                {/*Header*/}
                <div className="content-header">

                </div>

                {/*Content*/}
                <div className="content">{children}</div>
            </div>
        </div>
    );
}