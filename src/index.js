import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactiveBase, DataSearch } from "@appbaseio/reactivesearch";
import appConfig from './config/app.config';
import searchConfig from './config/search.config';
import "bootstrap/dist/css/bootstrap.min.css";
import { ResultsList } from 'maftest-button';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {

    const name = appConfig.name || "Search App";

    return (
        <ReactiveBase
            url="https://appbase-demo-ansible-abxiydt-arc.searchbase.io"
            app="good-books-ds"
            credentials="04717bb076f7:be54685e-db84-4243-975b-5b32ee241d31"
            enableAppbase
        >
        <div>
            <header style={{backgroundColor: "rgb(43, 51, 60)", width: "100%", padding: "10px"}}>
            <h1 style={{fontSize: "18px", color: "#CCC", fontWeight: "bold"}}>{name}</h1>
            {/* <SearchBox config={searchboxConfig.searchbox} button="horizontal" handleSearch={handleSearch} width="600px" /> */}
            </header>
            <div style={{padding: '10px'}}>
                {/* <ResultsList 
                data={result} 
                config={ api === "node" ? 
                    searchNodeConfig.search.results.config : 
                    searchConfig.search.results.config } 
                /> */}
            </div>
        </div>
        </ReactiveBase>
    )
}

root.render(<App />);