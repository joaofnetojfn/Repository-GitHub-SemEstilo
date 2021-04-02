import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository {
    name: string;
    description: String;
    html_url: string;
}

export function ReposotoryList(){

    const [repositories, setRepositories ] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/joaofnetojfn/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>LIsta de repositórios</h1>
            
            <ul>
                {repositories.map((repository, i) => {
                    return <RepositoryItem key={i} repository={repository}/>
                })}
            </ul>
        </section>
    )
}