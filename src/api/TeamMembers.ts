const url = 'http://api.additivasia.io/api/v1/assignment/employees/';

const getAllTeamMembers = async (name: string) => {
    const axios = require('axios');
    let index = 0;
    let searchlist: string[] = [];
    searchlist.push(name);

    while(searchlist.length > index){
        await axios.get(url + searchlist[index])
        .then(function (response: any) {
            if(response && response.data && response.data[1] && response.data[1]['direct-subordinates'].length > 0){
                response.data[1]['direct-subordinates'].forEach((element: string) => {
                    if(searchlist.indexOf(element) === -1) {
                        searchlist.push(element);
                    }
                });
                index = index+1;
            }
            else{
                if(searchlist.length > index){
                    index = index+1;
                }
            }
        })
        .catch(function (error: Error) {
            // handle error
            searchlist.shift();
        });
    }
    searchlist.shift(); //pop the name from input
    return searchlist? searchlist : undefined;
};

export const getMembers =  getAllTeamMembers;