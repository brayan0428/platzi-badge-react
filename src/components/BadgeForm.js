import React from 'react'

class BadgeForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Primer Nombre</label>
                        <input type="text" className="form-control" name="firstName" onChange={this.props.onChange} value={this.props.form.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Primer Apellido</label>
                        <input type="text" className="form-control" name="lastName" onChange={this.props.onChange} value={this.props.form.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" onChange={this.props.onChange} value={this.props.form.email}/>
                    </div>
                    <div className="form-group">
                        <label>Profesión</label>
                        <input type="text" className="form-control" name="jobTitle" onChange={this.props.onChange} value={this.props.form.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input type="text" className="form-control" name="twitter" onChange={this.props.onChange} value={this.props.form.twitter}/>
                    </div>
                    <button className="btn btn-primary">Guardar</button>
                    {this.props.error && (
                        <p className="text-danger mt-2">{this.props.error}</p>
                    )}
                </form>
            </div>
        )
    }
}

export default BadgeForm