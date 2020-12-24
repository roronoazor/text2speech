import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { text2Speech } from "./utilfunctions";


const TextComponent = () => {
    const [text, setText] = useState("default value");
    return(<div>
                <div>
                    <TextField
                    id="outlined-multiline-static"
                    label="Text-2-Speech"
                    multiline
                    rows={5}
                    defaultValue="Default Value"
                    variant="outlined"
                    style={{width: 750}}
                    onChange={(event)=>setText(event.target.value)}
                    />
                </div>
                <br />
                <Button variant="contained" color="primary" onClick={()=>text2Speech({text})}>Convert Text to Speech</Button>
            </div>
    )
}

export default TextComponent;