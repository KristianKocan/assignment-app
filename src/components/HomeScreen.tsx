import React, {useState} from 'react';
import {RouteComponentProps, withRouter} from "react-router";

interface Props extends RouteComponentProps {}

const HomeScreen = (props: Props) => {
    const [name, setName] = useState<string>('');

    const handleSearch = (e: any) => {
        e.preventDefault();
        props.history.push('/overview/' + name);
    }

    return(
        <React.Fragment>
            <div className="App">
                <h3>Employee Explorer</h3>
                <input type="text" placeholder="Insert employee name" value={name} onChange={e => setName(e.target.value)}/>
                <button type="submit" disabled={!name} onClick={handleSearch}>Search</button>
            </div>
        </React.Fragment>
    );
}

export const Home =  withRouter(HomeScreen);