import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { text2Speech } from "./utilfunctions";
import { Typography } from '@material-ui/core';



export default class PDFTextComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            file: null,
            page: 1,
            text: null,
            something_2_say: null,
            loading: false
        }
        this.uploadFile = this.uploadFile.bind(this);
    }

    // steps to handle this 
    // let the user select a pdf file and upload
    // send the file to my server (http://127.0.0.1:8000/ or http://21century.herokuapp.com/)
    // wait for the promise to return and then load the text into a variable
    // paste that into text-area and then trigger the speech functionality

    componentDidMount(){
        const pdf_js = require("pdf-text-extract");
        this.pdf_js = pdf_js;
    }

    uploadFile(){
        const data = new FormData();
        data.append("file", this.state.file);
        let file_name = data.get("file").name; // use this to get the file from the form data, normale console.log(form_data) shows nothing
        if (file_name ){
            let something_2_say = null;
            if (file_name.endsWith(".txt")){
                // if this is a .txt file, read the text, and convert to speech
                let file_reader = new FileReader();
                file_reader.onload = function (){
                    something_2_say = file_reader.result; // once the filereader finishes reading the file
                    text2Speech({"text": something_2_say}); // use the text 2 speech function
                }
                file_reader.readAsText(this.state.file);
                
            }else{
                // if this is a .pdf file, upload the pdf file
                console.log("file dose not end with filename");
                let filepath = file_name;
                this.pdf_js(filepath, function (err, pages) {
                    if (err) {
                      console.log(err)
                      return
                    }
                    console.log(pages)
                  })

            }
            
            
            //axios.post("http://localhost:8000/speech/", data, { // receive two parameter endpoint url ,form data 
            //}).then(res => { // then print response status
            //    console.log(res.statusText)
            //}).catch(error => {
            //    alert("oops, something went wrong, please check your network connection ");
            //})
        }
        return null;
    }

    render() {
          return (
            <div style={{margin: "5px"}}>
                {/* There is already an h1 in the page, let's not duplicate it. */}
            <Typography variant="h6" component="h6">
                please select a .txt file
            </Typography>
                <form>
                    <input
                        accept=".txt"
                        id="contained-button-file"              
                        multiple
                        type="file"
                        onChange={(event)=>this.setState({file: event.target.files[0]})}
                    />
                    
                        <Button variant="contained" color="primary" component="span" onClick={()=>this.uploadFile()}>
                            {this.state.file ? "upload file" : "no file selected"}
                        </Button>
                                       
                </form>
            </div>
          )    
    }
}

