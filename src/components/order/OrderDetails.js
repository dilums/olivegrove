import React, { Component } from 'react'
import './OrderDetails.css'
export class OrderDetails extends Component {
  submitDetails = e=>{
    e.preventDefault();
    this.props.history.push('/complete')
  }
  render() {
    return (
      <main className="details-window">
      <div className="container">
      <div className="row">
          <div className="col-10 mx-auto col-sm-6 text-center">
            <h1 className="text-capitalize section-head">Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
              <form onSubmit={this.submitDetails}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputName">Name</label>
                      <input type="text" className="form-control details-input" id="inputName" placeholder="name"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPhone">Phone</label>
                      <input type="text" className="form-control details-input" id="inputPhone" placeholder="phone No"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control details-input" id="inputAddress" placeholder="address"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleTextarea">Message</label>
                      <textarea className="form-control details-input" id="exampleTextarea" rows="4" placeholder="allergies etc."></textarea>
                    </div>
                  
                  
                  <button type="submit" className="btn btn-pnk btn-block mt-4">Continue</button>
                </form>
          </div>
        </div>
        </div>
      </main>
    )
  }
}

export default OrderDetails
