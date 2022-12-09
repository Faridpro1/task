import React from 'react'

const card = () => {
  return (
    <div class="col-lg-4 col-md-6 mb-4">
    <div className="card">
    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src="https://mdbootstrap.com/img/new/standard/nature/111.jpg" class="img-fluid" />
      <a href="#!">
        <div className="mask"></div>
      </a>
    </div>
    <div className="card-body">
      <h5 className="card-title">Post title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the
        card's content.
      </p>
      <a href="#!" className="btn btn-primary">Read</a>
    </div>
    </div>
    </div>
  )
}

export default card