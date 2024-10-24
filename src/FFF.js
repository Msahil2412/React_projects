import { React } from "react";

export function Forms(){
    return (

            <form action="/store" method="get">
            <input type="text" name="uname" id="uname" placeholder="Enter your Name:...." /><br /><br />
            <input type="text" name="umail" id="umail" placeholder="Enter your Email:...." /><br /><br />
            <input type="text" name="uphone" id="uphone" placeholder="Enter your Phone No.:...." /><br /><br />
                        <button>Submit</button>
            </form>
    );
}

export default Forms;
