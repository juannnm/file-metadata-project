import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./style.css"

function App() {
  return (
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
       <header class="mb-auto">
         <div>
           <h3 class="float-md-start mb-0">FileServices</h3>
           <nav class="nav nav-masthead justify-content-center float-md-end">
             <a class="nav-link fw-bold py-1 px-0 active" current="page" href="#">Home</a>
             <a class="nav-link fw-bold py-1 px-0 ml-1rem" href="#">Archives</a>
             <a class="nav-link fw-bold py-1 px-0" href="#">Categories</a>
           </nav>
         </div>
       </header>
      <main class="px-3">
        <div class="container-fluid text-center">
          <h2>API Project: File Metadata Microservice</h2>
          <div class="mt-100px">
            <h4 id="output">Please Upload a File ...</h4>
            <form enctype="multipart/form-data" method="POST" action="/api/fileanalyse">
                <input id="inputfield" type="file" name="upfile" />
              <div>
                <input id="button" type="submit" value="Upload" />
              </div>

            </form>
          </div>
        </div>
      </main>
      <footer class="mt-auto">
          <p>
            © 2023 Company, Inc
          </p>
      </footer>
    </div>
  )
}

export default App;