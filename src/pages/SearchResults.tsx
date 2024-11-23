import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { pages } from '../data/pagesMetadata'; // Import the generated metadata

const SearchResults: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('q');

    // Filter results based on query
    const results = pages.filter((page) =>
        page.name.toLowerCase().includes(query?.toLowerCase() || '') ||
        page.content.toLowerCase().includes(query?.toLowerCase() || '')
    );

    return (
        <div className="search-results">
            <h1>Search Results</h1>
            {query && <p>Results for "{query}":</p>}
            {results.length > 0 ? (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>
                            <Link to={result.path}>{result.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;