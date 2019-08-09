import React, {useState, useEffect} from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import { getMembers } from "../api/TeamMembers"

export interface SearchString{
    name: string;
}

interface Props extends RouteComponentProps<SearchString> {}

const OverviewScreen = (props: Props) => {
    const [employees, setEmployees] = useState<any>();
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        getMembers(props.match.params.name).then((res: any | undefined) => {
            setEmployees(res);
            setLoaded(true);
        });
      },[props.match.params.name]);

    const getName = () => {
        return props.match.params.name;
    }

    const renderEmployees = () => {
        if(employees.length > 0) {
            return employees.map((s: string, i: number) => (
                <div key={i} className={'subordinate'}>
                    {s}
                </div>
            ));
        }
        else {
            return (
                <div>
                    This person has no subordinates
                </div>
            );
        }
    };

    return(
        <React.Fragment>
            <div className="App">
            <h3>Employee overview</h3> 
            <h3>Subordinates of Employee {getName()}:</h3>
                {
                    !loaded
                        ? <p> Loading list... </p>
                        : renderEmployees()
                }
            </div>
        </React.Fragment>
    );
}

export const Overview = withRouter(OverviewScreen);