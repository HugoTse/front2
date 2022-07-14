const Comment = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input>
            </input>
            <div>
                <button
                    type='submit'
                >
                Submit
                </button>
            </div>
        </form>
    )
}

export default Comment;