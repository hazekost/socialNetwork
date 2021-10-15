import React, { ChangeEvent } from "react"

type ProfileStatusPropsType = {
    status: string
    updateMyStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({ editMode: true })
    }

    deActivateEditMode = () => {
        this.setState({ editMode: false })
        this.props.updateMyStatus(this.state.status)
    }

    setStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ status: e.currentTarget.value })
    }

    componentDidUpdate(prevProps: ProfileStatusPropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {
                this.state.editMode
                    ? <div  >
                        <input autoFocus onChange={this.setStatus}
                            onBlur={this.deActivateEditMode} value={this.state.status} />
                    </div>
                    : <div onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </div>
            }
        </>
    }
}