import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache,HttpLink,from } from '@apollo/client';
import GetStudent from './GetStudent';
import {onError } from "@apollo/client/link/error";
import Nav from './nav';
import Home from './Home'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import GetTeacher from './getTeacher';


const errorLink=onError(({graphqlErrors,networkError}) => {
    if(graphqlErrors){
        graphqlErrors.map(({message,location,path}) => (
            alert(`Graphql error ${message}`)
        ));
    }
});

const link=from([
    errorLink,
    new HttpLink({uri: "http://localhost:4000/graphql"})
]);

const client=new ApolloClient({
    cache: new InMemoryCache(),
    link:link
});



function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
            <div>
                <Nav/>
                <Switch>

                <Route path="/" exact><Home/></Route>
                 <Route path="/students"> <GetStudent/> </Route>
                 <Route path="/teachers"> <GetTeacher/> </Route>
                </Switch>
                
                
            </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
