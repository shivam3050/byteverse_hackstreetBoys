import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome CSS is imported
import '../App.css'; // Import your custom styles if you have any

const TrendingFundraisers = () => {
  return (
    <section>
      <div className="row">
        <div className="col-6">
          <h1 className="mb-3" style={{ textAlign: 'center', fontFamily: 'sans-serif', fontSize: '36px', fontWeight: 700 }}>
            Trending Fundraisers
          </h1>
        </div>
        <br /><br />
        <div className="col-6 text-right">
          <a className="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
            <i className="fa fa-arrow-left"></i>
          </a>
          <a className="btn btn-primary mb-3" href="#carouselExampleIndicators2" role="button" data-slide="next">
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-12">
          <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  {/* Carousel item */}
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src="./images/w6xVhVn04sG8idAEVoGvfouV9ulN0AH0Y9A5DbNR.avif" />
                      <div className="card-body">
                        <h4 className="card-title">Help Save Little Rudra's Life From Leukaemia!</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn1">Donate</button>
                      </div>
                    </div>
                  </div>
                  {/* Carousel item */}
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src="./images/wid627fff291f29d.avif" />
                      <div className="card-body">
                        <h4 className="card-title">School for special needs</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn1">Donate</button>
                      </div>
                    </div>
                  </div>
                  {/* Carousel item */}
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src="./images/wid65ba666ccca03.avif" />
                      <div className="card-body">
                        <h4 className="card-title">Urgent Help Needed: Save My Father from Colon Cancer</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn1">Donate</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  {/* Carousel item */}
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src="./images/wid66057c061843d.avif" />
                      <div className="card-body">
                        <h4 className="card-title">Help Save My Brother Samrat Awasthi(Shubham Awasthi): Your Support Can Make All the Difference</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn1">Donate</button>
                      </div>
                    </div>
                  </div>
                  {/* Carousel item */}
                  <div className="col-md-4 mb-3">
                    <div className="card">
                      <img className="img-fluid" alt="100%x280" src="./images/wid65f07a3de12b2.avif" />
                      <div className="card-body">
                        <h4 className="card-title">Nine-month-old Aklimja Beypi Seeks Your Precious Support for a Brighter Tomorrow!</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn1">Donate</button>
                      </div>
                    </div>
                  </div>
                  {/* Add more carousel items here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingFundraisers;
