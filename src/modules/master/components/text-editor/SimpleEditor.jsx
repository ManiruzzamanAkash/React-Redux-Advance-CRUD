import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const SimpleEditor = (props) => {
    const {value, onValueChange} = props;
    return ( 
        <ReactQuill 
            value={value}
            onChange={(val) => onValueChange(val)}
        />
     );
}
 
export default SimpleEditor;