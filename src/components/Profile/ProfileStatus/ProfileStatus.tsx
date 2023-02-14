import React, {ChangeEvent} from "react";



class ProfileStatus extends React.Component<{statuss: string, setStatus: (status: string) => void}> {

    state = {
        editMode: false,
        textStatus: this.props.statuss
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    componentDidMount() {
        this.setState(
            {textStatus: this.props.statuss}
        )
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.setStatus(this.state.textStatus)
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState(
            {textStatus: e.currentTarget.value}
        )
    }

    render() {
        // if(this.state.editMode) {
        //     return <input onDoubleClick={this.activateEditMode.bind(this)} />
        // }
        // else {
        //     return <div>{this.state.textStatus}</div>
        // }

        return this.state.editMode?   <input onBlur={this.deActivateEditMode}
                                             onChange={this.onChangeHandler}
                                             autoFocus={true}
                                             value={this.state.textStatus} /> :

            <div  onDoubleClick={this.activateEditMode}>{this.props.statuss} </div>
    }
}

export default ProfileStatus