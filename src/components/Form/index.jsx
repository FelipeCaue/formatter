import React , {Component} from 'react';
import {Button,
        TextareaAutosize,
        FormControl,
        RadioGroup,
        FormLabel,
        Radio,
        Grid
        } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            transformType:'Up',
            copied: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setTransformType = this.setTransformType.bind(this);
    }
    setLowerCase(text){
        return text.toLowerCase();
    }
    setUpperCase(text){
        return text.toUpperCase()
    }
    capitalizeFirstLetter(text) {
        text = text.toLowerCase()
        const listOfWords = text.split(" ");
        const trasformedList = [];
        listOfWords.forEach((word) =>{
            word = word.charAt(0).toUpperCase() + word.slice(1);
            trasformedList.push(word)
        })
        const transformedText = trasformedList.join(" ");
        return transformedText;
    }
    handleSubmit(event){
        let text = ''
        if (this.state.transformType === 'Up') {
            text = this.setUpperCase(this.state.value)
        }else if (this.state.transformType === 'Lower'){
            text = this.setLowerCase(this.state.value)
        }else if (this.state.transformType === 'Capitalize'){
            text = this.capitalizeFirstLetter(this.state.value)
        }
        this.setState({value: text});
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    setTransformType(event) {
        this.setState({transformType: event.target.value});
    }
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                      <TextareaAutosize
                          minRows={30}
                          placeholder="Insert text to Transform here!!!"
                          value={this.state.value}
                          onChange={this.handleChange}
                          style={{ width: "100%" }}

                      />
                  </FormGroup>
                  <FormGroup row>
                      <Box mx="auto" bgcolor="background.paper" p={2}>
                          <FormControl component="fieldset">
                              <FormLabel component="legend">Transform Type</FormLabel>
                              <RadioGroup  defaultValue="Up" aria-label="transform" name="transform" value={this.state.transformType} onChange={this.setTransformType} row>
                                  <FormControlLabel value="Up" control={<Radio />} label="To UpperCase" />
                                  <FormControlLabel value="Lower" control={<Radio />} label="To LowerCase" />
                                  <FormControlLabel value="Capitalize" control={<Radio />} label="Capitalize" />
                              </RadioGroup>
                          </FormControl>
                      </Box>
                  </FormGroup>
                  <FormGroup row>
                      <Box mx="auto" bgcolor="background.paper" p={2}>
                          <Button type="submit" variant="contained" color="primary" >
                            Transform
                          </Button>
                      </Box>
                  </FormGroup>
                  <FormGroup row>
                      <Box mx="auto" bgcolor="background.paper" p={2}>
                          <CopyToClipboard text={this.state.value}
                                           onCopy={() => this.setState({copied: true})}>
                              <Button variant="contained" color="primary">Copy to clipboard</Button>
                          </CopyToClipboard>
                      </Box>
                  </FormGroup>
                  <FormGroup row>
                      <Grid
                          container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justify="center"
                         // style={{ minHeight: '100vh' }}
                      >
                          <Grid item xs={10}>
                            {this.state.copied ? <span style={{color: 'green'}}>Text Copied.</span> : null}
                          </Grid>
                      </Grid>
                  </FormGroup>

              </form>
            </div>
        );
    }

}

