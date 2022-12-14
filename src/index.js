import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactiveBase, DataSearch, ReactiveList, ResultCard } from "@appbaseio/reactivesearch";
import appConfig from './config/app.config';
import searchConfig from './config/search.config.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import ResultsList from './components/ResultsList/ResultsList';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

const App = () => {

    const name = appConfig.name || "Search App";

    return (
        <ReactiveBase
            url="http://localhost:3000"
            app="good-books-ds"
            credentials="elastic:X1loFwNN3fFJLAOCjtRn"
            enableAppbase={false}
        >
            <div>
                <header style={{backgroundColor: "rgb(43, 51, 60)", width: "100%", padding: "10px"}}>
                    <h1 style={{display: "inline-block", position: "relative", top: "3px", margin: "0 20px 0 0", fontSize: "28px", color: "#CCC", fontWeight: "bold"}}>{name}</h1>
                    <div class="searchbox">
                        <DataSearch
                            componentId="searchbox"
                            dataField={[
                            {
                                "field": "authors",
                                "weight": 3
                            },
                            {
                                "field": "authors.autosuggest",
                                "weight": 1
                            },
                            {
                                "field": "original_title",
                                "weight": 5
                            },
                            {
                                "field": "original_title.autosuggest",
                                "weight": 1
                            },
                            ]}
                            placeholder="Search for books or authors"
                            innerClass={{
                                input: 'search-input'
                            }}
                        />
                    </div>
                </header>
                <div style={{padding: '10px'}}>
                    {/* <ReactiveList
                        componentId="results"
                        dataField="_score"
                        size={10}
                        pagination={true}
                        react={{
                        and: ["searchbox"] //, "authorsfilter", "ratingsfilter"]
                        }}
                        render={({ data }) => (
                        <ReactiveList.ResultCardsWrapper>
                        {data.map((item) => (
                            <ResultCard key={item._id}>
                            <ResultCard.Image src={item.image} />
                            <ResultCard.Title
                            dangerouslySetInnerHTML={{
                            __html: item.original_title
                            }}
                            />
                            <ResultCard.Description>
                            {item.authors + " " + "*".repeat(item.average_rating)}
                            </ResultCard.Description>
                            </ResultCard>
                        ))}
                        </ReactiveList.ResultCardsWrapper>
                        )}
                    /> */}
                    <ReactiveList
                        componentId="results2"
                        dataField="_score"
                        size={6}
                        pagination={true}
                        showResultStats={true}
                        react={{
                            and: ["searchbox"] //, "authorsfilter", "ratingsfilter"]
                        }}
                        render={({ data }) => (
                            <ResultsList 
                                data={data} 
                                config={ searchConfig.search.results.config } 
                            />
                        )}
                    />
                </div>
            </div>
        </ReactiveBase>
    )
}

root.render(<App />);