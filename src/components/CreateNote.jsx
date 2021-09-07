import React, {useState} from "react";
 
function CreateNote() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(preInput => {
            return {
                ...preInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log(input);
    }



    return <div className="container">
        <h1>Create note page</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.title} autoComplete="off" placeholder="Note Title" className="form-control"></input>
            </div>

            <div className="form-group">
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" placeholder="Note Content" className="form-control"></textarea>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
        </form>
    </div>
}

export default CreateNote;