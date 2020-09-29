// Executing the server route
import {jobs} from './_data';


// Acccessing the id
export function get(req,res) {
    const {id} = req.params;

    const job = jobs.find(e => e.id === id)

    if(job) {
        // Setting Default Parameters for back end communication
        res.setHeader('Content-Type','applications/json');
        res.end(JSON.stringify(job));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            error: 'Sorry 😢, that page does not exist'  
        }));
    }

}