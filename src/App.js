import './App.css';

function App() {
  return (
    <div className="appBackground">
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 items'>
            <h5 className='text-center text-muted'>Free</h5>
            <h6 className='text-center'><span className='amount'>$0</span>/month</h6>
            <hr></hr>
            <ul>
              <li><i className='fa-solid fa-check'></i> Single User</li>
              <li> <i className='fa-solid fa-check'></i> 5 GB Storage</li>
              <li><i className='fa-solid fa-check'></i> Unlimited Public Projects</li>
              <li><i className='fa-solid fa-check'></i> Community Access</li>
              <li className='text-muted'><i className='fa-solid fa-x'></i> Unlimited Private Projects</li>
              <li className='text-muted'><i className='fa-solid fa-x'></i> Dedicated Phone Support</li>
              <li className='text-muted'><i className='fa-solid fa-x'></i> Free Subdomain</li>
              <li className='text-muted'><i className='fa-solid fa-x'></i> Monthly Status Reports</li>
            </ul>
            <div className='text-center d-grid'>
            <button className='btn btn-primary btn-block'>BUTTON</button>
            </div>
           
          </div>
          <div className='col-md-4 items'>
          <h5 className='text-center text-muted'>Plus</h5>
            <h6 className='text-center'><span className='amount'>$9</span>/month</h6>
            <hr></hr>
            <ul>
              <li><i className='fa-solid fa-check'></i><strong> 5 User</strong> </li>
              <li><i className='fa-solid fa-check'></i> 50 GB Storage</li>
              <li><i className='fa-solid fa-check'></i> Unlimited Public Projects</li>
              <li><i className='fa-solid fa-check'></i> Community Access</li>
              <li><i className='fa-solid fa-check'></i> Unlimited Private Projects</li>
              <li><i className='fa-solid fa-check'></i> Dedicated Phone Support</li>
              <li><i className='fa-solid fa-check'></i> Free Subdomain</li>
              <li className='text-muted'><i className='fa-solid fa-x'></i> Monthly Status Reports</li>
            </ul>
            <div className='text-center d-grid'>
            <button className='btn btn-primary btn-block'>BUTTON</button>
            </div>
           
            
        
            </div>
          <div className='col-md-4 items'>
          <h5 className='text-center text-muted'>Pro</h5>
            <h6 className='text-center'><span className='amount'>$49</span>/month</h6>
            <hr></hr>
            <ul>
              <li><i className='fa-solid fa-check'></i> <strong> Unlimited Users</strong></li>
              <li><i className='fa-solid fa-check'></i> 150 GB Storage</li>
              <li><i className='fa-solid fa-check'></i> Unlimited Public Projects</li>
              <li><i className='fa-solid fa-check'></i> Community Access</li>
              <li><i className='fa-solid fa-check'></i> Unlimited Private Projects</li>
              <li><i className='fa-solid fa-check'></i> Dedicated Phone Support</li>
              <li><i className='fa-solid fa-check'></i> <strong>Unlimited</strong> Free Subdomain</li>
              <li><i className='fa-solid fa-check'></i> Monthly Status Reports</li>
            </ul>
            <div className='text-center d-grid'>
            <button className='btn btn-primary btn-block'>BUTTON</button>
            </div>
           
           
          
            </div>
             {/* <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      {/* <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      {/* <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
