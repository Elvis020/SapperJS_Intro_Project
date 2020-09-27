// Server for making a request when we go to the jobs route
import {jobs} from './_data';

export function get(req,res,next) {
    res.end(JSON.stringify(jobs));
}