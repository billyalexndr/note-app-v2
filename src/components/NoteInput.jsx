import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            titleMaxLength: 50,
        };
        this.onTitleChangeEventHandler =
            this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler =
            this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const title = event.target.value;
        if (title.length <= this.state.titleMaxLength) {
            this.setState(() => {
                return {
                title: title
                };
            });
        }
    }

    onBodyChangeEventHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value,
            };
        });
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        this.props.addNote({
            title: this.state.title,
            body: this.state.body,
        });
        this.setState({ title: "", body: "" });
    }

    render() {
        const remainingChars =
            this.state.titleMaxLength - this.state.title.length;

        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <p className="note-input__title__char-limit">
                    Sisa Karakter: {remainingChars}
                </p>
                <form onSubmit={this.onSubmitEventHandler}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Masukkan judul note..."
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        required
                    />
                    <textarea
                        name="body"
                        placeholder="Tuliskan catatanmu disini..."
                        value={this.state.body}
                        rows="5"
                        onChange={this.onBodyChangeEventHandler}
                        required
                    />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}

NoteInput.propTypes = {
 addNote: PropTypes.func.isRequired,
}

export default NoteInput;
