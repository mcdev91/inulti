import React from "react";
import { Navbar } from 'react-bootstrap';

export default function HeaderComponent() {
    return (
          <Navbar className="justify-content-center bg-secondary text-white mb-5">
              <h3>
                  Header
              </h3>
          </Navbar>
    )
}