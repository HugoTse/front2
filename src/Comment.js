const Comment = ({ handleSubmit, 
                   cid, setCid,
                   timestamp, setTimestamp,
                   thand, setThand,
                   fname, setFname,
                   lname, setLname,
                   dob, setDob,
                   region, setRegion,
                   text, setText,
                   ir, setIr }) => {

    return (
        <form onSubmit={handleSubmit}>

            <h2 className='inputHeader'>
                Comment Metadata
            </h2>
            {/* Campaign ID */}
            <div className='formDiv'>
                <input
                    id='cid'
                    type='text'
                    placeholder='Campaign ID'
                    value={cid}
                    onChange={(e) => setCid(e.target.value)}
                    className='input'
                >
                </input>
            </div>

            {/* Timestamp */}
            <div className='formDiv'>
                <input
                    id='timestamp'
                    type='text'
                    placeholder='Timestamp'
                    value={timestamp}
                    onChange={(e) => setTimestamp(e.target.value)}
                    className='input'
                >
                </input>
            </div>

            {/* Twitter Handle */}
            <div className='formDiv'>
                <input
                    id='thand'
                    type='text'
                    placeholder='@Twitter Handle'
                    value={thand}
                    onChange={(e) => setThand(e.target.value)}
                    className='input'
                >
                </input>
            </div>

            {/* First Name */}
            <div className='formDiv'>
            <input
                id='fname'
                type='text'
                placeholder='First Name'
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className='input'
            >
            </input>
            </div>

            {/* Last Name */}
            <div className='formDiv'>
            <input
                id='lname'
                type='text'
                placeholder='Last Name'
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                className='input'
            >
            </input>
            </div>
      
            {/* DOB */}
            <div className='formDiv'>
            <input
                id='dob'
                type='text'
                placeholder='Date of Birth'
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className='input'
            >
            </input>
            </div>

            {/* Region */}
            <div className='formDiv'>
                <input
                    id='region'
                    type='text'
                    placeholder='Region'
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className='input'
                >
                </input>
            </div>


            <h2 className='inputHeader'>
                Social Media Comment
            </h2>
            {/* Text */}
            <div className='formDiv'>
                <textarea
                    id='Text'
                    type='text'
                    placeholder='Text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='input'
                >
                </textarea>
            </div>

            {/* Image Reference */}
            <div className='formDiv'>
                <input
                    id='ir'
                    type='text'
                    placeholder='Image Reference'
                    value={ir}
                    onChange={(e) => setIr(e.target.value)}
                    className='input'
                >
                </input>
            </div>
      
            <div>
                <button
                    type='submit'
                    className='submitButton'
                >
                Submit Comment
                </button>
            </div>
        </form>
    )
}

export default Comment;